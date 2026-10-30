
import json
import os
import secrets
import tempfile

import requests

from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.management import call_command
from django.db import connection, transaction
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from rest_framework import generics, status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Order, OrderItem, Product, ProductImage, Review
from .serializers import OrderSerializer, ProductSerializer, ReviewSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


@api_view(['POST'])
def create_order(request):
    serializer = OrderSerializer(data=request.data)

    if serializer.is_valid():
        order = serializer.save()
        return Response(
            {
                'order_id': order.id,
                'amount': order.amount,
                'email': order.email
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def initialize_payment(request):
    order_id = request.data.get('order_id')
    order = get_object_or_404(Order, id=order_id)

    url = f"{settings.PAYSTACK_BASE_URL}/transaction/initialize"

    headers = {
        "Authorization": f"Bearer {settings.PAYSTACK_SECRET_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "email": order.email,
        "amount": order.amount * 100,
        "reference": f"order_{order.id}",
        "callback_url": f"{settings.FRONTEND_URL}/payment-success"
    }

    response = requests.post(url, json=payload, headers=headers)
    data = response.json()

    if data.get("status"):
        order.paystack_ref = data["data"]["reference"]
        order.save()

        return Response({
            "authorization_url": data["data"]["authorization_url"]
        })

    return Response(
        {
            "error": "Payment init failed",
            "paystack_response": data,
        },
        status=status.HTTP_400_BAD_REQUEST
    )


@api_view(['GET'])
def verify_payment(request):
    reference = request.GET.get('reference')

    url = f"{settings.PAYSTACK_BASE_URL}/transaction/verify/{reference}"

    headers = {
        "Authorization": f"Bearer {settings.PAYSTACK_SECRET_KEY}"
    }

    response = requests.get(url, headers=headers)
    data = response.json()

    if data.get("status") and data["data"]["status"] == "success":
        ref = data["data"]["reference"]
        order = get_object_or_404(Order, paystack_ref=ref)
        order.status = 'paid'
        order.save()

        return Response({
            "order_id": order.id,
            "amount": order.amount,
            "email": order.email,
            "status": order.status
        })

    return Response({"status": "failed"}, status=400)


class ReviewCreateView(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


@csrf_exempt
@require_POST
def temporary_database_restore(request):
    restore_token = os.environ.get('DATABASE_RESTORE_TOKEN')

    if not restore_token:
        return JsonResponse(
            {'error': 'Restore endpoint is disabled.'},
            status=403
        )

    supplied_token = request.headers.get('X-Database-Restore-Token', '')

    if not secrets.compare_digest(supplied_token, restore_token):
        return JsonResponse(
            {'error': 'Invalid restore token.'},
            status=403
        )

    if connection.vendor != 'postgresql':
        return JsonResponse(
            {'error': 'Restore is only allowed on PostgreSQL.'},
            status=400
        )

    if len(request.body) > 2 * 1024 * 1024:
        return JsonResponse(
            {'error': 'Backup file is too large.'},
            status=413
        )

    try:
        fixture_data = json.loads(request.body.decode('utf-8'))
    except (UnicodeDecodeError, json.JSONDecodeError):
        return JsonResponse(
            {'error': 'Invalid UTF-8 JSON backup.'},
            status=400
        )

    if not isinstance(fixture_data, list):
        return JsonResponse(
            {'error': 'Expected a Django fixture list.'},
            status=400
        )

    expected_counts = {
        'auth.user': 1,
        'products.order': 70,
        'products.orderitem': 66,
        'products.product': 94,
        'products.productimage': 166,
        'products.review': 52,
    }

    actual_counts = {}

    for record in fixture_data:
        if not isinstance(record, dict) or 'model' not in record:
            return JsonResponse(
                {'error': 'Invalid fixture record.'},
                status=400
            )

        model_label = record['model']
        actual_counts[model_label] = actual_counts.get(model_label, 0) + 1

    if actual_counts != expected_counts:
        return JsonResponse(
            {
                'error': 'Backup record counts do not match the expected inventory.',
                'received_counts': actual_counts,
            },
            status=400
        )

    User = get_user_model()

    models_to_check = [
        User,
        Product,
        ProductImage,
        Review,
        Order,
        OrderItem,
    ]

    existing_records = {
        model._meta.label: model.objects.count()
        for model in models_to_check
    }

    if any(existing_records.values()):
        return JsonResponse(
            {
                'error': 'Restore blocked because the target database is not empty.',
                'existing_records': existing_records,
            },
            status=409
        )

    backup_path = None

    try:
        with tempfile.NamedTemporaryFile(
            mode='w',
            encoding='utf-8',
            suffix='.json',
            delete=False
        ) as backup_file:
            json.dump(fixture_data, backup_file)
            backup_path = backup_file.name

        with transaction.atomic():
            call_command('loaddata', backup_path, verbosity=0)

            restored_counts = {
                model._meta.label: model.objects.count()
                for model in models_to_check
            }

            expected_restored_counts = {
                User._meta.label: 1,
                Product._meta.label: 94,
                ProductImage._meta.label: 166,
                Review._meta.label: 52,
                Order._meta.label: 70,
                OrderItem._meta.label: 66,
            }

            if restored_counts != expected_restored_counts:
                raise ValueError('Restored record counts do not match.')

    except Exception:
        return JsonResponse(
            {
                'error': 'Restore failed or verification failed. Check the Render service logs.'
            },
            status=500
        )

    finally:
        if backup_path and os.path.exists(backup_path):
            os.remove(backup_path)

    return JsonResponse({
        'message': 'Database restore and verification completed.',
        'database': connection.vendor,
        'restored_records': restored_counts,
    })
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import OrderSerializer, ProductSerializer
from .models import Product, Order
import requests
from django.conf import settings


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
    order = Order.objects.get(id=order_id)

    url = f"{settings.PAYSTACK_BASE_URL}/transaction/initialize"

    headers = {
        "Authorization": f"Bearer {settings.PAYSTACK_SECRET_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "email": order.email,
        "amount": order.amount * 100,  # Paystack uses kobo
        "reference": f"order_{order.id}"
    }

    response = requests.post(url, json=payload, headers=headers)
    data = response.json()

    if data.get("status"):
        order.paystack_ref = data["data"]["reference"]
        order.save()

        return Response({
            "authorization_url": data["data"]["authorization_url"]
        })

    return Response({"error": "Payment init failed"}, status=400)
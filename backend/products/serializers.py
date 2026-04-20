from .models import Product, ProductImage, Order, OrderItem
from rest_framework import serializers

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image']

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    category_display = serializers.CharField(source='get_category_display')

    class Meta:
        model = Product
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['product', 'quantity']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'full_name', 'email', 'amount', 'status', 'items']
        read_only_fields = ['status', 'amount']

    def create(self, validated_data):
        items_data = validated_data.pop('items')

        order = Order.objects.create(
            full_name=validated_data['full_name'],
            email=validated_data['email'],
            amount=0
        )

        total = 0

        for item in items_data:
            product = Product.objects.get(id=item['product'].id)
            quantity = item['quantity']

            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=quantity
            )

            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=quantity
            )

            total += product.price * quantity

        order.amount = total
        order.save()

        return order
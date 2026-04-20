from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('smart_panels', 'Smart Central Control Panels'),
        ('smart_lighting', 'Smart Lighting'),
        ('smart_switches', 'Smart Switches'),
        ('home_security', 'Home & Security Sensors'),
    ]

    name = models.CharField(max_length=255)
    price = models.IntegerField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    description = models.TextField()
    image = models.URLField()
    specs = models.JSONField(default=list)
    rating = models.FloatField(default=0)
    reviews = models.IntegerField(default=0)
    in_stock = models.BooleanField(default=True)
    featured = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class ProductImage(models.Model):
    product = models.ForeignKey(
        Product,
        related_name='images',
        on_delete=models.CASCADE
    )
    image = models.URLField()

    def __str__(self):
        return f'{self.product.name} Image'


class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('paid', 'Paid'),
        ('failed', 'Failed'),
    ]

    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    amount = models.IntegerField(default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    paystack_ref = models.CharField(max_length=100, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Order {self.id} - {self.status}'

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    price_at_purchase = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.product.name} x {self.quantity}'
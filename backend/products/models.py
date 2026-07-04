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
    image = models.URLField(blank=True, null=True)
    specs = models.JSONField(default=list)    
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
    image = models.URLField(blank=True, null=True)

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
    phone = models.CharField(max_length=20, blank=True)
    amount = models.IntegerField(default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    paystack_ref = models.CharField(max_length=100, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'#{self.id} - {self.full_name} ({self.status})'

    @property
    def total_items(self):
        return sum(
            item.quantity
            for item in self.items.all()
        )

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    price_at_purchase = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.product.name} x {self.quantity}'

class Review(models.Model):
    product = models.ForeignKey(
        Product,
        related_name='reviews_list',
        on_delete=models.CASCADE
    )

    name = models.CharField(max_length=100)
    text = models.TextField()
    rating = models.IntegerField()  # 1–5 stars

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.product.name} - {self.rating}'
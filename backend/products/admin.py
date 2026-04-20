from django.contrib import admin
from .models import Product, ProductImage, Order, OrderItem 

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 3

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'rating', 'reviews', 'in_stock', 'featured')
    list_filter = ('category', 'in_stock', 'featured')
    search_fields = ('name', 'description')

    inlines = [ProductImageInline]

    fields = ('name', 'price', 'category', 'description', 'image', 'specs', 'rating', 'reviews', 'in_stock', 'featured')


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'email',
                    'amount', 'status', 'created_at')
    inlines = [OrderItemInline]
from django.contrib import admin
from .models import Product, ProductImage, Order, OrderItem, Review

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 3

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'in_stock', 'featured')
    list_filter = ('category', 'in_stock', 'featured')
    search_fields = ('name', 'description')

    inlines = [ProductImageInline]

    fields = ('name', 'price', 'category', 'description', 'image', 'specs', 'in_stock', 'featured')


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'email',
                    'amount', 'status', 'created_at')
    inlines = [OrderItemInline]

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('product', 'name', 'rating', 'created_at')
    list_filter = ('rating',)
    search_fields = ('name', 'text')
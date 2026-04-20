from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, create_order, initialize_payment

router = DefaultRouter()
router.register('products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('orders/', create_order),
    path('payments/init/', initialize_payment)
]       
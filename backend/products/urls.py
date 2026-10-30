from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    ProductViewSet,
    ReviewCreateView,
    create_order,
    initialize_payment,
    temporary_database_restore,
    verify_payment,
)

router = DefaultRouter()
router.register('products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('orders/', create_order),
    path('payments/init/', initialize_payment),
    path('payments/verify/', verify_payment),
    path('reviews/', ReviewCreateView.as_view()),
    path('temporary-restore/', temporary_database_restore)
]
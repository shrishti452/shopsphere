from decimal import Decimal

from django.db import transaction

from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from cart.models import Cart
from .models import Order, OrderItem
from .serializers import OrderSerializer


class OrderListView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            Order.objects.filter(user=self.request.user)
            .prefetch_related("items")
            .order_by("-created_at")
        )


class OrderDetailView(generics.RetrieveAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            Order.objects.filter(user=self.request.user)
            .prefetch_related("items")
        )


class CheckoutView(APIView):
    permission_classes = [IsAuthenticated]

    @transaction.atomic
    def post(self, request):

        cart_items = (
            Cart.objects.filter(user=request.user)
            .select_related("product")
        )

        if not cart_items.exists():
            return Response(
                {
                    "message": "Cart is empty."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        order = Order.objects.create(
            user=request.user,
            total_price=Decimal("0.00"),
        )

        total = Decimal("0.00")

        for item in cart_items:

            price = Decimal(str(item.product.price))

            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=price,
            )

            total += price * item.quantity

        order.total_price = total
        order.save()

        cart_items.delete()

        serializer = OrderSerializer(order)

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED,
        )
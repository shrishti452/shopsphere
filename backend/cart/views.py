from rest_framework import generics, permissions
from .models import Cart
from .serializers import CartSerializer
from products.models import Product
from rest_framework import status
from rest_framework.response import Response


class CartListView(generics.ListAPIView):
    serializer_class = CartSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)


class CartAddView(generics.CreateAPIView):
    serializer_class = CartSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):

        product = Product.objects.get(pk=self.kwargs["product_id"])

        cart_item, created = Cart.objects.get_or_create(
            user=request.user,
            product=product,
            defaults={
                "quantity": int(request.data.get("quantity", 1))
            },
        )

        if not created:
            cart_item.quantity += int(request.data.get("quantity", 1))
            cart_item.save()

        serializer = CartSerializer(cart_item)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CartUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = CartSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)


class CartDeleteView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)
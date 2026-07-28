from rest_framework import generics, permissions
from rest_framework.exceptions import ValidationError

from .models import Wishlist
from .serializers import WishlistSerializer
from products.models import Product


class WishlistListView(generics.ListAPIView):
    serializer_class = WishlistSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Wishlist.objects.filter(
            user=self.request.user
        ).select_related("product")


class WishlistAddView(generics.CreateAPIView):
    serializer_class = WishlistSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        product = Product.objects.get(pk=self.kwargs["product_id"])

        if Wishlist.objects.filter(
            user=self.request.user,
            product=product,
        ).exists():
            raise ValidationError(
                {"detail": "Product already in wishlist."}
            )

        serializer.save(
            user=self.request.user,
            product=product,
        )


class WishlistDeleteView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Wishlist.objects.filter(
            user=self.request.user
        )
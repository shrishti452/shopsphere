from django.urls import path
from .views import (
    WishlistListView,
    WishlistAddView,
    WishlistDeleteView,
)

urlpatterns = [
    path("", WishlistListView.as_view()),
    path("add/<int:product_id>/", WishlistAddView.as_view()),
    path("delete/<int:pk>/", WishlistDeleteView.as_view()),
]
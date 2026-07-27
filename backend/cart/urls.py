from django.urls import path
from .views import (
    CartListView,
    CartAddView,
    CartUpdateView,
    CartDeleteView,
)

urlpatterns = [
    path("", CartListView.as_view()),
    path("add/<int:product_id>/", CartAddView.as_view()),
    path("update/<int:pk>/", CartUpdateView.as_view()),
    path("delete/<int:pk>/", CartDeleteView.as_view()),
]
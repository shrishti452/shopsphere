from django.db import models


class Product(models.Model):
    CATEGORY_CHOICES = [
        ("Men", "Men"),
        ("Women", "Women"),
        ("Accessories", "Accessories"),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField()
    stock = models.PositiveIntegerField(default=0)
    rating = models.FloatField(default=0)
    reviews = models.PositiveIntegerField(default=0)
    discount = models.PositiveIntegerField(default=0)
    brand = models.CharField(max_length=100)

    def __str__(self):
        return self.title
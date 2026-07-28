from django.core.management.base import BaseCommand
from products.models import Product


class Command(BaseCommand):
    help = "Seed demo products"

    def handle(self, *args, **kwargs):
        Product.objects.all().delete()

        products = [
            {
                "title": "Nike Air Max",
                "description": "Premium running shoes",
                "category": "Men",
                "price": 5999,
                "image": "https://picsum.photos/300?1",
                "stock": 20,
                "rating": 4.5,
                "reviews": 120,
                "discount": 15,
                "brand": "Nike",
            },
            {
                "title": "Adidas Hoodie",
                "description": "Comfortable hoodie",
                "category": "Men",
                "price": 2999,
                "image": "https://picsum.photos/300?2",
                "stock": 25,
                "rating": 4.4,
                "reviews": 80,
                "discount": 10,
                "brand": "Adidas",
            },
            {
                "title": "Women's Jacket",
                "description": "Winter jacket",
                "category": "Women",
                "price": 4499,
                "image": "https://picsum.photos/300?3",
                "stock": 15,
                "rating": 4.7,
                "reviews": 65,
                "discount": 20,
                "brand": "Zara",
            },
            {
                "title": "Leather Handbag",
                "description": "Premium handbag",
                "category": "Women",
                "price": 3499,
                "image": "https://picsum.photos/300?4",
                "stock": 18,
                "rating": 4.6,
                "reviews": 45,
                "discount": 12,
                "brand": "Guess",
            },
            {
                "title": "Smart Watch",
                "description": "Fitness smartwatch",
                "category": "Accessories",
                "price": 7999,
                "image": "https://picsum.photos/300?5",
                "stock": 30,
                "rating": 4.8,
                "reviews": 210,
                "discount": 18,
                "brand": "Samsung",
            },
            {
                "title": "Bluetooth Headphones",
                "description": "Noise cancelling",
                "category": "Accessories",
                "price": 4999,
                "image": "https://picsum.photos/300?6",
                "stock": 40,
                "rating": 4.5,
                "reviews": 190,
                "discount": 25,
                "brand": "Sony",
            },
            {
                "title": "Casual T-Shirt",
                "description": "Cotton T-shirt",
                "category": "Men",
                "price": 999,
                "image": "https://picsum.photos/300?7",
                "stock": 50,
                "rating": 4.3,
                "reviews": 150,
                "discount": 5,
                "brand": "Puma",
            },
            {
                "title": "Women's Kurti",
                "description": "Elegant kurti",
                "category": "Women",
                "price": 1999,
                "image": "https://picsum.photos/300?8",
                "stock": 22,
                "rating": 4.6,
                "reviews": 95,
                "discount": 10,
                "brand": "Biba",
            },
            {
                "title": "Sunglasses",
                "description": "UV protection",
                "category": "Accessories",
                "price": 1499,
                "image": "https://picsum.photos/300?9",
                "stock": 35,
                "rating": 4.4,
                "reviews": 88,
                "discount": 15,
                "brand": "Ray-Ban",
            },
            {
                "title": "Running Shoes",
                "description": "Lightweight running shoes",
                "category": "Men",
                "price": 3999,
                "image": "https://picsum.photos/300?10",
                "stock": 28,
                "rating": 4.7,
                "reviews": 132,
                "discount": 20,
                "brand": "Reebok",
            },
        ]

        for item in products:
            Product.objects.create(**item)

        self.stdout.write(
            self.style.SUCCESS("10 demo products added successfully.")
        )
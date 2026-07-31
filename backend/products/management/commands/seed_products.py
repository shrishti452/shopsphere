from django.core.management.base import BaseCommand
from products.models import Product


class Command(BaseCommand):
    help = "Seed demo products"

    def handle(self, *args, **kwargs):
        Product.objects.all().delete()

        products = [
            {
                "title": "Heels",
                "description": "Premium running shoes",
                "category": "Women",
                "price": 5999,
                "image": "/products/Shoes1.jpg",
                "stock": 20,
                "rating": 4.5,
                "reviews": 120,
                "discount": 15,
                "brand": "Bata",
            },
            {
                "title": "Adidas Hoodie",
                "description": "Comfortable hoodie",
                "category": "Men",
                "price": 2999,
                "image": "/products/Hoodie1.jpg",
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
                "image": "/products/Hoodie2.jpg",
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
                "image": "/products/Bag1.jpg",
                "stock": 18,
                "rating": 4.6,
                "reviews": 45,
                "discount": 12,
                "brand": "Guess",
            },
            {
                "title": "Smart Watch",
                "description": "Fashionable Watch",
                "category": "Accessories",
                "price": 7999,
                "image": "/products/Watch1.jpg",
                "stock": 30,
                "rating": 4.8,
                "reviews": 210,
                "discount": 18,
                "brand": "Samsung",
            },
            {
                "title": "Watch",
                "description": "Fashionable Watch",
                "category": "Accessories",
                "price": 4999,
                "image": "/products/Watch2.jpg",
                "stock": 40,
                "rating": 4.5,
                "reviews": 190,
                "discount": 25,
                "brand": "Sony",
            },
            {
                "title": "Casual Shirt",
                "description": "Cotton shirt",
                "category": "Women",
                "price": 999,
                "image": "/products/Shirt1.jpg",
                "stock": 50,
                "rating": 4.3,
                "reviews": 150,
                "discount": 5,
                "brand": "Puma",
            },
            {
                "title": "Men Shirt",
                "description": "Shirt",
                "category": "Men",
                "price": 1999,
                "image": "/products/Shirt2.jpg",
                "stock": 22,
                "rating": 4.6,
                "reviews": 95,
                "discount": 10,
                "brand": "Biba",
            },
            {
    "title": "Shoulder Bag",
    "description": "Stylish shoulder bag for everyday use",
    "category": "Women",
    "price": 2499,
    "image": "/products/Bag2.jpg",
    "stock": 25,
    "rating": 4.5,
    "reviews": 58,
    "discount": 10,
    "brand": "Caprese",
},
            {
                "title": "Shoes",
                "description": "Lightweight running shoes",
                "category": "Men",
                "price": 3999,
                "image": "/products/Shoes2.jpg",
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
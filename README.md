# 🛍️ ShopSphere

A modern full-stack fashion e-commerce web application built using **React**, **Django REST Framework**, and **SQLite**. ShopSphere provides a seamless online shopping experience with secure authentication, product browsing, wishlist management, shopping cart, and order checkout.

---

# 🚀 Features

- User Registration & Login
- JWT Authentication (Access & Refresh Token)
- Product Listing
- Product Details Page
- Search Products
- Category Filter
- Product Sorting
- Pagination
- Shopping Cart
- Wishlist
- Checkout System
- Order History
- Responsive Design
- Loading Skeleton
- Toast Notifications
- Custom 404 Page

---

# 🛠 Tech Stack

## Frontend

- React (Vite)
- JavaScript
- React Router DOM
- Axios
- React Icons
- React Toastify
- React Loading Skeleton
- CSS3

## Backend

- Django
- Django REST Framework
- Simple JWT Authentication
- SQLite
- Django CORS Headers

---

# 📂 Project Structure

```
ShopSphere/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── accounts/
│   ├── cart/
│   ├── orders/
│   ├── products/
│   ├── wishlist/
│   ├── config/
│   ├── manage.py
│   └── db.sqlite3
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/shrishti452/ShopSphere.git
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## Backend Setup

Create Virtual Environment

```bash
python -m venv venv
```

Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Run Migrations

```bash
python manage.py migrate
```

Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

Run Server

```bash
python manage.py runserver
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

# 🔐 Authentication

The project uses **JWT Authentication**.

After login:

- Access Token
- Refresh Token

are stored in Local Storage and automatically attached to every protected API request.

---

# 📈 Future Improvements

- Online Payment Gateway
- Product Reviews & Ratings
- User Profile Management
- Admin Dashboard
- Email Notifications
- Product Recommendations

---

# 👩‍💻 Author

**Shrishti Agarwal**


---

# 📄 License

This project is created for educational and portfolio purposes.
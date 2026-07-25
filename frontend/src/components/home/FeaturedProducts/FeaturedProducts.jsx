import "./FeaturedProducts.css";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";

const products = [
    {
        id: 1,
        name: "Premium Hoodie",
        price: "₹1,999",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700",
    },
    {
        id: 2,
        name: "Casual Jacket",
        price: "₹2,499",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700",
    },
    {
        id: 3,
        name: "Summer Outfit",
        price: "₹1,699",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
    },
    {
        id: 4,
        name: "Classic Sneakers",
        price: "₹3,299",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
    },
];

const FeaturedProducts = () => {
    return (
        <section className="featured">
            <div className="section-title">
                <h2>Featured Products</h2>
                <p>Trending fashion handpicked for you.</p>
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <button className="wishlist-btn">
                            <FaHeart />
                        </button>

                        <img src={product.image} alt={product.name} />

                        <div className="product-info">
                            <h3>{product.name}</h3>

                            <div className="rating">
                                <FaStar />
                                {product.rating}
                            </div>

                            <h4>{product.price}</h4>

                            <button className="cart-btn">
                                <FaShoppingCart />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
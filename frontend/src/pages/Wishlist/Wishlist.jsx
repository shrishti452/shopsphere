import "./Wishlist.css";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
    const { wishlist, toggleWishlist, loading } = useWishlist();
    const { addToCart } = useCart();

    if (loading) {
        return (
            <div className="wishlist-page">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <h1>My Wishlist</h1>

            {wishlist.length === 0 ? (
                <div className="empty-wishlist">
                    <h2>Your Wishlist is Empty</h2>
                    <Link to="/shop" className="shop-btn">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="wishlist-grid">
                    {wishlist.map((item) => (
                        <div className="wishlist-card" key={item.id}>
                            <img
                                src={item.product.image}
                                alt={item.product.title}
                            />

                            <h3>{item.product.title}</h3>

                            <p>₹{item.product.price}</p>

                            <div className="wishlist-actions">
                                <button
                                    onClick={() =>
                                        addToCart(item.product)
                                    }
                                >
                                    Add To Cart
                                </button>

                                <button
                                    className="remove-btn"
                                    onClick={() =>
                                        toggleWishlist(item.product)
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
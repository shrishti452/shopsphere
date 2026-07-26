import "./ProductCard.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const { toggleWishlist, isInWishlist } = useWishlist();

    return (
        <div className="product-card">
            <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <div className="product-image">
                    <img src={product.image} alt={product.title} />

                    <button
                        className="wishlist-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleWishlist(product);
                        }}
                    >
                        {isInWishlist(product.id) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>

                <div className="product-info">
                    <span>{product.category}</span>

                    <h3>{product.title}</h3>

                    <h4>${product.price}</h4>
                </div>
            </Link>

            <button onClick={() => addToCart(product)}>
                Add To Cart
            </button>
        </div>
    );
};

export default ProductCard;
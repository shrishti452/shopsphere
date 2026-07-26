import "./ProductCard.css";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">

            <div className="product-image">

                <img src={product.image} alt={product.title} />

                <button className="wishlist-btn">
                    <FaHeart />
                </button>

            </div>

            <div className="product-info">

                <span>{product.category}</span>

                <h3>{product.title}</h3>

                <h4>${product.price}</h4>

                <button>Add To Cart</button>

            </div>

        </div>
    );
};

export default ProductCard;
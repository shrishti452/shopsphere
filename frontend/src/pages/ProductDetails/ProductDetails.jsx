import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../../services/productService";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProduct(id);
                setProduct(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    return (
        <section className="product-details">

            <img src={product.image} alt={product.title} />

            <div className="details">

                <span>{product.category}</span>

                <h1>{product.title}</h1>

                <h2>₹{product.price}</h2>

                <p>{product.description}</p>

                <button
                    className="wishlist-btn"
                    onClick={() => toggleWishlist(product)}
                >
                    {isInWishlist(product.id) ? (
                        <FaHeart />
                    ) : (
                        <FaRegHeart />
                    )}
                    {" "}
                    {isInWishlist(product.id)
                        ? "Remove from Wishlist"
                        : "Add to Wishlist"}
                </button>

                <button onClick={() => addToCart(product)}>
                    Add To Cart
                </button>

            </div>

        </section>
    );
};

export default ProductDetails;
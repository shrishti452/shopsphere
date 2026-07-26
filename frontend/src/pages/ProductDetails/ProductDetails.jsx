import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
    const { id } = useParams();

    const { addToCart } = useCart();

    const product = products.find((item) => item.id === Number(id));

    if (!product) return <h2>Product Not Found</h2>;

    return (
        <section className="product-details">

            <img src={product.image} alt={product.title} />

            <div className="details">

                <span>{product.category}</span>

                <h1>{product.title}</h1>

                <h2>${product.price}</h2>

                <p>{product.description}</p>

                <button onClick={() => addToCart(product)}>
                    Add To Cart
                </button>

            </div>

        </section>
    );
};

export default ProductDetails;
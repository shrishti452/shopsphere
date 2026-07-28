import "./Cart.css";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const {
        cartItems,
        loading,
        increaseQty,
        decreaseQty,
        removeFromCart,
        checkoutCart,
    } = useCart();
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="cart-page">
                <h2>Loading...</h2>
            </div>
        );
    }

    const subtotal = cartItems.reduce(
        (total, item) => total + Number(item.product.price) * item.quantity,
        0
    );

    const handleCheckout = async () => {
        const success = await checkoutCart();

        if (success) {
            alert("Order placed successfully.");
            navigate("/orders");
        } else {
            alert("Checkout failed.");
        }
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <h2>Your Cart is Empty</h2>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img
                                src={item.product.image}
                                alt={item.product.title}
                            />

                            <div className="cart-info">
                                <h3>{item.product.title}</h3>

                                <p>₹{item.product.price}</p>

                                <div className="qty">
                                    <button
                                        onClick={() => decreaseQty(item)}
                                    >
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() => increaseQty(item)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="cart-total">
                        <h2>Total : ₹{subtotal.toFixed(2)}</h2>

                        <button
                            className="checkout-btn"
                            onClick={handleCheckout}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
import "./Cart.css";
import { useCart } from "../../context/CartContext";

const Cart = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();

    const decreaseQty = (item) => {
        if (item.quantity === 1) {
            removeFromCart(item.id);
            return;
        }

        item.quantity -= 1;

        localStorage.setItem("cart", JSON.stringify([...cartItems]));
        window.location.reload();
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-page">

            <h1>Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <h2>Your Cart is Empty</h2>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.title} />

                            <div className="cart-info">
                                <h3>{item.title}</h3>

                                <p>${item.price}</p>

                                <div className="qty">

                                    <button onClick={() => decreaseQty(item)}>
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button onClick={() => addToCart(item)}>
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
                        <h2>Total : ${subtotal}</h2>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
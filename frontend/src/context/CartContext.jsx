import { createContext, useContext, useEffect, useState } from "react";
import {
    getCart,
    addToCartAPI,
    updateCartAPI,
    deleteCartAPI,
} from "../services/cartService";
import { checkout } from "../services/orderService";
import { toast } from "react-toastify";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCart = async () => {
        try {
            const data = await getCart();
            setCartItems(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("access");

        if (token) {
            fetchCart();
        } else {
            setLoading(false);
        }
    }, []);

    const addToCart = async (product) => {
        try {
            await addToCartAPI(product.id);
            await fetchCart();

            toast.success("Added to cart");
        } catch (err) {
            console.error(err);
            toast.error("Failed to add to cart");
        }
    };

    const increaseQty = async (item) => {
        try {
            await updateCartAPI(item.id, item.quantity + 1);
            fetchCart();
        } catch (err) {
            console.error(err);
        }
    };

    const decreaseQty = async (item) => {
        try {
            if (item.quantity === 1) {
                await deleteCartAPI(item.id);
            } else {
                await updateCartAPI(item.id, item.quantity - 1);
            }

            fetchCart();
        } catch (err) {
            console.error(err);
        }
    };

    const removeFromCart = async (cartId) => {
        try {
            await deleteCartAPI(cartId);
            fetchCart();
        } catch (err) {
            console.error(err);
        }
    };

    const checkoutCart = async () => {
        try {
            await checkout();
            await fetchCart();
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                loading,
                fetchCart,
                addToCart,
                increaseQty,
                decreaseQty,
                removeFromCart,
                checkoutCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
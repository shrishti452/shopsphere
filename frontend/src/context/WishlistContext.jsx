import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);

    const isLoggedIn = () => !!localStorage.getItem("access");

    const fetchWishlist = async () => {
        if (!isLoggedIn()) {
            setWishlist([]);
            setLoading(false);
            return;
        }

        try {
            const res = await api.get("wishlist/");

            setWishlist(res.data.results || []);

        } catch (err) {
            console.error("Wishlist fetch failed", err);
            setWishlist([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWishlist();
    }, []);

    const toggleWishlist = async (product) => {
        if (!isLoggedIn()) {
            toast.error("Please login first.");
            return;
        }

        try {
            const latest = await api.get("wishlist/");

            const list = latest.data.results || [];

            const existing = list.find(
                (item) => item.product.id === product.id
            );

            if (existing) {
                await api.delete(`wishlist/delete/${existing.id}/`);

                toast.info("Removed from wishlist");
            } else {
                await api.post(`wishlist/add/${product.id}/`);

                toast.success("Added to wishlist");
            }

            await fetchWishlist();

        } catch (err) {
            console.error(err);
        }
    };

    const isInWishlist = (productId) => {
        return wishlist.some(
            (item) => item.product.id === productId
        );
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                loading,
                toggleWishlist,
                isInWishlist,
                fetchWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};
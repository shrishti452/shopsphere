import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

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
            setWishlist(res.data);
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
            alert("Please login first.");
            return;
        }

        const existing = wishlist.find(
            (item) => item.product.id === product.id
        );

        try {
            if (existing) {
                await api.delete(`wishlist/delete/${existing.id}/`);
                setWishlist((prev) =>
                    prev.filter((item) => item.id !== existing.id)
                );
            } else {
                const res = await api.post(
                    `wishlist/add/${product.id}/`
                );

                await fetchWishlist();
            }
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
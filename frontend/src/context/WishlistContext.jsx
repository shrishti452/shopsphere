import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const data = localStorage.getItem("wishlist");
        return data ? JSON.parse(data) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const toggleWishlist = (product) => {
        const exists = wishlist.find((item) => item.id === product.id);

        if (exists) {
            setWishlist(wishlist.filter((item) => item.id !== product.id));
        } else {
            setWishlist([...wishlist, product]);
        }
    };

    const isInWishlist = (id) => {
        return wishlist.some((item) => item.id === id);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                toggleWishlist,
                isInWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};
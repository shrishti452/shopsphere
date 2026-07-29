import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { SearchProvider } from "./context/SearchContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <SearchProvider>
                <WishlistProvider>
                    <CartProvider>

                        <App />

                        <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            pauseOnHover
                            draggable
                            theme="colored"
                        />

                    </CartProvider>
                </WishlistProvider>
            </SearchProvider>
        </AuthProvider>
    </StrictMode>
);
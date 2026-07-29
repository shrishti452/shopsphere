import { useState } from "react";
import {
    FaShoppingBag,
    FaSearch,
    FaHeart,
    FaShoppingCart,
    FaUser,
    FaBars,
    FaTimes,
    FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";

import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";
import { useAuth } from "../../../context/AuthContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { cartItems } = useCart();
    const { wishlist } = useWishlist();
    const { isAuthenticated, logout } = useAuth();

    return (
        <header className="navbar">
            <div className="navbar-container">

                <Link to="/" className="logo">
                    <FaShoppingBag />
                    <span>ShopSphere</span>
                </Link>

                <nav className={menuOpen ? "nav-links active" : "nav-links"}>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/orders">Orders</Link>
                </nav>

                <div className="nav-icons">

                    <button className="icon-btn">
                        <FaSearch />
                    </button>

                    <Link to="/wishlist" className="icon-btn">
                        <FaHeart />
                        <span className="badge">
                            {wishlist.length}
                        </span>
                    </Link>

                    <Link to="/cart" className="icon-btn">
                        <FaShoppingCart />
                        <span className="badge">
                            {cartItems.reduce(
                                (total, item) => total + item.quantity,
                                0
                            )}
                        </span>
                    </Link>

                    {isAuthenticated ? (
                        <>
                            <Link to="/profile" className="icon-btn">
                                <FaUser />
                            </Link>

                            <button
                                className="icon-btn"
                                onClick={logout}
                                title="Logout"
                            >
                                <FaSignOutAlt />
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="icon-btn">
                            <FaUser />
                        </Link>
                    )}

                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
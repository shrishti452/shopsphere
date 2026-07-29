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
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";
import { useAuth } from "../../../context/AuthContext";
import { useSearch } from "../../../context/SearchContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const { cartItems } = useCart();
    const { wishlist } = useWishlist();
    const { isAuthenticated, logout } = useAuth();

    const { search, setSearch } = useSearch();

    const handleLogout = () => {
        logout();
        navigate("/", { replace: true });
    };

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

                    <div className="search-box">
                        <FaSearch />

                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

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
                                onClick={handleLogout}
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
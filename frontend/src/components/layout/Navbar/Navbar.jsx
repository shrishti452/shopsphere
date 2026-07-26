import { useState } from "react";
import {
    FaShoppingBag,
    FaSearch,
    FaHeart,
    FaShoppingCart,
    FaUser,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <FaShoppingBag />
                    <span>ShopSphere</span>
                </Link>

                {/* Navigation */}
                <nav className={menuOpen ? "nav-links active" : "nav-links"}>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* Right Icons */}
                <div className="nav-icons">
                    <button className="icon-btn">
                        <FaSearch />
                    </button>

                    <Link to="/wishlist" className="icon-btn">
                        <FaHeart />
                        <span className="badge">2</span>
                    </Link>

                    <Link to="/cart" className="icon-btn">
                        <FaShoppingCart />
                        <span className="badge">3</span>
                    </Link>

                    <Link to="/profile" className="icon-btn">
                        <FaUser />
                    </Link>

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
import "./Footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="newsletter">
                <div className="newsletter-content">
                    <h2>Join Our Newsletter</h2>
                    <p>
                        Subscribe to receive the latest fashion trends, offers and new
                        arrivals.
                    </p>

                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-grid">
                    <div>
                        <h2>ShopSphere</h2>
                        <p>
                            Your destination for premium fashion and lifestyle products.
                        </p>
                    </div>

                    <div>
                        <h3>Quick Links</h3>
                        <a href="#">Home</a>
                        <a href="#">Shop</a>
                        <a href="#">Categories</a>
                        <a href="#">Contact</a>
                    </div>

                    <div>
                        <h3>Customer</h3>
                        <a href="#">Wishlist</a>
                        <a href="#">Cart</a>
                        <a href="#">Orders</a>
                        <a href="#">Profile</a>
                    </div>

                    <div>
                        <h3>Follow Us</h3>

                        <div className="social-icons">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    © 2026 ShopSphere. All Rights Reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
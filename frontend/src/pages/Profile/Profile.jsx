import "./Profile.css";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
    const username = localStorage.getItem("username") || "ShopSphere User";

    return (
        <div className="profile-page">
            <div className="profile-card">
                <img
                    src="https://ui-avatars.com/api/?name=ShopSphere&background=ff4d6d&color=fff&size=200"
                    alt="profile"
                />

                <h2>{username}</h2>

                <p>Welcome to ShopSphere.</p>

                <div className="profile-stats">
                    <div>
                        <h3>Orders</h3>
                        <span>View in Orders</span>
                    </div>

                    <div>
                        <h3>Wishlist</h3>
                        <span>Saved Products</span>
                    </div>

                    <div>
                        <h3>Cart</h3>
                        <span>Ready Checkout</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
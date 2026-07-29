import "./Profile.css";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
    const { isAuthenticated, logout } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <section className="profile-page">
            <div className="profile-card">
                <h1>My Profile</h1>

                <div className="profile-info">
                    <p><strong>Status:</strong> Logged In</p>
                    <p>Welcome to ShopSphere.</p>
                </div>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        </section>
    );
};

export default Profile;
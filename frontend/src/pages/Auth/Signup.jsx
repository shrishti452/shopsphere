import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useState } from "react";
import api from "../../api/axios";
import "./Signup.css";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            await api.post("accounts/register/", formData);

            alert("Account created successfully. Please login.");

            navigate("/login");
        } catch (err) {
            if (err.response?.data) {
                const errors = Object.values(err.response.data)
                    .flat()
                    .join(" ");
                setError(errors);
            } else {
                setError("Signup failed.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="auth-page">
            <div className="auth-card">

                <h1>Create Account</h1>

                <p>Join ShopSphere today.</p>

                {error && (
                    <p
                        style={{
                            color: "red",
                            textAlign: "center",
                            marginBottom: "15px",
                        }}
                    >
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="input-box">
                        <FaUser />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-box">
                        <FaEnvelope />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-box">
                        <FaLock />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Creating..." : "Create Account"}
                    </button>

                </form>

                <p className="bottom-text">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>

            </div>
        </section>
    );
};

export default Signup;
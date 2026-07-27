import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import "./Login.css";

import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
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

            const response = await api.post("accounts/login/", formData);

            login(
                response.data.access,
                response.data.refresh
            );

            navigate("/");

        } catch (err) {

            if (err.response?.data?.detail) {
                setError(err.response.data.detail);
            } else {
                setError("Invalid username or password.");
            }

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="auth-page">

            <div className="auth-card">

                <h1>Welcome Back 👋</h1>

                <p>Login to continue shopping.</p>

                {error && (
                    <p
                        style={{
                            color: "red",
                            marginBottom: "15px",
                            textAlign: "center",
                        }}
                    >
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="input-box">

                        <FaEnvelope />

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

                        <FaLock />

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <span
                            className="eye"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                        >
                            {
                                showPassword
                                    ? <FaEyeSlash />
                                    : <FaEye />
                            }
                        </span>

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {
                            loading
                                ? "Logging in..."
                                : "Login"
                        }
                    </button>

                </form>

                <p className="bottom-text">

                    Don't have an account?

                    <Link to="/signup">
                        {" "}
                        Sign Up
                    </Link>

                </p>

            </div>

        </section>

    );

};

export default Login;
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="auth-page">
            <div className="auth-card">

                <h1>Welcome Back 👋</h1>
                <p>Login to continue shopping.</p>

                <form>

                    <div className="input-box">
                        <FaEnvelope />
                        <input type="email" placeholder="Email Address" />
                    </div>

                    <div className="input-box">
                        <FaLock />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                        />

                        <span
                            className="eye"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>

                    </div>

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p className="bottom-text">
                    Don't have an account?
                    <Link to="/signup"> Sign Up</Link>
                </p>

            </div>
        </section>
    );
};

export default Login;
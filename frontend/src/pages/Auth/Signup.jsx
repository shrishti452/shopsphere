import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "./Signup.css";

const Signup = () => {
    return (
        <section className="auth-page">
            <div className="auth-card">

                <h1>Create Account</h1>

                <p>Join ShopSphere today.</p>

                <form>

                    <div className="input-box">
                        <FaUser />
                        <input type="text" placeholder="Full Name" />
                    </div>

                    <div className="input-box">
                        <FaEnvelope />
                        <input type="email" placeholder="Email Address" />
                    </div>

                    <div className="input-box">
                        <FaLock />
                        <input type="password" placeholder="Password" />
                    </div>

                    <button>
                        Create Account
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
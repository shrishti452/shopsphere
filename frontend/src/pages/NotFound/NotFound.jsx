import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>

            <h2>Page Not Found</h2>

            <p>
                The page you are looking for doesn't exist.
            </p>

            <Link to="/" className="home-btn">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
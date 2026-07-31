import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Orders from "./pages/Orders/Orders";
import Wishlist from "./pages/Wishlist/Wishlist";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/shop" element={<Shop />} />

                <Route
                    path="/cart"
                    element={
                        <PrivateRoute>
                            <Cart />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/wishlist"
                    element={
                        <PrivateRoute>
                            <Wishlist />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/orders"
                    element={
                        <PrivateRoute>
                            <Orders />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
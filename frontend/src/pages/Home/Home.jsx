import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import Categories from "../../components/home/Categories/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import OfferBanner from "../../components/home/OfferBanner/OfferBanner";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Footer from "../../components/layout/Footer/Footer";

const Home = () => {
    return (
        <main className="home">

            <section className="hero">

                <div className="hero-left">

                    <p className="tagline">NEW ARRIVALS 2026</p>

                    <h1>
                        Elevate Your
                        <span> Fashion </span>
                        Style
                    </h1>

                    <p className="hero-text">
                        Discover premium fashion collections for men and women.
                        Modern designs, top brands, and exclusive discounts—all in
                        one place.
                    </p>

                    <div className="hero-buttons">
                        <button className="shop-btn">
                            Shop Now
                            <FaArrowRight />
                        </button>

                        <button className="outline-btn">
                            Explore Collection
                        </button>
                    </div>

                </div>

                <div className="hero-right">

                    <img
                        src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Fashion Collection"
                    />

                </div>

            </section>

            <Categories />
            <FeaturedProducts />
            <OfferBanner />
            <NewArrivals />
            <Footer />


        </main>
    );
};

export default Home;
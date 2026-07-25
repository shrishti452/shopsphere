import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import Categories from "../../components/home/Categories/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import OfferBanner from "../../components/home/OfferBanner/OfferBanner";

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
                        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800"
                        alt="Fashion"
                    />

                </div>

            </section>
            
            <Categories />
            <FeaturedProducts />
            <OfferBanner />

        </main>
    );
};

export default Home;
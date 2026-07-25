import "./OfferBanner.css";
import { FaArrowRight } from "react-icons/fa";

const OfferBanner = () => {
    return (
        <section className="offer-banner">
            <div className="offer-content">
                <span className="offer-tag">LIMITED TIME OFFER</span>

                <h2>Summer Fashion Sale</h2>

                <p>
                    Flat <strong>50% OFF</strong> on selected fashion collections.
                    Upgrade your wardrobe with premium styles at unbeatable prices.
                </p>

                <button>
                    Shop Collection
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export default OfferBanner;
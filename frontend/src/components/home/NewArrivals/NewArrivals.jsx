import "./NewArrivals.css";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

const arrivals = [
    {
        id: 1,
        name: "Oversized T-Shirt",
        price: "₹999",
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700",
    },
    {
        id: 2,
        name: "Denim Jacket",
        price: "₹2,299",
        image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700",
    },
    {
        id: 3,
        name: "Women's Dress",
        price: "₹1,799",
        image:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700",
    },
    {
        id: 4,
        name: "White Sneakers",
        price: "₹3,499",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
    },
];

const NewArrivals = () => {
    return (
        <section className="arrivals">
            <div className="section-title">
                <h2>New Arrivals</h2>
                <p>Fresh fashion just landed.</p>
            </div>

            <div className="arrival-grid">
                {arrivals.map((item) => (
                    <div className="arrival-card" key={item.id}>
                        <span className="new-badge">NEW</span>

                        <button className="arrival-heart">
                            <FaHeart />
                        </button>

                        <img src={item.image} alt={item.name} />

                        <div className="arrival-info">
                            <h3>{item.name}</h3>
                            <h4>{item.price}</h4>

                            <button>
                                <FaShoppingBag />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrivals;
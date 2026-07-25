import "./Categories.css";

const categories = [
    {
        title: "Men",
        image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700",
    },
    {
        title: "Women",
        image:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700",
    },
    {
        title: "Accessories",
        image:
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=700",
    },
];

const Categories = () => {
    return (
        <section className="categories">
            <div className="section-title">
                <h2>Shop By Category</h2>
                <p>Find your favorite fashion collections.</p>
            </div>

            <div className="category-grid">
                {categories.map((item, index) => (
                    <div className="category-card" key={index}>
                        <img src={item.image} alt={item.title} />

                        <div className="overlay">
                            <h3>{item.title}</h3>
                            <button>Explore</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
import "./NewArrivals.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";
import ProductCard from "../../shop/ProductCard";

const NewArrivals = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();

                setProducts(
                    data.results
                        .slice(-4)
                        .reverse()
                );

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className="arrivals">
            <div className="section-title">
                <h2>New Arrivals</h2>
                <p>Fresh fashion just landed.</p>
            </div>

            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default NewArrivals;
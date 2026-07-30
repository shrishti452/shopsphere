import "./FeaturedProducts.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";
import ProductCard from "../../shop/ProductCard";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();

                setProducts(data.results.slice(0, 4));

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className="featured">
            <div className="section-title">
                <h2>Featured Products</h2>
                <p>Trending fashion handpicked for you.</p>
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

export default FeaturedProducts;
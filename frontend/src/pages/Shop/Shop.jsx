import "./Shop.css";
import ProductCard from "../../components/shop/ProductCard";
import products from "../../data/products";

const Shop = () => {

    return (

        <section className="shop-page">

            <div className="shop-header">

                <h1>Shop Collection</h1>

                <p>
                    Discover premium fashion curated for every style.
                </p>

            </div>

            <div className="products-grid">

                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </section>

    );
};

export default Shop;
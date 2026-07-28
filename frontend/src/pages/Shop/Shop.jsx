import { useMemo, useState } from "react";
import "./Shop.css";
import ProductCard from "../../components/shop/ProductCard";
import { useEffect } from "react";
import { getProducts } from "../../services/productService";
import { FaSearch, FaFilter } from "react-icons/fa";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("default");

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const data = await getProducts();
                setProducts(data);

            } catch (error) {

                console.error(error);

            }

        };

        fetchProducts();

    }, []);


    const categories = [
        "All",
        ...new Set(products.map((item) => item.category)),
    ];

    const filteredProducts = useMemo(() => {
        let data = [...products];

        if (category !== "All") {
            data = data.filter((item) => item.category === category);
        }

        if (search) {
            data = data.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        switch (sort) {
            case "low":
                data.sort((a, b) => a.price - b.price);
                break;
            case "high":
                data.sort((a, b) => b.price - a.price);
                break;
            case "az":
                data.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break;
        }

        return data;
    }, [search, category, sort]);

    return (
        <section className="shop-page">
            <div className="shop-header">
                <h1>Shop Collection</h1>
                <p>Premium Fashion For Every Occasion</p>
            </div>

            <div className="shop-layout">
                {/* Sidebar */}
                <aside className="shop-sidebar">
                    <div className="filter-title">
                        <FaFilter />
                        <h3>Filters</h3>
                    </div>

                    <div className="filter-group">
                        <label>Search</label>

                        <div className="search-box">
                            <FaSearch />

                            <input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="filter-group">
                        <label>Category</label>

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categories.map((item) => (
                                <option key={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Sort</label>

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="default">Default</option>
                            <option value="low">Price Low → High</option>
                            <option value="high">Price High → Low</option>
                            <option value="az">A-Z</option>
                        </select>
                    </div>
                </aside>

                {/* Products */}
                <div className="shop-content">
                    <div className="products-grid">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
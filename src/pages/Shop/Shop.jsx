import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Shop.css";

import products from "../../data/products";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Pagination/Pagination";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Newsletter from "../../components/Newsletter/Newsletter";
import shopBanner from "../../assets/shop-banner.jpg"
import Footer from "../../components/Footer/Footer";

export default function Shop() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Update category from URL
 const selectedCategory = searchParams.get("category") || "All";

  // Filter products
 let filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  // Sorting products
  if (sort === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Pagination
  const productsPerPage = 4;

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <>
      <Navbar />
      <div className="shop-banner-image">
  <img src={shopBanner} alt="Shop Banner" />

  <div className="banner-content">
    <h1>Shop Our Latest Collection</h1>
    <p>Discover amazing deals and new arrivals.</p>
  </div>
</div>

      <section className="shop-container">

        <div className="shop-title">
          <h1>
            {category === "All"
              ? "All Products"
              : category}
          </h1>
        </div>

        <SearchBar
          search={search}
          setSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
          products={products}
        />

        <Filters
          category={category}
          setCategory={(value) => {
            setCategory(value);
            setCurrentPage(1);
          }}
          sort={sort}
          setSort={(value) => {
            setSort(value);
            setCurrentPage(1);
          }}
        />

        <div className="shop-results">
          <p>
            Showing <strong>{currentProducts.length}</strong> of{" "}
            <strong>{filteredProducts.length}</strong> products
          </p>
        </div>

        <ProductGrid products={currentProducts} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

      </section>

      <Newsletter />

      <Footer />
    </>
  );
}
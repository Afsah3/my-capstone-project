
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid-section">
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p className="no-products">
            No products found. Try another search.
          </p>
        )}
      </div>
    </div>
  );
}

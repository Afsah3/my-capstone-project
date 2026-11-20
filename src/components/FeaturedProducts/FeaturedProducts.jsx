import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";

export default function FeaturedProducts({
  title,
  products,
}) {
  return (
    <section className="featured-products">

      <div className="featured-header">
        <h2>{title}</h2>
      </div>

      <div className="featured-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}
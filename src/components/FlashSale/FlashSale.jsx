import "./FlashSale.css";
import { Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import products from "../../data/products";

export default function FlashSale() {
  const { addToCart } = useCart();

  // Displaying the first 4 products as Flash Sale
  const flashProducts = products.slice(0, 4);

  return (
    <section className="flash-sale">
      <div className="flash-header">
        <h2 className="flash-title">
          <Flame size={30} />
          Flash Sale
        </h2>

        <Link to="/shop" className="view-all-btn">
          View All
        </Link>
      </div>

      <div className="product-grid">
        {flashProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </Link>

            <div className="product-info">
              <h3>
                <Link
                  to={`/product/${product.id}`}
                  className="product-link"
                >
                  {product.name}
                </Link>
              </h3>

              <p className="product-price">
                {product.price.toLocaleString()} RWF
              </p>

              <button
                className="add-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
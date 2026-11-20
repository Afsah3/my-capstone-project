import { useState } from "react";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

import QuickView from "../QuickView/QuickView";

import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [showQuickView, setShowQuickView] = useState(false);

  const liked = isInWishlist(product.id);

  return (
    <>
      <div className="product-card">

        <div className="product-image-container">

          {product.badge && (
  <span
    className={`product-badge ${product.badge
      .toLowerCase()
      .replace(" ", "-")}`}
  >
    {product.badge}
  </span>
)}

          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </Link>


          <button
            className={`wishlist-btn ${
              liked ? "active" : ""
            }`}
            onClick={() => toggleWishlist(product)}
          >
            <Heart
              size={20}
              fill={liked ? "#ef4444" : "none"}
            />
          </button>


          <button
            className="quick-view-btn"
            onClick={() => setShowQuickView(true)}
          >
            <Eye size={20}/>
          </button>

        </div>


        <div className="product-info">

          <p className="product-brand">
            {product.brand}
          </p>


          <h3 className="product-name">

            <Link
              to={`/product/${product.id}`}
              className="product-link"
            >
              {product.name}
            </Link>

          </h3>


          <div className="product-rating">

            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                fill={
                  index < Math.round(product.rating)
                    ? "#F97316"
                    : "none"
                }
                color="#F97316"
              />
            ))}


            <span>
              {product.rating} ({product.reviews} reviews)
            </span>

          </div>


          <div className="price-section">

            <span className="old-price">
              {product.oldPrice.toLocaleString()} RWF
            </span>


            <span className="product-price">
              {product.price.toLocaleString()} RWF
            </span>

          </div>


          <p className="stock">
            {product.stock > 5
              ? `✔ ${product.stock} in stock`
              : `⚠ Only ${product.stock} left`}
          </p>


         <button
  className="add-cart-btn"
  disabled={product.stock === 0}
  onClick={() => addToCart(product)}
>
  <ShoppingCart size={18}/>

  {product.stock === 0
    ? "Out of Stock"
    : "Add to Cart"}

</button>

        </div>

      </div>


      {showQuickView && (
        <QuickView
          product={product}
          onClose={() => setShowQuickView(false)}
        />
      )}

    </>
  );
}
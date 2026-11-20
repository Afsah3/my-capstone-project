import { X, Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import "./QuickView.css";

export default function QuickView({
  product,
  onClose,
}) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } =
    useWishlist();

  if (!product) return null;

  const liked = isInWishlist(product.id);

  return (
    <div className="quickview-overlay">

      <div className="quickview">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <div className="quickview-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="quickview-info">

          <p>{product.brand}</p>

          <h2>{product.name}</h2>

          <div className="quick-rating">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
                fill={
                  index < Math.round(product.rating)
                    ? "#f97316"
                    : "none"
                }
                color="#f97316"
              />
            ))}
          </div>

          <h3>
            {product.price.toLocaleString()} RWF
          </h3>

          <p>
            {product.description}
          </p>

          <div className="quick-buttons">

            <button
              onClick={() => addToCart(product)}
            >
              <ShoppingCart size={18}/>
              Add to Cart
            </button>

            <button
              onClick={() =>
                toggleWishlist(product)
              }
            >
              <Heart
                fill={
                  liked ? "#ef4444" : "none"
                }
              />
            </button>

            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
            >
              View Details
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
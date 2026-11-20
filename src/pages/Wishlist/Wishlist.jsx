import "./Wishlist.css";

import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

import { Heart, ShoppingCart, Trash2 } from "lucide-react";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

export default function Wishlist() {
  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      <section className="wishlist-page">
        <h1>My Wishlist</h1>

        <p className="wishlist-subtitle">
          Save your favorite products and purchase them anytime.
        </p>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <Heart size={70} />
            <h2>Your wishlist is empty</h2>
            <p>Save products you love and they'll appear here.</p>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((product) => (
              <div className="wishlist-card" key={product.id}>
                <img src={product.image} alt={product.name} />

                <div className="wishlist-content">
                  <h3>{product.name}</h3>

                  <p>{product.price.toLocaleString()} RWF</p>

                  <div className="wishlist-actions">
                    <button
                      className="cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>

                    <button
                      className="remove-btn"
                      onClick={() => toggleWishlist(product)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}
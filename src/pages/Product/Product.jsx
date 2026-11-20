import { useParams } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

import products from "../../data/products";

import { ShoppingCart, Heart, Star } from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import "./Product.css";

export default function Product() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  const liked = isInWishlist(product.id);

  const increase = () => setQuantity(quantity + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addMultipleToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <>
      <Navbar />

      <section className="product-page">

        <div className="product-image">
          <span className="discount-badge">
            -{product.discount}%
          </span>

          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-details">

          <p className="brand">
            {product.brand}
          </p>

          <h1>{product.name}</h1>

          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
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

          <div className="prices">
            <span className="old-price">
              {product.oldPrice.toLocaleString()} RWF
            </span>

            <span className="new-price">
              {product.price.toLocaleString()} RWF
            </span>
          </div>

          <p className="stock">
            {product.stock} items available
          </p>

          <p className="description">
            {product.description}
          </p>

          <div className="quantity-box">

            <button onClick={decrease}>
              -
            </button>

            <span>{quantity}</span>

            <button onClick={increase}>
              +
            </button>

          </div>

          <div className="actions">

            <button
              className="cart-btn"
              onClick={addMultipleToCart}
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <button
              className={`wish-btn ${
                liked ? "liked" : ""
              }`}
              onClick={() => toggleWishlist(product)}
            >
              <Heart
                fill={liked ? "#ef4444" : "none"}
              />
            </button>

          </div>

        </div>

      </section>

      <section className="related-products">
  <h2>You may also like</h2>

  <div className="related-grid">
    {products
      .filter(
        (item) =>
          item.category === product.category &&
          item.id !== product.id
      )
      .slice(0, 4)
      .map((item) => (
        <ProductCard
          key={item.id}
          product={item}
        />
      ))}
  </div>
</section>

      <Newsletter />

      <Footer />
    </>
  );
}
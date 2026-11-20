import "./Cart.css";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

import {
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { useCart } from "../../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <section className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty.</h2>
            <p>Add some products to get started!</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>

                  <p>{item.price.toLocaleString()} RWF</p>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <Minus size={16} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <h3>
                  {(item.price * item.quantity).toLocaleString()} RWF
                </h3>

                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 />
                </button>
              </div>
            ))}

            <div className="cart-summary">
  <h2>
    Total: {totalPrice.toLocaleString()} RWF
  </h2>

  <div className="cart-actions">

    <button
      className="clear-cart-btn"
      onClick={clearCart}
    >
      Clear Cart
    </button>

    <Link
      to="/checkout"
      className="checkout-btn"
    >
      Proceed to Checkout
    </Link>

  </div>
</div>
          </>
        )}
      </section>

      <Newsletter />

      <Footer />
    </>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Checkout.css";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    clearCart();

    navigate("/order-success");
  };

  return (
    <>
      <Navbar />

      <section className="checkout-page">
        <div className="checkout-form">
          <h1>Checkout</h1>

          <form onSubmit={placeOrder}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={customer.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              value={customer.address}
              onChange={handleChange}
              required
            />

            <select
              name="payment"
              value={customer.payment}
              onChange={handleChange}
            >
              <option>Cash on Delivery</option>
              <option>Mobile Money</option>
              <option>Credit Card</option>
            </select>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div className="summary-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h4>{item.name}</h4>

                    <p>
                      {item.quantity} × {item.price.toLocaleString()} RWF
                    </p>
                  </div>
                </div>
              ))}

              <div className="total">
                <h3>Total:</h3>

                <h3>{total.toLocaleString()} RWF</h3>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
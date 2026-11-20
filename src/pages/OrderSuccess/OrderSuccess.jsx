import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./OrderSuccess.css";

export default function OrderSuccess() {
  return (
    <>
      <Navbar />

      <section className="order-success">
        <div className="success-card">
          <div className="success-icon">✅</div>

          <h1>Order Placed Successfully!</h1>

          <p>
            Thank you for shopping with SmartShop.
            Your order has been received and is being processed.
          </p>

          <div className="success-buttons">
            <Link to="/" className="home-btn">
              Continue Shopping
            </Link>

            <Link to="/shop" className="shop-btn">
              Back to Shop
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
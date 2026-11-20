import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2>
            Smart<span>Shop</span>
          </h2>

          <p>
            Your trusted online shopping destination for quality products at
            affordable prices.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/shop">Shop</Link>

          <Link to="/categories">Categories</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>

          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>

            <li>
              <Link to="/shipping">Shipping</Link>
            </li>

            <li>
              <Link to="/returns">Returns</Link>
            </li>

            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>Kigali, Rwanda</p>

          <p>+250 788 123 456</p>

          <p>support@smartshop.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SmartShop. All rights reserved.</p>
      </div>
    </footer>
  );
}

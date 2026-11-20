import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          {" "}
          Shop Smarter, <br /> Live Better.
        </h1>

        <p>
          Welcome to <span>Smart Shop</span>, your trusted online marketplace.
          Discover thousands of quality products at affordable prices with
          secure payments and fast delivery.
        </p>

        <div className="hero-buttons">
          <Link to="/shop" className="shop-btn">
  Shop Now
</Link>

          <Link to="/categories" className="category-btn">Explore Categories</Link>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=800"
          alt="Shopping"
        />
      </div>
    </section>
  );
}

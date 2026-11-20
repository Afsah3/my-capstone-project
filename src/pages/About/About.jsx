import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import AboutUs from "../../assets/about-us.jpg"
import "./About.css";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="about-image">
        <img src={AboutUs} alt="About Us image" />
        
      <div className="about-hero">
        <h1>About SmartShop</h1>
        <p>Your trusted online shopping destination.</p>
      </div>
      </div>

      <section className="about-container">
        <div className="about-card">
          <h2>Our Story</h2>

          <p>
            SmartShop was created to make online shopping simple,
            secure and affordable. We provide quality products
            ranging from electronics and fashion to home essentials,
            all at competitive prices.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>

          <p>
            To deliver a seamless online shopping experience by
            providing quality products, excellent customer service,
            and fast delivery.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>

          <p>
            To become one of the most trusted and customer-focused
            online shopping platforms in Africa.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Why Shop With Us?</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and reliable delivery across the country.</p>
          </div>

          <div className="value-card">
            <h3>🔒 Secure Payments</h3>
            <p>Your transactions are safe and protected.</p>
          </div>

          <div className="value-card">
            <h3>⭐ Quality Products</h3>
            <p>Carefully selected products at affordable prices.</p>
          </div>

          <div className="value-card">
            <h3>💬 24/7 Support</h3>
            <p>Friendly customer support whenever you need help.</p>
          </div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </>
  );
}
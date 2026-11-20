import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../assets/contact-us.jpg"
import "./Contact.css";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const handleSubmit = (e) => {
  e.preventDefault();

  setMessageSent(true);

  e.target.reset();

  setTimeout(() => {
    setMessageSent(false);
  }, 4000);
};
  return (
    <>
      <Navbar />

      <div className="contact-image">
        <img src={ContactUs} alt="Contact us image" />
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you.</p>
      </div>
      </div>

      <section className="contact-container">

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p><strong>📍 Address:</strong> Kigali, Rwanda</p>

          <p><strong>📞 Phone:</strong> +250 788 123 456</p>

          <p><strong>📧 Email:</strong> support@smartshop.com</p>

          <p><strong>🕒 Hours:</strong> Mon - Sat, 8:00 AM - 6:00 PM</p>

        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>
        {messageSent && (
  <p className="success-message">
    ✅ Thank you! Your message has been sent successfully.
  </p>
)}

      </section>

      <Newsletter />

      <Footer />
    </>
  );
}
import { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    localStorage.setItem("subscriber", email);

    setMessage("Thank you for subscribing!");

    setEmail("");
  };


  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <h2>
          Subscribe to our Newsletter
        </h2>

        <p>
          Get updates about new products, offers, and discounts.
        </p>


        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <button type="submit">
            Subscribe
          </button>

        </form>


        {message && (
          <p className="newsletter-message">
            {message}
          </p>
        )}

      </div>

    </section>
  );
}
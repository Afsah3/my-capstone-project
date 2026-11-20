import { Link } from "react-router-dom";
import { Home } from "lucide-react";

import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="notfound-page">

      <div className="notfound-content">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist
          or has been moved.
        </p>


        <Link to="/" className="back-home-btn">
          <Home size={20} />
          Back to Home
        </Link>

      </div>

    </section>
  );
}
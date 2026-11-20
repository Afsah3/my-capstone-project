import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Login.css";

export default function Login() {
  return (
    <>
      <Navbar />

      <section className="login-page">

        <div className="login-card">

          <h1>Welcome Back</h1>

          <p>
            Login to continue shopping with SmartShop.
          </p>

          <form>

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button type="submit">
              Login
            </button>

          </form>

          <div className="login-links">

            <Link to="#">
              Forgot Password?
            </Link>

            <p>
              Don't have an account?
              <Link to="#">
                Create Account
              </Link>
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
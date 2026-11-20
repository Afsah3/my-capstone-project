import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import "./Navbar.css";


export default function Navbar() {

  const { cartItems = [] } = useCart();
  const { wishlistItems = [] } = useWishlist();

  const [openMenu, setOpenMenu] = useState(false);


  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  return (

    <nav className="navbar">


      <div className="logo">

        <Link to="/">
          Smart<span>Shop</span>
        </Link>

      </div>



      <button
        className="menu-btn"
        onClick={() => setOpenMenu(!openMenu)}
      >

        {openMenu ? (
          <X size={28}/>
        ) : (
          <Menu size={28}/>
        )}

      </button>



      <ul className={`nav-links ${openMenu ? "open" : ""}`}>

        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>


        <li>
          <NavLink to="/shop">
            Shop
          </NavLink>
        </li>


        <li>
          <NavLink to="/categories">
            Categories
          </NavLink>
        </li>


        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>


        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>


      </ul>



      <div className="nav-icons">


        <Link to="/shop">
          <Search size={22}/>
        </Link>



        <Link to="/wishlist" className="icon-box">

          <Heart size={22}/>

          {wishlistItems.length > 0 && (
            <span>
              {wishlistItems.length}
            </span>
          )}

        </Link>




        <Link to="/cart" className="icon-box">

          <ShoppingCart size={22}/>

          {totalItems > 0 && (
            <span>
              {totalItems}
            </span>
          )}

        </Link>



        <Link
          to="/login"
          className="login-btn"
        >

          <User size={18}/>

          Login

        </Link>


      </div>


    </nav>

  );
}
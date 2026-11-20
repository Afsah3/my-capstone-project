import "./Categories.css";
import electronics from "../../assets/images/categories/electronics.jpg";
import fashion from "../../assets/images/categories/fashion.jpg";
import beauty from "../../assets/images/categories/skincare.jpg";
import home from "../../assets/images/categories/home.jpg"
import groceries from "../../assets/images/categories/glocery.jpg";
import sports from "../../assets/images/categories/sport.jpg";
import books from "../../assets/images/categories/books.jpg";
import health from "../../assets/images/categories/health.jpg";

import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: electronics,
  },
  {
    id: 2,
    name: "Fashion",
    image: fashion,
  },
  {
    id: 3,
    name: "Beauty",
    image: beauty,
  },
  {
    id: 4,
    name: "Home",
    image: home,
  },
  {
    id: 5,
    name: "Groceries",
    image: groceries,
  },
  {
    id: 6,
    name: "Sports",
    image: sports,
  },
  {
    id: 7,
    name: "Books",
    image: books,
  },
  {
    id: 8,
    name: "Health",
    image: health,
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="section-title">
        <h2>Shop by Category</h2>
        <p>
          Discover products across a variety of categories and find everything
          you need in one place.
        </p>
      </div>

      <div className="category-container">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.name}`}
            className="category-card"
          >
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />

            <div className="category-overlay">
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
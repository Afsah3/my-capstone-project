import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import products from "../../data/products";
import { Link } from "react-router-dom";
import "./CategoryPage.css";

export default function CategoryPage() {
  const categories = [];

  products.forEach((product) => {
    const exists = categories.find(
      (item) => item.name === product.category
    );

    if (!exists) {
      categories.push({
        name: product.category,
        image: product.image,
      });
    }
  });

  return (
    <>
      <Navbar />

      <section className="categories-page">

        <h1>Shop by Category</h1>

        <p>
          Browse products by category.
        </p>

        <div className="categories-grid">

          {categories.map((category) => (

          <Link
  key={category.name}
  to={`/shop?category=${category.name}`}
  className="category-card"
>

              <img
                src={category.image}
                alt={category.name}
              />

              <div className="category-overlay">

                <h2>{category.name}</h2>

              </div>

            </Link>

          ))}

        </div>

      </section>

      <Newsletter />

      <Footer />
    </>
  );
}
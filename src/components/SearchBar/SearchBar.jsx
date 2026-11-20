import "./SearchBar.css";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchBar({
  search,
  setSearch,
  products,
}) {
  const suggestions =
    search.trim() === ""
      ? []
      : products
          .filter((product) =>
            product.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .slice(0, 5);

  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <Search size={20} className="search-icon" />

        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="clear-search"
            onClick={() => setSearch("")}
          >
            Clear
          </button>
        )}
      </div>

      {suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="suggestion-item"
              onClick={() => setSearch("")}
            >
              <img
                src={product.image}
                alt={product.name}
              />

              <div>
                <h4>{product.name}</h4>

                <p>
                  {product.price.toLocaleString()} RWF
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
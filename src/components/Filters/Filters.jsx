import "./Filters.css";
import { SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Filters({
  category,
  setCategory,
  sort,
  setSort,
}) {
  const navigate = useNavigate();

  const handleCategoryChange = (value) => {
    setCategory(value);

    if (value === "All") {
      navigate("/shop");
    } else {
      navigate(`/shop?category=${value}`);
    }
  };

  return (
    <div className="filters-container">
      <div className="filters-title">
        <SlidersHorizontal size={20} />
        <h3>Filters</h3>
      </div>

      <div className="filter-group">
        <label htmlFor="category">Category</label>

        <select
          id="category"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home & Living</option>
          <option value="Beauty">Beauty</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="sort">Sort by Price</label>

        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Default</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      <button
        className="reset-filters"
        onClick={() => {
          setCategory("All");
          setSort("");
          navigate("/shop");
        }}
      >
        Reset Filters
      </button>
    </div>
  );
}
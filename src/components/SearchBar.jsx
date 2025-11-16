import React, { useState } from "react";
import { useNews } from "../context/NewsContext";

const SearchBar = () => {
  const { category, setCategory, categories, handleSearch, handleClearSearch, query } = useNews();
  const [inputQuery, setInputQuery] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputQuery.trim());
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    handleSearch("");
    setInputQuery("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search news..."
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
        <button type="submit" disabled={!inputQuery.trim()}>
          Search
        </button>
        {query && (
          <button type="button" className="clear-btn" onClick={() => {
            setInputQuery("");
            handleClearSearch();
          }}>
            ✕
          </button>
        )}
      </form>

      {!query && (
        <div className="category-bar">
          <span>Filter by Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

import React, { useState, useEffect, useContext, createContext } from "react";
import { fetchNewsApi, CATEGORIES } from "../api/newsApi";

const NewsContext = createContext();
export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");

  const fetchNews = async (search = "", cat = "general") => {
    try {
      setLoading(true);
      setError(null);
      const fetchedArticles = await fetchNewsApi(search, cat);
      setArticles(fetchedArticles);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err.message || "Network error occurred.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(query, category);
  }, [category, query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    if (newQuery) setCategory("general");
  };

  const handleClearSearch = () => {
    setQuery("");
    setCategory("general");
  };

  const contextValue = {
  articles,
  loading,
  error,
  category,
  setCategory,
  categories: CATEGORIES,
  query,
  handleSearch,
  handleClearSearch
};


  return <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>;
};

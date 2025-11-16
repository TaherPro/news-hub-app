import React from "react";
import { useNews } from "../context/NewsContext";
import ArticleCard from "./ArticleCard";

const NewsList = () => {
  const { articles, loading, error, query, category } = useNews();

  const titleText = query
    ? `Search Results for "${query}"`
    : `Top Headlines: ${category.charAt(0).toUpperCase() + category.slice(1)}`;

  if (loading) return <div className="message">Loading news...</div>;
  if (error) return <div className="message error">Error: {error}</div>;
  if (articles.length === 0) return <div className="message warning">No articles found.</div>;

  return (
    <div className="news-list">
      <h1>{titleText}</h1>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <ArticleCard key={article.url || index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;

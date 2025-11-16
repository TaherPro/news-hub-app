import React from "react";

const ArticleCard = ({ article }) => (
  <div className="article-card">
    <div className="article-image">
      <img
        src={article.urlToImage}
        alt={article.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/600x400?text=No+Image";
        }}
      />
      <span className="article-source">
        {article.source?.name || "Unknown Source"}
      </span>
    </div>

    <div className="article-content">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read Full Article →
      </a>
      <p className="article-date">
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
    </div>
  </div>
);

export default ArticleCard;

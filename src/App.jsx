import React from "react";
import { NewsProvider } from "./context/NewsContext";
import SearchBar from "./components/SearchBar";
import NewsList from "./components/NewsList";
import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <NewsProvider>
        <header>
          <h1>Global News Streaming</h1>
          <p>Stay informed with top headlines and search results from across the World.</p>
        </header>
        <SearchBar />
        <NewsList />
      </NewsProvider>
    </div>
  );
};

export default App;

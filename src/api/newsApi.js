export const NEWS_API_KEY = "API_KEY";
export const BASE_URL = "https://newsapi.org/v2/top-headlines";
export const CATEGORIES = [
  "general",
  "business",
  "technology",
  "entertainment",
  "health",
  "science",
  "sports",
];

export const fetchNewsApi = async (searchQuery = "", category = "general") => {
  let url;
  if (searchQuery) {
    url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      searchQuery
    )}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
  } else {
    url = `${BASE_URL}?country=us&category=${category}&apiKey=${NEWS_API_KEY}`;
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  const data = await response.json();
  if (data.status !== "ok") throw new Error(data.message || "API Error");

  return data.articles.filter(
    (a) => a.title && a.description && a.url && a.urlToImage
  );
};

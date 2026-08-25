const API_URL =
  process.env.API_URL || "https://jsonplaceholder.typicode.com/posts/1";

async function fetchPost() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

module.exports = { fetchPost };

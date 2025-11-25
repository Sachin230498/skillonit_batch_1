import React, { useState } from "react";

function ProductSearch() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Search field cannot be empty!");
      setProducts([]);
      return;
    }

    try {
      setError(""); // clear previous error
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Products</h2>
      <input
        type="text"
        value={query}
        placeholder="Enter product name..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;

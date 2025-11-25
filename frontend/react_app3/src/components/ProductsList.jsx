import React, { useState, useEffect } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]); // all products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1); // pagination current page
  const productsPerPage = 6; // items per page

  // Fetch products from API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (products.length === 0) return <div>No products found</div>;

  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <h2>Products</h2>

      {/* Product List */}
      <ul>
        {currentProducts.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.brand} <br />
            Price: ${p.price} <br />
            <img src={p.thumbnail} alt={p.title} width="100" />
          </li>
        ))}
      </ul>

      {/* Pagination Buttons */}
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor: currentPage === i + 1 ? "lightblue" : "white",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;

import React from "react";
import { Link } from "react-router-dom";

function Navbar({ currentUser, setCurrentUser }) {
  return (
    <nav style={{ padding: "10px", background: "#eee", marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      {!currentUser && (
        <>
          <Link to="/login" style={{ marginRight: "10px" }}>
            Login
          </Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
      {currentUser && currentUser.role === "admin" && (
        <>
          <Link to="/admin" style={{ marginRight: "10px" }}>
            Admin Panel
          </Link>
        </>
      )}
      {currentUser && (
        <>
          <span style={{ marginLeft: "10px" }}>Hello</span>
          <button
            onClick={() => setCurrentUser(null)}
            style={{ marginLeft: "10px" }}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;

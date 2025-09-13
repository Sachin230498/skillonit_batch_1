import React from "react";
import UserCrud from "./UserCrud.jsx";
import ProductCrud from "./ProductCrud.jsx";

function AdminPanel({ currentUser, setCurrentUser }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel</h1>
      <p>Welcome {currentUser.name}</p>
      {/* <button onClick={() => setCurrentUser(null)}>Logout</button> */}
      <hr />
      <h2>Manage Users</h2>
      {/* <UserCrud /> */}
      <hr />
      <h2>Manage Products</h2>
      {/* <ProductCrud /> */}
    </div>
  );
}

export default AdminPanel;

import React from 'react'

const Home = ({ currentUser, setCurrentUser }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>
      <p>Welcome {currentUser.name}</p>
      {/* <button onClick={() => setCurrentUser(null)}>Logout</button> */}
      <h2>Available Products</h2>
      <ul></ul>
    </div>
  );
};

export default Home
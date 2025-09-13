// import { useState, useEffect } from "react";

// import "./App.css";
// import UserForm from "./comonents/UserForm";
// import UserList from "./comonents/UserList";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [editUser, setEditUser] = useState(null)


//   useEffect(() => {
//     const data = async () => {
//       let res = await fetch("http://localhost:3000/users");
//       let userdata = await res.json();

//       setUsers(userdata);
//     };

//     data();
//   }, []);

//   const addUser = async (user) => {
//     let res = await fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(user),
//     });
//     let newUser = await res.json();
//     setUsers([...users, newUser]);
//   };

//   const updateedUser = async (updateUsers) => {
//     let res = await fetch(`http://localhost:3000/users/${updateUsers.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updateUsers),
//     });
//     let updatenewUser = await res.json();
//     setUsers(users.map((u)=>(u.id ===updatenewUser.id ? updatenewUser: u )));
//     setEditUser(null)
//   };


//     const deleteUser = async (id) => {
//       let res = await fetch(`http://localhost:3000/users/${id}`, {
//         method: "DELETE",
//       });
    
//       setUsers(users.filter((u)=>u.id !==id))
//     };


//   return (
//     <>
//       <h1>Crud Operation</h1>

//       <br />
//       <br />

//       <UserForm
//         addUser={addUser}
//         updateedUser={updateedUser}
//         editUser={editUser}
//       />

//       <UserList
//         users={users}
//         setEditUser={setEditUser}
//         deleteUser={deleteUser}
//       />
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import AdminPanel from "./components/pages/Admin";
import UserPanel from "./components/pages/Home";


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? (
              <UserPanel
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin"
          element={
            currentUser && currentUser.role === "admin" ? (
              <AdminPanel
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

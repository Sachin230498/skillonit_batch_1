// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Products from "./pages/Products";
// import { useState } from "react";
// import "./index.css";

// export default function App() {
//   const [isDark, setIsDark] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleTheme = () => setIsDark(!isDark);

//   return (
//     <div
//       className={isDark ? "dark-mode min-h-screen" : "light-mode min-h-screen"}
//     >
//       <Router>
//         <Navbar
//           isDark={isDark}
//           toggleTheme={toggleTheme}
//           isLoggedIn={isLoggedIn}
//           setIsLoggedIn={setIsLoggedIn}
//         />
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/login"
//             element={<Login setIsLoggedIn={setIsLoggedIn} />}
//           />
//           <Route
//             path="/dashboard"
//             element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/products"
//             element={isLoggedIn ? <Products /> : <Navigate to="/login" />}
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }



import React from 'react'
import ProductsList from './components/ProductsList'
import ProductSearch from './components/ProductSearch'

const App = () => {
  return (
    <div>
      {/* <ProductSearch/> */}
      <ProductsList/>
    </div>
  )
}

export default App
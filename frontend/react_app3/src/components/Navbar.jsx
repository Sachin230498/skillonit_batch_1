import { Link, useNavigate } from "react-router-dom";

export default function Navbar({
  isDark,
  toggleTheme,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="p-4 flex justify-between items-center shadow-md bg-blue-500 text-white">
      <div className="flex space-x-4">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        {isLoggedIn && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/products">Products</Link>
          </>
        )}
      </div>
      <div className="flex items-center space-x-3">
        <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-700">
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="px-3 py-1 rounded bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

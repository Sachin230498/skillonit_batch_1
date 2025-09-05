import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:5000/users");
      const user = res.data.find(
        (u) => u.email === form.email && u.password === form.password
      );
      if (user) {
        Swal.fire("Welcome!", "Login successful", "success");
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        Swal.fire("Oops!", "Invalid credentials", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  return (

  <div className="page-container">
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  </div>
);

  
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({ setCurrentUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const Navigate = useNavigate()
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    event.preventDefault();
    const login = async () => {
      let res = await fetch("http://localhost:3000/users");
      let loginData = await res.json();
      //  console.log(loginData)
      let userData = loginData.find(
        (user) => user.email === form.email && user.password === form.password
      );

      if (userData) {
        setCurrentUser(userData);
        Navigate("/")
      } else {
        alert("Invalid Credential");
      }
    };

    login();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

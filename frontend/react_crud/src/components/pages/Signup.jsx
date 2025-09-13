import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setCurrentUser }) => {

  const Navigate = useNavigate()

  const [form, setForm] = useState({name:"", email: "", password: "" });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = () => {
    event.preventDefault()
    
    const SignupData = async()=>{
      let res = await fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({...form, role:"user"})
      });

      let userData = await res.json()
     alert("user Ragistered")
     Navigate("/login")
    }


    SignupData()

  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
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
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;

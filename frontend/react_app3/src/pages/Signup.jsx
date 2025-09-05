import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", form);
      Swal.fire("Success!", "Signup successful!", "success");
      setForm({ email: "", password: "" });
    } catch (error) {
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  return (
    <div className="page-container">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded w-80"
      >
        <h2 className="text-2xl mb-4 font-bold">Signup</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

import React,{useState,useEffect} from 'react'



const UserForm = ({ addUser, updateedUser, editUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editUser) {
      updateedUser(formData);
    } else {
      addUser(formData);
    }
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          value={formData.email}
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          value={formData.password}
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          required
        />

        <button type="submit">{editUser ? "Update" : "Add"} </button>
      </form>
    </div>
  );
};

export default UserForm
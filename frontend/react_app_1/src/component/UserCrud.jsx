import React, {useState,useEffect} from 'react'
import axios from "axios"

const UserCrud = () => {
   const [user,setUser] = useState([])
   const [form,setForm] = useState({name:"", email:""})
   const [editID,setEditID] = useState(null)


   const getUsers = async()=>{
    const res = await axios.get("http://localhost:3000/users");
    setUser(res.data)
    // console.log(res)
    // console.log(user)
   }


   const handleChange = (e)=>{
    setForm({...form, [e.target.name]:e.target.value })
    // console.log(form)
   }



   const addUser = async()=>{
    if(editID){
        await axios.put(`http://localhost:3000/users/${editID}`, form);
        setEditID(null);
    }else{
        await axios.post("http://localhost:3000/users",form);
    }
    setForm({ name: "", email: "" });
    getUsers()
   }

   const EditUser = (user)=>{
        setForm({name:user.name, email:user.email})
        setEditID(user.id)
   }


   const DeleteUser = async(id)=>{
         await axios.delete(`http://localhost:3000/users/${id}`)
         getUsers()
   }

  return (
    <div>
      <h1>User Crud</h1>

      {/* form */}
      <div id="addform">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <button onClick={addUser}>{editID ? "Update":"Add"}</button>
      </div>

      {/* user list */}

      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
            <button onClick={() => EditUser(user)}>Edit</button>
            <button onClick={() => DeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCrud






// C - create - Post request
// R - read   - Get Request
// U - Update - Put/Patch Request  - id
// D - Delete - Delete Request   - id
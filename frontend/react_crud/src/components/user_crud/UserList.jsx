import React from 'react'

const UserList = ({ setEditUser, deleteUser, users }) => {
  return (
   <div>
    <h1>User List</h1>
    {users.length===0 ? (
        <p>No Users Found</p>
    ):(
        <ul>
            {users.map((user)=>(
               <li key={user.id}>
                {user.name} 
                {user.email}
                {user.password}
                <button onClick={()=>setEditUser(user)}>Edit</button>
                <button onClick={()=>deleteUser(user.id)}>Delete</button>
               </li>
            ))}
        </ul>
    )}
  </div>
  )
};

export default UserList
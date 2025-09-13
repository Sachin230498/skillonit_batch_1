import React from 'react'

const UserCrud = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <br /><br />

      <ul>
        
      </ul>
    </div>
  );
}

export default UserCrud
import React from 'react'

const ProductCrud = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default ProductCrud
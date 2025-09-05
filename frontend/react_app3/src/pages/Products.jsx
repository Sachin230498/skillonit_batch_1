import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", price: "", image: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProducts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/products/${editId}`, form);
      Swal.fire("Updated!", "Product updated successfully", "success");
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/products", form);
      Swal.fire("Added!", "Product added successfully", "success");
    }
    setForm({ id: "", name: "", price: "", image: "" });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    Swal.fire("Deleted!", "Product removed", "success");
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditId(product.id);
  };

  return (
    <div >
      <h2  className=" text-2xl mb-4 font-bold">Manage Products</h2>
      <form onSubmit={handleSubmit} className="mb-6 flex space-x-3">
        <input
          type="text"
          placeholder="ID"
          className="p-2 border"
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          className="p-2 border"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          className="p-2 border"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="p-2 border"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 shadow rounded">
            <img
              src={p.image}
              alt={p.name}
              className="h-32 w-full object-cover mb-2"
            />
            <h3 className="font-bold">{p.name}</h3>
            <p>${p.price}</p>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => handleEdit(p)}
                className="bg-yellow-500 px-3 py-1 rounded text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-600 px-3 py-1 rounded text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

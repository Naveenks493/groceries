import React, { useEffect, useState } from "react";
import axios from "axios";
import { Star, Pencil, Trash2 } from "lucide-react";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    reviews: "",
    price: "",
    image: "",
    category: "",
  });
  const [button, setButton] = useState(true);

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, image: e.target.files[0] }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("reviews", form.reviews);
    formData.append("price", form.price);
    formData.append("category", form.category);
    if (form.image) formData.append("image", form.image);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/product/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setProducts((prev) => [...prev, response.data.product]);
      setForm({ name: "", reviews: "", price: "", image: "", category: "" });
      setButton(true);
    } catch (error) {
      console.log("Error in post API:", error.response?.data || error.message);
    }
  };


  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/product/get");
      setProducts(response.data.product || []);
    } catch (error) {
      console.log("Error in get API:", error.response?.data || error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/product/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log("Error in delete API:", error.response?.data || error.message);
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setButton(false);
  };

  const handleCancel = () => {
    setForm({ name: "", reviews: "", price: "", image: "", category: "" });
    setButton(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("reviews", form.reviews);
    formData.append("price", form.price);
    formData.append("category", form.category);
    if (form.image && typeof form.image !== "string") {
      formData.append("image", form.image);
    }

    try {
      const response = await axios.put(
        `http://localhost:4000/api/product/update/${form._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedProduct = response.data.product;
      setProducts((prev) =>
        prev.map((item) =>
          item._id === updatedProduct._id ? updatedProduct : item
        )
      );
      handleCancel();
    } catch (error) {
      console.log("Error in update API:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 flex gap-10">
      <form
        onSubmit={button ? handleSubmit : handleUpdate}
        className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-lg w-96"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          {button ? "Add New Product" : "Update Product"}
        </h2>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Product Image</label>
          <input type="file" onChange={handleFileChange} />
          {form.image && typeof form.image === "string" && (
            <img
              src={`http://localhost:4000${form.image}`}
              alt="product"
              className="w-16 h-16 object-cover rounded mt-2"
            />
          )}
        </div>

        <input
          type="text"
          required
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        />

        <input
          type="text"
          required
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        />

        <input
          type="number"
          required
          min="1"
          max="5"
          name="reviews"
          placeholder="Reviews (1-5)"
          value={form.reviews}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        />

        <input
          type="number"
          required
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition"
          >
            {button ? "Add Product" : "Update Product"}
          </button>
          {!button && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Product List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item._id}
                className="rounded-lg p-4 shadow-md border hover:shadow-lg transition flex flex-col items-center"
              >
                {item.image ? (
                  <img
                    src={`http://localhost:4000${item.image}`}
                    alt={item.name}
                    className="w-40 h-40 object-contain mb-3"
                  />
                ) : (
                  <div className="w-40 h-40 bg-gray-200 flex items-center justify-center mb-3 rounded">
                    No Image
                  </div>
                )}

                <p className="text-gray-400 text-sm">{item.category}</p>

                <h3 className="text-lg font-semibold">{item.name}</h3>

                <div className="flex items-center gap-1 text-green-500 text-sm mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < (item.reviews || 0)
                          ? "fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-gray-500 text-sm">
                    ({item.reviews || 0})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-green-600 font-bold text-lg">₹{item.price}</p>
                  <p className="text-gray-400 line-through">₹{item.price + 10}</p>
                </div>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Star } from "lucide-react"; 
import { ShoppingCart } from "lucide-react"; 

const UserProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/product/get");
      setProducts(response.data.product || []);
    } catch (error) {
      console.log("Error fetching products:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-orange-400">Best Seller</h2>
      {products.length === 0 ? (
        <p className="text-gray-500">No products available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="rounded-2xl p-4  border border-gray-300 hover:shadow-lg transition flex flex-col items-center"
            >
              {product.image ? (
                <img
                  src={`http://localhost:4000${product.image}`}
                  alt={product.name}
                  className="w-40 h-40 object-contain mb-3"
                />
              ) : (
                <div className="w-40 h-40 bg-gray-200 flex items-center justify-center mb-3 rounded">
                  No Image
                </div>
              )}
              <p className="text-gray-400 text-sm">{product.category || "Category"}</p>
              <h3 className="text-lg font-semibold">{product.name}</h3>

              <div className="flex items-center gap-1 text-green-500 text-sm mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < (product.rating || 4) ? "fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-500 text-sm">
                  ({product.reviews || 5})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-green-600 font-bold text-lg">
                  ₹{product.discountPrice || product.price}
                </p>
                {product.discountPrice && (
                  <p className="text-gray-400 line-through">₹{product.price}</p>
                )}
              </div>

              <button className="flex items-center gap-2 border border-green-500 text-green-500 px-4 py-2 rounded mt-3 hover:bg-green-50">
                <ShoppingCart className="w-4 h-4" /> Add
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProducts;

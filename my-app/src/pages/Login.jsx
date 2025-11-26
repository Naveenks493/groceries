import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  }); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/pooja/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      

      if (res.data.user.role === "admin") {
        setTimeout(() => navigate("/admin"), 2000);
        toast.success("Admin login successful",{style: { background: "#dc2626", color: "#fff" }});
      } else {
        setTimeout(() => navigate("/"), 2000);
        toast.success("User login successful",{style: { background: "#16a34a", color: "#fff" },});
      }

      setForm({ email: "", password: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-orange-200 shadow-2xl rounded-2xl w-full max-w-sm flex flex-col items-center gap-4 p-6">
        <h1 className="font-bold text-2xl text-orange-600">User Login</h1>
        <p className="text-gray-600 text-center text-sm">
          Hey, enter your details to sign in <br /> to your account
        </p>

        <form
          className="flex flex-col items-center gap-3 w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-gray-50 outline-none border border-gray-300 focus:border-orange-500 w-full px-3 py-2 rounded transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            required
            onChange={handleChange}
            className="bg-gray-50 outline-none border border-gray-300 focus:border-orange-500 w-full px-3 py-2 rounded transition"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg w-[80%] transition shadow-md cursor-pointer">
            Log in
          </button>
        </form>

        <h1 className="text-sm text-gray-500">
          Having trouble in
          <span className="text-blue-500 underline cursor-pointer hover:text-blue-700 transition">
            Log in?
          </span>
        </h1>

        <h1 className="text-sm text-gray-600">
          Don't have an account?
          <span className="text-blue-500 underline cursor-pointer hover:text-blue-700 transition">
            <Link to="/signup"> Register Now</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Login;

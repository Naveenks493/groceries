import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/pooja/register", form);
      toast.success("Signup Sucessfully Please Login!")
      setForm({ name: "", email: "", password: "" });
      setTimeout(()=>navigate("/login"),2000)
    } catch (error) {
      toast.error(error.response?.data?.message || "SignUp Failed");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-orange-200 shadow-2xl rounded-2xl w-full max-w-sm flex flex-col items-center gap-4 p-6">
        <h1 className="font-bold text-2xl text-orange-600">User Register</h1>
        <p className="text-gray-600 text-center text-sm">
          Hey, enter your details to register in <br /> to your account
        </p>

        <form
          className="flex flex-col items-center gap-3 w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={form.name}
            required
            onChange={handleChange}
            className="bg-gray-50 outline-none border border-gray-300 focus:border-orange-500 w-full px-3 py-2 rounded transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={form.email}
            required
            onChange={handleChange}
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

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg w-[80%]  transition shadow-md cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <h1 className="text-sm text-gray-600">
          Already have an account?
          <span className="text-blue-500 underline cursor-pointer hover:text-blue-700 transition">
            <Link to="/login">Log in?</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Signup;

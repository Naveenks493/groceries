import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/flowers" },
    { name: "Contact", path: "/pooja-items" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav className="px-4 py-3 w-full shadow-md">
      
      <ul className="hidden md:flex justify-center gap-6 font-semibold text-white text-sm md:text-base">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="cursor-pointer hover:text-orange-500"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex justify-between items-center text-white">
        <h1 className="font-bold text-lg">Menu</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col items-center mt-3 gap-3 font-semibold text-white text-sm transition-all duration-300">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="cursor-pointer hover:text-black transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MainNavbar;

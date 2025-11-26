import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { VscHeartFilled } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import MainNavbar from "./MainNavbar";

const Navbar = () => {
  return (
    <>
      <div
        className="w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('./background.jpg')" }}
      >
    
        <div className="w-full h-full bg-black/50">
          
          <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4 py-2 text-xs sm:text-sm gap-2">
            
            <p className="text-center w-full sm:w-auto">Welcome Visitor!</p>

            
            <ul className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
              <li className="cursor-pointer hover:text-orange-400">My Account</li>
              <li className="cursor-pointer hover:text-orange-400">Checkout</li>
              <li className="cursor-pointer hover:text-orange-400">Blog</li>
              <li className="cursor-pointer hover:text-orange-400">Information</li>
              <li className="cursor-pointer hover:text-orange-400">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>

          
          <div className="max-w-7xl mx-auto flex justify-between flex-col md:flex-row items-center px-4 py-3 md:gap-8">
            
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <img
                src="./pooja.png"
                alt="logo"
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
              />
            </div>

            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full lg:max-w-2xl">
            
              <div className="flex w-full md:flex-1">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-3 py-2 rounded-l-md text-black outline-none bg-white text-sm md:text-base"
                />
                <button className="bg-white border-l border-gray-400 text-black px-3 sm:px-4 flex items-center justify-center rounded-r-md hover:bg-orange-500 hover:text-white cursor-pointer">
                  <FaSearch />
                </button>
              </div>

              <div className="flex items-center border rounded-md">
                <div className="px-2 sm:px-3 py-2 border-r cursor-pointer">
                  <BsBarChartFill className="text-red-600 hover:text-gray-400 text-lg sm:text-xl" />
                </div>
                <div className="px-2 sm:px-3 py-2 cursor-pointer">
                  <VscHeartFilled className="text-red-600 hover:text-gray-400 text-lg sm:text-xl" />
                </div>
              </div>

              <div className="flex items-center bg-white rounded-md px-2 sm:px-3 py-2 shadow-sm cursor-pointer">
                <FaCartShopping className="text-red-500 text-base sm:text-lg" />
                <span className="ml-1 sm:ml-2 text-black font-semibold whitespace-nowrap">
                  <span className="text-xs sm:text-sm">My Cart (0)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="sticky top-0 z-50 w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('./background.jpg')" }}
      >
        <div className="w-full h-full bg-black/50 backdrop-blur-md">
          <MainNavbar />
        </div>
      </div>
    </>
  );
};

export default Navbar;

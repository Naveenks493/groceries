import React from "react";
import { FaFacebook, FaInstagramSquare, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalShipping, MdCurrencyExchange } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Footers = () => {
  return (
    <div className="bg-black p-6 text-white">

      <div className="flex justify-center">
        <img src="./pooja.png" alt="logo" className="w-40 md:w-52" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto mt-6">
        <div>
          <h1 className="text-lg font-semibold text-yellow-500">Customer Service</h1>
          <ul className="mt-3 space-y-2 font-medium">
            {["Contact Us", "Returns", "Order History", "Login", "My Account"].map((item) => (
              <li
                key={item}
                className="hover:text-orange-400 cursor-pointer transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-semibold text-yellow-500">Information</h1>
          <ul className="mt-3 space-y-2 font-medium">
            {[
              "About Us",
              "Delivery Information",
              "History",
              "Return & Refund Policy",
              "Privacy Policy",
              "Terms of Services",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-orange-400 cursor-pointer transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-semibold text-yellow-500">Extras</h1>
          <ul className="mt-3 space-y-2 font-medium">
            {["Brands", "Gift Celebrations", "Blog", "Offers", "Special"].map((item) => (
              <li
                key={item}
                className="hover:text-orange-400 cursor-pointer transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-semibold text-yellow-500">Sign Up for Emails</h1>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <input
              type="text"
              placeholder="Enter Your Email"
              required
              className="bg-white text-black px-4 py-2 w-full sm:w-60 outline-none rounded"
            />
            <button className="bg-green-500 hover:bg-green-600 transition-colors duration-300 px-4 py-2 font-semibold rounded">
              Submit
            </button>
          </div>

          <h1 className="mt-4 text-yellow-500">Follow Us</h1>
          <div className="flex gap-4 mt-2">
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition-transform transform hover:scale-110" />
            <FaInstagramSquare className="text-2xl cursor-pointer hover:text-pink-500 transition-transform transform hover:scale-110" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-500 transition-transform transform hover:scale-110" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center text-center gap-2 mt-6">
        <FaLocationDot />
        <p className="text-sm md:text-base">
          1/23B 2nd Main Road, Anna Nagar West, Chennai -600028, India
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl mx-auto mt-6">
        <div className="rounded flex items-center justify-center px-3 py-3 bg-orange-500 gap-3 hover:bg-orange-600 transition-colors duration-300">
          <MdLocalShipping className="text-xl" />
          <p className="font-semibold">Shipping Only in India</p>
        </div>
        <div className="rounded flex items-center justify-center px-3 py-3 bg-orange-500 gap-3 hover:bg-orange-600 transition-colors duration-300">
          <MdCurrencyExchange className="text-xl" />
          <p className="font-semibold">Return & Exchange</p>
        </div>
        <div className="rounded flex items-center justify-center px-3 py-3 bg-orange-500 gap-3 hover:bg-orange-600 transition-colors duration-300">
          <FaPhoneAlt className="text-xl" />
          <p className="font-semibold">Whatsapp - (6383555520)</p>
        </div>
        <div className="rounded flex items-center justify-center px-3 py-3 bg-orange-500 gap-3 hover:bg-orange-600 transition-colors duration-300">
          <IoMdMail className="text-xl" />
          <p className="font-semibold">contact@poojastore.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footers;

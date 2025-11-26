import React from "react";

const banners = [
  {
    img: "/image6.png",
    title: "Discover Pooja  Flowers",
    subtitle: "Shop authentic spiritual flower",
  },
  {
    img: "/label2.webp",
    title: "Bring Home Positivity",
    subtitle: "Wide collection of daily pooja items",
  },
  {
    img: "/agarpathi.png",
    title: "Complete Your Rituals",
    subtitle: "Incense sticks, sambrani & more",
  },
];

const Banner = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 py-8">
      {banners.map((banner, index) => (
        <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg">
          <img
            src={banner.img}
            alt={banner.title}
            className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-2xl font-bold mb-2">{banner.title}</h2>
            <p className="text-gray-200 text-base mb-4">{banner.subtitle}</p>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-semibold shadow-md transition">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;

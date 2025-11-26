import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Topbanner = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: "/image1.png",
      title: (
        <>
          Discover the <span className="text-orange-400">Best Pooja</span> Essentials Online
        </>
      ),
      desc: "Explore our wide collection of daily pooja items, essentials, flowers, and spiritual products delivered at your doorstep.",
      button: "Explore More",
    },
    {
      image: "/image4.png",
      title: (
        <>
         <span className="text-gray-700"> Bring Home <span className="text-orange-400">Positivity</span></span>
        </>
      ),
      desc: (<><span className="text-orange-500">Shop incense sticks, sambrani, and fragrances that uplift your home.</span></>),
      button: "Shop Now",
    },
    {
      image: "/image5.png",
      title: (
        <>
          Complete Your <span className="text-orange-400">Rituals</span>
        </>
      ),
      desc: "Choose from idols, diyas, and spiritual essentials for your pooja.",
      button: "Discover More",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative bg-cover bg-center transition-all duration-700 h-[500px] md:h-[700px]"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="relative h-full flex items-center max-w-6xl mx-auto px-6 text-white">
        <div className="animate-fade-slide max-w-xl">
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl mb-8">{slides[current].desc}</p>
          <button className="bg-orange-500 px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600 transition">
            {slides[current].button}
          </button>
        </div>
      </div>

      {/* left arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <FaChevronLeft />
      </button>

      {/* right arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <FaChevronRight />
      </button>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full transition ${
              current === i ? "bg-orange-500 scale-110" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Topbanner;

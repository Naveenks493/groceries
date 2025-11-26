import React from "react";

const Label = () => {
  return (
    <div className="grid grid-cols-2 gap-2  mt-4 mb-4 ml-2">
      <div className="w-full max-w-4xl">
        <img src="/image1.png" alt="banner" className="relative rounded-4xl" />
        <button className=" absolute top-[70%] left-[6%] bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-700 cursor-pointer">
          Discover
        </button>
      </div>
      <div>
        <img src="/image.png" alt="banner2" className="rounded-xl" />
        <div className="relative w-[38%] h-[45%] mt-2 rounded-xl overflow-hidden">
          <img
            src="/label7.png"
            alt="banner2"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <span className="bg-orange-500 hover:bg-orange-700 px-3 py-1 rounded-lg text-white font-semibold shadow-md cursor-pointer">
              Daily Essential
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;

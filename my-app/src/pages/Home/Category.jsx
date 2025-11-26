import React from 'react'

const Category = () => {
  return (
    <div>
        <div>
        <h1>Browse by Category</h1>
        <div className="grid grid-cols-4 gap-5">
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <img
            src="/flow.jpeg"
            alt="category1"
            className="w-full h-full object-cover rounded-full"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-orange-200 font-bold text-lg bg-black/30 rounded-full">
            Flowers
          </h1>
        </div>
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <img
            src="/agarpathi.png"
            alt="category2"
            className="w-full h-full object-cover rounded-full"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text= font-bold text-lg bg-black/30 rounded-full">
            Agarpathi
          </h1>
        </div>
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <img
            src="/flow.jpeg"
            alt="category1"
            className="w-full h-full object-cover rounded-full"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-orange-200 font-bold text-lg bg-black/30 rounded-full">
            Flowers
          </h1>
        </div>
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <img
            src="/flow.jpeg"
            alt="category1"
            className="w-full h-full object-cover rounded-full"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-orange-200 font-bold text-lg bg-black/30 rounded-full">
            Flowers
          </h1>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Category
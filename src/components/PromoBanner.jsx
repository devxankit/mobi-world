import React from "react";

const PromoBanner = ({ title, desc, image, button }) => (
  <div className="flex flex-col items-center justify-between bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-yellow-900 dark:to-yellow-700 rounded-xl shadow p-6 h-full">
    <img src={image} alt={title} className="w-16 h-16 object-contain mb-3" />
    <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-1 text-center">{title}</h3>
    <p className="text-sm text-yellow-700 dark:text-yellow-100 mb-3 text-center">{desc}</p>
    {button && <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all">{button}</button>}
  </div>
);

export default PromoBanner; 
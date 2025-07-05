import React from "react";
import { FaTruck, FaThumbsUp, FaUndo, FaMobileAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaTruck className="text-4xl text-brand mb-2" />,
    title: "Fast Delivery",
    desc: "Get your favorite phones delivered quickly and safely to your doorstep."
  },
  {
    icon: <FaThumbsUp className="text-4xl text-brand mb-2" />,
    title: "Best Quality",
    desc: "All devices are quality checked and come with warranty for your peace of mind."
  },
  {
    icon: <FaUndo className="text-4xl text-brand mb-2" />,
    title: "Free Return",
    desc: "Not satisfied? Enjoy hassle-free returns within 7 days of delivery."
  }
];

const InfoSection = () => (
  <section className="w-full max-w-7xl mx-auto my-12 px-2 sm:px-4 md:px-6">
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Why Shop With Mobi World?</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Mobi World is your trusted destination for the latest smartphones at unbeatable prices. We offer fast delivery, genuine products, and excellent customer support. Shop with confidence and experience the best in mobile shopping!</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {info.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          {item.icon}
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default InfoSection; 
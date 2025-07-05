import React from "react";

const brands = [
  { name: "Apple", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Samsung", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "OnePlus", img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/OnePlus_logo.svg" },
  { name: "Vivo", img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Vivo_logo_2019.svg" },
  { name: "Oppo", img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/OPPO_LOGO_2019.svg" },
  { name: "Realme", img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Realme_logo.svg" },
  { name: "Xiaomi", img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { name: "Motorola", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Motorola_logo.svg" },
  { name: "Nokia", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Nokia_wordmark.svg" },
  { name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
];

const BrandScroller = () => (
  <div className="w-full bg-white dark:bg-gray-900 py-4 overflow-hidden">
    <div className="relative">
      <div className="flex items-center gap-10 animate-scroll-x whitespace-nowrap">
        {[...brands, ...brands].map((brand, idx) => (
          <div key={idx} className="inline-flex flex-col items-center min-w-[120px]">
            <img src={brand.img} alt={brand.name} className="h-10 w-auto object-contain mb-2 grayscale hover:grayscale-0 transition duration-300" />
            <span className="text-xs text-gray-700 dark:text-gray-200 font-semibold">{brand.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
      `}</style>
    </div>
  </div>
);

export default BrandScroller; 
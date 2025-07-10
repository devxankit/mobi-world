import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ADMIN_WHATSAPP = "919755620716"; // Placeholder, update later

const PhoneCard = ({ phone }) => {
  const {
    modelNo,
    salePrice,
    status,
    createdAt,
    images
  } = phone;

  const imageUrl =
    images && images.length > 0 && images[0].filename
      ? `http://localhost:5000/uploads/${images[0].filename}`
      : null;

  const handleWhatsApp = () => {
    const details = [
      'I am interested to buy this product.',
      '',
      `Model: ${modelNo}`,
      `Price: ₹${salePrice?.toLocaleString() || 'N/A'}`,
      `Status: ${status === 'in_stock' ? 'In Stock' : 'Out of Stock'}`,
      `Added: ${formatDate(createdAt)}`
    ];
    if (imageUrl) {
      details.push(`Image: ${imageUrl}`);
    }
    const msg = details.join('\n');
    const encodedMsg = encodeURIComponent(msg);
    const phone = ADMIN_WHATSAPP;

    // Device detection
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    let waUrl = '';
    if (isMobile) {
      waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;
    } else {
      waUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;
    }
    window.open(waUrl, '_blank');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg transition-colors w-full min-w-0 max-w-xs mx-auto">
      <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-t-xl overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={modelNo}
            crossOrigin="anonymous"
            className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
            onError={e => { e.target.onerror = null; e.target.src = ""; }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full text-gray-400">
            <FaPhone className="text-3xl sm:text-4xl mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm">No Image Available</span>
          </div>
        )}
        <span className={`absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold rounded-full ${status === 'in_stock' ? 'bg-green-500 text-white' : 'bg-yellow-400 text-white'}`}>
          {status === 'in_stock' ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-2 sm:p-4">
        <div className="font-bold text-base sm:text-lg text-gray-800 dark:text-gray-100 mb-0.5 sm:mb-1 truncate">{modelNo}</div>
        <div className="mb-1 sm:mb-2">
          <span className="inline-block bg-gradient-to-r from-indigo-400 to-purple-500 text-white text-sm sm:text-base font-semibold px-3 sm:px-4 py-0.5 sm:py-1 rounded-full">
            ₹{salePrice?.toLocaleString() || 'N/A'}
          </span>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-300 mb-2 sm:mb-4">Added: {formatDate(createdAt)}</div>
        <button
          onClick={handleWhatsApp}
          className="mt-auto flex items-center justify-center gap-2 w-full py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold text-sm sm:text-base shadow hover:from-green-500 hover:to-green-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-green-400 dark:from-green-600 dark:to-green-800"
        >
          <FaWhatsapp className="text-base sm:text-lg" />
          Contact on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default PhoneCard; 
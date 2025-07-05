import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const brands = [
  "Apple", "Samsung", "OnePlus", "Vivo", "Oppo", "Realme", "Xiaomi", "Motorola", "Nokia", "Google"
];

const Footer = () => (
  <footer className="w-full bg-gray-900 text-gray-200 py-10 mt-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
      {/* Logo & Description */}
      <div>
        <div className="text-2xl font-bold tracking-wide mb-2">Mobi World</div>
        <p className="text-gray-400 text-sm mb-4">Mobi World is your trusted destination for the latest smartphones at unbeatable prices. We offer fast delivery, genuine products, and excellent customer support. Shop with confidence and experience the best in mobile shopping!</p>
        <div className="flex gap-4 text-2xl mt-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaTwitter /></a>
        </div>
      </div>
      {/* Brands */}
      <div>
        <div className="font-semibold mb-2 text-lg">Mobile Brands</div>
        <ul className="text-gray-400 text-sm space-y-1">
          {brands.map((brand, idx) => (
            <li key={idx}>{brand}</li>
          ))}
        </ul>
      </div>
      {/* Contact Info */}
      <div>
        <div className="font-semibold mb-2 text-lg">Contact Us</div>
        <ul className="text-gray-400 text-sm space-y-2">
          <li className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Mobi Street, Tech City, India</li>
          <li className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</li>
          <li className="flex items-center gap-2"><FaEnvelope /> support@mobi-world.com</li>
        </ul>
      </div>
      {/* Newsletter or Quick Links */}
      <div>
        <div className="font-semibold mb-2 text-lg">Quick Links</div>
        <ul className="text-gray-400 text-sm space-y-1">
          <li><a href="/" className="hover:text-white">Home</a></li>
          <li><a href="/phones" className="hover:text-white">All Phones</a></li>
          <li><a href="#" className="hover:text-white">About Us</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center text-gray-500 text-xs mt-8">&copy; {new Date().getFullYear()} Mobi World. All rights reserved.</div>
  </footer>
);

export default Footer; 
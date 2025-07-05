import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "All Phones", to: "/phones" },
];

function toggleDarkMode() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

// On load, set theme from localStorage
if (typeof window !== 'undefined') {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
}

const Navbar = () => {
  const location = useLocation();
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
  return (
    <nav className="w-full bg-white dark:bg-gray-950 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold tracking-wide text-brand dark:text-white uppercase">Mobi World</div>
        <div className="flex items-center gap-2 sm:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-150 text-base 
                ${location.pathname === link.to
                  ? "bg-blue-100 text-brand shadow dark:bg-brand dark:text-white"
                  : "text-gray-700 hover:bg-blue-50 hover:text-brand dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"}
              `}
            >
              {link.label}
            </Link>
          ))}
          <button
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-brand dark:text-yellow-300 transition-colors"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
import React from "react";
import PhoneList from "../components/PhoneList";
import Footer from "../components/Footer";

const AllPhones = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2 mb-6">All Phones</h1>
        <PhoneList />
      </main>
      <Footer />
    </div>
  );
};

export default AllPhones; 
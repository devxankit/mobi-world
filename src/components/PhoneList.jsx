import React, { useEffect, useState } from "react";
import axios from "axios";
import PhoneCard from "./PhoneCard";
import PromoBanner from "./PromoBanner";

const API_URL = "https://mobilworld-backend.onrender.com/api/phones";

const promoBanners = [
  {
    title: "Instant Cameras",
    desc: "Get photo paper as a gift.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    button: "View Details"
  },
  {
    title: "Summer Sale",
    desc: "Up to 40% off on select models!",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80",
    button: "Shop Now"
  }
];

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);

  const fetchPhones = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (res.data.success) {
        setPhones(res.data.data || []);
        setPagination(res.data.pagination || null);
        setError(null);
      } else {
        setError("API returned unsuccessful response");
      }
    } catch (err) {
      console.error("API fetch error:", err);
      if (err.response) {
        // Log details if the backend responded with an error (e.g., 401 Unauthorized)
        console.error("Error response data:", err.response.data);
        console.error("Error response status:", err.response.status);
        console.error("Error response headers:", err.response.headers);
      }
      setError("Failed to fetch phones. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhones();
    const interval = setInterval(fetchPhones, 30000); // Poll every 30s
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px] bg-white dark:bg-gray-900 transition-colors">
        <span className="loader" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-4 p-4 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 rounded">
        {error}
      </div>
    );
  }

  if (!phones.length) {
    return (
      <div className="my-4 p-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded">
        No phones available at the moment.
      </div>
    );
  }

  // Interleave 3 phone cards, then a promo banner, repeat
  const gridItems = [];
  let bannerIdx = 0;
  for (let i = 0; i < phones.length; i += 3) {
    gridItems.push(
      ...phones.slice(i, i + 3).map(phone => <PhoneCard key={phone._id} phone={phone} />)
    );
    if (bannerIdx < promoBanners.length) {
      gridItems.push(
        <PromoBanner key={`banner-${bannerIdx}`} {...promoBanners[bannerIdx]} />
      );
      bannerIdx++;
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 bg-white dark:bg-gray-900 transition-colors">
      {pagination && (
        <div className="text-sm text-gray-500 dark:text-gray-300 mb-2">
          Showing {phones.length} phones (Page {pagination.currentPage} of {pagination.totalPages}, Total: {pagination.totalItems})
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {gridItems}
      </div>
    </div>
  );
};

export default PhoneList; 
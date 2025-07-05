import React from "react";
import HeroSlider from "../components/HeroSlider";
import BrandScroller from "../components/BrandScroller";
import InfoSection from "../components/InfoSection";
import PhoneList from "../components/PhoneList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      <HeroSlider />
      <BrandScroller />
      <InfoSection />
      <PhoneList />
      <Footer />
    </div>
  );
};

export default Home; 
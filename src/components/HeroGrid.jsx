import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mainSlides = [
  {
    id: 1,
    title: "Welcome to Mobi World!",
    desc: "Discover the latest smartphones at unbeatable prices. Shop top brands and enjoy fast delivery.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&w=600&q=80",
    button: "Shop Mobiles"
  },
  {
    id: 2,
    title: "Best Deals on Top Brands",
    desc: "Save big on Samsung, Apple, OnePlus, Xiaomi, and more. Limited time offers!",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&w=600&q=80",
    button: "View Offers"
  },
  {
    id: 3,
    title: "Upgrade Your Mobile Experience",
    desc: "Find the perfect phone for you. Quality checked, warranty included, and free returns.",
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&w=600&q=80",
    button: "Browse Collection"
  },
  {
    id: 4,
    title: "New Arrivals Every Week!",
    desc: "Check out the latest launches from all major brands.",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&w=600&q=80",
    button: "See New Phones"
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: true,
  pauseOnHover: true,
};

const HeroGrid = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 mb-12">
      <div className="bg-gradient-to-br from-purple-700 to-indigo-900 rounded-2xl overflow-hidden shadow-lg min-h-[340px] flex items-center justify-center">
        <Slider {...sliderSettings} className="w-full">
          {mainSlides.map((slide) => (
            <div key={slide.id} className="flex flex-col md:flex-row items-center justify-center p-8 lg:p-16 min-h-[340px]">
              <div className="flex-1 flex flex-col items-start justify-center z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h2>
                <p className="text-lg md:text-2xl text-gray-200 mb-6">{slide.desc}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all mb-4 md:mb-0">{slide.button}</button>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img src={slide.image} alt={slide.title} className="w-56 h-56 object-contain rounded-xl shadow-lg" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroGrid; 
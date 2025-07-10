import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&w=1200&q=80',
    headline: 'Your Mobile Destination',
    subheadline: 'Shop the latest smartphones from top brands at unbeatable prices. Fast delivery, easy returns, and genuine products guaranteed.',
    buttonText: 'Shop Phones',
    buttonLink: '/phones',
  },
  {
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&w=1200&q=80',
    headline: 'Unbeatable Deals',
    subheadline: 'Save big on Samsung, Apple, OnePlus, Xiaomi, and more. Limited time offers every week!',
    buttonText: 'View Offers',
    buttonLink: '/phones',
  },
  {
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&w=1200&q=80',
    headline: 'Quality & Service',
    subheadline: 'All phones are quality checked, come with warranty, and our support team is here for you.',
    buttonText: 'Why Mobi World?',
    buttonLink: '/about',
  },
  {
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&w=1200&q=80',
    headline: 'New Arrivals Every Week',
    subheadline: 'Discover the latest launches and exclusive collections from all major brands.',
    buttonText: 'See New Phones',
    buttonLink: '/phones',
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl max-w-7xl mx-auto mt-6 mb-12 shadow-lg">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade, A11y]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="absolute inset-0 w-full h-full z-0"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.7)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-[50vh] sm:h-[60vh] md:h-[80vh] px-4 sm:px-6 md:px-8">
              <div className="text-center animate-fadeInUp">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg transition-all duration-700 opacity-0 animate-fadeInUp">
                  {slide.headline}
                </h1>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 drop-shadow-md transition-all duration-700 delay-200 opacity-0 animate-fadeInUp max-w-2xl mx-auto">
                  {slide.subheadline}
                </p>
                <Link
                  to={slide.buttonLink}
                  className="inline-block bg-white text-blue-700 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl animate-bounce"
                  tabIndex={0}
                  aria-label={slide.buttonText}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-indigo-700/40 z-5 pointer-events-none rounded-2xl" />
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider; 
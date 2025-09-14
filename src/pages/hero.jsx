import React from "react";
import { Link } from "react-router-dom"; // Import Link

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#BA727D] via-[#D2BDA2] to-[#D2C4C4] py-12 md:py-20">
      <div className="h-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center md:justify-between gap-10">
        
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md animate-fade-in">
            Tech Events 2025
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-md mx-auto md:mx-0 animate-slide-up">
            Join us for the most exciting technology events of the year. Connect
            with industry leaders, explore innovations, and unlock opportunities
            that will shape the future of tech.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/events"
              className="px-6 py-3 bg-white text-[#BA727D] font-semibold rounded-lg shadow-md hover:bg-[#D2BDA2] hover:text-white transition duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              View Events
            </Link>
          </div>
        </div>

        {/* Right: Images */}
        <div className="md:w-1/2 flex flex-col gap-6 items-center">
          <img
            src="../src/assets/hero2.jpeg"
            alt="Event 1"
            className="rounded-2xl shadow-lg w-4/5 sm:w-3/4 md:w-2/3 lg:w-3/4 max-w-full h-auto transform hover:scale-105 transition duration-500"
          />
          {/* <img
            src=".jpeg"
            alt="Event 2"
            className="rounded-2xl shadow-lg w-4/5 sm:w-3/4 md:w-2/3 lg:w-3/4 transform hover:scale-105 transition duration-500"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

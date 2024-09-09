import React from "react";
import NavBar from "./NavBar";
import backgroundImage from "../Assets/Rectangle.png";
import image from "../Assets/image.png";
const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        {" "}
        {/* Increased top padding */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-4">
              Grow faster with our all-in-one marketing platform
            </h1>
            <p className="text-[#64748B] mb-8 max-w-xl">
              At dotspace, we take pride in our unparalleled Digital Marketing
              Expertise, seamlessly blending creativity with data-driven
              strategies to propel your brand to new heights in the digital
              landscape.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#0F172A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1E293B]">
                Get it Touch
              </button>
              <button className="border border-[#F59E0B] text-[#F59E0B] px-8 py-3 rounded-full font-medium hover:bg-[#F59E0B] hover:text-white">
                About Us
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative w-80 h-80 rounded-full bg-[#FEF3C7] overflow-hidden">
              <img
                src={image}
                alt="Woman in yellow sweater"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 w-12 h-12 bg-[#1D4ED8] rounded-full"></div>
            <div className="absolute top-4 right-16 w-10 h-10 bg-[#25D366] rounded-md flex items-center justify-center">
              <span className="text-white text-xl">W</span>
            </div>
            <div className="absolute top-24 -right-4 w-12 h-12 bg-[#FF0000] rounded-md transform rotate-12 flex items-center justify-center">
              <span className="text-white text-2xl">▶</span>
            </div>
            <div className="absolute bottom-24 right-0 w-10 h-10 bg-[#4267B2] rounded-md flex items-center justify-center">
              <span className="text-white text-xl">f</span>
            </div>
            <div className="absolute bottom-16 left-0 w-10 h-10 bg-[#1DA1F2] rounded-md flex items-center justify-center">
              <span className="text-white text-xl">t</span>
            </div>
            <div className="absolute top-1/2 -left-4 w-10 h-10 bg-[#4267B2] rounded-md flex items-center justify-center">
              <span className="text-white text-xl">👍</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

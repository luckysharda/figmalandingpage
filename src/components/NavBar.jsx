import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Client", "Services", "Careers", "Case Studies"];

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="dotspace technologies logo"
          className="h-6 sm:h-8"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        {navItems.map((item, index) => (
          <React.Fragment key={item}>
            {index > 0 && <span className="mx-3 text-[#CBD5E1]">|</span>}
            <a href="#" className="text-[#64748B] hover:text-[#0F172A] text-sm">
              {item}
            </a>
          </React.Fragment>
        ))}
        <span className="mx-3 text-[#CBD5E1]">|</span>
        <button className="bg-[#F59E0B] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D97706]">
          Get In Touch
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#64748B]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Slider Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-4">
          <button
            className="mb-4 text-[#64748B]"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#64748B] hover:text-[#0F172A] text-sm"
              >
                {item}
              </a>
            ))}
            <button className="bg-[#F59E0B] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D97706]">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center h-16 px-4 md:px-10">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 font-semibold">
          <img
            src="https://besimple.ai/logo.svg"
            alt="logo"
            className="w-10 h-10 md:w-15 md:h-15"
          />
          <p className="text-[#d75133] text-2xl md:text-3xl mt-1">
            besimple AI
          </p>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 lg:gap-10 text-base md:text-xl font-semibold">
          <Link
            to="/"
            className="hover:text-[#fe6543] transition-all duration-100"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="hover:text-[#fe6543] transition-all duration-100"
          >
            Features
          </Link>
          <Link
            to="/benefits"
            className="hover:text-[#fe6543] transition-all duration-100"
          >
            Benefits
          </Link>
          <Link
            to="/about"
            className="hover:text-[#fe6543] transition-all duration-100"
          >
            About Us
          </Link>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block rounded-full bg-[#fe6543] px-8 py-2 font-semibold text-base md:text-lg text-white hover:bg-[#d75133] transition-colors duration-200">
          Get Started
        </button>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-[#fe6543] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg absolute left-0 top-16 z-40">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              to="/"
              className="text-lg font-semibold hover:text-[#fe6543]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-lg font-semibold hover:text-[#fe6543]"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/benefits"
              className="text-lg font-semibold hover:text-[#fe6543]"
              onClick={() => setMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link
              to="/about"
              className="text-lg font-semibold hover:text-[#fe6543]"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <button className="rounded-full bg-[#fe6543] px-8 py-2 font-semibold text-white hover:bg-[#d75133] transition-colors duration-200 mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

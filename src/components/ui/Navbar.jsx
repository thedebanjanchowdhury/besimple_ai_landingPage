import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="https://besimple.ai/logo.svg"
              alt="logo"
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <p className="text-[#d75133] text-xl md:text-2xl lg:text-3xl font-semibold">
              besimple AI
            </p>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8 mr-12">
            <div className="flex items-center justify-center gap-6 lg:gap-8 xl:gap-10">
              <Link
                to="/"
                className="text-base lg:text-lg font-medium hover:text-[#fe6543] hover:text-xl transition-all duration-200"
              >
                Home
              </Link>
              <Link
                to="/features"
                className="text-base lg:text-lg font-medium hover:text-[#fe6543] hover:text-xl transition-all duration-200"
              >
                Features
              </Link>
              <Link
                to="/benefits"
                className="text-base lg:text-lg font-medium hover:text-[#fe6543] hover:text-xl transition-all duration-200"
              >
                Benefits
              </Link>
              <Link
                to="/about"
                className="text-base lg:text-lg font-medium hover:text-[#fe6543] hover:text-xl transition-all duration-200"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="rounded-full bg-[#fe6543] px-6 py-2 text-sm lg:text-base font-medium text-white hover:bg-[#d75133] transition-all duration-200 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-[#fe6543] p-2 hover:bg-gray-100 rounded-lg transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "4rem" }}
      >
        <div className="flex flex-col items-center gap-6 py-8 px-4">
          <Link
            to="/"
            className="text-xl font-medium hover:text-[#fe6543] transition-all duration-200 w-full text-center py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-xl font-medium hover:text-[#fe6543] transition-all duration-200 w-full text-center py-2"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/benefits"
            className="text-xl font-medium hover:text-[#fe6543] transition-all duration-200 w-full text-center py-2"
            onClick={() => setMenuOpen(false)}
          >
            Benefits
          </Link>
          <Link
            to="/about"
            className="text-xl font-medium hover:text-[#fe6543] transition-all duration-200 w-full text-center py-2"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <button className="rounded-full bg-[#fe6543] px-8 py-3 text-lg font-medium text-white hover:bg-[#d75133] transition-all duration-200 hover:scale-105 w-full max-w-xs">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

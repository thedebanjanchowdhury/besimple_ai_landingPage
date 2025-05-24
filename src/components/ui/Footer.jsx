import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-white ">
      <div className="h-[30vh] py-10 px-40 flex">
        <div className="w-4/10">
          <div className="flex items-center gap-4 font-semibold">
            <img
              src="https://besimple.ai/logo.svg"
              alt="logo"
              className="w-15 h-15"
            />
            <p className="mt-2 text-[#d75133] text-3xl">besimple AI</p>
          </div>
          <p className="mt-2 ml-4 text-2xl font-semibold opacity-50">
            We make data annotation simple
          </p>
        </div>

        <div className="w-2/10">
          <h1 className="text-3xl font-semibold mt-4">Product</h1>
          <div className="mt-6 flex flex-col gap-4 text-2xl opacity-50">
            <a href="">Features</a>
            <a href="">Benefits</a>
          </div>
        </div>

        <div className="w-4/10">
          <h1 className="text-3xl font-semibold mt-4">Company</h1>
          <div className="mt-6 flex flex-col gap-4 text-2xl opacity-50">
            <a href="">About Us</a>
            <a href="">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="w-full h-2 border-b-2 mb-10 opacity-10 bg-white flex justify-center"></div>

      <div className="w-full flex items-center justify-between px-15 mb-10">
        <p>© 2025 besimple AI. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

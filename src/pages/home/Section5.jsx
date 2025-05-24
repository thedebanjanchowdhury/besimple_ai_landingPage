import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Section5 = () => {
  return (
    <div className="max-w-screen-lg maxh-screen mx-auto h-[60vh] flex flex-col items-center justify-center py-24 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-semibold">
        Ready to{" "}
        <span className="text-[#d75133] font-bold text-5xl md:text-7xl">
          turbo-charge
        </span>{" "}
        your AI?
      </h1>
      <p className="text-lg md:text-2xl mt-4 opacity-50 max-w-2xl">
        Join innovative startups and research teams using besimple AI to
        implement human-in-the-loop for your AI models.
      </p>
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
        <button className="rounded-full hover:shadow-lg flex items-center bg-[#fe6543] px-10 py-3 font-semibold text-white hover:bg-[#d75133] transition-colors duration-200">
          Join Waitlist
          <FaArrowRight className="ml-4 text-2xl" />
        </button>
        <button className="rounded-full hover:shadow-lg flex items-center bg-[#f38e77] px-10 py-3 font-semibold text-black hover:bg-white hover:text-black transition-colors duration-200">
          Book a Demo
          <FaArrowRight className="ml-4 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Section5;

import React from "react";

const YCButton = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="flex items-center gap-3 sm:gap-4 bg-[#f38e77] px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
          <p className="text-base sm:text-lg md:text-xl font-semibold">
            backed by
          </p>
          <img
            src="https://besimple.ai/y-combinator.png"
            alt="yc-logo"
            className="w-24 sm:w-32 md:w-40 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default YCButton;

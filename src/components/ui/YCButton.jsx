import React from "react";

const YCButton = () => {
  return (
    <div className="w-full mt-12 flex justify-center items-center">
      <div className="flex items-center gap-4 bg-[#f38e77] px-6 py-2 rounded-full shadow-lg">
        <p className="text-xl font-semibold">backed by</p>
        <img
          src="https://besimple.ai/y-combinator.png"
          alt="yc-logo"
          className="w-40"
        />
      </div>
    </div>
  );
};

export default YCButton;

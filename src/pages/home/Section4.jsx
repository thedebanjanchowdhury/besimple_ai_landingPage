import React from "react";
import { FaCheck } from "react-icons/fa";

const Section4 = () => {
  return (
    <div className="section4-header max-w-screen-xl mx-auto flex flex-col items-center mt-10 py-16 px-4">
      <h1 className="text-5xl md:text-7xl font-semibold text-center">
        Build for Every{" "}
        <span className="text-6xl md:text-8xl font-bold text-[#fe6543]">
          AI
        </span>{" "}
        Team
      </h1>
      <p className="mt-4 text-lg md:text-2xl opacity-50 text-[#ab412a] text-center max-w-2xl">
        Whether you are a startup or large enterprise, you can get started with
        Besimple.
      </p>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="bg-[#f38e77] p-8 md:p-12 rounded-lg shadow-xl max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Lightning fast setup
          </h2>
          <div className="mt-8 flex items-start gap-4 text-xl md:text-2xl">
            <FaCheck className="text-[#fe6543] mt-1" />
            <p>
              No code, no plugins—just drop in your data, set guidelines,
              <br /> and you're good to go.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xl md:text-2xl">
            <FaCheck className="text-[#fe6543]" />
            <p>Flexible pricing for easy scale up.</p>
          </div>
        </div>

        <div className="bg-[#f38e77] p-8 md:p-12 rounded-lg shadow-xl max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Enterprise-grade deployment
          </h2>
          <div className="mt-8 flex items-center gap-4 text-xl md:text-2xl">
            <FaCheck className="text-[#fe6543]" />
            <p>SOC-2 roadmap with on-prem optional install</p>
          </div>
          <div className="mt-8 flex items-start gap-4 text-xl md:text-2xl">
            <FaCheck className="text-[#fe6543] mt-1" />
            <p>
              Robust user management for internal SMEs, external vendors, <br />
              or Besimple's vetted annotators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;

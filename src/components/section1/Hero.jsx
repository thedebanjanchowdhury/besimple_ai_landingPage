import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-tight">
            Spin up your own data <br className="hidden sm:block" />
            <motion.div
              initial={{
                fontFamily: "Montserrat",
              }}
              whileHover={{
                scale: 1.05,
                fontFamily: "Fira Sans Condensed",
                transition: { duration: 0.3 },
              }}
              className="uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#fe6543] mt-2"
            >
              annotation
            </motion.div>
            platform in 60 sec
          </h1>
        </div>

        <div className="mt-6 md:mt-10 text-lg sm:text-xl md:text-2xl text-center max-w-4xl mx-auto">
          Drop in your raw data and we instantly create a customized UI,
          annotation <br className="hidden md:block" /> guidelines, a
          human-in-the-loop pipeline and AI judges to scale your insights.
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 1, duration: 1.2 }}
          className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 md:mt-12"
        >
          <button className="w-full sm:w-auto rounded-full hover:shadow-lg flex items-center justify-center bg-[#fe6543] px-6 sm:px-10 py-3 font-semibold text-white hover:bg-[#d75133] transition-all duration-200 hover:scale-105">
            Join Waitlist
            <FaArrowRight className="ml-4 text-xl" />
          </button>
          <button className="w-full sm:w-auto rounded-full hover:shadow-lg hover:bg-white hover:text-black flex items-center justify-center text-black bg-[#f38e77] px-6 sm:px-10 py-3 font-semibold transition-all duration-200 hover:scale-105">
            Book a Demo <FaArrowRight className="ml-4 text-xl" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

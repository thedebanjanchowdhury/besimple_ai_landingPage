import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center md:block">
        <h1 className="hero-text mt-10 text-6xl text-center font-semibold leading-20">
          Spin up your own data <br />
          <motion.div
            initial={{
              fontFamily: "Montserrat",
            }}
            whileHover={{
              scale: 1.05,
              fontFamily: "Fira Sans Condensed",
              transition: { duration: 0.3 },
            }}
            className="uppercase text-8xl text-[#fe6543]"
          >
            annotation
          </motion.div>
          platform in 60 sec
        </h1>
      </div>

      <div className="mt-10 text-2xl text-center opacity-60">
        Drop in your raw data and we instantly create a customized UI,
        annotation <br /> guidelines, a human-in-the-loop pipeline and AI judges
        to scale your insights.
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", delay: 1, duration: 1.2 }}
        className="w-full flex items-center justify-center gap-8 text-lg mt-5"
      >
        <button className="rounded-full hover:shadow-lg flex items-center mt-4 bg-[#fe6543] px-10 py-2 font-semibold  text-white hover:bg-[#d75133] transition-colors duration-200">
          Join Waitlist
          <FaArrowRight className="ml-6 text-2xl" />
        </button>
        <button className="rounded-full hover:shadow-lg hover:bg-white hover:text-black flex text-black items-center mt-4 bg-[#f38e77] px-10 py-2 font-semibold transition-colors duration-200">
          Book a Demo <FaArrowRight className="ml-6 text-2xl" />
        </button>
      </motion.div>
    </>
  );
};

export default Hero;

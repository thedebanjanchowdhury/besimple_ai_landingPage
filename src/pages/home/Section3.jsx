import React from "react";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className="w-full h-screen bg-[#d75133] flex items-center justify-center gap-8 p-10">
      <div className="w-1/3 mr-8">
        <div className="text-4xl">
          <div>
            <span className="text-8xl font-semibold text-white font-[montserrat]">
              Generative
              <br /> annotation
            </span>{" "}
            <br />
            for better models
            <p className="section3-paragraph text-3xl mt-12 text-white">
              Ditch legacy annotation tools and spreadsheets. Generate your own
              annotation platform and get better evaluation and training data to
              improve your models.
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 text-black flex flex-col justify-between gap-5">
        <div className="w-full flex mt-12 justify-between items-center gap-10">
          <div className="w-80 hover:h-[420px] h-[400px] rounded-lg hover:rounded-2xl transition-all duration-150 bg-white flex flex-col items-center justify-around shadow-lg">
            <div className="flex flex-col justify-center items-center mt-10">
              <MdOutlineElectricBolt className="text-5xl shadow-md rounded-full bg-[#d75133] px-2" />
              <h2 className="mt-4 text-4xl font-semibold">Generative UIs</h2>
            </div>
            <p className="text-2xl text-center w-full p-10 opacity-50 mt-4">
              Be it text, chat, audio, video, or LLM traces. Drop in your data
              and we create a tailored data visualizer for you.
            </p>
          </div>

          <div className="w-80 hover:h-[430px] h-[410px] mt-10 rounded-lg hover:rounded-2xl transition-all duration-150 bg-white flex flex-col items-center justify-around shadow-lg">
            <div className="flex flex-col justify-center items-center mt-10">
              <MdOutlineDocumentScanner className="text-5xl shadow-md rounded-full bg-[#d75133] px-2" />
              <h2 className="mt-4 text-4xl font-semibold text-center">
                Generative Guidelines
              </h2>
              <p className="text-2xl text-center w-full p-10 opacity-50 mt-4">
                We generate detail annotation guidelines ready for humans and AI
                judges. Or import your own!
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-80 hover:h-[400px] mb-[10vh] h-[410px] rounded-lg hover:rounded-2xl transition-all duration-150 bg-white flex flex-col items-center justify-around shadow-lg"> 
            <div className="flex flex-col justify-center items-center mt-10">
              <FaBalanceScaleLeft className="text-7xl shadow-md rounded-full bg-[#d75133] px-4" />
              <h2 className="mt-4 text-4xl font-semibold text-center">
                Generative Judges
              </h2>
              <p className="text-2xl text-center w-full p-10 opacity-50 mt-4">
                We build AI judges aligned with human to evaluate live traffic
                and flag borderline cases for review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

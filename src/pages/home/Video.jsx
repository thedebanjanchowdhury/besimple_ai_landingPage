import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Video = () => {
  const videoRef = useRef(null);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        ref={scrollRef}
        className="max-w-full w-full h-full flex items-center justify-center"
      >
        <motion.video
          ref={videoRef}
          src="/src/assets/demo.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          loading="lazy"
          className="w-full h-full object-cover rounded-xl shadow-3xl"
          style={{
            scale,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        />
      </div>
    </div>
  );
};

export default Video;

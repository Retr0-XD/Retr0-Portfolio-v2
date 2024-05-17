"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { ForwardIcon } from "@heroicons/react/24/solid";
import PlayPauseButton from "@/components/sub/PlayPauseButton";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <ForwardIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Next.js & Three.js</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m {" "}
            <span className="smooth-gradient-text">
              {" "}
               Sakthi Harish {" "}
            </span>
            <span>
              & this is my
              <span className="smooth-gradient-text">
              {" "}
              Portfolio Website {" "}
            </span>
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Software Developer with a self-taught skillset in Web
          Development, App Development, Cloud Tech, and Backend. also currently
          learning blockchain and machine learning.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Learn More
          </a>
        </motion.div>
        <PlayPauseButton/>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        {/* Show ticket on mobile and cube on desktop */}
        <div className="block md:hidden w-full h-full flex justify-center items-center">
          <iframe
            src="https://my.spline.design/ticket-e2c40f37103679a6d1e06a502c0c0482/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-[350px] h-[350px] md:w-[650px] md:h-[650px]"
          />
        </div>
        <div className="hidden md:block w-full h-full flex justify-center items-center">
          <iframe
            src="https://my.spline.design/cubic-180fe8505a7cb4d03f3f7da2a0d7674b/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-[650px] h-[650px]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

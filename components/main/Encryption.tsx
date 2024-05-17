"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SwatchIcon } from "@heroicons/react/24/solid";

const Encryption: React.FC = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt"
      );
      const data = await response.text();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  const certificates = [
    { id: 1, title: "CCNA", imageUrl: "./cisco.png" },
    { id: 2, title: "JavaScript by Microsoft", imageUrl: "./microsoft.webp" },
    { id: 3, title: "27+ EDX certificates", imageUrl: "./edx.png" },
    { id: 4, title: "Azure cloud(AZ900 and PL900)", imageUrl: "./azure.png" },
    { id: 5, title: "AWS badges", imageUrl: "./aws2.png" },
    { id: 6, title: "RPA at Blueprism", imageUrl: "./blueprism.png" },
    { id: 7, title: "Hackerrank(React, C#, Python and more)", imageUrl: "./hackerrank.png" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full h-full text-white">
    
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] ml-4"
        >
          <SwatchIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Frontend X Backend</h1>
        </motion.div>
    

      <div className="italic text-[20px] text-gray-200 mb-10 mt-[10px] text-center">
        <p className="text-gray-100 bold">Offensive Joke ⚠️: {joke}</p>
      </div>
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200 mb-10"
      >
        Contributions 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          &{" "}
        </span>
        Certifications
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="w-64 h-64">
            <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-32 object-cover"
                src={certificate.imageUrl}
                alt={certificate.title}
              />
              <div className="p-4">
                <h3 className="text-gray-200 font-medium text-lg">
                  {certificate.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8">
        <img
          src="https://leetcard.jacoblin.cool/retr0sec?theme=dark&font=Maven%20Pro&ext=heatmap"
          alt="LeetCode Profile Card"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Encryption;

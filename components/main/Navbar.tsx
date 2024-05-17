"use client";

import { useState } from 'react';
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="https://retr0-sec.netlify.app/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Alienware-PNG-Photo.png"
            alt="logo"
            width={30}
            height={30}
            className="flex justify-center items-center gap-4 flex-wrap md:w-9 md:h-11"
          />
          
          <span className="font-bold ml-2 md:ml-[10px] hidden md:block text-gray-300">
            Retr0 
          </span>
          
          {/* Extra Images Hidden on Mobile */}
          <Image
            src="https://em-content.zobj.net/source/apple/114/face-with-finger-covering-closed-lips_1f92b.png"
            alt="emote"
            width={20}
            height={20}
            className="hidden md:flex justify-center items-center gap-4 flex-wrap md:w-6 md:h-6"
          />
          <Image
            src="https://em-content.zobj.net/source/apple/271/deaf-man_1f9cf-200d-2642-fe0f.png"
            alt="emote"
            width={20}
            height={20}
            className="hidden md:flex justify-center items-center gap-4 flex-wrap md:w-6 md:h-6"
          />
        </a>

        {/* Hamburger Menu Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20 ${isMenuOpen ? 'flex' : 'hidden'} md:block mt-12 md:mt-0`}>
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] md:mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer py-2 md:py-0">
              Intro
            </a>
            <a href="#skills" className="cursor-pointer py-2 md:py-0">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer py-2 md:py-0">
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {Socials.map((social) => (
            <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
          ))}
        </div>
      </div>
    </div>

          
  );
};

export default Navbar;

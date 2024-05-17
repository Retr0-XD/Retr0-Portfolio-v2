import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <a href="https://www.youtube.com/">
                <span className="text-[15px] ml-[6px]">Retr0</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a href="https://github.com/">
                <span className="text-[15px] ml-[6px]">Retr0-XD</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <a href="https://discord.com/">
                <span className="text-[15px] ml-[6px]">zappingzeus</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <a href="https://www.instagram.com/">
                <span className="text-[15px] ml-[6px]">rea1_slim_shady_</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <a href="https://twitter.com/">
                <span className="text-[15px] ml-[6px]">Invincible_inverse</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a href="https://www.linkedin.com/">
                <span className="text-[15px] ml-[6px]">sakthi-harish-s-491489148</span>
              </a>
            </p>
          </div>
         
        </div>

        <Image
            src="https://em-content.zobj.net/source/apple/391/smiling-face-with-horns_1f608.png"
            alt="emote"
            width={20}
            height={20}
            className="hidden md:flex justify-center items-center gap-4 flex-wrap md:w-6 md:h-6"
          />


        <div className="mb-[20px] text-[15px] text-center">
          &copy; Retr0 2024 (retr0secanddev@gmail.com)
        </div>

        <Image
            src="https://em-content.zobj.net/source/apple/391/nerd-face_1f913.png"
            alt="emote"
            width={20}
            height={20}
            className="hidden md:flex justify-center items-center gap-4 flex-wrap md:w-6 md:h-6"
          />
          <div className="mb-[20px] text-[15px] text-center">
          Erm, What the Sigma?
        </div>
      </div>
    </div>
  );
};

export default Footer;

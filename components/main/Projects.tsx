"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import CheckOutButton from "../sub/CheckOutButton";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/projects/blockchain.png"
          title="DX-4"
          description="A blockchain decentralized storage application using smart contracts and hardhat.."
        />
        <ProjectCard
          src="/projects/projecttelegram.jpeg"
          title="Telegram Bot for YIFY"
          description="allows user to get the magnet of movie or series they search from YIFY.com since YIFY doesn&apos;t have API crawlers were used"
        />
        <ProjectCard
          src="/projects/sasuke.webp"
          title="Anime Next App"
          description="This Next.js webapp is a gallery of anime character aizen images."
        />
        <ProjectCard
          src="/projects/schoolmanagement.png"
          title="School Management Client"
          description="this is the application developed for windows which is based on c# + mysql and which requires mysql server running on the local to perform operations"
        />
        <ProjectCard
          src="/projects/theflash.webp"
          title="Flash the OSINT"
          description="the Flash is a OSINT search tool which is helpful to hunt down the suspects and hunt them via publicaly available information and in the other hand the Flash can classify spam messages seperately."
        />
        <ProjectCard
          src="/projects/videostreaming.png"
          title="Video Streaming App"
          description="a video streaming application with react as front end and express and node js as back end .. integerated within WebRTC"
        />
      </div>
    </div>
  );
};

export default Projects;

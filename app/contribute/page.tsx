"use client";

import Copy from "@/components/copy";
import Geminid from "@/components/geminid";
import Star from "@/components/star";
import Image from "next/image";
import React from "react";

const Contribute = () => {
  return (
    <>
      <Star />
      <Geminid />
      <div className="w-full rounded-md flex flex-col md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contribute <br /> to this project.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
          <Image
            className="-mt-10"
            src="/globe.png"
            alt="Earth"
            width={400}
            height={400}
          />
        </div>
        <div className="p-4 mx-auto relative z-10 text-left">
          <h2 className="text-5xl font-bold text-gray-100 mb-11">Setup</h2>
          <p className="text-base text-gray-300 my-4">
            1. <span className="font-bold">Fork the Repository:</span> Click the
            "Fork" button on the repository page to create a copy of the project
            in your GitHub account.
          </p>
          <p className="text-base text-gray-300 my-4">
            2. <span className="font-bold">Clone the Repository:</span> Clone
            the forked repository to your local machine using the command:
          </p>
          <div className="flex flex-col rounded-lg overflow-hidden">
            <div className="bg-gray-800 text-sm text-gray-200 px-6 py-1 flex items-center justify-between">
              <p>Bash</p>
              <Copy content="git clone https://github.com/Luancss/pixel-patterns" />
            </div>
            <div className="text-base bg-black px-6 py-5">
              <p className="text-gray-300">git clone https://github.com/Luancss/pixel-patterns</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contribute;

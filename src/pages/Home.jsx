import { maxGeneratorDuration, motion } from "framer-motion";
import mypic from "../assets/mypic.JPG";
import { useState, useEffect } from "react";

import myPic from "../assets/myPic.JPG";

export default function Home() {
  return (
    <main
      className="flex flex-row pb-4 h-screen 
    pt-16 w-full"
    >
      <div
        className=" flex flex-col 
      gap-3 self-center mx-20"
      >
        <h1 className="font-sans text-6xl">
          Hi, I'm{" "}
          <span
            className="font-sans 
          text-blue-500"
          >
            Danica Mora
          </span>
        </h1>
        <h2 className="text-3xl font-sans italic">Java Developer</h2>
        <p className="font-sans leading-7 text-lg w-135">
          I'm a Java Backend Developer with experience in Spring Boot, REST
          APIs, MySQL, and AWS
        </p>
      </div>
      <div className="flex items-center justify-center flex-1">
        <img
          src={myPic}
          alt="My image"
          className="w-64 h-64 object-cover rounded-full border-4 border-[#3F72AF] shadow-[0_0_20px_#3F72AF]"
        />
      </div>
    </main>
  );
}

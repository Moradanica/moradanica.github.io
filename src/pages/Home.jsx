import { maxGeneratorDuration, motion } from "framer-motion";
import mypic from "../assets/mypic.JPG";
import { useState, useEffect } from "react";
import myPic from "../assets/mypic.JPG";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row pb-4 h-screen pt-20 lg:pt-16 w-full">
      <div
        className="flex flex-col 
      gap-3 self-center mx-20 w-full p-6"
      >
        <h1 className="raleway-font font-bold text-6xl">
          Hi, I'm{" "}
          <span
            className=" 
          text-blue-500"
          >
            Danica Mora
          </span>
        </h1>
        <h2 className="raleway-font font-semibold text-3xl">Java Developer</h2>
        <p className="railway-font font-medium leading-7  md:w-135">
          I'm a Java Backend Developer with experience in Spring Boot, REST
          APIs, MySQL, and AWS
        </p>
      </div>
      <div className="flex items-center justify-center flex-1 md:order-1">
        <img
          src={myPic}
          alt="My image"
          className="w-64 h-64 object-cover rounded-full border-4 border-[#3F72AF] shadow-[0_0_20px_#3F72AF]"
        />
      </div>
    </main>
  );
}

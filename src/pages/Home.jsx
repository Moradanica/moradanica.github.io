import { maxGeneratorDuration, motion } from "framer-motion";
import { useState, useEffect } from "react";
import myPic from "../assets/mypic.JPG";

export default function Home() {
  return (
    <main id="/" className="flex flex-col items-center justify-center min-h-dvh 
    w-full pb-10 pt-20 lg:pt-16 lg:flex-row">
      <div
        className="flex flex-col 
      gap-3 p-6 lg:w-1/2 w-full mx-20 text-center lg:text-left "
      >
        <h1 className="raleway-font font-bold text-6xl md:text-5xl">
          Hi, I'm{" "}
          <span
            className=" 
          text-blue-500"
          >
            Danica Mora
          </span>
        </h1>
        <h2 className="raleway-font font-semibold text-3xl md:text-2xl">
          Java Fullstack Developer
        </h2>
        <p className="railway-font font-medium leading-7 w-3/4 mx-auto lg:mx-0">
          I'm a Java Fullstack Developer with experience in Spring Boot, REST
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

import { nav } from "framer-motion/client";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = ["Projects", "Skills", "About", "Contact"];
  return (
    <nav className="flex flex-col justify-between items-center fixed top-0 right-0 left-0 p-3 h-17 raleway-font bg-transparent backdrop-blur-xs md:flex-row  lg:mx-20">
      <div className="hidden md:block w-1/4 font-bold text-2xl uppercase ">
        Portfolio
      </div>

      <ul className="flex p-2 w-full  justify-center md:gap-2 lg:justify-end lg:w-3/4 md:flex-row ">
        {navItems.map((item) => (
          <li key={item} className=" relative px-3 uppercase md:px-8 ">
            <a
              href=""
              className="relative font-bold hover:text-blue-600 hover:underline underline-offset-8 transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

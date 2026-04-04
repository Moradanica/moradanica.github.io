import { nav } from "framer-motion/client";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = ["Projects", "Skills", "About", "Contact"];
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center fixed top-0 right-0 left-0 lg:mx-20 h-17 bg-transparent backdrop-blur-xs p-3">
      <div className="hidden md:block raleway-font font-bold text-2xl uppercase w-1/4">
        Portfolio
      </div>

      <ul className="flex md:flex-row gap-2 p-2 font-serif w-full lg:w-3/4 justify-center lg:justify-end">
        {navItems.map((item) => (
          <li key={item} className="px-8 uppercase relative">
            <a
              href=""
              className="relative raleway-font font-bold hover:text-blue-600 hover:underline underline-offset-8 transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

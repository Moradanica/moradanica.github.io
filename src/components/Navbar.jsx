import { nav } from "framer-motion/client";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = ["Projects", "Skills", "About", "Contact"];
  return (
    <nav className="flex flex-col md:flex-row justify-between fixed top-0 right-0 left-0 mx-20 h-17 bg-transparent backdrop-blur-xs p-3">
      <div className="text-2xl font-bold uppercase font-serif w-1/4">
        Portfolio
      </div>

      <ul className="flex flex-col md:flex-row gap-2 p-2 font-serif w-3/4 justify-end">
        {navItems.map((item) => (
          <li key={item} className="px-8 uppercase relative">
            <a
              href=""
              className="relative text-black hover:text-blue-600 hover:underline underline-offset-8 transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

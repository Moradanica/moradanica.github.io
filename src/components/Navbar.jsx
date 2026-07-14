import { nav } from "framer-motion/client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="flex flex-col z-20 justify-between 
    items-center fixed top-0 right-0 left-0 
    p-3 h-17 border-b border-white/20
     raleway-font bg-transparent 
     shadow-[0_2px_10px_rgba(0,0,0,0.05)]
    backdrop-blur-md md:flex-row ">
      <div className="hidden 
      lg:block md:mx-20 w-1/4 font-bold text-2xl 
      uppercase tracking-tighter">
        <a href="/">Portfolio</a>
      </div>

      <ul className="flex p-2 w-full  
      justify-center md:gap-2 
      lg:justify-end lg:w-3/4 md:flex-row md:mx-20">
        {navItems.map((item) => (
          <li key={item.name} className="relative px-3 
          uppercase md:px-8 ">
            <a
              href={`#${item.name.toLowerCase()}`}
              className="relative font-bold 
              tracking-widest hover:text-blue-600 
              hover:underline underline-offset-8 
              transition-colors duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

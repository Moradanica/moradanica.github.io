import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 w-full py-6 
    border-t border-gray-900/10 bg-gray-200/50 
    backdrop-blur-sm 
    text-slate-600 
    text-sm text-center raleway-font font-medium">
      
      <p>Built with React and Tailwind CSS</p>
      
      <p className="flex justify-center items-center">
        <FaCopyright className="mx-1" size={12} /> 
        {new Date().getFullYear()} Danica Mora. All Rights Reserved.
      </p>

      <div className="flex justify-center gap-4 mt-1">
        <a 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://github.com/Moradanica"
          aria-label="GitHub"
          className="hover:text-black transition-colors"
        >
          <FaGithub size={22} />
        </a>
        <a 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/danica-mora"
          aria-label="Linkedin"
          className="hover:text-[#0077b5] transition-colors"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </footer>
  );
}
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

    
    </footer>
  );
}
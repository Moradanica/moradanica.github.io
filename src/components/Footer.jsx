import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-slate-100 border-t border-slate-200 text-slate-600 text-sm text-center w-full py-6 mt-6 flex flex-col gap-1">
      <p>Danica Mora</p>
      <p className="flex justify-center items-center">
        <FaCopyright className="" /> {new Date().getFullYear()} All Rights
        Reserved
      </p>
      <div className="flex justify-center gap-2">
        <a href="https://github.com/Moradanica">
          <FaGithub size={20} />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

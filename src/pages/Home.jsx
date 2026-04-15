import myPic from "../assets/mypic.JPG";
import cv from "../assets/Danica Mora_cv_general.pdf";


export default function Home() {
  return (
    <section id="home" className="flex min-h-dvh  
    items-center raleway-font pt-20 lg:pt-0">
      <div className="flex flex-col items-center 
      gap-16 max-w-6xl mx-auto px-6 mb-8 
      md:px-12 md:flex-row lg:px-24 lg:mb-0
      ">
        <div className="flex-1 order-2 md:order-1 
        text-left">
          {/* Match Navbar: Uppercase and Bold */}
          <h1 className="text-5xl md:text-7xl 
          font-bold text-slate-800 tracking-tighter 
          leading-none">
            Hi, I'm{" "} <span className="text-5xl 
            md:text-7xl font-bold 
          uppercase text-blue-800 tracking-tighter 
          leading-none">Danica Mora</span>
          </h1>

          {/* Match Navbar hover style: Blue/Indigo + Bold */}
          <p className="text-lg md:text-xl font-bold 
          uppercase text-indigo-600 mt-4
           tracking-widest">
            Full-Stack Java Developer
          </p>

          <p className="mt-8 text-gray-600 text-lg 
          max-w-lg leading-relaxed font-medium">
            Crafting high-performance backends and intuitive frontends.
            Focused on building systems that are as <span className="italic">functional</span> as they are <span className="italic">scalable</span>.
          </p>

          <div className="flex gap-4 mt-10">
            {/* Action Buttons styled to feel consistent with the Nav's 'active' or 'hover' states */}
            <a
              href="#projects"
              className="px-8 py-3 bg-slate-800 
              text-white font-bold uppercase 
              text-sm tracking-wider rounded-full 
              hover:bg-slate-700 transition-all 
              shadow-lg"
            >
              View Work
            </a>
            <a
              href={cv}
              target="_blank"
              className="px-8 py-3 border-2 
              border-slate-300 text-slate-700 
              font-bold uppercase text-sm tracking-wider 
              rounded-full hover:bg-white/50 
              transition-all backdrop-blur-sm"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex-1 order-1 md:order-2 
        flex justify-center md:justify-end">
          <img
            src={myPic}
            alt="Danica Mora"
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 
              object-cover rounded-full border-4 border-[#3F72AF] 
              shadow-[0_20px_50px_rgba(63,114,175,0.3)]"
          />


        </div>

      </div>
    </section>
  );
}
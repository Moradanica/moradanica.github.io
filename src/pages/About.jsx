import myPic from "../assets/mypic.JPG";


export default function About() {
  return (
    <section id="about" className="pt-20 min-h-dvh raleway-font bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50 flex items-center">
      {/* Changed mx-auto to ml-0 or just removed it, added padding to match your nav/other sections */}
      <div className="max-w-4xl px-6 md:px-12 lg:px-24 text-left">
        
        {/* Section Title - Now Left Aligned */}
        <h2 className="font-bold text-3xl uppercase tracking-wider text-slate-800 mb-8 border-l-4 border-indigo-500 pl-4">
          About Me
        </h2>

        {/* Bio Text - Removed mx-auto, aligned left */}
        <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl">
          Hi, I’m <span className="text-indigo-600 font-bold">Danica Mora</span>! 
          I’m a Full-Stack Java Developer dedicated to building scalable, high-performance web applications. 
          Using <span className="font-semibold">Spring Boot, React, and MySQL</span>, I transform complex problems into seamless user experiences. 
          I thrive on turning "challenging" into "functional."
        </p>

        {/* The Glassy Stats Bar - Now Left Aligned */}
        <div className="flex flex-col md:flex-row justify-start gap-12 py-8 border-t-4 border-gray-300/50 bg-white/30 backdrop-blur-md rounded-br-xl shadow-sm pr-12">
          
          <div className="text-left pl-6">
            <p className="text-3xl font-black text-slate-800">2+ Years</p>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Experience</p>
          </div>

          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden md:block border-r border-gray-300/50"></div>

          <div className="text-left">
            <p className="text-3xl font-black text-slate-800">Full-Stack</p>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Specialization</p>
          </div>

          <div className="hidden md:block border-r border-gray-300/50"></div>

          <div className="text-left">
            <p className="text-3xl font-black text-slate-800">Java/React</p>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Main Stack</p>
          </div>
          
        </div>

        <p className="mt-8 text-slate-500 italic text-sm">
          Let’s build something impactful together—check out my work below!
        </p>
      </div>
    </section>
  );
}
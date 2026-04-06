import myPic from "../assets/mypic.JPG";
import PageLayout from "../components/PageLayout";

//bg transparent - "bg-[radial-gradient(circle_at_center,_rgba(224,231,255,0.8),
// _rgba(252,231,243,0.2),_rgba(254,243,199,0.6))]
export default function About() {
  return (

    <PageLayout id="about" title="about me"
      theme="bg-gradient-to-r from-cyan-50 via-pink-50 
        to-yellow-50">


      <p className="text-gray-700 text-lg 
        md:text-xl font-medium leading-relaxed 
        mb-12 max-w-2xl ">
        Hi, I’m <span className="text-indigo-600 
          font-bold">Danica Mora</span>!
        I’m a Full-Stack Java Developer dedicated to
        building scalable, high-performance web
        applications. Using
        <span className="font-semibold">{" "}Spring Boot,
          React, and MySQL</span>, I transform complex
        problems into seamless user experiences.
        I thrive on turning "challenging" into "functional."
      </p>

      {/* The Glassy Stats Bar - Now Left Aligned */}
      {/* The Glassy Stats Bar */}
      <div className="flex flex-col md:flex-row 
        justify-around py-8 border-t-4 
        border-gray-300/50 bg-white/30 
        backdrop-blur-md rounded-b-xl shadow-sm">

        <div className="text-center py-4 md:py-0">
          <p className="text-3xl font-black text-slate-800">2+ Years</p>
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Experience</p>
        </div>

        {/* Vertical Divider (Hidden on Mobile) */}
        <div className="hidden md:block border-r border-gray-300/50"></div>

        <div className="text-center py-4 md:py-0">
          <p className="text-3xl font-black text-slate-800">Full-Stack</p>
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Specialization</p>
        </div>

        <div className="hidden md:block border-r border-gray-300/50"></div>

        <div className="text-center py-4 md:py-0">
          <p className="text-3xl font-black text-slate-800">Java/React</p>
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Main Stack</p>
        </div>

      </div>
      {/* <p className="mt-8 text-slate-500 italic text-sm">
        Let’s build something impactful together—check out my work below!
      </p> */}
    </PageLayout>

  );
}
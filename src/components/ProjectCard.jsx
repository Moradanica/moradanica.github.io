import { motion } from "framer-motion";

export default function ProjectCard({ title, subtitle, status, content, techStack,
  link }) {
  return (
  <div className="flex flex-col gap-4 p-6 border rounded-2xl 
                    border-white/50 bg-white/40 backdrop-blur-md 
                    shadow-sm hover:shadow-md transition-shadow duration-300">

      <div className="flex flex-col gap-1">
        {/* Status Tag - Subtle Pink/Purple to match your theme */}
        <span className="text-[10px] font-bold uppercase 
        tracking-[0.2em] text-pink-500/80">
          {status}
        </span>
        
        {/* Title - Deep Gray for readability without being harsh */}
        <h1 className="text-lg font-bold text-gray-800 
        tracking-tight">
          {title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-xs text-gray-500 font-medium italic 
        ">
          {subtitle}
        </p>
      </div>

      {/* Tech Stack - Using soft blue/cyan tints */}
      <div className="flex flex-wrap gap-2 ">
        {techStack?.map((tech) => (
          <span key={tech} className="px-2 py-1 text-[10px] 
          font-semibold tracking-wide bg-cyan-100/50 text-cyan-700 
          rounded-md border border-cyan-200/50">
            {tech}
          </span>
        ))}
      </div>

      {/* Description - Standardized font size for your list */}
      <p className="text-sm text-gray-600 text-pretty 
      tracking-normal leading-loose">
        {content}
      </p>

      {/* Button - Minimalist and light */}
      <motion.a 
        className="mt-auto w-full py-2 border border-gray-200 font-semibold text-center rounded-xl 
                   bg-white/80 text-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-300"
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        View on GitHub
      </motion.a>
    </div>
  );
}

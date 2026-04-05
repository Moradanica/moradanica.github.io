import { motion } from "framer-motion";

export default function ProjectCard({ title, content }) {
  return (
    <div className="flex flex-col items-center gap-4 p-2 m-2 pb-8 border rounded-xl border-zinc-300 bg-gray-100 ">
      <h1 className="mt-8 font-bold">{title}</h1>
      <p className="font-medium p-8 md:p-3">{content}</p>

      <motion.button
        className=" w-30 border rounded-full 
        bg-gray-300 hover:bg-gray-700 
        hover:text-white"
        whileHover={{
          scale: 1.1,
        }}
      >
        Live Demo
      </motion.button>
    </div>
  );
}

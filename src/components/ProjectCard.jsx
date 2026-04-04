import { motion } from "framer-motion";

export default function ProjectCard({ title, content }) {
  return (
    <div className="bg-gray-100 flex flex-col items-center gap-4 p-2 m-2 border rounded-xl border-zinc-300 pb-8 ">
      <h1 className=" font-bold">{title}</h1>
      <p className="p-2">{content}</p>

      <motion.button
        className="bg-gray-300 w-30 border rounded-full hover:bg-gray-700 hover:text-white"
        whileHover={{
          scale: 1.1,
        }}
      >
        Live Demo
      </motion.button>
    </div>
  );
}

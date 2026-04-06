import { li } from "framer-motion/client";

export default function SkillCard({ title, skills }) {
  return (
    <div className="h-full rounded-xl border p-6 
    border-gray-200 bg-white/60 ">
      <h3 className="mb-4 font-bold 
      text-md uppercase tracking-widest">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            // className="rounded-full px-3 text-sm 
            // text-gray-950 tracking-wide 
            // bg-gray-100 wrap-anywhere"
            className="rounded-full bg-gray-100 px-4 
            py-1.5 text-sm font-semibold 
            text-gray-700 tracking-wide border 
            border-transparent hover:border-indigo-300 
            hover:bg-white transition-colors"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

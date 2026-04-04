import { li } from "framer-motion/client";

export default function SkillCard({ title, skills }) {
  return (
    <div className="h-full rounded-xl border p-6 border-gray-200 bg-white/60 ">
      <h3 className="mb-4 text=xl font-semibold ">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full px-3 text-sm text-gray-950
            bg-gray-100 wrap-anywhere"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

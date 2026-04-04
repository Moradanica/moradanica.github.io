import { li } from "framer-motion/client";

export default function SkillCard({ title, skills }) {
  return (
    <div className="h-full rounded-xl border border-gray-200 bg-white/60 p-6">
      <h3 className="text=xl font-semibold mb-4">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="reounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

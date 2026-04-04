import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col pt-16 min-h-screen bg-white border rounded-xl border-zinc-300 gap-y-30">
      <h1 className="uppercase font-bold text-4xl px-23">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20 p-7">
        <ProjectCard
          title="EMS App"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto numquam cumque itaque perferendis debitis vel excepturi vitae dolorum nostrum iure blanditiis, ea soluta magnam exercitationem est facilis nihil laborum!"
        />
        <ProjectCard
          title="CRM App"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto numquam cumque itaque perferendis debitis vel excepturi vitae dolorum nostrum iure blanditiis, ea soluta magnam exercitationem est facilis nihil laborum!"
        />
        <ProjectCard
          title="API Integration"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto numquam cumque itaque perferendis debitis vel excepturi vitae dolorum nostrum iure blanditiis, ea soluta magnam exercitationem est facilis nihil laborum!"
        />
      </div>
    </div>
  );
}

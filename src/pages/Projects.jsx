import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div id="projects"
      className="pt-16 gap-y-30 min-h-lvh raleway-font
      md:flex md:flex-col
     "
    >
      <h1 className=" px-23 font-bold text-2xl uppercase ">Projects</h1>

      <div className="grid grid-cols-1 gap-5 mx-8 p-7 md:grid-cols-2 lg:grid-cols-3 md:mx-20">
        <ProjectCard
          title="Title"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto numquam cumque itaque perferendis debitis vel excepturi vitae dolorum nostrum iure blanditiis, ea soluta magnam exercitationem est facilis nihil laborum!"
        />
        <ProjectCard
          title="Title"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto numquam cumque itaque perferendis debitis vel excepturi vitae dolorum nostrum iure blanditiis, ea soluta magnam exercitationem est facilis nihil laborum!"
        />
        <ProjectCard
          title="Title"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto numquam cumque itaque perferendis debitis vel excepturi vitae dolorum nostrum iure blanditiis, ea soluta magnam exercitationem est facilis nihil laborum!"
        />
      </div>
    </div>
  );
}

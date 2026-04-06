import PageLayout from "../components/PageLayout";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <PageLayout id="projects" title="Projects" containerClass="px-8 
    md:px-16" theme="bg-gradient-to-r from-cyan-50 via-pink-50 
        to-yellow-50">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
    </PageLayout>



  );
}

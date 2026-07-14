import PageLayout from "../components/PageLayout";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <PageLayout id="projects" title="Projects" containerClass="px-8 
    md:px-16" theme="bg-gradient-to-r from-cyan-50 via-pink-50 
    to-yellow-50 ">

      <div className="max-w-full mx-auto grid grid-cols-1 gap-5  md:grid-cols-2 ">
        <ProjectCard
          link="https://github.com/Moradanica/ems-api"
          title="EMS API"
          subtitle="Employee Management System API"
          status="In Progress: Department CRUD Complete"
          techStack={["Java", "Spring Boot", "MySQL", "Maven"]}
          content="A centralized platform designed to manage organizational 
          hierarchies. It provides a digital record of departments and personnel, 
          replacing manual spreadsheets with a scalable relational database."
        />
        <ProjectCard
          link="https://github.com/Moradanica/moradanica.github.io"
          title="Personal Portfolio"
          subtitle="Interactive Web Showcase & Brand Identity"
          status="Live"
          techStack={["React", "Framer Motion", "Tailwind CSS", "Spring Boot", "SendGrid", "Docker"]}
          content="Developed a full-stack professional portfolio utilizing 
          React and Tailwind CSS for a modern, responsive frontend. The system 
          features a custom contact form integrated with a Spring Boot backend 
          and SendGrid API for automated email delivery. Deployed via Docker on 
          Render, the architecture includes a scheduled cron job to maintain service 
          availability on free-tier hosting."
        />
      </div>
    </PageLayout>



  );
}

import { section } from "framer-motion/client";
import SkillCard from "../components/SkillCard";
import PageLayout from "../components/PageLayout";

export default function Skills() {
  return (

    <PageLayout id="skills" title="skills">
      <div className="grid gap-8  
        items-stretch md:grid-cols-2">
        <SkillCard
          title="Backend"
          skills={[
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "REST APIs",
            "Hibernate",
            "Jakarata EE",

          ]}
        />

        <SkillCard
          title="Frontend"
          skills={[
            "React",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Javascript (Basic)",
            "jQuery",
          ]}
        />

        <SkillCard
          title="Tools and DevOps"
          skills={[
            "Git & Github",
            "AWS EC2",
            "Elastic Beanstalk",
            "Maven",
            "Linux (Basic",
            "CI/CD Basics",
          ]}
        />

        <SkillCard
          title="Testing"
          skills={["JUnit", "API Testing (Postman)", "Manual Testing"]}
        />
      </div>
    </PageLayout>

  );

}

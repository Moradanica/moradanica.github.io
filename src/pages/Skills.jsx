import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col min-h-dvh w-full pt-16 gap-3 raleway-font 
    bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50">
      <h1 className=" px-23 font-bold text-2xl uppercase  ">Skills</h1>
      <div className="grid  items-stretch gap-8 p-20 md:grid-cols-2">
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
    </div>
  );
}

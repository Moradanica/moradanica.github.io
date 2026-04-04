import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <div className="flex flex-col h-screen gap-3 pt-16">
      <h1 className="uppercase font-bold text-4xl px-23">Skills</h1>
      <div className="grid gap-8 md:grid-cols-2 auto-rows-fr items-stretch p-20">
        <SkillCard
          title="Backend"
          skills={[
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "REST APIs",
            "Hibernate",
            "Jakarata EE",
            "ashdkajsdhkajsdhkajshdkjashajshdkajshdajksasjhdaksjdhasdhasjk",
            "asdjakjshdakjshdakjsdhajksdh",
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
            "asdjajklsdh",
            "ajshdakjshd",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto unde sint perspiciatis! Velit incidunt, blanditiis nulla qui dolor, excepturi at in, consequatur doloremque laboriosam aut soluta ipsum sunt perferendis maiores.",
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

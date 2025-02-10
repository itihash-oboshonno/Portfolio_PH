import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      list: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
    },
    { category: "Backend", list: ["Node.js", "Express", "MongoDB"] },
    { category: "Tools", list: ["Git", "GitHub", "VS Code", "Postman"] },
  ];
  return (
    <section id="skills" className="py-16 bg-base-200 px-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="card bg-base-100 shadow-xl p-4">
              <h3 className="text-2xl font-semibold mb-4">{skill.category}</h3>
              <ul className="list-disc pl-6">
                {skill.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

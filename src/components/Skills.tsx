import type { Skill } from "../types";

export default function Skills() {
  const skills: Skill[] = [
    { name: "React.js", level: 80, category: "frontend" },
    { name: "Javascript", level: 85, category: "language" },
    { name: "Node.js/Express.js", level: 85, category: "backend" },
    { name: "CSS/Tailwind", level: 85, category: "frontend" },
    { name: "Git", level: 75, category: "tool" },
    { name: "MongoDB", level: 75, category: "database" },
  ];

  return (
    <section id="skills" className="bg-[#C2F8CB] lg:rounded-2xl">
      <h2>My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">{skill.name}</h3>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#8367C7] h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

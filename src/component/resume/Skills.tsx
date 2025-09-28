const languagesAndFrameworks = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Java",
  "React",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "MySQL",
  "MongoDB",
  "XML",
  "Firebase",
  "Linux",
  "Docker",
];

const toolsAndPlatforms = [
  "Git",
  "GitHub",
  "Postman",
  "Figma",
  "WordPress",
  "VS Code",
  "IntelliJ IDEA",
  "n8n",
];

const Skills = () => {
  return (
    <div className="pb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">SKILLS</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Languages & Frameworks
        </h3>
        <div className="flex flex-wrap gap-2">
          {languagesAndFrameworks.map((skill) => (
            <span
              key={skill}
              className=" bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Tools & Platforms
        </h3>
        <div className="flex flex-wrap gap-2">
          {toolsAndPlatforms.map((tool) => (
            <span
              key={tool}
              className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

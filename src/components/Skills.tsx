const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "C#",
      "SQL"
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Angular",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap"
    ],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "ASP.NET Core",
      "REST APIs",
      "JWT Authentication"
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "DynamoDB"
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD"
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      "JUnit",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Visual Studio",
      "Eclipse"
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Power BI",
      "Excel",
      "Data Analysis",
      "GIS",
      "ArcGIS Pro"
    ],
  },
  {
    title: "Other",
    skills: [
      "Cybersecurity",
      "Agile",
      "Scrum",
      "Object-Oriented Programming",
      "Software Engineering",
      "Machine Learning",
      "OpenCV"
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
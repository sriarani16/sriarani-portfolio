const projects = [
  {
    title: "Online Bookstore Management System",
    description:
      "Full-stack web application for managing books, inventory, and customer interactions. Built using Spring Boot, React, TypeScript, and PostgreSQL.",
    technologies: [
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "REST API"
    ],
    github: "https://github.com/sriarani16/Online-Bookstore-Management-System",
    demo: "#",
    image: "/bookstore.png",
  },

  {
    title: "Cloud-Based Healthcare Application",
    description:
      "Healthcare management platform built using AWS services, React, TypeScript, DynamoDB, S3, and SNS notifications.",
    technologies: [
      "AWS",
      "React",
      "TypeScript",
      "DynamoDB",
      "S3"
    ],
    github: "https://github.com/sriarani16/Cloud-based-Secure-Health-care-Application",
    demo: "#",
    image: "/healthcare.png",
  },

  {
    title: "Face Recognition System",
    description:
      "Real-time face detection and recognition system using Python, OpenCV, NumPy, and Haar Cascade classifiers.",
    technologies: [
      "Python",
      "OpenCV",
      "NumPy",
      "Computer Vision"
    ],
    github: "https://github.com/sriarani16/Face-Recognition-System",
    demo: "#",
    image: "/face-recognition.png",
  },

  {
    title: "GIS-Based Park Location Analysis",
    description:
      "Spatial analysis project using ArcGIS Pro to identify suitable park locations and support urban planning decisions.",
    technologies: [
      "ArcGIS Pro",
      "GIS",
      "Spatial Analysis",
      "Data Visualization"
    ],
    github: "https://github.com/sriarani16/Identifying-Optimal-Locations-for-New-Public-Parks-in-Hamilton-City-Using-GIS",
    demo: "#",
    image: "/gis.png",
  },
  {
    title: "Line Following Robot",
    description:
      "Designed and programmed an autonomous robotic car capable of line detection, path following, and color recognition using sensors and microcontrollers.",
    technologies: [
      "Arduino Mega 2560",
      "C++", 
      "IR Sensors", 
      "DC Motors"
    ],
    github: "https://github.com/sriarani16/Line-following-Robot",
    demo: "#",
    image: "/robotic.png",
  },
  {
    title: "AutoPartsQA – Automotive Data Quality & Analytics Platform",
    description:
      "Automotive data quality and analytics platform that cleans, validates, and visualizes parts data using Python, PostgreSQL, and Streamlit with AI-powered duplicate detection.",
    technologies: [
      "Python", "PostgreSQL", "Streamlit", "SQLAlchemy","Pandas", "RapidFuzz",
    ],
    github: "https://github.com/sriarani16/AutoPartsQA",
    demo: "#",
    image: "/autoparts.png",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-100 py-20"
    >
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold mb-4">
          Projects
        </h2>

        <p className="text-gray-600 mb-12">
          A selection of academic, personal,
          and professional projects showcasing
          full-stack development, cloud computing,
          cybersecurity, and data analysis skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-70 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    GitHub
                  </a>

                  
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
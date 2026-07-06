function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <h3 className="text-gray-600 mb-10">
        My professional journey in software development,
        IT support, and enterprise application development.
        </h3>

        <div className="border-l-4 border-blue-600 pl-6">

          <div className="mb-10">
            <h3 className="text-2xl font-semibold">
              Software Engineer Intern
            </h3>

            <p className="text-blue-600">
              NetValue Ltd | Nov 2025 - Feb 2026
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>
                Developed reusable AG Grid components
                using Angular and TypeScript.
              </li>

              <li>
                Implemented client-side and
                infinite row models.
              </li>

              <li>
                Worked with PostgreSQL,
                Elasticsearch, Java backend,
                GitLab and Docker.
              </li>

              <li>
                Participated in Agile ceremonies,
                sprint planning and code reviews.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              ICT Trainer & IT Support Specialist 
            </h3>

            <p className="text-blue-600">
              Department of Education | Sri Lanka | Mar 2019 - Jan 2025
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>
                Supported 100+ users monthly.
              </li>

              <li>
                Managed 20+ computer labs.
              </li>

              <li>
                Provided hardware, software,
                and network support.
              </li>
            </ul>
          </div>
          <div className="mt-10">
  <h3 className="text-2xl font-semibold">
    Web Developer
  </h3>

  <p className="text-blue-600">
    Innovay Pvt Ltd | Sri Lanka | Jan 2016 - Feb 2019
  </p>

  <ul className="mt-4 list-disc pl-5 space-y-2">
    <li>
      Developed responsive web applications
      using HTML, CSS, JavaScript, and PHP.
    </li>

    <li>
      Improved website performance,
      usability, and cross-browser compatibility.
    </li>

    <li>
      Supported backend integrations and
      implemented customer-facing features.
    </li>

    <li>
      Collaborated with team members to
      deliver web solutions for clients.
    </li>
  </ul>
</div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
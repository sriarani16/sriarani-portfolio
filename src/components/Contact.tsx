function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20"
    >
      <div className="max-w-3xl mx-auto text-center px-4">

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-slate-300 mb-10">
          I'm currently seeking Graduate Software Engineer and Full-Stack
          Developer opportunities. Feel free to reach out if you'd like to
          discuss a role, collaborate on a project, or simply connect.
        </p>

        <div className="space-y-4 text-lg">

          <p>
            📧 Email:
            <a
              href="mailto:arani.suren1630@gmail.com"
              className="text-blue-400 ml-2 hover:underline"
            >
              arani.suren1630@gmail.com
            </a>
          </p>

          <p>
            📍 Location: Hamilton, New Zealand
          </p>

          <p>
            💼 LinkedIn:
            <a
              href="https://www.linkedin.com/in/sriarani-surenther"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 ml-2 hover:underline"
            >
              linkedin.com/in/sriarani-surenther
            </a>
          </p>

          <p>
            💻 GitHub:
            <a
              href="https://github.com/sriarani16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 ml-2 hover:underline"
            >
              github.com/sriarani16
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;
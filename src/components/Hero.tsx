function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Profile Image */}
        <div>
          <img
            src="/profile.jpg"
            alt="Sriarani Surenther"
            className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-xl"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I'm Sriarani Surenther
          </h2>

          <h2 className="text-2xl md:text-3xl mb-6">
            Software Engineer | Full-Stack Developer
          </h2>

          <p className="max-w-2xl text-lg text-slate-300">
            Master of Information Technology (First Class Honours)
            from the University of Waikato.
            Building full-stack applications using
            React, Angular, Java, Spring Boot, AWS, and Azure.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 px-6 py-3 rounded-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border px-6 py-3 rounded-lg"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
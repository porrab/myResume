import { Link } from "react-router-dom";
import { projectData } from "../component/resume/Projects"; // Import projectData

const HomePage = () => {
  const featuredProjects = projectData.slice(0, 3);

  return (
    <main className="max-w-4xl mx-auto p-8 text-white">
      {/* --- Hero Section --- */}
      <section className="text-center min-h-[60vh] flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hello, I'm Thanaphum.
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-400">
          A Full-Stack Developer passionate about building user-centric and
          efficient web applications.
        </p>
        <a
          href="/thanaphum_fullstack_resume.pdf"
          download
          className="mt-8 mx-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
        >
          Download My Resume
        </a>
      </section>

      {/* --- Featured Projects Section --- */}
      <section id="projects" className="mt-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 hover:-translate-y-2 transition-transform"
            >
              <img
                src={project.imageUrls[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">{project.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 rounded-full text-xs text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;

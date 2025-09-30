import { Link } from "react-router-dom";
import { projectData } from "../component/resume/Projects";
import Activities from "../component/resume/Activities";

const ProjectsPage = () => {
  return (
    <main className="max-w-6xl mx-auto p-8 text-white">
      <header className="text-center my-12">
        <h1 className="text-5xl font-bold">All Projects</h1>
        <p className="mt-4 text-lg text-gray-400">
          A collection of my work, from university assignments to personal
          experiments.
        </p>
      </header>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
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
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 rounded-full text-xs text-blue-300"
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
      <hr className="my-10 text-gray-400" />
      <h2 className="text-2xl font-bold text-gray-200 mb-4">ACTIVITIES</h2>
      <div className="bg-gray-800 p-8 rounded-lg mt-6">
        <Activities />
      </div>
    </main>
  );
};

export default ProjectsPage;

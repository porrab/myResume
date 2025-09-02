import { useParams, Link } from "react-router-dom";
import { projectData } from "../component/resume/Projects";
import ProjectHero from "../component/project/ProjectHero";
import ProjectOverview from "../component/project/ProjectOverview";
import ProjectSection from "../component/project/ProjectSection";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-4xl">Project Not Found</h1>
        <Link
          to="/"
          className="text-blue-400 hover:underline mt-4 inline-block"
        >
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12 text-gray-300">
      <Link to="/" className="text-blue-400 hover:underline mb-8 inline-block">
        &larr; Back to Resume
      </Link>

      <ProjectHero
        title={project.title}
        tagline={project.tagline}
        githubUrl={project.githubUrl}
        liveUrl={project.liveUrl}
      />

      <ProjectOverview
        title={project.title}
        overview={project.overview}
        imageUrl={project.imageUrls[0]}
      />

      <ProjectSection
        title="Technical Challenges"
        content={project.challenges}
      />

      <ProjectSection title="Lessons Learned" content={project.learnings} />
    </div>
  );
};

export default ProjectDetailPage;

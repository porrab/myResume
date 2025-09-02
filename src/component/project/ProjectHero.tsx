type ProjectHeroProps = {
  title: string;
  tagline: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
}

const ProjectHero = ({ title, tagline, githubUrl, liveUrl }: ProjectHeroProps) => {
  return (
    <header>
      <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      <p className="mt-4 text-lg text-gray-400">{tagline}</p>
      <div className="flex flex-wrap gap-4 mt-6">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
            View Code (GitHub)
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
            Live Demo
          </a>
        )}
      </div>
    </header>
  );
};

export default ProjectHero;
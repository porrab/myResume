type ProjectOverviewProps = {
  overview: string;
  imageUrl: string;
  title: string;
};

const ProjectOverview = ({
  overview,
  imageUrl,
  title,
}: ProjectOverviewProps) => {
  return (
    <section className="mt-12">
      <div className="w-auto max-h-[500px] overflow-hidden rounded-lg shadow-lg mb-8 flex justify-center items-center s">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-[500px] object-contain"
        />
      </div>

      <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
      <p className="text-gray-400 leading-relaxed">{overview}</p>
    </section>
  );
};

export default ProjectOverview;

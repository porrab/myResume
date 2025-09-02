type ProjectSectionProps = {
  title: string;
  content: string[] | string;
};

const ProjectSection = ({ title, content }: ProjectSectionProps) => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 leading-relaxed">{content}</p>
      )}
    </section>
  );
};

export default ProjectSection;

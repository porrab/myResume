import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
type ProjectOverviewProps = {
  overview: string;
  imageUrl: string[];
  title: string;
};

const ProjectOverview = ({
  overview,
  imageUrl,
  title,
}: ProjectOverviewProps) => {
  return (
    <section className="mt-12">
      <div className="mb-8">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
        >
          {imageUrl.map((url, index) => (
            <div
              key={index}
              className="max-h-[500px] flex justify-center items-center "
            >
              <img
                src={url}
                alt={`${title} screenshot ${index + 1}`}
                className="max-w-full max-h-[500px] object-contain"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
      <p className="text-gray-400 leading-relaxed">{overview}</p>
    </section>
  );
};

export default ProjectOverview;

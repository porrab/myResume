import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type HoverCarouselProps = {
  imageUrls: string[] | null;
};

const HoverCarousel = ({ imageUrls }: HoverCarouselProps) => {
  const isVisible = !!imageUrls;

  return (
    <div
      className={`
        hidden lg:block w-[400px] transition-opacity duration-300
        absolute top-1/2 -translate-y-1/2 left-full ml-8
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      {imageUrls && (
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={1500}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
        >
          {imageUrls.map((url, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={url}
                alt={`Project screenshot ${index + 1}`}
                className="w-full object-contain"
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default HoverCarousel;

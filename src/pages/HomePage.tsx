import "../App.css";
import Header from "../component/resume/Header";
import Profile from "../component/resume/Profile";
import Skills from "../component/resume/Skills";
import { Projects, projectData } from "../component/resume/Projects";
import Education from "../component/resume/Education";
import Activities from "../component/resume/Activities";
import Contact from "../component/resume/Contact";
import HoverCarousel from "../component/project/HoverCarousel";

import { useMemo, useState } from "react";

function HomePage() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const hoveredProjectImages = useMemo(() => {
    if (!hoveredProjectId) return null;

    const project = projectData.find((p) => p.id === hoveredProjectId);

    return project ? project.imageUrls : null;
  }, [hoveredProjectId]);

  return (
    <div>
      <div className="relative max-w-5xl mx-auto my-10 p-12 bg-white shadow-md">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-12 mt-8">
          <div className="col-span-1 space-y-8">
            <Contact />
            <Skills />
            <Education />
            <Activities />
          </div>

          <div className="col-span-1 space-y-20 md:space-y-0 md:col-span-2">
            <Profile></Profile>
            <Projects onProjectHover={setHoveredProjectId} />
          </div>
        </div>
        <HoverCarousel imageUrls={hoveredProjectImages}></HoverCarousel>
      </div>
    </div>
  );
}

export default HomePage;

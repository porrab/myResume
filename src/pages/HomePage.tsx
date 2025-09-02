import "../App.css";
import Header from "../component/resume/Header";
import Profile from "../component/resume/Profile";
import Skills from "../component/resume/Skills";
import { Projects } from "../component/resume/Projects";
import Education from "../component/resume/Education";
import Activities from "../component/resume/Activities";
import Contact from "../component/resume/Contact";

function HomePage() {
  return (
    <div>
      <div className="max-w-5xl mx-auto my-10 p-12 bg-white shadow-md">
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
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

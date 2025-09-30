import Skills from "../component/resume/Skills";
import { Mail, Github, Phone } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="max-w-4xl mx-auto p-8 text-white">
      <header className="my-12">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="mt-6 text-xl text-gray-400 leading-relaxed">
          My passion for software development began with the simple joy of
          problem-solving. It started with coding a line-following robot in high
          school and grew into that magical feeling of seeing data from a
          database I built appear correctly on a webpage. For me, the moment the
          frontend and backend connect perfectly is the most exciting and
          fulfilling part of being a Full-Stack Developer.
        </p>
        <p className="mt-4 text-xl text-gray-400 leading-relaxed">
          I believe every bug is a puzzle waiting to be solved. The immense
          satisfaction from finally fixing a complex bug is the driving force
          that makes me enjoy constantly learning and improving. I see building
          a web application as solving a larger puzzle—one that requires both
          logic and creativity to create solutions that truly meet user needs.
        </p>
        <p className="mt-4 text-xl text-gray-400 leading-relaxed">
          Outside of my time with code, I often spend my time with photography,
          whether it's landscapes, street photos, or candid shots of friends,
          because it teaches me to slow down and appreciate the beautiful little
          details in each moment. When I need to focus or unwind from a complex
          problem, music and games are the best companions that help me recharge
          my energy and creativity.
        </p>
      </header>

      <Skills />

      <section className="mt-12 mb-12">
        <h2 className="text-4xl font-bold text-gray-200 mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email */}
          <a
            href="mailto:your.email@gmail.com"
            className="group flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="p-2 bg-gray-700 rounded-full group-hover:bg-gray-600 transition-colors">
              <Mail className="w-5 h-5 text-gray-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-gray-200 truncate">thanaphumsani@gmail.com</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="p-2 bg-gray-700 rounded-full group-hover:bg-gray-600 transition-colors">
              <Github className="w-5 h-5 text-gray-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-gray-200 truncate">porrab</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+66123456789"
            className="group flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="p-2 bg-gray-700 rounded-full group-hover:bg-gray-600 transition-colors">
              <Phone className="w-5 h-5 text-gray-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-gray-200">0968036214</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

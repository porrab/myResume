import { Link } from "react-router-dom";
import sushi1 from "../../assets/images/sushi_game.png";
import sushi2 from "../../assets/images/sushi_home.png";
import liveConnect from "../../assets/images/live-connect.jpg";
import integrated from "../../assets/images/integrated.png";

const projectData = [
  {
    id: "life-connect",
    title: "Life Connect – Digital Services Platform",
    githubUrl: "https://github.com/porrab/life-connect.git",
    liveUrl: null,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "Google Maps API"],
    tagline:
      "A hackathon prototype designed to streamline access to Thai government services.",
    role: "Frontend Developer",
    description: [
      "Developed a full-featured web application for digital services, focusing on user identity verification (KYC), online queuing, and document management.",
      "Managed application state and client-side routing using Pinia and Vue Router.",
      "Designed and implemented a responsive, component-based user interface with Element Plus and Tailwind CSS.",
    ],
    overview:
      "For the CDG Hackathon 2025, our team tackled the common frustrations people face with government services: long queue times, confusing paperwork, and not knowing what they're eligible for. We designed Life Connect as a proof-of-concept to show how a single platform could fix this. My role was to take our team's Figma designs and build a working web app, handling everything on the client-side from user login, appointment booking, to document uploads using Vue.js and Firebase.",
    challenges: [
      "The main technical hurdle was a race condition. When a user logged in, the UI attempted to render user data before the Firebase authentication response was received. causing a race condition where no data would appear on the initial load.",
      "My solution was to refactor the data fetching flow by using Vue's lifecycle hooks. I added a loading state that paused the UI from rendering until after the app got a successful response from Firebase. This completely fixed the issue and made the user experience much more reliable.",
    ],
    learnings:
      "This project was a huge learning experience. I got to really understand Vue's lifecycle hooks and it was my first time using TypeScript, which I had studied on my own, in a real project. I also got comfortable with the entire Firebase ecosystem, from authentication to deploying the final app. On the design side, I learned a valuable lesson: a good feature is useless if the user flow is confusing. The feedback we got about the prototype's confusing UX was challenging, but it provided an invaluable lesson on the importance of intuitive design for feature adoption.",
    imageUrls: [liveConnect],
  },
  {
    id: "mobile-shop",
    title: "IT Bangmod Mobile Shop – Integrated Project",
    githubUrl: null,
    liveUrl: "http://intproj24.sit.kmutt.ac.th/us1/sale-items",
    tech: ["Vue.js", "Spring Boot", "MySQL", "Docker"],
    tagline:
      "A full-stack e-commerce web application built to apply and test classroom knowledge in a real-world scenario.",
    role: "Full-Stack Developer (Rotational)",
    description: [
      "Collaborated within an Agile team to develop a comprehensive e-commerce platform.",
      "Led the Frontend development for key features, including product listing pages, brand management UI, and client-side form validation.",
      "Successfully integrated the Frontend application with backend APIs for full CRUD functionality.",
    ],
    overview:
      "This project was a major university course where we were tasked with building a complete mobile phone e-commerce site from scratch. It was designed to be a hands-on test of everything we learned, from frontend with Vue.js to backend with Spring Boot and even infrastructure with Docker. Our team used an Agile approach with sprints, and in each sprint, we rotated roles, so everyone had a chance to work as a frontend developer, backend developer, and handle infrastructure tasks.",
    challenges: [
      "As a full-stack developer, I was responsible for a wide range of tasks. On the frontend, I built the main product listing page, the UI for brand management (CRUD), and implemented form validation for the login page, including securely handling JWT tokens.",
      "On the backend, I developed several REST APIs for user registration, login, and full CRUD operations for the sale items, which also included a search with filtering capabilities. I also implemented an email verification system and managed the database schema in MySQL.",
      "One of the most valuable skills I developed was systematic debugging. I developed a systematic debugging methodology, tracing issues from front-end network payloads through independent back-end API testing with Postman, to pinpointing root causes in the server-side logic. This process significantly reduced issue resolution time.",
    ],
    learnings:
      "Working on this project was an incredible lesson in teamwork and the full software development lifecycle. I learned how to effectively collaborate in an Agile environment, build upon my teammates' code, and understand the responsibilities of each role. It gave me a clear picture of how frontend and backend systems connect and the small but important differences between a development and a production environment. More than any specific technology, I learned how to analyze a problem and debug it methodically from end to end.",
    imageUrls: [integrated],
  },
  {
    id: "sushi-game",
    title: "Sushi Restaurant Game (Group Project)",
    githubUrl: "https://github.com/porrab/PROJECT2-SEC-1-ChueRaiDee",
    liveUrl: null,
    tech: ["Vue.js"],
    tagline:
      "An interactive restaurant simulation game built with Vue.js to practice fundamental concepts.",
    role: "Frontend Developer",
    description: [
      "Built an interactive restaurant simulation game using Vue.js, architecting with a Component-based Design.",
      "Designed and implemented core game mechanics, including a dynamic scoring system and level management.",
      "Integrated key interactive features such as a real-time ordering system and score-based rewards.",
    ],
    overview:
      "This was a mini-project for our class where the main goal was to apply our new Vue.js skills to build anything we wanted. As a team, we decided to create a fun sushi restaurant simulation game. My role involved developing several core components, including the main UI for tracking money and goals, the level management system, and the sound controls. I also designed the 'Customer Progression Class' which simulates customer behavior like random orders and time-based actions.",
    challenges: [
      "Since this was one of our first Vue projects, the codebase quickly became complex with many different components. The key challenge for me was understanding my teammates' code and figuring out the data flow between all the nested components.",
      "To solve this, I had to be proactive in communicating with my team. I would ask questions to understand the purpose of each part and spent time tracing how data was passed from one component to another. This forced me to get really good at debugging and understanding the overall application structure.",
    ],
    learnings:
      "This project solidified my understanding of Vue fundamentals. It was a great lesson in teamwork and communication, especially when working on a shared codebase. I became much more comfortable with core concepts like passing data with `emit`, using `scoped slots`, and navigating between different game screens with Vue Router. It really taught me the importance of clear communication when building something complex as a team.",
    imageUrls: [sushi1, sushi2],
  },
];
const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">PROJECTS</h2>
      <div className="space-y-8">
        {projectData.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="block p-6 border rounded-lg shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 my-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
              {project.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { projectData, Projects };

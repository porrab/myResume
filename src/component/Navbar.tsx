import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300"
        >
          My Portfolio
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-lg">
          <Link
            to="/projects"
            className={`relative py-2 transition-colors duration-200 ${
              isActive("/projects")
                ? "text-blue-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Projects
            {isActive("/projects") && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
            )}
          </Link>

          <Link
            to="/about"
            className={`relative py-2 transition-colors duration-200 ${
              isActive("/about")
                ? "text-blue-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            About
            {isActive("/about") && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

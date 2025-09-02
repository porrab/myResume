import { Routes, Route } from "react-router-dom"; // 1. Import Routes และ Route
import ProjectDetailPage from "./pages/ProjectDetailPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./component/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="project/:projectId" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;

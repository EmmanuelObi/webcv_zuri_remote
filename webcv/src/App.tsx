import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import EducationPage from "./pages/EducationPage/EducationPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="mainContainer">
          <Header />
          <div className="mainContent">
            <div className="firstCorner"></div>
            <div className="lastCorner"></div>
            <Routes>
              <Route path="/*" element={<ProfilePage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/education" element={<EducationPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

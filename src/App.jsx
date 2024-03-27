import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import Introduction from "./Components/Introduction/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import ProjectsSection from "./Components/ProjectsField/ProjectsSection";
import BGmoving from "./Components/Utility/BG-moving";

function App() {
  return (
    <div className="relative">
      <BGmoving />
      <div className="absolute top-0 left-0">
        <Navbar />
        <Introduction />
        <AboutSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;

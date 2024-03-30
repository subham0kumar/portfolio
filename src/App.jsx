import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Experience from "./Components/ExperienceSection/Experience";
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
        <Experience />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;

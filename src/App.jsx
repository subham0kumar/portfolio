import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Experience from "./Components/ExperienceSection/Experience";
import Introduction from "./Components/Introduction/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMobile from "./Components/Navbar/NavbarMobile";
import ProjectsSection from "./Components/ProjectsField/ProjectsSection";
import BGmoving from "./Components/Utility/Backgroud/BG-moving";

function App() {
  return (
    <div className="relative">
      <div className="md:block hidden"><BGmoving /></div>
      <div className="absolute top-0 left-0">
        <Navbar />
        <NavbarMobile />
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

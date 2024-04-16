import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Experience from "./Components/ExperienceSection/Experience";
import Introduction from "./Components/Introduction/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMobile from "./Components/Navbar/NavbarMobile";
import ProjectsSection from "./Components/ProjectsField/ProjectsSection";
import WaveDivider from "./Components/Utility/Divider1/WaveDivider";
import Footer from "./Components/Utility/Footer/Footer";

function App() {
  return (
    <>
      <NavbarMobile />
      <Navbar />
      <div>
        <div>
          <Introduction />
          <WaveDivider className='sm:hidden' />
        </div>
        <AboutSection />
        <Experience />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default App;

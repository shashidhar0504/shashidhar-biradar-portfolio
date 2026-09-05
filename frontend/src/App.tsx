import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CapabilityMap from "./components/sections/CapabilityMap";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import AiAutomationJourney from "./components/sections/AiAutomationJourney";
import Experience from "./components/sections/Experience";
import Workflow from "./components/sections/Workflow";
import Education from "./components/sections/Education";
import Achievements from "./components/sections/Achievements";
import Services from "./components/sections/Services";
import WhyWorkWithMe from "./components/sections/WhyWorkWithMe";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import CustomCursor from "./components/ui/CustomCursor";
import FloatingChatbot from "./components/ui/FloatingChatbot";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] font-body text-slate-100 selection:bg-cyan-500 selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CapabilityMap />
        <Skills />
        <Projects />
        <AiAutomationJourney />
        <Experience />
        <Workflow />
        <Education />
        <Achievements />
        <Services />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}

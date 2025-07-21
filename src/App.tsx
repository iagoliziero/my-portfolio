import { ChevronDown} from "lucide-react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroContent from "./components/HeroContent";
import SocialsSection from "./components/SocialsSection";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import TechStudy from "./components/TechStudy";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black transition-all duration-300 overflow-x-hidden">
      <div className="flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center  top-60 lg:top-80">
          <HeroContent />
          <div className="flex flex-col items-center justify-center">
            {" "}
            <Hero />
          </div>
        </section>
        {/* Hero Section */}

        {/* Socials section */}
        <SocialsSection />
        {/* Socials section */}
      </div>
      {/* arrow down */}
      <div className="relative top-60 lg:top-80 text-white/70 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#">
          <ChevronDown width={35} height={35} />
        </a>
      </div>
      {/* arrow down */}

      <div className="max-h-0 relative top-[25rem] lg:top-[35rem] flex flex-col items-center ">
        {/* About Me */}
        <AboutMe />
        {/* About Me */}
        <TechStack />

        <TechStudy />
        {/* Projects Component */}
        <Projects />
        {/* Projects Component */}
        {/* Work In Progress (WIP) -  Resume Component */}
          <Resume />
        {/* Work In Progress (WIP) - Resume Component  */}
      </div>
    </div>
  );
}

export default App;

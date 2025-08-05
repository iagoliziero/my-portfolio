import { ChevronDown } from "lucide-react";
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
import GetContact from "./components/GetContact";
import Footer from "./components/Footer";
import BottomToTop from "./animations/BottomToTop";
import LeftOrRight from "./animations/LeftOrRight";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-gray-950 dark:to-slate-800 transition-all duration-300 overflow-x-hidden">
      <div id="inicio" className="flex flex-col">
        <Header />
      </div>
      <section className="flex flex-col gap-[25rem]">
        <BottomToTop>
         <div className="flex flex-col">
           {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center top-60  xl:top-64 3xl:top-80">
            <HeroContent />
            <div className="flex flex-col items-center justify-center">
              {" "}
              <Hero />
            </div>
          </section>

          {/* Hero Section */}

          {/* Socials section */}
          <section className="flex items-center justify-center gap-6 md:gap-7 relative bottom-10 top-48 xxl:top-52 3xl:top-64 ">
            <SocialsSection />
          </section>
          {/* Socials section */}

          {/* arrow down */}
          <div className="relative top-60 xl:top-64 3xl:top-80 text-white/70 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#sobre">
              <ChevronDown width={35} height={35} />
            </a>
          </div>
          {/* arrow down */}
         </div>
        </BottomToTop>
         <div className="flex flex-col items-center ">
        {/* About Me */}
        <span id="sobre"></span>
        <LeftOrRight position="right">
          <AboutMe />
        </LeftOrRight>
        {/* About Me */}
        <span id="stack"></span>
        <LeftOrRight position="left"> 
          <TechStack />
          <TechStudy />
        </LeftOrRight>
        
        {/* Projects Component */}
        <span id="projetos"></span>
        <BottomToTop> 
            <Projects />
        </BottomToTop>
       
        {/* Projects Component */}
        <span id="curriculo"></span>
        <LeftOrRight position="right"> 
          <Resume />
        </LeftOrRight>
        
        <span id="contato"></span>
        <LeftOrRight position="left"> 
            <GetContact />
        </LeftOrRight>
        <Footer />
      </div>
      </section>
    </div>
  );
}

export default App;


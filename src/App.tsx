import { ChevronDown } from "lucide-react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroContent from "./components/HeroContent";
import SocialsSection from "./components/SocialsSection";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black transition-all duration-300 overflow-x-hidden ">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center  top-60 lg:top-72">
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

      {/* arrow down */}
      <div className="relative top-60 lg:top-72 text-white/70 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown width={35} height={35} />
      </div>
      {/* arrow down */}

      {/* About Me */}
      <AboutMe />
      {/* About Me */}
    </div>
  );
}

export default App;

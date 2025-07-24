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
import Contact from "./components/Contact";
import Subtitle from "./components/Subtitle";
import Paragraph from "./components/Paragraph";
import WhyChooseMe from "./components/WhyChooseMe";
import Input from "./components/Input";

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
        <Resume />
        {/* WIP */}
        <section className="flex w-full flex-col justify-center items-center gap-6 mt-10 text-center">
          <div className="flex flex-col gap-5 items-center p-6 md:max-w-[30rem] mil:min-w-[40rem]">
            <Subtitle>Entre em Contato</Subtitle>
            <Paragraph>
              {" "}
              Estou aberto a oportunidades, colaborações ou apenas um bom papo
              sobre tecnologia. Fique à vontade para me chamar
            </Paragraph>
          </div>
          <div className="flex flex-wrap justify-center mil:flex-none mil:grid mil:grid-cols-2 gap-6 mil:gap-0">
           <div className="flex flex-col gap-6"> 
            <Contact />
            <WhyChooseMe />
           </div>
            <div className="px-6 mil:px-3 w-screen md:max-w-[33rem] mil:max-w-[30rem]  ">
              <section className=" min-w-full items-center justify-center">
                <div className="flex gap-5 flex-col bg-white/5 p-6 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300">
                  <Input placeholder="Seu nome"> Nome * </Input>
                  <Input placeholder="seuemail@gmail.com"> Email * </Input>
                  <Input placeholder="Assunto do email">Assunto * </Input>
                    <label className="text-white/70 text-start"> Mensagem * </label>
                    <textarea
                      className="p-4 text-white bg-transparent rounded-xl w-full h-40 border-slate-300/30 border focus:border-purple-400 transition-all ease-in-out duration-300 outline-none"
                      required
                      placeholder="Conte-me sobre seu projeto..."
                    />
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* WIP */}
      </div>
    </div>
  );
}

export default App;

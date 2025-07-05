import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroContent from "./components/HeroContent";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black transition-all duration-300 overflow-x-hidden">
      <Header />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center mt-60 lg:mt-64 xl:mt-72">
       <HeroContent />
        <div className="flex flex-col items-center justify-center">
          {" "}
          <Hero />
        </div>
      </section>
      
    </div>
  );
}

export default App;

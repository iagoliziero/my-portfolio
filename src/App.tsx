import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TypeWriterEffect from "./components/TypeWriter";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black transition-all duration-300 overflow-x-hidden">
      <Header />
      {/* create component here (Hero Section) */}
      <section className="relative flex flex-col items-center justify-center h-screen gap-5 top-10">
        <div className="flex flex-col items-center relative bottom-24">
          <h1 className="text-5xl md:text-6xl text-slate-50 font-bold relative  text-center bg-gradient-to-r from-white/70 to-purple-400 text-transparent bg-clip-text p-3">
            Iago Liziero
          </h1>
          <div className=" text-center text-purple-400 text-2xl md:text-3xl mb-10">
            <TypeWriterEffect />
          </div>

          <p className="text-white/70 text-center text-lg md:text-xl max-w-[20rem] md:max-w-[30rem] lg:max-w-[40rem]">
            Transformo ideias em experiências digitais excepcionais.
            Especialista em criar soluções completas do frontend ao backend.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {" "}
          <Hero />
        </div>
      </section>
      {/* create component here (Hero Section) */}
    </div>
  );
}

export default App;

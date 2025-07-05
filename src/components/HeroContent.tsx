import TypeWriterEffect from "./TypeWriter";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center relative bottom-24 z-20 gap-10">
      <div>
        <h1 className="text-5xl md:text-6xl xl:text-7xl text-slate-50 font-bold relative  text-center bg-gradient-to-r from-white/70 to-purple-300 text-transparent bg-clip-text p-3">
          Iago Liziero
        </h1>
        <div className=" text-center text-purple-300 text-2xl md:text-3xl mb-10">
          <TypeWriterEffect />
        </div>

        <p className="text-white/70 text-center text-lg md:text-xl max-w-[20rem] md:max-w-[30rem] lg:max-w-[40rem]">
          Transformo ideias em experiências digitais excepcionais. Especialista
          em criar soluções completas do frontend ao backend.
        </p>
      </div>
      {/* Button navigation */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
        <button className="p-5 w-52 text-[18px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white/70 font-semibold shadow-lg hover:bg-purple-600 transition duration-300">
          Ver Meus Projetos
        </button>
        <button className="p-5 w-52 text-[18px] rounded-full border-2 border-purple-400 text-white/70 font-semibold shadow-lgtransition duration-300">
          Vamos Conversar
        </button>
      </div>
    </div>
  );
};

export default HeroContent;

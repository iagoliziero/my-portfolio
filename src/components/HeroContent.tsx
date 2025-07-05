import HeroButton from "./HeroButton";
import TypeWriterEffect from "./TypeWriter";

const HeroContent = (): JSX.Element => {
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
      <HeroButton />
      {/* Background Hero */}
    </div>
  );
};

export default HeroContent;

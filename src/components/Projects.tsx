import ButtonProjects from "./ButtonProjects";
import CardsProjects from "./CardsProjects";
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";

const Projects = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-center  p-6">
      <div className="flex flex-col gap-5 items-center p-10 md:max-w-[30rem] mil:max-w-[40rem]">
        <Subtitle>Projetos em Destaque</Subtitle>
        <Paragraph>
          Soluções completas que demonstram minha expertise técnica e
          criatividade
        </Paragraph>
      </div>
      <section className=" flex  flex-col gap-10 justify-center items-center">
        <div className="flex gap-1 w-[24rem] lg:w-[28rem] whitespace-nowrap bg-white/5 p-4 h-16 lg:gap-6 rounded-full border-slate-300/30 border  items-center justify-center mb-10">
          <ButtonProjects> Todos </ButtonProjects>
          <ButtonProjects> Full Stack </ButtonProjects>
          <ButtonProjects> Frontend </ButtonProjects>
          <ButtonProjects> Backend </ButtonProjects>
        </div>
      </section>
      <div className="flex flex-col mil:grid mil:grid-cols-2 gap-6  ">
            <CardsProjects />
        </div>
    </div>
  );
};

export default Projects;

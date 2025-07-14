import ButtonProjects from "./ButtonProjects";
import CardsProjects from "./CardsProjects";
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";

const Projects = (): JSX.Element => {

  return (
    <div className="flex flex-col justify-center items-center gap-6 text-center p-6">
      <div className="flex flex-col gap-5 items-center p-10 md:max-w-[30rem] mil:max-w-[40rem]">
        <Subtitle>Projetos em Destaque</Subtitle>
        <Paragraph>
          Soluções completas que demonstram minha expertise técnica e
          criatividade
        </Paragraph>
      </div>
      <section className="flex flex-col justify-center items-center">
        <div className="flex w-[22.5rem] lg:w-[28rem] whitespace-nowrap bg-white/5 h-14 mil:h-16 lg:gap-6 rounded-full border-slate-300/30 border items-center justify-center mb-10">
          <ButtonProjects active={true}> Todos </ButtonProjects>
          <ButtonProjects> Full Stack </ButtonProjects>
          <ButtonProjects> Frontend </ButtonProjects>
          <ButtonProjects> Backend </ButtonProjects>
        </div>
      </section>
      <div className="flex flex-col ">
            <CardsProjects />
        </div>
    </div>
  );
};

export default Projects;

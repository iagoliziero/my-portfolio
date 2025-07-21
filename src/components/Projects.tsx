import { useState } from "react";
import ButttonNavigationProjects from "./ButtonNavigationProjects";
import CardsProjects from "./CardsProjects";
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";

const Projects = (): JSX.Element => {
  const [selectedButton, setSelectedButton] = useState<number | null>(1);

  const handleSelection = (id: number): void => {
    setSelectedButton((prevSelected) => (prevSelected === id ? null : id));
  };

  interface Ibuttons {
    id: number;
    label: string;
  }

  const buttons: Ibuttons[] = [
    { id: 1, label: "Todos" },
    { id: 2, label: "Full Stack" },
    { id: 3, label: "Frontend" },
    { id: 4, label: "Backend" }
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-6 text-center p-6">
      <div className="flex flex-col gap-5 items-center p-6 md:max-w-[30rem] mil:max-w-[40rem]">
        <Subtitle>Projetos em Destaque</Subtitle>
        <Paragraph>
          Soluções completas que demonstram minha expertise técnica e
          criatividade
        </Paragraph>
      </div>
      <section className="flex flex-col justify-center items-center">
        <div className="flex w-[22.5rem] lg:w-[28rem] whitespace-nowrap bg-white/5 h-14 mil:h-16 lg:gap-6 rounded-full border-slate-300/30 border items-center justify-center mb-10">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => {
                handleSelection(button.id);
              }}
              className={`text-white/70 button-project p-3 font-semibold hover:bg-white/10 hover:rounded-full transition-all ease-in-out duration-300 ${
                selectedButton === button.id ? "active" : ""
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </section>
      <div className="flex flex-col mb-10 ">
        <CardsProjects selectedArea={selectedButton} />
      </div>
      <ButttonNavigationProjects>
        {" "}
        Ver todos os projetos no GitHub{" "}
      </ButttonNavigationProjects>
    </div>
  );
};

export default Projects;

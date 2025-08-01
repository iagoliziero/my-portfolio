import { SquareArrowOutUpRight } from "lucide-react";
import Paragraph from "./Paragraph";
import { CardProjectsInterface } from "../interfaces/CardProjectsInterface";
import { useState } from "react";
import { dataProjects } from "../data/dataProjects";

interface CardsProjectsProps {
  selectedArea: number | null;
}

const CardsProjects = ({selectedArea}: CardsProjectsProps): JSX.Element => {

  const [projects] = useState<CardProjectsInterface[]>(dataProjects);

  interface IRecord {
    [key: number]: string
  }

  const areaMap: IRecord = {
    1: "Todos",
    2: "Full Stack",
    3: "Frontend",
    4: "Backend"
  }

  const filteredProjects = selectedArea && selectedArea !== 1 ? projects.filter(project => project.area === areaMap[selectedArea]) : projects

  return (
    <section className="flex flex-wrap justify-center gap-6 mil:flex-none mil:grid mil:grid-cols-2 ">
      {filteredProjects.map((project) => (
        <section
          key={project.id}
          className="
            flex gap-5 flex-col
            w-full min-w-[22rem]
            se:max-w-[30rem]
            bg-white/5 rounded-xl
            border border-slate-300/30
            hover:bg-white/10
            transition-all ease-in-out duration-300
            overflow-x-hidden
          "
        >
          <img
            className="rounded-t-xl hover:scale-105 transition-all ease-in-out duration-300 w-full"
            src={project.img}
            alt={project.title}
          />

          <section
            className="
              p-5 text-start flex flex-col gap-4
              w-[22rem] se:w-[25rem] md:w-[30rem]
            "
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold text-white/70">
                {project.title}
              </h2>
              <Paragraph>{project.description}</Paragraph>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[14px] font-semibold text-purple-300">
                DESAFIO TÉCNICO
              </h3>
              <p className="text-[14px] text-white/70">
                {project.techChallenge}
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="
                    flex bg-gradient-to-r
                    p-2 rounded-3xl
                    from-purple-600/20 to-pink-600/20
                    border border-purple-400/30
                    hover:from-purple-600/30 hover:to-pink-600/30
                  "
                >
                  <p className="text-purple-300">{tech}</p>
                </div>
              ))}
            </div>

            <div className="flex md:flex-row items-center justify-start gap-5 mt-4">
              {project.navigateDemoExist && project.navigationDemo && (
                <a
                href={project.navigationDemo} target="_blank" rel="noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    w-44 se:w-[13rem] p-3 text-[16px]
                    bg-gradient-to-r from-purple-600 to-pink-600
                    rounded-xl text-white font-semibold shadow-lg
                    hover:bg-purple-600
                    transform transition hover:-translate-y-1
                    motion-reduce:transition-none motion-reduce:hover:transform-none
                    hover:from-purple-700 hover:to-pink-700
                  "
                >
                  <span>
                    <SquareArrowOutUpRight size={18} />
                  </span>
                  <p>
                    Ver Demo
                  </p>
                </a>
              )}

              <a href={project.navigationGithub} target="_blank" rel="noreferrer"
                className="
                  flex items-center justify-center gap-2
                  w-44 se:w-[11rem] mil:w-[13rem] p-3 text-[16px]
                  border-2 border-purple-400 text-purple-400
                  font-semibold shadow-lg transition rounded-xl
                  transform hover:-translate-y-1
                  motion-reduce:transition-none motion-reduce:hover:transform-none
                  hover:bg-purple-400 hover:text-white/70
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github-icon lucide-github text-purple-300"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </span>
                <p>
                  Código
                </p>
              </a>
            </div>
          </section>
        </section>
      ))}
    </section>
  );
};

export default CardsProjects;

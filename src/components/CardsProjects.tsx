import { SquareArrowOutUpRight } from "lucide-react";
import Paragraph from "./Paragraph";
import { CardProjectsInterface } from "../interfaces/CardProjectsInterface";
import { useState } from "react";

const CardsProjects = (): JSX.Element => {
  const cardProject: CardProjectsInterface[] = [
    {
      id: 1,
      img: "https://i.postimg.cc/tgsBkxcf/img-peakform.jpg",
      title: "Peak Form",
      description:
        "Plataforma para gerenciamento de treinos, com CRUD de exercícios, rastreamento de progresso e autenticação.",
      techChallenge: "implementar cadastro de login com segurança JWT",
      techStack: ["React.js", "Tailwind", "Context API", "React Hook Form", "Axios"],
      navigationGithub: "https://github.com/iagoliziero/peak-form",
      navigationDemo: "https://peak-form-psi.vercel.app/",
      navigateDemoExist: true,
    },
    {
      id: 2,
      img: "https://i.postimg.cc/BZh9mx7Z/img-backendpeakform.jpg",
      title: "Backend Peak Form",
      description:
        "Backend do projeto PeakForm: API RESTful com autenticação JWT para gerenciar usuários, treinos e dados corporais.",
      techChallenge: "implementar cadastro de login com segurança JWT",
      techStack: ["Node.js", "Express", "JWT", "Prisma", "PostgreSQL"],
      navigationGithub: "https://github.com/iagoliziero/backend-peakform",
      navigateDemoExist: false,
    },
    {
      id: 3,
      img: "https://i.postimg.cc/dtVgbLZs/img-comunidade-vibra.jpg",
      title: "Comunidade Vibra",
      description:
        "Projeto Freelancer - Landing page desenvolvida para um influenciadora com o objetivo de apresentar e direcionar usuárias para sua comunidade gratuita no WhatsApp",
      techChallenge: "implementar cadastro de login com segurança JWT",
      techStack: ["React.js", "TailwindCSS", "gsap", "shadcn"],
      navigationGithub: "https://github.com/iagoliziero/vibra-landing",
      navigationDemo: "https://comunidade-vibra.vercel.app/",
      navigateDemoExist: true,
    },
  ];

  const [projects] = useState<CardProjectsInterface[]>(cardProject);

  return (
    <section className="flex flex-wrap justify-center gap-6 mil:flex-none mil:grid mil:grid-cols-2 ">
      {projects.map((project) => (
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
                <button
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
                  <a href={project.navigationDemo} target="_blank" rel="noreferrer">
                    Ver Demo
                  </a>
                </button>
              )}

              <button
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
                <a href={project.navigationGithub} target="_blank" rel="noreferrer">
                  Código
                </a>
              </button>
            </div>
          </section>
        </section>
      ))}
    </section>
  );
};

export default CardsProjects;

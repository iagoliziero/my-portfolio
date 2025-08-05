import { CardProjectsInterface } from "../interfaces/CardProjectsInterface";

export const dataProjects: CardProjectsInterface[] = [
    {
      id: 1,
      img: "https://i.postimg.cc/VNMsqZwh/peak-form.jpg",
      title: "Peak Form",
      description:
        "Plataforma para gerenciamento de treinos, com CRUD de exercícios, rastreamento de progresso e autenticação.",
      techChallenge: "Implementar a conexão com o backend utilizando autenticação JWT e gerenciamento de variáveis globais através do Context API.",
      techStack: ["React.js", "Tailwind", "Context API",  "Hook Form", "Axios"],
      navigationGithub: "https://github.com/iagoliziero/peak-form",
      navigationDemo: "https://peak-form-psi.vercel.app/",
      navigateDemoExist: true,
      area: "Full Stack"
    },
    {
      id: 2,
      img: "https://i.postimg.cc/Mp5mW5Nh/img-backendpeakform.jpg",
      title: "Backend Peak Form",
      description:
        "Backend do projeto PeakForm: API RESTful com autenticação JWT para gerenciar usuários, treinos e dados corporais.",
      techChallenge: "Desenvolver o backend completo com segurança JWT e integração com banco relacional PostgreSQL.",
      techStack: ["Node.js", "Express", "JWT", "Prisma", "PostgreSQL"],
      navigationGithub: "https://github.com/iagoliziero/backend-peakform",
      navigateDemoExist: false,
      area: "Backend"
    },
    {
      id: 3,
      img: "https://i.postimg.cc/wBBc3Jd3/img-comunidade-vibra.jpg",
      title: "Comunidade Vibra",
      description:
        "Projeto Freelancer - Landing page desenvolvida para uma influenciadora com o objetivo de apresentar e direcionar usuárias para sua comunidade gratuita no WhatsApp.",
      techChallenge: "Criar uma interface bonita que transmitisse a identidade visual desejada pela cliente.",
      techStack: ["React.js", "TailwindCSS", "gsap", "shadcn"],
      navigationGithub: "https://github.com/iagoliziero/vibra-landing",
      navigationDemo: "https://comunidade-vibra.vercel.app/",
      navigateDemoExist: true,
      area: "Frontend"
    },
    {
        id: 4,
        img: "https://i.postimg.cc/gkNW3FZj/img-lizmann.jpg",
        title: "Digital Library - Lizmann",
        description:
          "Gerenciador de biblioteca digital com CRUD de livros, visualização detalhada e integração entre front-end e back-end.",
        techChallenge: " Implementar a integração completa com o backend, incluindo chamadas à API, manipulação de dados e atualização dinâmica da interface.",
        techStack: ["React.js", "TailwindCSS", "Hook Form", "axios"],
        navigationGithub: "https://github.com/iagoliziero/digital-library-lizmann",
        navigationDemo: "https://digital-library-lizmann.vercel.app/",
        navigateDemoExist: true,
        area: "Full Stack"
      },
  ];
import { Heart } from "lucide-react";
import LinkSocials from "./LinkSocials";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <section className="flex w-full flex-col gap-6 mt-20 text-center bg-black/50 backdrop-blur-sm border-t border-white/10 p-8 items-center ">
      <div className="flex flex-col justify-center mil:flex-row mil:gap-40">
        <div className="flex flex-col w-full justify-center items-start max-w-96 gap-4">
          <Logo />
          <p className="p-footer">
            {" "}
            Desenvolvedor Full Stack apaixonado por criar soluções digitais que
            fazem a diferença.
          </p>
          <div className="flex gap-4">
            <LinkSocials
              href="https://github.com/iagoliziero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-github-icon lucide-github text-white"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </LinkSocials>

            <LinkSocials
              href="https://www.linkedin.com/in/iago-liziero-54b81232b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </LinkSocials>

            <LinkSocials href="mailto:contatoiagoliziero@gmail.com?subject=Olá%20Iago">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-mail-icon lucide-mail text-white"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </LinkSocials>
          </div>
        </div>
        <div className="flex flex-col items-start mt-5 gap-4">
          <h3 className="h3-footer"> Navegação </h3>
          <ul className="flex flex-col text-white/70 text-start gap-2">
            <NavLink href="#" label="Início" />
            <NavLink href="#" label="Sobre" />
            <NavLink href="#" label="Stack" />
            <NavLink href="#" label="Projetos" />
            <NavLink href="#" label="Currículo" />
            <NavLink href="#" label="Contato" />
          </ul>
        </div>
        <div className="flex flex-col items-start mt-5 gap-4">
          <h3 className="h3-footer"> Contato </h3>
          <div className="flex flex-col gap-2 justify-center items-start text-start">
            <p className="p-footer"> contatoiagoliziero@gmail.com </p>
            <p className="p-footer"> +55 (11) 91962-0763 </p>
            <p className="p-footer"> Taboão da Serra, SP </p>
          </div>
        </div>
      </div>
     <div className="w-[24rem] mil:w-[60rem] flex justify-center">
     <div className="mt-5 border-t border-white/10 w-full"></div>
     </div>
      <div className="flex flex-col mil:flex-row mil:gap-96 relative p-6 mil:right-5 gap-4 items-center justify-center">
        <p className="p-footer text-center">
          {" "}
          ©2025 Iago Liziero. Todos os direitos reservados.{" "}
        </p>
        <p className="p-footer flex gap-1 items-center">
          Feito com{" "}
          <span>
            {" "}
            <Heart size={20} className="text-red-400" />{" "}
          </span>{" "}
          e muito código
        </p>
      </div>
    </section>
  );
};

export default Footer;

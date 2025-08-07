import { Heart } from "lucide-react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import LinkSocialsFooter from "./LinkSocialsFooter";
import ContactFooter from "./ContactFooter";

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
          <LinkSocialsFooter />
        </div>
        <div className="flex flex-col items-start mt-5 gap-4">
          <h3 className="h3-footer"> Navegação </h3>
          <ul className="flex flex-col text-white/70 text-start gap-2">
            <NavLink href="#inicio" label="Início" />
            <NavLink href="#sobre" label="Sobre" />
            <NavLink href="#stack" label="Stack" />
            <NavLink href="#projetos" label="Projetos" />
            <NavLink href="#curriculo" label="Currículo" />
            <NavLink href="#contato" label="Contato" />
          </ul>
        </div>
       <ContactFooter />
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

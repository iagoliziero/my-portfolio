import { useState } from "react";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";

const DropDownMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = (): void => setIsOpen(!isOpen);

  return (
    <>
      <a className="md:hidden" onClick={openMenu}>
        {" "}
        {!isOpen ? (
          <Menu className="text-purple-300" size={30} />
        ) : (
          <X size={30} className="text-purple-300" />
        )}{" "}
      </a>
      {isOpen && (
        <div className="absolute mx-4 top-24 right-0 bg-black/80 backdrop-blur-sm border rounded-xl border-white/10 p-6 transition-all ease-in-out duration-300 z-50">
          <div className="flex flex-col items-center gap-2 ">
            <ul className="flex flex-col gap-3 text-white/70">
              <NavLink href="#inicio" label="Início" />
              <NavLink href="#sobre" label="Sobre" />
              <NavLink href="#stack" label="Stack" />
              <NavLink href="#projetos" label="Projetos" />
              <NavLink href="#curriculo" label="Currículo" />
              <NavLink href="#contato" label="Contato" />
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default DropDownMenu;

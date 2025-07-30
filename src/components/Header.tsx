import { useState } from "react";
import Logo from "./Logo";
import Switch from "./Switch";
import UlContent from "./UlContent";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-max-screen top-0 right-0 left-0 p-5 flex justify-between items-center blur-xs backdrop-blur-[0.5em] z-50 lg:justify-center lg:gap-52">
      <Logo />
      <UlContent />
      <div className="flex flex-row gap-4 justify-center items-center">
        <Switch />
        <a className="md:hidden" onClick={open}> {!isOpen ? <Menu className="text-purple-300" size={30} /> : <X className="text-purple-300" size={30} />} </a>
        {isOpen && (
          <div className="absolute mx-4 top-28 right-0 bg-black/80 backdrop-blur-sm border rounded-xl border-white/10 p-6 transition-all ease-in-out duration-300 z-50">
            <div className="flex flex-col items-center gap-2 ">
              <ul className="flex flex-col gap-3 text-white/70">
                <NavLink href="#1" label="Início" />
                <NavLink href="#2" label="Sobre" />
                <NavLink href="#3" label="Stack" />
                <NavLink href="#4" label="Projetos" />
                <NavLink href="#5" label="Currículo" />
                <NavLink href="#6" label="Contato" />
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

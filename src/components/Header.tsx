import Checkbox from "./CheckBox";
import Switch from "./Switch";

const Header = () => {
  return (
    <header className="fixed w-screen top-0 right-0 left-0 p-5 flex justify-between items-center blur-xs backdrop-blur-[0.5em] z-10 lg:justify-center lg:gap-60">
      <h1 className="text-slate-50"> IMAGEM</h1>
      <ul className="hidden md:style-header">
        <li className="relative">
          <a href="#" className="hover-effect-active relative inline-block pb-1 hover:text-purple-400">
            Inicio
            <div className="hover-effect"></div>
          </a>
        </li>

        <li className="relative">
          <a href="#" className="hover-effect-active relative inline-block pb-1 hover:text-purple-400">
            Sobre
            <div className="hover-effect"></div>
          </a>
        </li>
        <li className="relative">
          <a href="#" className="hover-effect-active relative inline-block pb-1 hover:text-purple-400">
            Stack
            <div className="hover-effect"></div>
          </a>
        </li>
        <li className="relative">
          <a href="#" className="hover-effect-active relative inline-block pb-1 hover:text-purple-400">
            Projetos
            <div className="hover-effect"></div>
          </a>
        </li>
        <li className="relative">
          <a href="#" className="hover-effect-active relative inline-block pb-1 hover:text-purple-400">
            Contato
            <div className="hover-effect"></div>
          </a>
        </li>
      </ul>
      <div className="flex flex-row gap-4 justify-center items-center">
        <Switch />
        <Checkbox />
      </div>
    </header>
  );
};

export default Header;

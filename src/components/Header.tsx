import Logo from "./Logo";
import UlContent from "./UlContent";
import DropDownMenu from "./DropDownMenu";
import { useTheme } from "../hooks/toogleTheme";
import { Moon, Sun } from "lucide-react";

const Header = (): JSX.Element => {

  const {theme, toggleTheme} = useTheme();

  return (
    <header className="fixed w-max-screen top-0 right-0 left-0 p-5 flex justify-between items-center blur-xs backdrop-blur-[0.5em] z-50 lg:justify-center lg:gap-52">
      <Logo />
      <UlContent />
      <div className="flex flex-row gap-4 justify-center items-center">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={30} className="text-white/70" /> : <Moon size={30} className="text-white/70" /> }
        </button>
        <DropDownMenu />
      </div>
    </header>
  );
};

export default Header;

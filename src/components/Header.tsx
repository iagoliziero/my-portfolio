import Checkbox from "./CheckBox";
import Switch from "./Switch";
import UlContent from "./UlContent";

const Header = (): JSX.Element => {
  return (
    <header className="fixed w-max-screen top-0 right-0 left-0 p-5 flex justify-between items-center blur-xs backdrop-blur-[0.5em] z-50 lg:justify-center lg:gap-60">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold text-2xl ">
        &lt;IL Dev/&gt;
      </span>
      <UlContent />
      <div className="flex flex-row gap-4 justify-center items-center">
        <Switch />
        <Checkbox />
      </div>
    </header>
  );
};

export default Header;

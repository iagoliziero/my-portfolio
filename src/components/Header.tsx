import Logo from "./Logo";
import Switch from "./Switch";
import UlContent from "./UlContent";
import DropDownMenu from "./DropDownMenu";

const Header = (): JSX.Element => {

  return (
    <header className="fixed w-max-screen top-0 right-0 left-0 p-5 flex justify-between items-center blur-xs backdrop-blur-[0.5em] z-50 lg:justify-center lg:gap-52">
      <Logo />
      <UlContent />
      <div className="flex flex-row gap-4 justify-center items-center">
        <Switch />
        <DropDownMenu />
      </div>
    </header>
  );
};

export default Header;

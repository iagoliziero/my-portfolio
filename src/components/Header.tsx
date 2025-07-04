import Checkbox from "./CheckBox";
import Switch from "./Switch";

const Header = () => {
    return ( 
        <header className='fixed w-screen top-0 right-0 left-0 p-5 flex justify-between items-center blur-xs backdrop-blur-[0.5em] z-10 lg:justify-center lg:gap-60'> 
          <h1 className='text-slate-50'> IMAGEM</h1>
          <ul className='hidden md:style-header'> 
            <li>Inicio</li>
            <li>Sobre</li>
            <li>Stack</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
          <div className='flex flex-row gap-4 justify-center items-center'>
            <Switch />
            <Checkbox />
          </div>
        </header>
     );
}
 
export default Header;
import NavLink from "./NavLink";

const UlContent = (): JSX.Element => {
    return ( 
        <ul className="hidden md:style-header">
        <NavLink href="#1" label="Início" />
        <NavLink href="#2" label="Sobre" />
        <NavLink href="#3" label="Stack" />
        <NavLink href="#4" label="Projetos" />
        <NavLink href="#5" label="Currículo" />
        <NavLink href="#6" label="Contato" />
      </ul>
     );
}
 
export default UlContent;
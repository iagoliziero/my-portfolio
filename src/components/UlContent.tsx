import NavLink from "./NavLink";

const UlContent = (): JSX.Element => {
    return ( 
        <ul className="hidden md:style-header">
        <NavLink href="#" label="Início" />
        <NavLink href="#" label="Sobre" />
        <NavLink href="#" label="Stack" />
        <NavLink href="#" label="Projetos" />
        <NavLink href="#" label="Currículo" />
        <NavLink href="#" label="Contato" />
      </ul>
     );
}
 
export default UlContent;
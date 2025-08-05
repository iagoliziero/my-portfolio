import NavLink from "./NavLink";

const UlContent = (): JSX.Element => {
    return ( 
        <ul className="hidden md:style-header">
        <NavLink href="#inicio" label="Início" />
        <NavLink href="#sobre" label="Sobre" />
        <NavLink href="#stack" label="Stack" />
        <NavLink href="#projetos" label="Projetos" />
        <NavLink href="#curriculo" label="Currículo" />
        <NavLink href="#contato" label="Contato" />
      </ul>
     );
}
 
export default UlContent;
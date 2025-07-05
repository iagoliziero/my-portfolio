const UlContent = () => {
    return ( 
        <ul className="hidden md:style-header">
        <li className="relative">
          <a
            href="#"
            className="hover-effect-active relative inline-block pb-1 hover:text-purple-400"
          >
            Inicio
            <div className="hover-effect"></div>
          </a>
        </li>

        <li className="relative">
          <a
            href="#"
            className="hover-effect-active relative inline-block pb-1 hover:text-purple-400"
          >
            Sobre
            <div className="hover-effect"></div>
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="hover-effect-active relative inline-block pb-1 hover:text-purple-400"
          >
            Stack
            <div className="hover-effect"></div>
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="hover-effect-active relative inline-block pb-1 hover:text-purple-400"
          >
            Projetos
            <div className="hover-effect"></div>
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="hover-effect-active relative inline-block pb-1 hover:text-purple-400"
          >
            Contato
            <div className="hover-effect"></div>
          </a>
        </li>
      </ul>
     );
}
 
export default UlContent;
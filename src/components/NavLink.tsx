interface NavLinkProps {
    href: string;
    label: string;
};

const NavLink = ({href, label}: NavLinkProps): JSX.Element => {
    return ( 
        <li className="relative">
        <a
          href={href}
          className="hover-effect-active relative inline-block pb-1 hover:text-purple-400"
        >
          {label}
          <div className="hover-effect"></div>
        </a>
      </li>
     );
}
 
export default NavLink;
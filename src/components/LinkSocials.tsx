interface LinkSocialsProps {
    href: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
}

const LinkSocials = ({href, children, target, rel}: LinkSocialsProps ) => {
    return ( 
        <a
        href={href}
        target={target}
        rel={rel}
        className="bg-slate-200 bg-opacity-10 p-3 rounded-full cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:bg-opacity-15">
       {children}
   </a>
     );
}
 
export default LinkSocials;
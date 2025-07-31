interface Ilogo {
  href?: string
}

const Logo = ({href}: Ilogo): JSX.Element => {
    return ( 
        <a
      href={href}
      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold text-2xl ">
        &lt;IL Dev/&gt;
      </a>
     );
}
 
export default Logo;
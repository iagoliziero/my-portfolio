interface ButtonProjectsProps {
    children: React.ReactNode
}

const ButtonProjects = ({children}: ButtonProjectsProps): JSX.Element => {
    return ( 
        <button className="text-white/70 button-project p-3 font-semibold hover:bg-white/10 hover:rounded-full transition-all ease-in-out duration-300 "> {children} </button>
     );
}
 
export default ButtonProjects;
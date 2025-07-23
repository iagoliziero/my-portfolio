interface IH3 {
    children: React.ReactNode
}

const H3 = ({children}: IH3): JSX.Element => {
    return ( 
        <h3 className="text-xl font-semibold text-white/70"> {children} </h3>
     );
}
 
export default H3;
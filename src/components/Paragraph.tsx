interface ParagraphProps {
    children: React.ReactNode
}

const Paragraph = ({children}: ParagraphProps): JSX.Element => {
    return ( 
        <p className="text-[1.1rem] text-white/70">
            {children}
        </p>
     );
}
 
export default Paragraph;
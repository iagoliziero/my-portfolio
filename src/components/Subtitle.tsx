interface SubtitleProps {
  children: React.ReactNode
}

const Subtitle = ({children}: SubtitleProps): JSX.Element => {
    return ( 
        <>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold relative  text-center bg-gradient-to-r from-purple-500 to-pink-400 text-transparent bg-clip-text p-3">
            {" "}
            {children}
          </h2>
          <div className="relative h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-slate-300/30 border"></div>
        </>
     );
}
 
export default Subtitle;
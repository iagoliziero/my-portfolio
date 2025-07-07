interface SubtitleProps {
  children: React.ReactNode
}

const Subtitle = ({children}: SubtitleProps): JSX.Element => {
    return ( 
        
        <div className="max-w-48 md:max-w-56 lg:max-w-[40rem] flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold relative  text-center bg-gradient-to-r from-purple-500 to-pink-400 text-transparent bg-clip-text p-3">
            {" "}
            {children}
          </h2>
          <div className="relative h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-slate-300/30 border"></div>
          </div>
     );
}
 
export default Subtitle;
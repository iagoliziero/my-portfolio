const HeroButton = (): JSX.Element => {
    return ( 
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button className="p-5 w-52 text-[18px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:bg-purple-600 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:from-purple-700 hover:to-pink-700">
          <a href="https://github.com/iagoliziero" target="_blank"> 
          Ver Meus Projetos
          </a>
        </button>
        <button className="p-5 w-52 text-[18px] rounded-full border-2 border-purple-400 text-purple-400 font-semibold shadow-lgtransition  transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-purple-400 hover:text-white">
        <a href="#"> 
          Vamos Conversar
          </a>
        </button>
      </div>
     );
}
 
export default HeroButton;
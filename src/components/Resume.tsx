import { Download, FileText } from "lucide-react";
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";

const Resume = (): JSX.Element => {
    return ( 
        <section className="flex w-full flex-col justify-center items-center gap-6 text-center ">
          <div className="flex flex-col gap-5 items-center p-6 md:max-w-[30rem]">
            <Subtitle>Currículo</Subtitle>
            <Paragraph>
              {" "}
              Baixe meu currículo completo para mais detalhes sobre minha
              experiência profissional
            </Paragraph>
          </div>
          <div className="w-full p-6 flex md:max-w-[32rem] mil:max-w-[55rem] items-center justify-center">
            <div className="flex gap-5 flex-col bg-white/5 p-9 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300">
              <div className="flex flex-col gap-4 items-center">
                <span
                  className=" flex bg-gradient-to-r
                    p-4 rounded-full w-20
                    from-purple-600/20 to-pink-600/20
                    border border-purple-400/30
                    hover:from-purple-600/30 hover:to-pink-600/30"
                >
                  <FileText size={48} className="text-purple-300" />
                </span>
                {/* Hero text */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-white/70">
                    {" "}
                    Currículo Completo{" "}
                  </h2>
                  <Paragraph>Acesse informações detalhadas sobre formação, experiências e certificações </Paragraph>
                </div>
                <a href="#" className="mt-5 flex items-center justify-center gap-2
                    w-48 p-3 text-[16px]
                    bg-gradient-to-r from-purple-600 to-pink-600
                    rounded-xl text-white font-semibold shadow-lg
                    hover:bg-purple-600
                    transform transition hover:-translate-y-1
                    motion-reduce:transition-none motion-reduce:hover:transform-none
                    hover:from-purple-700 hover:to-pink-700">
                  <span>
                  <Download size={20} />
                  </span>
                  Baixar Currículo
                </a>
                {/* Hero text */}
              </div>
            </div>
          </div>
        </section>
     );
}
 
export default Resume;
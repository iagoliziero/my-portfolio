import { Download, FileText } from "lucide-react";
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";
import H3 from "./H3";

const Resume = (): JSX.Element => {
    return ( 
        <section className="flex w-full flex-col justify-center items-center gap-6 text-center">
          <div className="flex flex-col gap-5 items-center p-6 md:max-w-[30rem] mil:min-w-[40rem]">
            <Subtitle>Currículo</Subtitle>
            <Paragraph>
              {" "}
              Baixe meu currículo completo para mais detalhes sobre minha
              experiência profissional
            </Paragraph>
          </div>
          <div className="p-6 w-full md:max-w-[33rem] mil:min-w-[57rem] items-center justify-center">
            <div className="flex gap-5 flex-col bg-white/5 p-6 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300">
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
                  <H3>
                    {" "}
                    Currículo Completo{" "}
                  </H3>
                  <Paragraph>Acesse informações detalhadas sobre formação, experiências e certificações </Paragraph>
                </div>
                <a href="/curriculo-pt.pdf" download className="mt-5 flex items-center justify-center gap-2
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
import { Code, Coffee, Heart, MapPin } from "lucide-react";
import Subtitle from "./Subtitle";
import Paragraph from "./Paragraph";

const AboutMe = (): JSX.Element => {
    return ( 

        <div className="max-h-0 relative top-[25rem] lg:top-[35rem] flex flex-col  items-center gap-10">
        <div className="max-w-48 md:max-w-56 lg:max-w-[40rem] ">
          <Subtitle> 
          Sobre Mim
          </Subtitle>
        </div>
        <div>
          <img className="w-80 rounded-full border" src="../public/iago.png" alt="Imagem iago" />
        </div>
        <section className="flex flex-col justify-center items-center p-5 gap-5 mil:flex-row">
          <div className="flex gap-5 flex-col mil:max-w-[25rem]  md:max-w-[30rem] bg-white/5 p-9 rounded-xl border-slate-300/30 border">
            <Paragraph> 
            Olá! Sou Iago Liziero,estudante de Análise e Desenvolvimento de
              Sistemas na FIAP e ETEC, apaixonado por criar soluções digitais
              que unam tecnologia, design e performance.
            </Paragraph>
            <Paragraph>
              Atuo como desenvolvedor full stack, transformando ideias em
              aplicações eficientes e modernas, sempre focado em entregar ótimas
              experiências para o usuário. Acredito que cada linha de código
              deve ter propósito e que a tecnologia é uma ferramenta poderosa
              para resolver problemas reais e gerar impacto positivo.
            </Paragraph>
            <Paragraph> 
              Sou de São Paulo, SP, e estou em busca de oportunidades para
              trabalhar na área de desenvolvimento, contribuindo com projetos
              desafiadores e crescendo profissionalmente.
            </Paragraph>
          </div>
          <section className="flex flex-col gap-5  md:max-w-[30rem]">
            <div className="flex gap-5 flex-col mil:max-w-[25rem] bg-white/5 p-6 rounded-xl border-slate-300/30 border">
              <div className="flex gap-3 items-center">
                <span><Code className="text-purple-400" width={24} height={24} /></span>
                <h3 className="text-xl font-semibold text-white/70">Especialização </h3>
              </div>
              <p className="text-[1rem] text-white/70">
                {" "}
                Desenvolvimento end-to-end com foco em performance, UX e
                escalabilidade
              </p>
            </div>
            <div className="flex gap-5 flex-col mil:max-w-[25rem] bg-white/5 p-6 rounded-xl border-slate-300/30 border">
              <div className="flex gap-3 items-center">
                <span><Heart className="text-red-400" width={24} height={24} /></span>
                <h3 className="text-xl font-semibold text-white/70">Paixão </h3>
              </div>
              <p className="text-[1rem] text-white/70">
                {" "}
                Criar interfaces intuitivas e arquiteturas robustas que impactam positivamente usuários
              </p>
            </div>
            <div className="flex gap-5 flex-col mil:max-w-[25rem] bg-white/5 p-6 rounded-xl border-slate-300/30 border">
              <div className="flex gap-3 items-center">
                <span><Coffee className="text-yellow-400" width={24} height={24} /></span>
                <h3 className="text-xl font-semibold text-white/70">Metodologia </h3>
              </div>
              <p className="text-[1rem] text-white/70">
                {" "}
                Desenvolvimento ágil, código limpo e colaboração efetiva em equipe
              </p>  
            </div>

            <div className="flex gap-5 flex-col mil:max-w-[25rem] bg-white/5 p-6 rounded-xl border-slate-300/30 border">
              <div className="flex gap-3 items-center">
                <span><MapPin className="text-green-400" width={24} height={24} /></span>
                <h3 className="text-xl font-semibold text-white/70">Localização </h3>
              </div>
              <p className="text-[1rem] text-white/70">
                {" "}
                Atualmente moro em Taboão da Serra, SP
              </p>  
            </div>
          </section>
        </section>
      </div>
     );
}
 
export default AboutMe
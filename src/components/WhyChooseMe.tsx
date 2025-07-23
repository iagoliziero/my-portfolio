import H3 from "./H3";
import WhyChooseMeSection from "./WhyChooseMeSection";

const WhyChooseMe = ():JSX.Element => {
    return ( 
        <section className="p-6 w-full md:max-w-[33rem] mil:min-w-[35rem] items-center justify-center">
              <div className="flex flex-col items-start justify-center gap-5 bg-white/5 p-6 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300">
                <H3>Por que me escolher? </H3>
                <WhyChooseMeSection>
                  {" "}
                  Comprometimento com prazos e qualidade em todas as entregas{" "}
                </WhyChooseMeSection>
                <WhyChooseMeSection>
                  {" "}
                  Raciocínio lógico e facilidade para aprender novas tecnologias{" "}
                </WhyChooseMeSection>
                <WhyChooseMeSection>
                  {" "}
                  Trabalho bem em equipe, com boa comunicação e escuta ativa{" "}
                </WhyChooseMeSection>
                <WhyChooseMeSection>
                  {" "}
                  Busco constante evolução profissional e estou sempre estudando{" "}
                </WhyChooseMeSection>
                <WhyChooseMeSection>
                  {" "}
                  Experiência prática com projetos reais e código limpo
                </WhyChooseMeSection>
              </div>
            </section>
     );
}
 
export default WhyChooseMe;
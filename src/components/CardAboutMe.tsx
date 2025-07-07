import Paragraph from "./Paragraph";

const CardAboutMe = (): JSX.Element => {
    return ( 
        <div className="flex gap-5 flex-col mil:max-w-[25rem]  md:max-w-[30rem] bg-white/5 p-9 rounded-xl border-slate-300/30 border">
          <Paragraph>
            Olá! Sou Iago Liziero,estudante de Análise e Desenvolvimento de
            Sistemas na FIAP e ETEC, apaixonado por criar soluções digitais que
            unam tecnologia, design e performance.
          </Paragraph>
          <Paragraph>
            Atuo como desenvolvedor full stack, transformando ideias em
            aplicações eficientes e modernas, sempre focado em entregar ótimas
            experiências para o usuário. Acredito que cada linha de código deve
            ter propósito e que a tecnologia é uma ferramenta poderosa para
            resolver problemas reais e gerar impacto positivo.
          </Paragraph>
          <Paragraph>
            Sou de São Paulo, SP, e estou em busca de oportunidades para
            trabalhar na área de desenvolvimento, contribuindo com projetos
            desafiadores e crescendo profissionalmente.
          </Paragraph>
        </div>
     );
}
 
export default CardAboutMe;
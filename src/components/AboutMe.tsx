import { Code, Coffee, Heart, MapPin } from "lucide-react";
import Subtitle from "./Subtitle";
import SectionCards from "./SectionCards";
import CardAboutMe from "./CardAboutMe";
import LeftOrRight from "../animations/LeftOrRight";

const AboutMe = (): JSX.Element => {
  return (
    <> 
       <div id="2" className="flex flex-col items-center gap-10">
        <LeftOrRight position="right">
        <Subtitle>Sobre Mim</Subtitle>
      <div>
        <img
          className="w-80 rounded-full border"
          src="/iago.png"
          alt="Imagem iago"
        />
      </div>
      </LeftOrRight>
      <section className="flex flex-col justify-center items-center p-5 gap-5 mil:flex-row">
       <CardAboutMe />
        <section className="flex flex-col gap-5  md:max-w-[30rem]">
          <SectionCards
            icon={<Code width={24} height={24} />}
            className="text-purple-400"
            title="Especialização"
          >
            Desenvolvimento end-to-end com foco em performance, UX e
            escalabilidade
          </SectionCards>

          <SectionCards
            icon={<Heart width={24} height={24} />}
            className="text-red-400"
            title="Paixão"
          >
            Criar interfaces intuitivas e arquiteturas robustas que impactam
            positivamente usuários
          </SectionCards>

          <SectionCards
            icon={<Coffee width={24} height={24} />}
            className="text-yellow-400"
            title="Metodologia"
          >
            Desenvolvimento ágil, código limpo e colaboração efetiva em equipe
          </SectionCards>

          <SectionCards
            icon={<MapPin width={24} height={24} />}
            className="text-green-400"
            title="Localização"
          >
            Atualmente moro em Taboão da Serra, SP
          </SectionCards>
        </section>
      </section>
    </div>
    </>
   
  );
};

export default AboutMe;

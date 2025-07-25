import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";
import WhyChooseMe from "./WhyChooseMe";
import CardContact from "./CardContact";
import Contact from "./Contact";

const GetContact = (): JSX.Element => {
    return ( 
        <section className="flex w-full flex-col justify-center items-center gap-6 mt-10 text-center">
          <div className="flex flex-col gap-5 items-center p-6 md:max-w-[30rem] mil:min-w-[40rem]">
            <Subtitle>Entre em Contato</Subtitle>
            <Paragraph>
              {" "}
              Estou aberto a oportunidades, colaborações ou apenas um bom papo
              sobre tecnologia. Fique à vontade para me chamar
            </Paragraph>
          </div>
          <div className="flex flex-wrap justify-center mil:flex-none mil:grid mil:grid-cols-2 gap-6 mil:gap-0">
           <div className="flex flex-col gap-6"> 
            <Contact />
            <WhyChooseMe />
           </div>
            <CardContact />
          </div>
        </section>
     );
}
 
export default GetContact;
import { Mail, MapPin, Phone } from "lucide-react";
import H3 from "./H3";
import InfosContact from "./infosContact";

const Contact = (): JSX.Element => {
  return (
      <section className="px-6 mil:px-3 items-center justify-center w-screen md:max-w-[33rem] mil:w-[30rem] ">
        <div className="flex flex-col items-start justify-center gap-5 bg-white/5 p-6 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300">
          <H3>Informações de Contato</H3>
          <InfosContact
            contact="contatoiagoliziero@gmail.com"
            plataformContact="Email"
            icon={<Mail size={24} />}
          />
          <InfosContact
            contact="+55 (11) 91962-0763"
            plataformContact="Telefone"
            icon={<Phone size={24} />}
          />
          <InfosContact
            contact="Taboão da Serra, SP "
            plataformContact="Localização"
            icon={<MapPin size={24} />}
          />
        </div>
      </section>
  );
};

export default Contact;

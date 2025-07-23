import Paragraph from "./Paragraph";

interface IinfosContact {
    contact: string,
    plataformContact: string,
    icon: JSX.Element
}

const InfosContact = ({contact, icon, plataformContact}: IinfosContact): JSX.Element => {
  return (
    <div className="flex items gap-5">
      <span
        className="mt-2 flex items-center justify-center gap-2
                    p-3
                    bg-gradient-to-r from-purple-600 to-pink-600
                    rounded-full text-white font-semibold shadow-lg
                    hover:bg-purple-600
                    hover:from-purple-700 hover:to-pink-700"
      >
        {" "}
        {icon}
      </span>
      <div className="flex flex-col justify-center items-start">
        <h4 className="text-white/30 text-[14px]"> {plataformContact}</h4>
        <Paragraph> {contact} </Paragraph>
      </div>
    </div>
  );
};

export default InfosContact;

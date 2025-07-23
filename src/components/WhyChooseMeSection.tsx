import { CircleCheckBig } from "lucide-react";
import Paragraph from "./Paragraph";

interface IwhyChooseMe {
  children: React.ReactNode;
}

const WhyChooseMeSection = ({ children}: IwhyChooseMe): JSX.Element => {
  return (
    <div className="flex gap-3 items-center">
      <span className="text-purple-400/70"> <CircleCheckBig size={24} /></span>
      <Paragraph> {children}</Paragraph>
    </div>
  );
};

export default WhyChooseMeSection;

import MyMarquee from "./MyMarquee";
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";

const TechStack = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col justify-center items-center gap-6 text-center mt-20 ">
      <div className="flex flex-col gap-5 items-center p-2 md:max-w-[30rem] mil:max-w-full">
        <Subtitle>Stack Tecnológica </Subtitle>
        <Paragraph>
          {" "}
          Tecnologias que utilizo para criar soluções completas e inovadoras{" "}
        </Paragraph>
      </div>
      <div className="w-full flex md:max-w-[32rem] mil:max-w-[55rem]">
        <MyMarquee />
      </div>
    </section>
  );
};

export default TechStack;

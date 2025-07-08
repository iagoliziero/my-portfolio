import { Rocket } from "lucide-react";
import { TechStudyInterface } from "../interfaces/TechStudyInterface";
import Paragraph from "./Paragraph";
import { useState } from "react";

const techStudyObj: TechStudyInterface[] = [
  { id: 1, tech: "Java" },
  { id: 2, tech: "AWS" },
  { id: 3, tech: "DevOps" },
  { id: 4, tech: "Cloud" },
  { id: 5, tech: "TypeScript" },
];

const TechStudy = (): JSX.Element => {
  const [tech] = useState<TechStudyInterface[]>(techStudyObj);

  return (
    <section className="p-6">
      <div className="flex flex-col items-center gap-6 text-center  w-full bg-white/5 p-6 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300 ">
        <div className="flex gap-2">
            <span className="text-white/70"> <Rocket /> </span>
          <h3 className="text-xl font-semibold text-white/70">
            {" "}
            Sempre Evoluindo{" "}
          </h3>
        </div>
        <Paragraph>
          {" "}
          A tecnologia nunca para, e eu também não. Sempre explorando novas
          ferramentas e frameworks.{" "}
        </Paragraph>
        <div className="flex gap-3 flex-wrap items-center justify-center">
          {tech.map((tech) => (
            <div
              key={tech.id}
              className="flex bg-gradient-to-r p-2 rounded-3xl from-purple-600/20 to-pink-600/20 border border-purple-400/30 hover:from-purple-600/30 hover:to-pink-600/30 "
            >
              <p className="text-purple-300"> {tech.tech} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStudy;

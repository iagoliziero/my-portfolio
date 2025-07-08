import Marquee from "react-fast-marquee";
import ImgMarque from "./ImgMarquee";


const MyMarquee = () => (
  <Marquee
    speed={80}
    direction="left"
    pauseOnHover={true}
    className=" m-5 overflow-hidden w-full bg-white/5 p-6 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300"
  >
    <div className="flex gap-5">
      <br />
      <ImgMarque nameImg="nodedotjs" />
      <ImgMarque nameImg="express" />
      <ImgMarque nameImg="javascript" />
      <ImgMarque nameImg="html5" />
      <ImgMarque nameImg="css" />
      <ImgMarque nameImg="git" />
      <ImgMarque nameImg="react" />
      <ImgMarque nameImg="vite" />
      <ImgMarque nameImg="tailwindcss" />
      <ImgMarque nameImg="prisma" />
      <ImgMarque nameImg="mysql" />
      <ImgMarque nameImg="mongodb" />
      <ImgMarque nameImg="figma" />
      <ImgMarque nameImg="nodedotjs" />
      <ImgMarque nameImg="git" />
      
      </div>
  </Marquee>
);

export default MyMarquee;

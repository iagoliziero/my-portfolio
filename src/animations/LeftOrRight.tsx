import {useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ILeftOrRight {
    children: React.ReactNode,
    position: "right" | "left"
}

gsap.registerPlugin(ScrollTrigger);

export default function LeftOrRight({ children, position }: ILeftOrRight) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;

    if(!el) return;

    const fromVars = {
        opacity: 0,
        x: position === "right" ? "500" : "-500"
    }

    const toVars = {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: 'play none none reverse',
        },
      };
      
    gsap.fromTo(el, fromVars, toVars)

  }, [position]);

  return (
    <div ref={sectionRef} className="w-full">
      {children}
    </div>
  );
}
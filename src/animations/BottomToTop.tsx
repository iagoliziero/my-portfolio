import {useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

{/* GSAP Animation Display - Bottom -> Top */}

interface IBottomToTop {
    children: React.ReactNode,
}

gsap.registerPlugin(ScrollTrigger);

export default function BottomToTop({ children }: IBottomToTop) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 500 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      {children}
    </div>
  );
}
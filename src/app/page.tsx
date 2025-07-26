

import HomeSection from "./components/HomeSection";
import ServiceSection from "./components/ServiceSection";
import IntroduceSection from "./components/IntroduceSection";
import OptionalSection from "./components/OptionalSection";


export default function Home() {
  return (
    <main className="min-h-screen justify-between pt-20">
      <HomeSection />
      <ServiceSection />
      <OptionalSection />
      <IntroduceSection />
    </main>
  );
}


{/*
  'use client';

import { useEffect, useRef } from 'react';
import HomeSection from "./components/HomeSection";
import ServiceSection from "./components/ServiceSection";
import OptionalSection from "./components/OptionalSection";
import IntroduceSection from "./components/IntroduceSection";

export default function Home() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Clear previous timeout
      clearTimeout(timeout);

      // Set new timeout
      timeout = setTimeout(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        let minDiff = Infinity;
        let closestRef: HTMLDivElement | null = null;

        sectionRefs.forEach((ref) => {
          if (!ref.current) return;
          const offsetTop = ref.current.offsetTop;
          const diff = Math.abs(offsetTop - scrollY);
          if (diff < minDiff) {
            minDiff = diff;
            closestRef = ref.current;
          }
        });

        // Scroll to the closest section
        if (closestRef) {
          (closestRef as HTMLDivElement).scrollIntoView({ behavior: 'smooth' });
        }
      }, 200); // wait 200ms after scroll stops
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="min-h-screen pt-20">
      <div ref={sectionRefs[0]}>
        <HomeSection />
      </div>
      <div ref={sectionRefs[1]}>
        <ServiceSection />
      </div>
      <div ref={sectionRefs[2]}>
        <OptionalSection />
      </div>
      <div ref={sectionRefs[3]}>
        <IntroduceSection />
      </div>
    </main>
  );
}

  */}
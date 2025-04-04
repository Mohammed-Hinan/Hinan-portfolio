"use client";

import { useEffect, useRef } from "react";

export const ParallaxBackground = () => {
  const element1Ref = useRef<HTMLDivElement>(null);
  const element2Ref = useRef<HTMLDivElement>(null);
  const element3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (element1Ref.current) {
        element1Ref.current.style.transform = `translateY(${scrollY * 0.8}px)`;
      }
      
      if (element2Ref.current) {
        element2Ref.current.style.transform = `translateY(${scrollY * 2.0}px)`;
      }
      
      if (element3Ref.current) {
        element3Ref.current.style.transform = `translateY(${scrollY * 1.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        ref={element1Ref} 
        data-speed="0.8" 
        className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
      />
      <div 
        ref={element2Ref} 
        data-speed="2.0" 
        className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
      />
      <div 
        ref={element3Ref} 
        data-speed="1.2" 
        className="absolute bottom-[15%] left-[20%] w-80 h-80 rounded-full bg-accent/5 blur-3xl"
      />
    </div>
  );
};
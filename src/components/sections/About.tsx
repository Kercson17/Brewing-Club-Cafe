"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".about-image-container", {
      x: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
    
    gsap.from(".about-content", {
      x: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-accent px-6 lg:px-12 max-w-[1600px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 relative about-image-container">
          <div className="absolute top-[-20px] left-[-20px] w-full h-full border border-primary z-0 hidden md:block"></div>
          <div className="relative z-10 shadow-xl w-full h-[600px]">
            <Image 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Barista brewing coffee" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="lg:w-1/2 about-content">
          <h4 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">The Story</h4>
          <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">Meticulously Crafted <br /> Every Single Day.</h2>
          <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
            Brewing Club Co. was born out of a profound passion for the bean and a mission to support the Filipino coffee community. We source exclusively from sustainable, high-altitude farms across the Philippines, prioritizing direct and transparent relationships with our local growers.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
            Our master roasters meticulously profile each batch to highlight the unique flavors of the Philippine terroir, ensuring that every cup poured is a cinematic experience for your palate.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg italic">
            A portion of every cup served goes towards scholarships for underprivileged Filipino youth through the Batang Pinangga Foundation.
          </p>          <div className="relative h-12 w-48 opacity-60">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
              alt="Signature" 
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

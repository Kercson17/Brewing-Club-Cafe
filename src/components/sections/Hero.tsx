"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(".hero-video-container", 
      { opacity: 0, scale: 1.1 }, 
      { opacity: 1, scale: 1, duration: 2 }
    )
    .fromTo(".hero-content > *", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 },
      0.4 // Start text animation shortly after video starts revealing
    );
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary">
      <motion.div 
        style={{ y: yHero }}
        className="absolute inset-0 w-full h-full hero-video-container"
      >
        {/* Advanced Cinematic Overlay: Warm gradient for premium feel and text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-secondary/40 to-secondary/80 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay"></div>
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.1] saturate-[1.1] sepia-[0.15]"
        >
          <source src="/FRONT VIDEO.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Coffee Background" 
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20 hero-content">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6 font-medium">
          Est. 2024 • Specialty Roasters
        </p>

        <h1 className="font-serif text-accent mb-10 leading-[1.1] tracking-tight">
          <span className="text-4xl md:text-6xl lg:text-7xl block mb-2">The Art</span>
          <span className="text-3xl md:text-4xl lg:text-5xl block mb-2 opacity-80">of</span>
          <span className="text-5xl md:text-7xl lg:text-8xl block italic font-light">Exceptional Coffee</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="#menu" className="group flex items-center justify-center gap-4 bg-transparent border border-white/30 text-white px-10 py-4 rounded-full hover:bg-white hover:text-secondary transition-all duration-300">
            <span className="tracking-widest uppercase text-xs font-semibold">Explore Menu</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://brewingclub.ph/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-4 bg-primary border border-primary text-white px-10 py-4 rounded-full hover:bg-[#A6754B] hover:border-[#A6754B] transition-all duration-300">
            <span className="tracking-widest uppercase text-xs font-semibold">Shop Products</span>
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { featuredCoffees } from '@/constants/coffeeData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';

export default function Featured() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".coffee-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="featured" ref={containerRef} className="py-24 md:py-32 bg-accent px-6 lg:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-6">
        <div>
          <h4 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">Our Roasts</h4>
          <h2 className="text-4xl md:text-6xl font-serif text-secondary">Featured Coffees</h2>
        </div>
        <a 
          href="https://brewingclub.ph/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.2em] uppercase border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-colors font-medium flex items-center gap-2"
        >
          Shop All Beans <ChevronRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {featuredCoffees.map((coffee) => (
          <div key={coffee.name} className="group cursor-pointer coffee-card">
            <div className="overflow-hidden mb-6 rounded-sm relative h-[400px]">
              <Image 
                src={coffee.image} 
                alt={coffee.name} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-serif mb-2 text-center">{coffee.name}</h3>
            <div className="flex flex-col items-center gap-1 text-sm text-center">
              <span className="text-gray-500">{coffee.notes}</span>
              <span className="text-primary uppercase tracking-wider text-xs font-semibold">{coffee.roast}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

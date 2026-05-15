"use client";

import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/constants/testimonials';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section className="py-24 md:py-32 bg-secondary text-accent px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto text-center" ref={containerRef}>
        <h4 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">Community</h4>
        <h2 className="text-4xl md:text-6xl font-serif mb-16">Words from our Guests</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className="bg-white/5 p-8 md:p-10 rounded-sm border border-white/10 text-left hover:border-primary/50 transition-colors testimonial-card flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-8 h-[100px] italic">"{testimonial.text}"</p>
              <div className="mt-auto">
                <h5 className="font-serif text-xl">{testimonial.name}</h5>
                <span className="text-xs tracking-widest uppercase text-primary">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

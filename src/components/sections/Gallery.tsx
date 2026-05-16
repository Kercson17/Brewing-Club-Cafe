"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const galleryImages = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
];

const marqueeText = "BREWING CLUB CO. • ";

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".gallery-item", {
      opacity: 0,
      scale: 0.95,
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
    <section id="gallery" ref={containerRef} className="bg-secondary overflow-hidden">
      {/* Infinite Scrolling Banner */}
      <div className="py-8 md:py-12 border-y border-white/5 relative bg-secondary z-10">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-5xl md:text-8xl font-serif text-white/5 uppercase tracking-[0.3em] px-4">
                {marqueeText}
              </span>
            ))}
          </motion.div>
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-5xl md:text-8xl font-serif text-white/5 uppercase tracking-[0.3em] px-4">
                {marqueeText}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 pt-12 md:pt-20 pb-4">
        {galleryImages.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-sm h-[300px] md:h-[450px] relative gallery-item group">
            <Image 
              src={src} 
              alt={`Gallery Image ${i + 1}`} 
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

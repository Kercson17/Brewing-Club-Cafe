"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const galleryImages = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1495474472207-464a4ad545cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507133750070-4ed01eb5822b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

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
    <section id="gallery" ref={containerRef} className="py-4 bg-secondary">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {galleryImages.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-sm h-[300px] relative gallery-item">
            <Image 
              src={src} 
              alt={`Gallery Image ${i + 1}`} 
              fill
              className="object-cover hover:scale-110 transition-transform duration-700" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

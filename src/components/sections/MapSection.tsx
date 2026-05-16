"use client";

import React, { useRef } from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function MapSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".map-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  // Brewing Club Co. by Netibu Coffee exact location
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.3197825023955!2d123.83416567584065!3d10.251849268892121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a97900765bf1f5%3A0x39124e26279489b9!2sBrewing%20Club%20Co.%20by%20Netibu%20Coffee!5e0!3m2!1sen!2sph!4v1715760000000!5m2!1sen!2sph";

  return (
    <section ref={containerRef} className="relative py-20 bg-accent overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 items-center bg-white p-6 lg:p-10 rounded-sm shadow-sm border border-gray-100">
          
          {/* Info Side */}
          <div className="lg:w-2/5 map-content">
            <h4 className="text-primary tracking-[0.2em] uppercase text-[10px] mb-2 font-semibold">Location</h4>
            <h2 className="text-3xl md:text-4xl font-serif text-secondary mb-6">Visit the Club</h2>
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-base">
              Experience the best of Philippine specialty coffee. Visit us at our Talisay location and enjoy a cup crafted with passion and precision.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h5 className="font-semibold text-[11px] uppercase tracking-wider text-secondary">Address</h5>
                  <p className="text-gray-500 font-light text-sm">Brewing Club Co. by Netibu Coffee, Talisay City, Cebu</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Brewing+Club+Co.+by+Netibu+Coffee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full text-[10px] font-semibold tracking-widest uppercase hover:bg-primary transition-colors duration-300 shadow-md"
              >
                <Navigation size={12} /> Get Directions
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-3/5 w-full h-[300px] lg:h-[350px] rounded-sm overflow-hidden shadow-lg relative map-content group">
            {/* Cinematic Overlay - subtle warm tint to match theme */}
            <div className="absolute inset-0 pointer-events-none bg-primary/5 z-10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
            
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05) brightness(0.98)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brewing Club Cafe Location"
              className="relative z-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-secondary text-primary"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Coffee Cup SVG */}
        <div className="relative mb-8">
          {/* Steam lines */}
          <div className="flex gap-2 justify-center mb-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  y: [-5, -25],
                  x: [0, i % 2 === 0 ? 5 : -5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.6,
                  ease: "easeInOut" 
                }}
                className="w-[2px] h-8 bg-primary/40 rounded-full blur-[1px]"
              />
            ))}
          </div>
          
          {/* Cup */}
          <motion.svg 
            width="80" 
            height="60" 
            viewBox="0 0 80 60" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Cup Body */}
            <path 
              d="M15 5C15 5 15 45 40 45C65 45 65 5 65 5H15Z" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinejoin="round"
            />
            {/* Cup Handle */}
            <path 
              d="M65 15C72 15 77 18 77 25C77 32 72 35 65 35" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            {/* Plate/Saucer */}
            <path 
              d="M10 55H70" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
          </motion.svg>
        </div>

        {/* Brand Text */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-sm tracking-[0.4em] uppercase font-semibold mb-2">Brewing</span>
            <div className="h-[1px] w-12 bg-primary/50 mb-2"></div>
            <span className="text-xs tracking-[0.2em] uppercase text-gray-400">Club Co.</span>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 50% 50%, #C18C5D 0%, transparent 70%)' 
        }}
      />
    </motion.div>
  );
}

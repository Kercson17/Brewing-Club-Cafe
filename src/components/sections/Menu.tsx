"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, MenuCategory, MenuItem } from '@/constants/menuData';
import Image from 'next/image';

export default function Menu() {
  const [activeMenuCategory, setActiveMenuCategory] = useState<MenuCategory>("Coffee");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary text-accent px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h4 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">Digital Menu</h4>
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Handcrafted Selections</h2>
          
          <div className="sticky top-[70px] md:relative md:top-0 z-30 bg-secondary/95 backdrop-blur-md md:bg-transparent -mx-6 px-6 py-4 md:p-0 border-b border-white/5 md:border-none overflow-x-auto no-scrollbar whitespace-nowrap">
            <div className="flex justify-start md:justify-center gap-4 md:gap-8 max-w-[1200px] mx-auto">
              {(Object.keys(menuData) as MenuCategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveMenuCategory(category);
                    // Scroll slightly up when category changes to show items better on mobile
                    if (window.innerWidth < 768) {
                      const menuSection = document.getElementById('menu');
                      if (menuSection) {
                        const topOffset = menuSection.offsetTop + 100;
                        window.scrollTo({ top: topOffset, behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`relative px-4 py-2 text-sm tracking-[0.15em] uppercase transition-colors flex-shrink-0 ${
                    activeMenuCategory === category ? 'text-primary' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category}
                  {activeMenuCategory === category && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenuCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
            >
              {menuData[activeMenuCategory].map((item) => (
                <div 
                  key={item.name} 
                  className="flex flex-col group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif group-hover:text-primary transition-colors">{item.name}</h3>
                    <div className="flex-grow border-b border-white/20 mx-4 border-dashed relative top-[-6px]"></div>
                    <span className="text-lg font-medium">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        </div>

        {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-secondary border border-white/10 max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 aspect-square">
                  <Image 
                    src={selectedItem.image} 
                    alt={selectedItem.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-serif mb-2 text-primary">{selectedItem.name}</h3>
                  <div className="text-2xl font-medium mb-4 text-white">{selectedItem.price}</div>
                  <div className="w-12 h-1 bg-primary/30 mb-6"></div>
                  <p className="text-gray-400 leading-relaxed text-lg italic">
                    "{selectedItem.desc}"
                  </p>
                  
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="mt-8 text-sm uppercase tracking-widest text-primary hover:text-white transition-colors self-start"
                  >
                    Back to Menu
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, MenuCategory } from '@/constants/menuData';

export default function Menu() {
  const [activeMenuCategory, setActiveMenuCategory] = useState<MenuCategory>("Coffee");

  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary text-accent px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">Digital Menu</h4>
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Handcrafted Selections</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {(Object.keys(menuData) as MenuCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveMenuCategory(category)}
                className={`relative px-4 py-2 text-sm tracking-[0.15em] uppercase transition-colors ${
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
                <div key={item.name} className="flex flex-col group">
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
        
        <div className="mt-20 text-center">
          <button className="px-10 py-4 border border-primary text-primary uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-300 rounded-sm">
            Download Full PDF Menu
          </button>
        </div>
      </div>
    </section>
  );
}

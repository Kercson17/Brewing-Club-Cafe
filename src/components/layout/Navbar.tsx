"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/constants/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass-nav shadow-lg' : 'py-8 bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif tracking-widest font-bold z-50 text-white">
          BREWING CLUB <span className="text-primary italic font-light">CAFE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-14">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] tracking-[0.2em] uppercase font-medium py-2 transition-colors text-gray-200 hover:text-primary"
            >
              {link}
            </a>
          ))}
          <a 
            href="https://brewingclub.ph/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[13px] tracking-[0.2em] uppercase font-medium py-2 transition-colors text-gray-200 hover:text-primary"
          >
            Shop
          </a>
          <a href="#reserve" className="px-8 py-3 bg-primary text-white text-[13px] tracking-[0.2em] uppercase hover:bg-[#A6754B] transition-all duration-300 rounded-sm shadow-md hover:shadow-xl transform hover:-translate-y-0.5 inline-block">
            Reserve
          </a>
        </div>

        <button 
          className="lg:hidden text-white p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-secondary pt-32 pb-12 px-6 flex flex-col items-center gap-8 lg:hidden overflow-y-auto z-40"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1) }}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-accent text-2xl font-serif tracking-widest uppercase hover:text-primary transition-colors py-2"
              >
                {link}
              </motion.a>
            ))}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href="https://brewingclub.ph/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary text-2xl font-serif tracking-widest uppercase transition-colors py-2"
            >
              Shop Products
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              href="#reserve"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 px-12 py-4 bg-primary text-white tracking-[0.2em] uppercase text-center rounded-sm w-full max-w-xs shadow-lg text-sm block"
            >
              Reserve a Table
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

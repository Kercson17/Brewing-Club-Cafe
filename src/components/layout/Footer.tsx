"use client";

import { navLinks } from '@/constants/navigation';
import { Instagram, Facebook, MapPin, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#120E0D] text-accent pt-24 pb-12 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
        
        {/* Brand Column */}
        <div>
          <div className="text-2xl font-serif tracking-widest font-bold mb-6">
            BREWING CLUB <span className="text-primary italic font-light">CAFE</span>
          </div>
          <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm">
            Elevating the daily ritual of coffee through meticulous sourcing, precision roasting, and cinematic spaces designed for connection.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <Facebook size={16} />
            </a>
          </div>
        </div>
        
        {/* Links Column */}
        <div>
          <h5 className="font-serif text-xl mb-6">Quick Links</h5>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors text-xs tracking-[0.2em] uppercase">
                  {link}
                </a>
              </li>
            ))}
            <li><a href="https://brewingclub.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xs tracking-[0.2em] uppercase">Shop Products</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h5 className="font-serif text-xl mb-6">Visit Us</h5>
          <ul className="space-y-4 text-gray-400 font-light text-sm">
            <li className="flex items-start gap-4">
                  <MapPin size={18} className="text-primary mt-1 shrink-0" />
                  <span className="leading-relaxed">South Coast Center, Linao,<br/>Talisay City, Cebu, 6045</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span>+63 994 579 2055</span>
                </li>          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h5 className="font-serif text-xl mb-6">Newsletter</h5>
          <p className="text-gray-400 font-light mb-6 text-sm">Subscribe for exclusive bean releases, brew guides, and private tasting events.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white/5 border border-white/10 px-4 py-3 w-full focus:outline-none focus:border-primary text-sm text-white placeholder-gray-500 transition-colors rounded-l-sm" 
              required
            />
            <button type="submit" className="bg-primary px-6 flex items-center justify-center hover:bg-[#A6754B] transition-colors rounded-r-sm">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="max-w-[1600px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] sm:text-xs text-gray-500 tracking-[0.2em] uppercase">
        <p>&copy; {new Date().getFullYear()} Brewing Club Cafe. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

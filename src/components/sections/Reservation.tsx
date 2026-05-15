"use client";

import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

export default function Reservation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Reservation confirmed! See you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error submitting reservation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reserve" className="py-24 md:py-32 bg-accent px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto bg-white shadow-xl border border-gray-100 p-8 md:p-16 lg:p-24 relative z-10 rounded-sm flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h4 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">Join Us</h4>
          <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-6">Reserve a Table</h2>
          <p className="text-gray-600 font-light mb-10 leading-relaxed text-lg">
            Experience the perfect cup in a space designed for connection. Walk-ins are always welcome, but we recommend booking ahead for weekend brunches and large groups.
          </p>
          
          <div className="space-y-6 text-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h5 className="font-semibold text-sm uppercase tracking-wider mb-1">Opening Hours</h5>
                <p className="text-gray-600 font-light">Daily from 10:00 AM to 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-500 font-semibold">First Name</label>
                <input name="firstName" required type="text" className="border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="John" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-500 font-semibold">Last Name</label>
                <input name="lastName" required type="text" className="border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-500 font-semibold">Date</label>
                <input name="date" required type="date" className="border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-primary transition-colors text-gray-800" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-500 font-semibold">Time</label>
                <input name="time" required type="time" className="border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-primary transition-colors text-gray-800" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-gray-500 font-semibold">Number of Guests</label>
              <select name="guests" className="border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-primary transition-colors text-gray-800 appearance-none">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-6 w-full py-4 bg-secondary text-white tracking-[0.2em] uppercase text-sm font-semibold hover:bg-primary transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Confirming..." : "Confirm Reservation"}
            </button>
            {message && <p className="text-center text-sm font-medium text-primary mt-2">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

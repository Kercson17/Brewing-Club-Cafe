"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  XCircle, 
  Clock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const reservations = [
  { id: 'RES-001', name: 'John Doe', email: 'john@example.com', date: 'May 16, 2026', time: '14:00', guests: 2, status: 'Confirmed', phone: '+63 912 345 6789' },
  { id: 'RES-002', name: 'Maria Santos', email: 'maria@example.com', date: 'May 16, 2026', time: '18:30', guests: 4, status: 'Pending', phone: '+63 923 456 7890' },
  { id: 'RES-003', name: 'Robert Lee', email: 'robert@example.com', date: 'May 17, 2026', time: '10:00', guests: 1, status: 'Confirmed', phone: '+63 934 567 8901' },
  { id: 'RES-004', name: 'Sarah Gomez', email: 'sarah@example.com', date: 'May 17, 2026', time: '15:15', guests: 3, status: 'Cancelled', phone: '+63 945 678 9012' },
  { id: 'RES-005', name: 'David Wilson', email: 'david@example.com', date: 'May 18, 2026', time: '11:30', guests: 2, status: 'Pending', phone: '+63 956 789 0123' },
  { id: 'RES-006', name: 'Emily Chen', email: 'emily@example.com', date: 'May 18, 2026', time: '13:45', guests: 6, status: 'Confirmed', phone: '+63 967 890 1234' },
];

export default function ReservationsManager() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Reservations Manager</h1>
            <p className="text-slate-500 text-sm mt-1">Manage and monitor customer bookings.</p>
          </div>
          
          <button className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-[#A6754B] transition-all shadow-lg shadow-primary/10">
            Export Data
          </button>
        </header>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 w-full md:w-96">
            <Search size={18} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by name, email or ID..." 
              className="bg-transparent border-none outline-none text-sm w-full text-secondary"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
              {['All', 'Pending', 'Confirmed', 'Cancelled'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    filter === tab 
                      ? 'bg-white text-primary shadow-sm' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="p-2.5 bg-white border border-gray-100 rounded-xl text-gray-500 hover:bg-gray-50 transition-all">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] uppercase tracking-widest text-slate-400 font-bold border-b border-slate-100">
                  <th className="px-8 py-5">Reservation ID</th>
                  <th className="px-8 py-5">Customer</th>
                  <th className="px-8 py-5">Date & Time</th>
                  <th className="px-8 py-5 text-center">Guests</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {reservations.filter(r => filter === 'All' || r.status === filter).map((res) => (
                  <tr key={res.id} className="text-sm text-slate-700 hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-mono text-xs text-slate-400">{res.id}</td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900">{res.name}</span>
                        <span className="text-xs text-slate-400 font-medium">{res.email}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-medium">{res.date}</span>
                        <span className="text-xs text-slate-400">{res.time}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-center font-bold">{res.guests}</td>
                    <td className="px-8 py-5">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        res.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                        res.status === 'Pending' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                        'bg-red-50 text-red-700 border border-red-100'
                      }`}>
                        {res.status === 'Confirmed' && <CheckCircle2 size={12} />}
                        {res.status === 'Pending' && <Clock size={12} />}
                        {res.status === 'Cancelled' && <XCircle size={12} />}
                        {res.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end gap-2">
                        {res.status === 'Pending' && (
                          <button className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all" title="Confirm">
                            <CheckCircle2 size={18} />
                          </button>
                        )}
                        <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-all">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-6 border-t border-slate-50 flex items-center justify-between">
            <p className="text-xs text-slate-400 font-medium">Showing 1 to 6 of 124 reservations</p>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-slate-100 rounded-lg text-slate-400 hover:bg-slate-50 transition-all disabled:opacity-30" disabled>
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1">
                {[1, 2, 3].map(p => (
                  <button 
                    key={p} 
                    className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                      p === 1 ? 'bg-primary text-white' : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button className="p-2 border border-slate-100 rounded-lg text-slate-400 hover:bg-slate-50 transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

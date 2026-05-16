"use client";

import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { 
  Users, 
  CalendarCheck, 
  TrendingUp, 
  Clock,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

const stats = [
  { label: 'Total Reservations', value: '124', icon: CalendarCheck, trend: '+12%', color: 'bg-blue-500' },
  { label: 'Total Customers', value: '1,205', icon: Users, trend: '+5%', color: 'bg-purple-500' },
  { label: 'Daily Revenue', value: '₱12,450', icon: TrendingUp, trend: '+18%', color: 'bg-emerald-500' },
  { label: 'Pending Requests', value: '8', icon: Clock, trend: '-2', color: 'bg-amber-500' },
];

const recentReservations = [
  { name: 'John Doe', date: 'May 16, 2026', time: '14:00', guests: 2, status: 'Confirmed' },
  { name: 'Maria Santos', date: 'May 16, 2026', time: '18:30', guests: 4, status: 'Pending' },
  { name: 'Robert Lee', date: 'May 17, 2026', time: '10:00', guests: 1, status: 'Confirmed' },
  { name: 'Sarah Gomez', date: 'May 17, 2026', time: '15:15', guests: 3, status: 'Cancelled' },
];

export default function DashboardOverview() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
            <p className="text-slate-500 text-sm mt-1">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          
          <div className="flex gap-4">
            <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all shadow-sm">
              Download Report
            </button>
            <button className="bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#A6754B] transition-all shadow-md shadow-primary/10">
              New Reservation
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-stats gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.color} p-3 rounded-xl text-white shadow-lg shadow-${stat.color.split('-')[1]}-500/20`}>
                  <stat.icon size={24} />
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                  stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                }`}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium">{stat.label}</h3>
              <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Reservations Table */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
              <h2 className="font-bold text-slate-900">Recent Reservations</h2>
              <button className="text-primary text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                View All <ChevronRight size={14} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Date & Time</th>
                    <th className="px-6 py-4">Guests</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentReservations.map((res, i) => (
                    <tr key={i} className="text-sm text-slate-700 hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">{res.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span>{res.date}</span>
                          <span className="text-xs text-slate-400">{res.time}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">{res.guests}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          res.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-700' :
                          res.status === 'Pending' ? 'bg-amber-50 text-amber-700' :
                          'bg-red-50 text-red-700'
                        }`}>
                          {res.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                          <ArrowUpRight size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Stats/Activity */}
          <div className="space-y-8">
            <div className="bg-secondary p-6 rounded-2xl text-white shadow-xl shadow-secondary/20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">Shop Status</h3>
                <p className="text-xl font-serif mb-6 italic">"Excellence in every cup."</p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-emerald-400">Open for Business</span>
                </div>
              </div>
              <Coffee className="absolute bottom-[-20px] right-[-20px] text-white/5 w-32 h-32 rotate-12" />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="font-bold text-slate-900 mb-6">Popular Times</h2>
              <div className="space-y-4">
                {[
                  { label: 'Morning (8am - 11am)', percent: 85 },
                  { label: 'Lunch (12pm - 2pm)', percent: 60 },
                  { label: 'Afternoon (3pm - 6pm)', percent: 92 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-600 font-medium">{item.label}</span>
                      <span className="text-slate-400">{item.percent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

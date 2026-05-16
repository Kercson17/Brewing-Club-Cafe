"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Users, 
  ShoppingBag, 
  Settings, 
  LogOut,
  Coffee
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/admin/dashboard' },
  { icon: CalendarCheck, label: 'Reservations', href: '/admin/reservations' },
  { icon: ShoppingBag, label: 'Purchases', href: '/admin/purchases' },
  { icon: Users, label: 'Customers', href: '/admin/customers' },
];

const secondaryItems = [
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-secondary text-white h-screen fixed left-0 top-0 flex flex-col border-r border-white/5">
      {/* Brand */}
      <div className="p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Coffee size={18} className="text-white" />
          </div>
          <span className="font-serif tracking-widest text-sm uppercase">Brewing Admin</span>
        </div>
        <div className="h-[1px] w-full bg-white/10 mt-6" />
      </div>

      {/* Navigation */}
      <nav className="flex-grow px-4 space-y-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-4 ml-4">Main Menu</p>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
              pathname === item.href 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon size={20} className={cn(pathname === item.href ? "text-white" : "text-gray-400 group-hover:text-primary transition-colors")} />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}

        <div className="pt-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-4 ml-4">System</p>
          {secondaryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                pathname === item.href 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon size={20} className={cn(pathname === item.href ? "text-white" : "text-gray-400 group-hover:text-primary transition-colors")} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/5">
        <Link
          href="/admin/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </Link>
      </div>
    </aside>
  );
}

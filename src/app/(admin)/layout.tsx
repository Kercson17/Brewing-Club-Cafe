import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Admin Dashboard | Brewing Club Co.",
  description: "Internal management system for Brewing Club Co.",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.variable, "font-sans antialiased bg-gray-50 text-slate-900")}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

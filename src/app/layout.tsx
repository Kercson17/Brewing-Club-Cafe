import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"]
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Brewing Club Co. | Premium Philippine Coffee in Talisay, Cebu",
  description: "Experience the art of exceptional coffee at Brewing Club Co. Sourcing directly from Filipino farmers to bring you premium roasts in Talisay City, Cebu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.variable, cormorant.variable, "font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}

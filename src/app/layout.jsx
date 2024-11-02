"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import "react-multi-carousel/lib/styles.css";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsapp/whatsapp";

import Preloader from "@/components/preloader/Preloader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after 3 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">

      <body>
      {loading && <Preloader />} {/* Show loader if loading state is true */}
      <div className={loading ? "hidden" : "visible"}>
        <Navbar /> 
        {children}
        <WhatsApp />
        <Footer />
        </div>
      </body>
    </html>
  );
}
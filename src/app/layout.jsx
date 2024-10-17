"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import "react-multi-carousel/lib/styles.css";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsapp/whatsapp";
import { metadata } from "./layoutMetadata";
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
      <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    
    {/* Icons */}
    {Object.entries(metadata.icons).map(([key, value]) => (
      <link key={key} rel={key === "icon" ? "icon" : key} href={value[0]} />
    ))}
    
    {/* Keywords */}
    <meta name="keywords" content={metadata.keywords.join(", ")} />
    
    {/* Authors */}
    <meta name="author" content={metadata.authors.map((author) => author.name).join(", ")} />
    
    {/* Creator */}
    <meta name="creator" content={metadata.creator.map((creator) => creator.name).join(", ")} />
    
    {/* OpenGraph */}
    <meta property="og:title" content={metadata.openGraph.title} />
    <meta property="og:description" content={metadata.openGraph.description} />
    <meta property="og:image" content={metadata.openGraph.images[0].url} />
    <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
    <meta property="og:site_name" content={metadata.openGraph.site_name} />
    
    {/* Twitter */}
    <meta name="twitter:card" content={metadata.twitter.card} />
    <meta name="twitter:title" content={metadata.twitter.title} />
    <meta name="twitter:description" content={metadata.twitter.description} />
    <meta name="twitter:image" content={metadata.twitter.images[0].url} />
    <meta name="twitter:image:alt" content={metadata.twitter.images[0].alt} />
    
    {/* Canonical */}
    <link rel="canonical" href="https://www.teqspoc.com" />
    
    {/* Other Metadata */}
    <meta name="robots" content={metadata.robots} />
    <meta name="language" content={metadata.language} />
    <meta name="rating" content={metadata.rating} />
    <meta name="viewport" content={metadata.viewport} />
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

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import "react-multi-carousel/lib/styles.css";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tecspoc Edutech",
  description: "For students services in online learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="">
        <Navbar /> 
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}

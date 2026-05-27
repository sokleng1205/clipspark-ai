import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClipSpark AI | AI Video Highlight Generator for TikTok, Reels, Shorts",
  description: "Turn long videos into viral short‑form content automatically with AI highlights, captions, and viral hooks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </motion.div>
      </body>
    </html>
  );
}

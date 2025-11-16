"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="section-padding relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 w-full"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
              <span className="text-gradient">Privacy</span>
              <br />
              <span className="text-white">Policy</span>
            </h1>
            <p className="text-lg text-gray-400">Last updated: March 2024</p>
          </motion.div>

          <div className="glass p-8 rounded-2xl space-y-6 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Collection</h2>
              <p className="leading-relaxed">
                We collect information that you provide directly to us, including when you create
                an account, use our services, or contact us for support.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Usage</h2>
              <p className="leading-relaxed">
                We use your data to provide, maintain, and improve our services, process transactions,
                and send you technical notices and support messages.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


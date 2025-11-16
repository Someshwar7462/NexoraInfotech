"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
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
              <span className="text-gradient">Terms of</span>
              <br />
              <span className="text-white">Service</span>
            </h1>
            <p className="text-lg text-gray-400">Last updated: March 2024</p>
          </motion.div>

          <div className="glass p-8 rounded-2xl space-y-6 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Memorae AI, you accept and agree to be bound by the terms
                and provision of this agreement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="leading-relaxed">
                Permission is granted to temporarily use Memorae AI for personal, non-commercial
                transitory viewing only.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Account</h2>
              <p className="leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and password.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


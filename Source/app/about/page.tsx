"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Target, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="section-padding relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-purple-900/30" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
              <span className="text-gradient">About</span>
              <br />
              <span className="text-white">Memorae AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing memory enhancement through cutting-edge AI technology
              and neuroscience research.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Brain, title: "AI-Powered", desc: "Advanced machine learning algorithms" },
              { icon: Target, title: "Goal-Oriented", desc: "Personalized learning paths" },
              { icon: Users, title: "1M+ Users", desc: "Trusted by learners worldwide" },
              { icon: Award, title: "Award-Winning", desc: "Recognized innovation" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl text-center card-glow"
              >
                <item.icon className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


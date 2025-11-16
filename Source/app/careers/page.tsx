"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";

const jobs = [
  {
    title: "Senior AI Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    location: "New York, NY",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="section-padding relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 w-full"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
              <span className="text-gradient">Careers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team and help shape the future of AI-powered learning
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl card-glow"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


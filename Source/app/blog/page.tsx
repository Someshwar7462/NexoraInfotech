"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "10 Memory Techniques Backed by Science",
    excerpt: "Discover proven methods to enhance your memory retention and recall abilities.",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
  },
  {
    title: "How AI is Revolutionizing Learning",
    excerpt: "Explore how artificial intelligence is transforming the way we learn and remember.",
    date: "March 10, 2024",
    author: "Michael Chen",
  },
  {
    title: "The Science of Memory Retention",
    excerpt: "Understanding the neuroscience behind how our brains store and retrieve information.",
    date: "March 5, 2024",
    author: "Dr. Emily Rodriguez",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="section-padding relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 w-full"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Latest insights on memory, learning, and AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl card-glow text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <button className="flex items-center justify-center space-x-2 text-indigo-400 hover:text-indigo-300 mx-auto">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 glass rounded-full text-sm font-semibold mb-8 text-indigo-300 border border-indigo-500/30"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ready to Transform Your Memory?</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gradient">Start Your Journey</span>
            <br />
            <span className="text-white">Today</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join over 1 million users who have transformed their memory and learning
            capabilities. Start your free trial today and experience the power of AI-driven
            memory enhancement.
          </p>

          {/* CTA Buttons - Centered */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2 btn-primary min-w-[200px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="px-8 py-4 glass text-white rounded-xl font-semibold text-lg border border-white/20 hover:border-indigo-400/50 hover:bg-white/5 transition-all min-w-[200px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </div>

          {/* Trust Indicators - Centered */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


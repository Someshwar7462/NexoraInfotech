"use client";

import { motion } from "framer-motion";
import { UserPlus, Brain, Target, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up",
    description:
      "Create your free account in seconds. No credit card required to get started. Simply provide your email and begin your journey to better memory.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Assessment",
    description:
      "Our AI analyzes your learning style and creates a personalized memory profile. Complete a quick assessment to help us understand your cognitive patterns.",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "03",
    icon: Target,
    title: "Start Learning",
    description:
      "Begin your journey with customized memory exercises and AI-powered recommendations. Practice daily to see remarkable improvements.",
    color: "from-pink-500 to-pink-600",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track Progress",
    description:
      "Monitor your improvement with real-time analytics and celebrate your achievements. Watch your memory skills grow with detailed insights.",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-indigo-900/30 to-slate-900" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 glass rounded-full text-sm font-semibold mb-6 text-purple-300 border border-purple-500/30"
          >
            Simple Process
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 text-left">
            Get started in minutes and transform your memory with our simple,
            effective process. Follow these four easy steps to begin your journey
            to enhanced cognitive performance.
          </p>
        </motion.div>

        {/* Steps - Centered */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 via-pink-500/30 to-blue-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card - Centered Content */}
                <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/10 h-full card-glow text-center">
                  {/* Number Badge - Centered */}
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-600 mb-4">
                    {step.number}
                  </div>

                  {/* Title - Centered */}
                  <h3 className="text-2xl font-bold text-white mb-3 text-center">
                    {step.title}
                  </h3>
                  {/* Description - Left-Aligned for Readability */}
                  <p className="text-gray-400 leading-relaxed text-left">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-3 z-10">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-6 h-6 text-indigo-400" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

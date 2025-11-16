"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Brain, Zap, Target } from "lucide-react";

const benefits = [
  "Enhanced long-term memory retention up to 95%",
  "Improved focus and concentration levels",
  "10x faster information processing speed",
  "Better learning outcomes and test scores",
  "Reduced cognitive fatigue and stress",
  "Personalized learning paths for each user",
];

const stats = [
  { icon: Brain, value: "85%", label: "Memory Improvement", color: "from-indigo-500 to-indigo-600" },
  { icon: Zap, value: "10x", label: "Learning Speed", color: "from-yellow-500 to-orange-500" },
  { icon: Target, value: "95%", label: "Retention Rate", color: "from-green-500 to-emerald-500" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden w-full"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-purple-900/30" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 w-full"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 glass rounded-full text-sm font-semibold mb-6 text-indigo-300 border border-indigo-500/30 text-center w-full"
          >
            About Memorae
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-center">
            <span className="text-gradient">Why Choose</span>
            <br />
            <span className="text-white">Memorae?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto text-left">
            Memorae leverages cutting-edge artificial intelligence to
            revolutionize how you learn and remember. Our platform combines
            neuroscience research with advanced machine learning algorithms to
            create a personalized memory enhancement experience.
          </p>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto text-left">
            Whether you're a student, professional, or lifelong learner,
            Memorae adapts to your needs and helps you achieve extraordinary
            cognitive performance.
          </p>
        </motion.div>

        {/* Centered Content Grid */}
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content with Left-Aligned Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Benefits List - Left Aligned */}
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg font-medium text-left">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Button - Left Aligned */}
              <div className="flex justify-start">
                <motion.button
                  className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side - Centered Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-center"
            >
              {/* Main Stats Grid */}
              <div className="grid grid-cols-2 gap-6 max-w-md w-full">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="glass p-6 rounded-2xl shadow-xl border border-white/10 hover:shadow-2xl transition-all card-glow text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 mx-auto`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
                
                {/* Center Feature Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="col-span-2 bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl shadow-2xl text-white text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 mr-3" />
                    <div className="text-5xl font-bold">AI</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Powered by AI</h3>
                  <p className="text-indigo-100 text-left">
                    Advanced machine learning algorithms that adapt to your unique learning style
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

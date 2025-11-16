"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap, Target, Users, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-purple-900/20" />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 animate-gradient" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Floating Gradient Orbs - More Vibrant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/40 to-purple-500/40 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-[15%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/40 to-amber-500/40 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -120, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content Container - Perfectly Centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center text-center w-full">
          {/* Badge - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 glass rounded-full text-sm font-semibold mb-8 text-indigo-300 border border-indigo-500/30"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Memory Enhancement</span>
          </motion.div>

          {/* Main Heading - Perfectly Centered */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] w-full"
            style={{ textAlign: 'center' }}
          >
            <span className="block text-gradient mb-3" style={{ textAlign: 'center' }}>
              Transform Your
            </span>
            <span className="block text-white" style={{ textAlign: 'center' }}>
              Memory Forever
            </span>
          </motion.h1>

          {/* Subheading - Centered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            style={{ textAlign: 'center' }}
          >
            Unlock your cognitive potential with cutting-edge AI technology.
            <br className="hidden sm:block" />
            Remember more, learn faster, achieve extraordinary results.
          </motion.p>

          {/* CTA Buttons - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 px-4"
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2 overflow-hidden btn-primary min-w-[200px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </motion.button>
            <motion.button
              className="group px-8 py-4 glass text-white rounded-xl font-semibold text-lg border border-white/20 hover:border-indigo-400/50 hover:bg-white/5 transition-all flex items-center justify-center space-x-2 shadow-lg min-w-[200px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats Grid - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4 w-full"
            style={{ justifyItems: 'center' }}
          >
            {[
              { icon: Zap, value: "10x", label: "Faster Learning", color: "from-yellow-400 to-orange-500" },
              { icon: Target, value: "95%", label: "Retention Rate", color: "from-green-400 to-emerald-500" },
              { icon: Users, value: "1M+", label: "Active Users", color: "from-blue-400 to-cyan-500" },
              { icon: TrendingUp, value: "24/7", label: "AI Support", color: "from-purple-400 to-pink-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="glass p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/10 card-glow w-full max-w-[200px]"
                style={{ textAlign: 'center' }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 mx-auto`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1" style={{ textAlign: 'center' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 font-medium" style={{ textAlign: 'center' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
        >
          <span className="text-xs text-gray-400 font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

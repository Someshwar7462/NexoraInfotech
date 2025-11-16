"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  Shield,
  Sparkles,
  BarChart3,
  Globe,
  Lock,
  Cpu,
  Database,
  Users,
  Clock,
  BookOpen,
  Award,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "Advanced neural networks adapt to your learning style and optimize memory retention patterns for maximum effectiveness.",
    gradient: "from-indigo-500 to-indigo-600",
    delay: 0,
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process and recall information 10x faster with our optimized cognitive algorithms and real-time processing.",
    gradient: "from-yellow-500 to-orange-500",
    delay: 0.1,
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your data is encrypted with military-grade security. Privacy and confidentiality are our top priorities.",
    gradient: "from-green-500 to-emerald-600",
    delay: 0.2,
  },
  {
    icon: Sparkles,
    title: "Personalized Experience",
    description:
      "Tailored memory enhancement strategies based on your unique cognitive profile and learning preferences.",
    gradient: "from-pink-500 to-rose-500",
    delay: 0.3,
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Monitor your improvement with detailed analytics, performance insights, and personalized recommendations.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.4,
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description:
      "Learn and remember in any language with our global platform support and native language processing.",
    gradient: "from-purple-500 to-violet-600",
    delay: 0.5,
  },
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "End-to-end encryption ensures your personal information and learning data remain completely secure.",
    gradient: "from-red-500 to-pink-600",
    delay: 0.6,
  },
  {
    icon: Cpu,
    title: "Advanced AI",
    description:
      "Powered by state-of-the-art machine learning models trained on millions of learning patterns.",
    gradient: "from-indigo-500 to-purple-600",
    delay: 0.7,
  },
  {
    icon: Database,
    title: "Cloud Sync",
    description:
      "Access your learning data from anywhere with seamless cloud synchronization across all devices.",
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.8,
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join a thriving community of learners sharing tips, strategies, and success stories.",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.9,
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Learn at your own pace with flexible scheduling that adapts to your busy lifestyle.",
    gradient: "from-orange-500 to-red-500",
    delay: 1.0,
  },
  {
    icon: BookOpen,
    title: "Rich Content Library",
    description:
      "Access thousands of courses, exercises, and learning materials curated by experts.",
    gradient: "from-pink-500 to-purple-500",
    delay: 1.1,
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Earn certificates upon completion of courses to showcase your achievements and skills.",
    gradient: "from-yellow-500 to-amber-500",
    delay: 1.2,
  },
  {
    icon: Target,
    title: "Goal Setting",
    description:
      "Set personalized learning goals and track your progress with AI-powered recommendations.",
    gradient: "from-emerald-500 to-teal-500",
    delay: 1.3,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-padding relative overflow-hidden w-full"
    >
      {/* Dark Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Floating Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header - Heading Centered, Description Left-Aligned */}
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
            Powerful Features
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-center">
            <span className="text-gradient">Everything You Need</span>
            <br />
            <span className="text-white">To Succeed</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 text-left">
            Discover the comprehensive suite of tools designed to enhance your
            memory and unlock your cognitive potential. Our platform offers everything
            you need to transform your learning experience.
          </p>
        </motion.div>

        {/* Features Grid - Fully Centered */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: feature.delay }}
                className="group relative h-full w-full max-w-sm"
              >
                <div className="h-full glass p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/10 card-glow w-full">
                  {/* Icon - Centered */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Title - Centered */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors text-center">
                    {feature.title}
                  </h3>
                  
                  {/* Description - Left-Aligned for Readability */}
                  <p className="text-gray-400 leading-relaxed text-sm text-left card-content">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

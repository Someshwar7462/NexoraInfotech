"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Medical Student",
    image: "SC",
    content:
      "Memorae has completely transformed how I study. I've improved my exam scores by 40% and I can retain information so much better now! The AI personalization is incredible.",
    rating: 5,
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Michael Rodriguez",
    role: "Software Engineer",
    image: "MR",
    content:
      "As someone who needs to constantly learn new technologies, Memorae has been a game-changer. The personalized approach and progress tracking keep me motivated.",
    rating: 5,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    name: "Emily Johnson",
    role: "Language Teacher",
    image: "EJ",
    content:
      "I've tried many memory tools, but Memorae stands out. The AI adapts to my learning style and makes everything so intuitive. My students have noticed the difference too!",
    rating: 5,
    gradient: "from-pink-500 to-pink-600",
  },
  {
    name: "David Kim",
    role: "Business Executive",
    image: "DK",
    content:
      "The best investment I've made for my professional development. My ability to recall important information has improved dramatically. Highly recommend!",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Lisa Anderson",
    role: "Research Scientist",
    image: "LA",
    content:
      "Memorae's AI-powered approach has revolutionized how I retain complex scientific information. The personalized learning paths are exactly what I needed.",
    rating: 5,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "James Wilson",
    role: "Law Student",
    image: "JW",
    content:
      "Studying for the bar exam was overwhelming until I found Memorae. The memory retention techniques and AI recommendations helped me pass on my first attempt!",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden w-full"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 glass rounded-full text-sm font-semibold mb-6 text-purple-300 border border-purple-500/30"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gradient">What Our Users Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 text-left">
            Join thousands of satisfied users who have transformed their memory
            and learning capabilities. See what our community has to say about their
            experience with Memorae AI.
          </p>
        </motion.div>

        {/* Testimonials Grid - Fully Centered */}
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative glass p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/10 group card-glow w-full max-w-md"
              >
                {/* Quote Icon - Centered */}
                <div className="absolute top-6 right-6 text-gray-700 group-hover:text-indigo-400 transition-colors">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Rating - Centered */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content - Left-Aligned for Readability */}
                <p className="text-gray-300 mb-8 leading-relaxed text-lg text-left relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author - Centered */}
                <div className="flex items-center justify-center space-x-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {testimonial.image}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

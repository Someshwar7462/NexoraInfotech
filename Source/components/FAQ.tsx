"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does Memorae AI work?",
    answer:
      "Memorae uses advanced machine learning algorithms to analyze your learning patterns and create personalized memory enhancement strategies. Our AI adapts to your cognitive profile and optimizes retention techniques for maximum effectiveness. The system continuously learns from your performance to provide increasingly accurate recommendations.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. We use end-to-end encryption and follow industry-leading security practices. Your data is never shared with third parties, and you have full control over your information. We comply with GDPR, CCPA, and other major privacy regulations to ensure your data remains completely secure.",
  },
  {
    question: "Can I use Memorae on multiple devices?",
    answer:
      "Yes! Memorae syncs seamlessly across all your devices. Access your learning progress from your phone, tablet, or computer anytime, anywhere. Your data is automatically synchronized in real-time, so you can pick up exactly where you left off on any device.",
  },
  {
    question: "What makes Memorae different from other memory apps?",
    answer:
      "Memorae combines cutting-edge AI technology with neuroscience research to provide truly personalized learning experiences. Our adaptive algorithms continuously optimize your learning path based on your performance. Unlike static apps, Memorae evolves with you, ensuring maximum retention and efficiency.",
  },
  {
    question: "Do I need any special equipment?",
    answer:
      "No special equipment needed! Memorae works on any device with an internet connection. Just sign up and start learning immediately. Our platform is accessible via web browsers, iOS, and Android apps, making it convenient to learn anywhere, anytime.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no penalties. Your access will continue until the end of your current billing period. We offer a hassle-free cancellation process, and you can reactivate your subscription whenever you're ready to continue.",
  },
  {
    question: "What languages does Memorae support?",
    answer:
      "Memorae currently supports over 20 languages including English, Spanish, French, German, Chinese, Japanese, Korean, and many more. We're continuously adding new languages based on user demand. The interface and content are fully localized for each supported language.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most users notice improvements within the first week of regular use. Significant memory enhancement typically occurs within 2-4 weeks of consistent practice. However, results vary based on individual learning styles and the amount of time dedicated to exercises. Our AI tracks your progress and provides personalized insights.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
            className="inline-block px-5 py-2.5 glass rounded-full text-sm font-semibold mb-6 text-indigo-300 border border-indigo-500/30"
          >
            FAQ
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gradient">Frequently Asked</span>
            <br />
            <span className="text-white">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 text-left">
            Everything you need to know about Memorae AI. Find answers to common
            questions about our platform, features, pricing, and more.
          </p>
        </motion.div>

        {/* FAQ Items - Fully Centered */}
        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl border border-white/10 overflow-hidden card-glow w-full"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4 text-center flex-1">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-indigo-400" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed text-left">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

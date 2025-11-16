"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "Forever",
    description: "Perfect for trying out Memorae and getting started with memory enhancement",
    features: [
      "Basic memory exercises",
      "Limited AI recommendations",
      "Progress tracking",
      "Community support",
      "Mobile app access",
      "Basic analytics",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-gray-400 to-gray-600",
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For serious learners who want to maximize their memory potential",
    features: [
      "Unlimited memory exercises",
      "Advanced AI personalization",
      "Detailed analytics & insights",
      "Priority support",
      "All premium features",
      "Export your data",
      "Custom learning paths",
      "Advanced progress tracking",
    ],
    cta: "Start Free Trial",
    popular: true,
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For teams and organizations looking to enhance team performance",
    features: [
      "Everything in Pro",
      "Team collaboration tools",
      "Admin dashboard",
      "Custom integrations",
      "Dedicated support",
      "Training & onboarding",
      "SLA guarantee",
      "Custom AI models",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-purple-500 to-pink-600",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

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
            className="inline-block px-5 py-2.5 glass rounded-full text-sm font-semibold mb-6 text-indigo-300 border border-indigo-500/30"
          >
            Pricing Plans
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gradient">Choose Your Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 text-left">
            Flexible pricing options to suit your needs. Start free and upgrade
            anytime. All plans include a 14-day free trial with no credit card required.
          </p>
        </motion.div>

        {/* Pricing Cards - Centered Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${
                  plan.popular
                    ? "md:-mt-4 md:mb-4 scale-105 md:scale-100"
                    : ""
                }`}
              >
                {/* Popular Badge - Centered */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg flex items-center justify-center space-x-1"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Most Popular</span>
                    </motion.div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`h-full glass p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 ${
                    plan.popular
                      ? "border-indigo-500/50 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"
                      : "border-white/10"
                  } card-glow`}
                >
                  {/* Header - Centered */}
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-extrabold text-white">
                        {plan.price}
                      </span>
                      {plan.period !== "Forever" && (
                        <span className="text-gray-400">/{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features - Centered List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start justify-center space-x-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-center">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Centered */}
                  <motion.button
                    className={`w-full py-3.5 rounded-xl font-semibold transition-all text-center ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl btn-primary"
                        : "glass text-white border border-white/20 hover:border-indigo-400/50"
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note - Centered */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-12"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}

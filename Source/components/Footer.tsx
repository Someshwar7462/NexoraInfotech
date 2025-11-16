"use client";

import { motion } from "framer-motion";
import { Brain, Mail, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "How It Works", href: "/#how-it-works" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
  ],
  resources: [
    { name: "Help Center", href: "/help" },
    { name: "Contact", href: "/contact" },
    { name: "Documentation", href: "/help" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <Link href="/" className="flex items-center justify-center lg:justify-start space-x-3 group inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-xl">
                  <Brain className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold text-gradient">Memorae</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Transform your memory with AI-powered cognitive enhancement.
              Remember more, learn faster, achieve extraordinary results.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass border border-white/10 hover:border-indigo-500/50 flex items-center justify-center transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Centered */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Memorae AI. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm text-center md:text-right">
            Made with ❤️ for better memory
          </p>
        </div>
      </div>
    </footer>
  );
}

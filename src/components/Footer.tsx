import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -right-64 top-0 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -left-64 bottom-0 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                  UzBricks
                </span>
                <Globe className="h-5 w-5 text-blue-500" />
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed"
            >
              2025-yildan buyon sifatli qurilish materiallari ishlab chiqaruvchi yetakchi korxona
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <button className="group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors duration-300">
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  Kompaniya haqida
                </span>
              </button>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              Tezkor havolalar
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {['Mahsulotlar', 'Xizmatlar', 'Yangiliklar', 'FAQ'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span>{item}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              Bog'lanish
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <a href="tel:+998773210000" className="group flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone className="h-5 w-5 mt-0.5" />
                <div className="space-y-1">
                  <span className="block text-sm">Telefon</span>
                  <span className="block">+998-77-321-00-00</span>
                </div>
              </a>
              
              <div className="group flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div className="space-y-1">
                  <span className="block text-sm">Manzil</span>
                  <span className="block">O'zbekiston, Toshkent shahri</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              Ijtimoiy tarmoqlar
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {[
                { icon: Facebook, link: 'https://facebook.com' },
                { icon: Instagram, link: 'https://instagram.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} UzBricks. Barcha huquqlar himoyalangan
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Maxfiylik siyosati
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Foydalanish shartlari
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
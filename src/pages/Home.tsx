import { motion } from 'framer-motion';
import { ArrowRight, Award, Shield, Truck, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, productionSteps, companyStats } from '../data/products';

import {  AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "Sifatli Mahsulotlar",
      subtitle: "Har bir detalni e'tiborga olib, qo'lda tayyorlangan",
      image: "https://frankfurt.apollo.olxcdn.com/v1/files/sty1dke4x0mz2-UZ/image",
      accent: "from-amber-600 to-orange-600"
    },
    {
      title: "O'zbekiston Bo'ylab Yetkazib Berish",
      subtitle: "100 dan ortiq mamlakatlarga tezkor va ishonchli yetkazib berish xizmati",
      image: "https://757brick.com/wp-content/uploads/2024/09/The-Foundations-of-Brick-Composition-and-Creation.jpeg",
      accent: "from-sky-600 to-blue-600"
    },
    {
      title: "Mijozlar Ishonchi",
      subtitle: "Minglab mamnun mijozlarimiz safiga qo'shiling",
      image: "https://kingscourtbrick.com/wp-content/uploads/2024/03/DSC04681.jpg",
      accent: "from-emerald-600 to-green-600"
    }
  ];
   const companyStats = [
    { value: "150+", label: "Loyihalar", description: "Muvaffaqiyatli yakunlangan" },
    { value: "10K+", label: "Mijozlar", description: "Ishonchli hamkorlar" },
    { value: "99%", label: "Sifat", description: "Xalqaro standartlar" },
    { value: "24/7", label: "Xizmat", description: "Doimiy qo'llab-quvvatlash" }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev:any) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev:any) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev:any) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img
              src={heroSlides[currentIndex].image}
              alt={heroSlides[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-3xl space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-20 h-2 rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${heroSlides[currentIndex].accent})`
                    }}
                  />
                  
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
                    {heroSlides[currentIndex].title}
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
                    {heroSlides[currentIndex].subtitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to="/products"
                        className="inline-flex items-center space-x-3 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <span>Maxsulotlarni ko'rish</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to="/contact"
                        className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Biz bilan bog'laning</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - Hidden on Mobile */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center space-x-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Arrow Controls - Hidden on Mobile */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md items-center justify-center text-white hover:bg-black/50 transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md items-center justify-center text-white hover:bg-black/50 transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute w-full h-full bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,255,255,0.1),transparent)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative backdrop-blur-lg bg-white/10 rounded-2xl p-8 transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-2xl font-medium text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-red-100 text-sm">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(220,38,38,0.05),transparent)]" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: "Yuqori sifat", 
                desc: "Xalqaro standartlarga mos mahsulotlar",
                gradient: "from-orange-500 to-red-500"
              },
              { 
                icon: Truck, 
                title: "Tezkor yetkazib berish", 
                desc: "O'zbekiston bo'ylab yetkazib berish xizmati",
                gradient: "from-red-500 to-rose-500"
              },
              { 
                icon: Award, 
                title: "Kafolat", 
                desc: "Barcha mahsulotlarga kafolat beriladi",
                gradient: "from-rose-500 to-pink-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-2xl transform group-hover:-rotate-2 transition-transform duration-300" />
                <div className="relative bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 transform group-hover:rotate-2 transition-transform duration-300">
                  <div className="relative">
                    <div className={` ${feature.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    <feature.icon className="relative h-12 w-12 text-red-600 mb-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
        <div className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full transform -translate-y-1/2" />
              <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-medium px-4 py-1.5 rounded-full border border-gray-200">
                Ishlab chiqarish
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Ishlab chiqarish jarayoni
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Zamonaviy texnologiyalar va yuqori malakali mutaxassislar yordamida sifatli mahsulot ishlab chiqaramiz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-sm font-medium text-gray-900">Bosqich {index + 1}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className="px-6 pb-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-xl font-medium hover:shadow-lg transition-shadow duration-300"
                  >
                    Batafsil
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Featured Products */}
      <section className="relative py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="absolute w-[800px] h-[800px] -right-40 -top-40 bg-red-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute w-[600px] h-[600px] -left-20 -bottom-20 bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full transform -translate-y-1/2" />
              <span className="relative bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent text-sm font-medium px-4 py-1.5 rounded-full border border-gray-200">
                Top Mahsulotlar
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Bizning mahsulotlar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sifatli va zamonaviy qurilish materiallari
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-x-4 bottom-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-sm font-medium text-gray-600">{product.dimensions}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-blue-600 transition-all duration-500">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-xl font-medium transition-colors duration-300"
                >
                  <span>Batafsil</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/products"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Barcha mahsulotlarni ko'rish</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
    </div>
  );
}
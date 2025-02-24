import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';

export default function Products() {
  return (
    <div className="pt-16">
      <div className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/brick-pattern.jpg"
            alt="Brick Pattern"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Mahsulotlarimiz
          </h1>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Sifatli va zamonaviy qurilish materiallari
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">O'lcham: {product.dimensions}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-800 transition-colors duration-300"
                  >
                    Batafsil
                  </motion.button>
                </div>
                <div className="space-y-2 border-t pt-4">
                  {product.features.map((feature, index) => (
                    <p key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      <span>{feature}</span>
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
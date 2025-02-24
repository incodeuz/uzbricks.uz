import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, X, FileText, Phone, User } from 'lucide-react';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToTelegram = async (data:any) => {
    const BOT_TOKEN = import.meta.env.VITE_TG_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TG_ID;
    const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const message = `
🧱 *Yangi Buyurtma* 🧱
      
👤 *Ism:* ${data.name}
📱 *Telefon:* ${data.phone}
📝 *Ma'lumot:* ${data.message}
    `;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      return false;
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await sendToTelegram(formData);
    
    setIsLoading(false);
    if (success) {
      setShowSuccess(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
    }
  };

  const closeModal = () => {
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-red-50 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0px,rgba(220,38,38,0.1),transparent)]" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
              Buyurtma berish
            </h1>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
              Mahsulotlarimizni buyurtma qilish uchun quyidagi formani to'ldiring va biz siz bilan tez orada bog'lanamiz
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-700" />
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-gray-700 font-medium">
                  <User className="h-4 w-4 text-red-500" />
                  <span>Ismingiz</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 outline-none"
                    placeholder="To'liq ismingiz"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-gray-700 font-medium">
                  <Phone className="h-4 w-4 text-red-500" />
                  <span>Telefon raqamingiz</span>
                </label>
                <div className="relative">
  <input
    type="tel"
    name="phone"
    required
    value={formData.phone}
    onChange={handleChange}
    className="block w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 outline-none"
    placeholder="+998 XX XXX XX XX"
    pattern="[\+]?[0-9\s\-\(\)]+"
    maxLength={15}
    inputMode="tel"
  />
</div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-gray-700 font-medium">
                <FileText className="h-4 w-4 text-red-500" />
                <span>Buyurtma haqida ma'lumot</span>
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 outline-none"
                  placeholder="Mahsulot turi, miqdori, yetkazib berish manzili va boshqa ma'lumotlar..."
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-lg font-medium shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 disabled:opacity-70"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <Send className="h-5 w-5" />
              )}
              <span>{isLoading ? "Yuborilmoqda..." : "Buyurtma berish"}</span>
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              <div className="p-6 bg-green-50">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-green-700">Muvaffaqiyatli yuborildi</h3>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <p className="text-gray-600 mb-6">
                    Sizning buyurtmangiz muvaffaqiyatli yuborildi. Tez orada operatorlarimiz siz bilan bog'lanishadi.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeModal}
                    className="w-full bg-green-600 text-white rounded-lg py-3 font-medium hover:bg-green-700 transition-colors duration-300"
                  >
                    Yopish
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
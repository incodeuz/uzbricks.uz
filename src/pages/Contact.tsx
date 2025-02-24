// import React, { useState } from 'react';
// import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function Contact() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e:any) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Replace with your actual bot API endpoint
//       const response = await fetch('https://your-bot-api-endpoint.com/message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           type: 'consultation_request',
//           data: formData
//         }),
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to send message');
//       }
      
//       // Success
//       setIsSubmitted(true);
//       // Clear form data
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Error sending form data to bot:', error);
//       // You might want to show an error message to the user here
//     } finally {
//       setIsSubmitting(false);
//       // Reset form status after 2 seconds
//       setTimeout(() => setIsSubmitted(false), 2000);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Telefon",
//       value: "+998-77-321-00-00",
//       color: "text-blue-600",
//       bgColor: "bg-blue-50"
//     },
//     {
//       icon: MapPin,
//       title: "Manzil",
//       value: "O'zbekiston",
//       color: "text-red-600",
//       bgColor: "bg-red-50"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
//         >
//           <div className="text-center">
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent"
//             >
//               Biz bilan bog'lanish
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="mt-4 text-lg text-gray-600"
//             >
//               Savollaringiz bormi? Biz sizga yordam berishdan mamnunmiz
//             </motion.p>
//           </div>
//         </motion.div>
        
//         {/* Decorative Elements */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-50 via-transparent to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4" />
//           <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-50 via-transparent to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
//               <div className="relative z-10">
//                 <h2 className="text-2xl font-bold mb-6">Aloqa ma'lumotlari</h2>
//                 <div className="space-y-6">
//                   {contactInfo.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 + index * 0.1 }}
//                       className="flex items-start space-x-4"
//                     >
//                       <div className={`p-3 rounded-xl ${item.bgColor}`}>
//                         <item.icon className={`h-6 w-6 ${item.color}`} />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900">{item.title}</p>
//                         <p className="text-gray-600 mt-1">{item.value}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-50" />
//             </div>

//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//               {/* Map placeholder */}
//               <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3008.5919362148106!2d69.5339080760429!3d41.05605197134389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAzJzIxLjgiTiA2OcKwMzInMTEuMyJF!5e0!3m2!1sru!2s!4v1740401821689!5m2!1sru!2s" width="600" height="450" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
//           >
//             <div className="relative z-10">
//               <h2 className="text-2xl font-bold mb-6">Konsultatsiya uchun so'rov</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Ismingiz
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
//                     placeholder="To'liq ismingiz"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
//                     placeholder="example@mail.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Telefon
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="tel"
//                       name="phone"
//                       required
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
//                       placeholder="+998 XX XXX XX XX"
//                       pattern="[\+]?[0-9\s\-\(\)]+"
//                       maxLength={15}
//                       inputMode="tel"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Xabar
//                   </label>
//                   <textarea
//                     rows={4}
//                     name="message"
//                     required
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
//                     placeholder="Xabaringizni yozing..."
//                   />
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   disabled={isSubmitting || isSubmitted}
//                   className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-200 disabled:opacity-70"
//                 >
//                   {isSubmitting ? (
//                     <Loader2 className="h-5 w-5 animate-spin" />
//                   ) : isSubmitted ? (
//                     <>
//                       <CheckCircle className="h-5 w-5 mr-2" />
//                       <span>So'rovingiz yuborildi</span>
//                     </>
//                   ) : (
//                     <>
//                       <span>Yuborish</span>
//                       <Send className="h-5 w-5 ml-2" />
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-50" />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToTelegram = async (data:any) => {
    const token = import.meta.env.VITE_TG_TOKEN;
    const chatId = import.meta.env.VITE_TG_ID;
    
    if (!token || !chatId) {
      throw new Error('Telegram token or chat ID is missing');
    }
    
    const message = `
🔔 *Yangi konsultatsiya so'rovi!*

👤 *Ism:* ${data.name}
📧 *Email:* ${data.email}
📱 *Telefon:* ${data.phone}

💬 *Xabar:*
${data.message}
    `;
    
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      }),
    });
    
    const result = await response.json();
    
    if (!result.ok) {
      throw new Error(result.description || 'Failed to send message to Telegram');
    }
    
    return result;
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      await sendToTelegram(formData);
      
      // Success
      setIsSubmitted(true);
      // Clear form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending form data to Telegram:', error);
      setErrorMessage('Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko\'ring.');
    } finally {
      setIsSubmitting(false);
      // Reset success status after 3 seconds
      if (!errorMessage) {
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+998-77-321-00-00",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: MapPin,
      title: "Manzil",
      value: "O'zbekiston",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent"
            >
              Biz bilan bog'lanish
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Savollaringiz bormi? Biz sizga yordam berishdan mamnunmiz
            </motion.p>
          </div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-50 via-transparent to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-50 via-transparent to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6">Aloqa ma'lumotlari</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`p-3 rounded-xl ${item.bgColor}`}>
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-gray-600 mt-1">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-50" />
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Map placeholder */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3008.5919362148106!2d69.5339080760429!3d41.05605197134389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAzJzIxLjgiTiA2OcKwMzInMTEuMyJF!5e0!3m2!1sru!2s!4v1740401821689!5m2!1sru!2s" width="600" height="450" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Konsultatsiya uchun so'rov</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    placeholder="To'liq ismingiz"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                      placeholder="+998 XX XXX XX XX"
                      pattern="[\+]?[0-9\s\-\(\)]+"
                      maxLength={15}
                      inputMode="tel"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Xabar
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
                    placeholder="Xabaringizni yozing..."
                  />
                </div>
                
                {errorMessage && (
                  <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    {errorMessage}
                  </div>
                )}
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-200 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>So'rovingiz yuborildi</span>
                    </>
                  ) : (
                    <>
                      <span>Yuborish</span>
                      <Send className="h-5 w-5 ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-50" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
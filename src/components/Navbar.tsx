import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ShoppingBag, Menu, X, Globe, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: 'Asosiy' },
    { path: '/products', label: 'Mahsulotlar' },
    { path: '/contact', label: "Bog'lanish" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 transition-all duration-500 bg-black/70 backdrop-blur-sm"
    >
      <div className="relative">
        {/* Gradient Borders */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative"
              >
                <div className="relative z-10">
                  <Building2 className="h-9 w-9 text-white transition-colors duration-300 group-hover:text-red-600" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-white">
                    UzBricks
                  </span>
                  <Globe className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-xs text-gray-200">
                  Premium sifat
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-white'
                        : 'text-gray-100 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-red-600 to-blue-600'
                        : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600'
                    }`} />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2"
              >
                <Link
                  to="/order"
                  className="group relative flex items-center space-x-2 bg-white text-gray-900 px-6 py-2.5 rounded-full font-medium overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ShoppingBag className="relative z-10 h-4 w-4 group-hover:text-white transition-colors duration-300" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Buyurtma berish</span>
                  <ArrowUpRight className="relative z-10 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-full text-white hover:text-red-400 transition-colors"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: { duration: 0.3 }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { duration: 0.2 }
            }}
            className="md:hidden relative border-t border-gray-700 bg-gray-900/95 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/95 pointer-events-none" />
            <div className="relative px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -20,
                    transition: { delay: index * 0.05 }
                  }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white'
                        : 'text-gray-100 hover:bg-gray-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className={`h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      location.pathname === item.path ? 'text-white' : 'text-gray-400'
                    }`} />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: menuItems.length * 0.1 }
                }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Link
                  to="/order"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between bg-white text-gray-900 px-4 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 hover:text-white"
                >
                  <div className="flex items-center space-x-2">
                    <ShoppingBag className="h-5 w-5" />
                    <span>Buyurtma berish</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
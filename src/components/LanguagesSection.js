import React from "react";
import { motion } from "framer-motion";

function LanguagesSection({ isDarkTheme }) {
  const languages = [
    { name: "JavaScript", image: "/images/js.svg" },
    { name: "Python", image: "/images/python.svg" },
    { name: "Java", image: "/images/java.svg" },
    { name: "C", image: "/images/c.png" },
    { name: "PHP", image: "/images/php.svg" },
  ];

  const themeStyles = isDarkTheme
    ? 'bg-black text-white'
    : 'bg-gradient-light text-gray-900';

  return (
    <div className={`py-20 ${themeStyles} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold font-poppins mb-4">
            Language Mastery
          </h2>
          <div className={`w-32 h-2 ${isDarkTheme ? 'bg-purple-500' : 'bg-blue-500'} mx-auto rounded-full`}></div>
        </motion.div>

        <div className="relative">
          <div className={`absolute inset-0 flex items-center justify-center ${isDarkTheme ? 'opacity-10' : 'opacity-5'}`}>
            <div className="w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                className={`flex flex-col items-center p-8 rounded-2xl ${
                  isDarkTheme ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-70'
                } backdrop-filter backdrop-blur-lg shadow-xl transition-all duration-300 hover:scale-105`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.img 
                  src={language.image} 
                  alt={language.name} 
                  className="w-20 h-20 mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                />
                <p className={`text-xl font-semibold ${
                  isDarkTheme ? 'text-white' : 'text-gray-800'
                }`}>{language.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LanguagesSection;


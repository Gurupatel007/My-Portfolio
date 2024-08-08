import React from "react";
import { motion } from "framer-motion";

function AboutSection({ isDarkTheme }) {
  return (
    <div className={`py-20 ${isDarkTheme ? 'bg-black' : 'bg-gradient-light'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold font-poppins mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>
            About Me
          </h2>
          <div className={`w-32 h-2 ${isDarkTheme ? 'bg-purple-500' : 'bg-blue-500'} mx-auto rounded-full`}></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
          <img src="/images/profile/code.png" alt="profileImage" className="rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-1/2 md:pl-12"
          >
            <h3 className={`text-2xl font-semibold font-montserrat mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>
              Who I am
            </h3>
            <p className={`text-lg mb-6 ${isDarkTheme ? 'text-about-para' : 'text-gray-600'} font-montserrat`}>
              I'm Guru Patel, a passionate student at Ganpat University - U. V. Patel College of Engineering, on a mission to become a top-notch software engineer. For over 2.5 years, I've been deeply immersed in coding, with a focus on tackling tough problems and bringing ideas to life using the MERN stack.
            </p>
            <p className={`text-lg mb-8 ${isDarkTheme ? 'text-about-para' : 'text-gray-600'} font-montserrat`}>
              My journey in software development has been driven by a relentless curiosity and a desire to create innovative solutions. I thrive on challenges and am always eager to learn new technologies and methodologies.
            </p>
            <a
              href="/pdfs/resume_guru.pdf"
              target="_blank"
              rel="noreferrer"
              className={`font-montserrat  inline-block ${isDarkTheme ? 'bg-btn-bg text-btn-txt hover:bg-btn-hover-bg hover:text-white hover:border-btn-hover-border' : 'bg-blue-500 text-white hover:bg-blue-600'} font-poppins font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105`}
              download
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

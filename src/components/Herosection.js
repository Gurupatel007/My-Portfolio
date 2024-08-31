import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {
  SiReact, SiNodedotjs, SiExpress,
  SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiGit, SiFigma, SiMysql
} from "react-icons/si";

function HeroSection({ isDarkTheme }) {
  const technologies = [
    [
      { Icon: SiHtml5, color: "#E34F26" },
      { Icon: SiCss3, color: "#1572B6" },
      { Icon: SiJavascript, color: "#F7DF1E" },
    ],
    [
      { Icon: SiReact, color: "#61DAFB" },
      { Icon: SiNodedotjs, color: "#339933" },
      { Icon: SiExpress, color: "#ffffff" },
      { Icon: SiTailwindcss, color: "#06B6D4" },
    ],
    [
      { Icon: SiGit, color: "#F05032" },
      { Icon: SiFigma, color: "#F24E1E" },
      { Icon: SiMysql, color: "#4479A1" },
    ]
  ];

  const orbitRadii = [50, 50, 50];

  return (
    <div className={`min-h-screen flex items-center ${isDarkTheme ? 'bg-black' : 'bg-gradient-light'}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">

        <div className="md:w-1/2 text-justify ml-16 mb-10 md:mb-0 pr-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-6xl md:text-7xl font-extrabold mb-6 ${isDarkTheme ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'}`}
          >
            Guru Patel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={`text-2xl md:text-3xl font-semibold mb-6 ${isDarkTheme ? 'text-yellow-300' : 'text-purple-600'}`}
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className={`text-lg md:text-xl mb-8 leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Passionate about creating innovative web solutions using cutting-edge technologies.
            Experienced in MERN stack development and always eager to learn new skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex space-x-8"
          >
            <a href="https://www.linkedin.com/in/guru-patel-42423b219" target="_blank" rel="noopener noreferrer"
              className={`text-4xl ${isDarkTheme ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-300`}>
              <FaLinkedin />
            </a>
            <a href="https://www.github.com/Gurupatel007" target="_blank" rel="noopener noreferrer"
              className={`text-4xl ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors duration-300`}>
              <FaGithub />
            </a>
            <a href="https://instagram.com/its__g.t" target="_blank" rel="noopener noreferrer"
              className={`text-4xl ${isDarkTheme ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-500'} transition-colors duration-300`}>
              <FaInstagram />
            </a>
          </motion.div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative w-96 h-96 mx-auto">
            {technologies.map((techGroup, index) => (
              <div
                key={index}
                className={`absolute inset-0 ${index === 0 ? 'scale-[0.6]' : index === 1 ? 'scale-[0.8]' : 'scale-[1]'}`}
              >
                <div className={`w-full h-full rounded-full border-2 ${isDarkTheme ? 'border-white/20' : 'border-gray-300/50'}`}></div>
                {techGroup.map(({ Icon, color }, techIndex) => (
                  <motion.div
                    key={techIndex}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20 + index * 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      transformOrigin: "50% 50%",
                    }}
                  >
                    <div
                      className="absolute"
                      style={{
                        top: `${50 - orbitRadii[index] * Math.cos((2 * Math.PI * techIndex) / techGroup.length)}%`,
                        left: `${50 + orbitRadii[index] * Math.sin((2 * Math.PI * techIndex) / techGroup.length)}%`,
                        transform: "translate(-50%, -50%)",
                        color: color,
                      }}
                    >
                      <Icon className="text-3xl" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src='/images/profile/profile.png'
                alt="Guru Patel"
                className="w-4/5 h-4/5 object-contain rounded-full shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;


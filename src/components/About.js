// import React from "react";
// import '../App.css';

// function AboutSection() {
//   return (
//     <div className="aboutSection-wrapper">
//       <div className="about-section">
//         <div className="aboutSection-textContainer">
//           <div className="aboutText-container">
//             <div className="aboutText">
//               <div className="about">ABOUT ME</div>
//             </div>
//             <div className="about-line"></div>
//           </div>
//           <div className="about-title">
//             <div className="title">
//               <p>Who I am?</p>
//             </div>
//             <div className="title-desc">
//               <p>I'm a Software developer and here is my portfolio website. Here you'll learn about my journey as a software developer.</p>
//             </div>
//           </div>
//         </div>
//         <div className="about-para">
//           <p className="para">Hey there! I'm <span className="about-name">Guru Patel</span>, a passionate student at Ganpat University -  U. V. Patel College of Engineering, on a mission to become a top-notch  software engineer. For over 2.5 years, I've been deeply immersed in  coding, with a focus on tackling tough problems and bringing ideas to  life using the MERN stack.</p>
//           <div className="downloadCv-btn">
//             <a href="/pdfs/MyResume.pdf" target="_blank" rel="noreferrer" download>Download CV</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutSection;

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
            {/* <svg className="w-full max-w-md mx-auto" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <path d="M250 50C142.8 50 55.6 137.2 55.6 244.4c0 84.4 54.4 156 130 181.6 9.6 1.8 13-4 13-9 0-4.4-.2-19.2-.2-34.8-52.8 11.4-64-22.6-64-22.6-8.6-22-21-27.8-21-27.8-17.2-11.8 1.2-11.6 1.2-11.6 19 1.4 29 19.6 29 19.6 16.8 28.8 44.2 20.4 55 15.6 1.6-12.2 6.6-20.4 12-25.2-42.2-4.8-86.6-21-86.6-93.6 0-20.6 7.4-37.6 19.6-50.8-2-4.8-8.4-24.2 1.8-50.4 0 0 15.8-5 52 19.4 15-4.2 31.2-6.4 47.2-6.4 16 0 32.2 2.2 47.2 6.4 36-24.4 51.8-19.4 51.8-19.4 10.2 26.2 3.8 45.6 1.8 50.4 12.2 13.2 19.6 30.2 19.6 50.8 0 72.8-44.4 88.8-86.8 93.4 6.8 5.8 13 17.2 13 34.8 0 25.2-.2 45.4-.2 51.6 0 5 3.4 10.8 13 9 75.6-25.6 130-97.2 130-181.6C444.4 137.2 357.2 50 250 50z" fill={isDarkTheme ? '#FFF' : '#333'}/>
            </svg> */}
            <img className="rounded-full " src={"/images/profile/code.png"} alt={"about image"} />
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

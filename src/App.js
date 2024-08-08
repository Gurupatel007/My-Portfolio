// import React,{useState} from "react";
// import "./App.css";
// import Header from "./components/Header";
// import HeroSection from "./components/Herosection";
// import AboutSection from "./components/About";
// import SkillsSection from "./components/Skills";
// import ProjectsSection from "./components/Projects";
// import ContactSection from "./components/Contact";
// import Footer from "./components/Footer";
// import LanguagesSection from "./components/LanguagesSection";
// import { Element } from "react-scroll";

// function App() {
//   const [isDarkTheme, setIsDarkTheme] = useState(true);

//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };
//   return (
//     <div className={isDarkTheme ? "portfolio" :"portfolio light-theme"}>
//       <Header onToggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
//       <HeroSection isDarkTheme={isDarkTheme} />
//       <Element name="about">
//       <AboutSection />
//       </Element>
//       <Element name="skills">
//       <LanguagesSection />
//       <SkillsSection isDarkTheme={isDarkTheme} />
//       </Element>
//       <Element name="projects">
//       <ProjectsSection />
//       </Element>
//       <Element name="contact">
//       <ContactSection />
//       </Element>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import LanguagesSection from "./components/LanguagesSection";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <AnimatePresence>
      <motion.div
        key={isDarkTheme ? 'dark' : 'light'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen ${
          isDarkTheme
            ? 'bg-gradient-dark text-white'
            : 'bg-gradient-light text-gray-800'
        }`}
      >
        <CustomCursor />
        <Header onToggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <HeroSection isDarkTheme={isDarkTheme} />
        <Element name="about">
          <AboutSection isDarkTheme={isDarkTheme} />
        </Element>
        <Element name="skills">
          <LanguagesSection isDarkTheme={isDarkTheme} />
          <SkillsSection isDarkTheme={isDarkTheme} />
        </Element>
        <Element name="projects">
          <ProjectsSection isDarkTheme={isDarkTheme} />
        </Element>
        <Element name="contact">
          <ContactSection isDarkTheme={isDarkTheme} />
        </Element>
        <Footer isDarkTheme={isDarkTheme} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;

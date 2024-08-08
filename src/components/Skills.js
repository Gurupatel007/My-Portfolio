// import React, { useState } from "react";
// import '../App.css';

// function SkillsSection({ isDarkTheme }) {
//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   const source = isDarkTheme ? "/images/skills/Github.svg" : "/images/skills/github-light.svg";

//   const imagesLinkData = [
//     { src: "/images/skills/HTML.png", alt: "HTML" },
//     { src: "/images/skills/css-3.png", alt: "CSS" },
//     { src: "/images/skills/js.svg", alt: "JavaScript" },
//     { src: source, alt: "Github" },
//     { src: "/images/skills/Bash.svg", alt: "Bash" },
//     { src: "/images/skills/vite.svg", alt: "Vite" },
//     { src: "/images/skills/React.png", alt: "React" },
//     { src: "/images/skills/Nodejs.svg", alt: "Node" },
//     { src: "/images/skills/Redux.svg", alt: "Redux" },
//     { src: "/images/skills/Saas.svg", alt: "Saas" },
//     { src: "/images/skills/git.svg", alt: "Git" },
//     { src: "/images/skills/Express.png", alt: "Express" },
//     { src: "/images/skills/Tailwind.png", alt: "Tailwind CSS" },
//     { src: "/images/skills/Bootstrap.svg", alt: "Bootstrap" },
//     { src: "/images/skills/Figma.svg", alt: "Figma" },
//     { src: "/images/skills/SQL.svg", alt: "SQL" },
//   ];

//   const themeClass = isDarkTheme ? '' : 'light-theme';

//   return (
    

//     <div className={`skillSection-wrapper ${themeClass}`}>
//       <div className="skills-section">
//         <div className="skillSection-textContainer">
//           <div className="skillText-container">
//             <div className="skillText">
//               <div>MY SKILLS</div>
//             </div>
//             <div className="skills-line"></div>
//           </div>
//           <div className="skills-title">
//             <div className="title">
//               <p>My Programming Skills</p>
//             </div>
//             <div className="title-desc">
//               <p>These are the technologies I am currently familiar with.</p>
//             </div>
//           </div>
//         </div>
//         <div className="skills-content">
//           {imagesLinkData.map((image, index) => (
//             <div 
//               className="skill-card" 
//               key={index}
//               onMouseEnter={() => setHoveredSkill(image.alt)}
//               onMouseLeave={() => setHoveredSkill(null)}
//             >
//               <img src={image.src} alt={image.alt} className="skill-image" />
//               {hoveredSkill === image.alt && (
//                 <div className="skill-popup">{image.alt}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SkillsSection;

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function SkillsSection() {
//   const [activeSkill, setActiveSkill] = useState(0);
//   const containerRef = useRef(null);

//   const skills = [
//     { name: "HTML", image: "/images/skills/HTML.png", description: "Markup language for creating web pages" },
//     { name: "CSS", image: "/images/skills/css-3.png", description: "Style sheet language for designing web pages" },
//     { name: "JavaScript", image: "/images/skills/js.svg", description: "Programming language for web development" },
//     { name: "React", image: "/images/skills/React.png", description: "JavaScript library for building user interfaces" },
//     { name: "Node.js", image: "/images/skills/Nodejs.svg", description: "JavaScript runtime built on Chrome's V8 JavaScript engine" },
//     { name: "Express", image: "/images/skills/Express.png", description: "Web application framework for Node.js" },
//     { name: "Git", image: "/images/skills/git.svg", description: "Distributed version control system" },
//     { name: "Tailwind CSS", image: "/images/skills/Tailwind.png", description: "Utility-first CSS framework" },
//     { name: "Figma", image: "/images/skills/Figma.svg", description: "Cloud-based design and prototyping tool" },
//     { name: "SQL", image: "/images/skills/SQL.svg", description: "Language for managing and manipulating databases" },
//   ];

//   useEffect(() => {
//     const container = containerRef.current;
//     const handleScroll = () => {
//       if (container) {
//         const scrollPosition = container.scrollTop;
//         const itemHeight = 150;
//         const newActiveSkill = Math.round(scrollPosition / itemHeight);
//         setActiveSkill(newActiveSkill);
//       }
//     };

//     container?.addEventListener('scroll', handleScroll);
//     return () => container?.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="py-24 px-4 md:px-16 bg-black text-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-5xl font-bold mb-16 text-center"
//         >
//           My Skills
//         </motion.h2>
//         <div className="flex flex-col md:flex-row items-start gap-12">
//         <div className="w-full md:w-1/3 h-[450px] relative overflow-hidden mt-[-200px]">
//             <div 
//               ref={containerRef}
//               className="absolute top-0 left-0 w-full h-full overflow-y-scroll"
//               style={{ 
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none'
//               }}
//             >
//               <style jsx>{`
//                 div::-webkit-scrollbar {
//                   display: none;
//                 }
//               `}</style>
//               <div className="h-[225px]"></div>
//               {skills.map((skill, index) => (
//                 <motion.div
//                   key={skill.name}
//                   animate={{ 
//                     opacity: Math.abs(index - activeSkill) <= 1 ? 1 : 0.3,
//                     filter: index === activeSkill ? 'blur(0px)' : 'blur(3px)',
//                     scale: index === activeSkill ? 1 : 0.85
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   className="h-[150px] flex items-center justify-center"
//                 >
//                   <div className="bg-black rounded-lg p-4 w-full flex items-center space-x-4 border border-gray-800">
//                     <img src={skill.image} alt={skill.name} className="w-12 h-12" />
//                     <span className="text-xl font-semibold">{skill.name}</span>
//                   </div>
//                 </motion.div>
//               ))}
//               <div className="h-[225px]"></div>
//             </div>
//           </div>
//           <div className="w-full md:w-2/3 md:pl-12">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeSkill}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-black rounded-lg p-8 shadow-xl border border-gray-800"
//               >
//                 <h3 className="text-4xl font-bold mb-4 text-yellow-400">
//                   {skills[activeSkill].name}
//                 </h3>
//                 <p className="text-xl text-gray-300">
//                   {skills[activeSkill].description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SkillsSection;

// --------------------------------------------------------

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function SkillsSection() {
//   const [activeSkill, setActiveSkill] = useState(0);
//   const containerRef = useRef(null);

//   // ... (skills array remains the same)
  
//   const skills = [
//     { name: "HTML", image: "/images/skills/HTML.png", description: "Markup language for creating web pages" },
//     { name: "CSS", image: "/images/skills/css-3.png", description: "Style sheet language for designing web pages" },
//     { name: "JavaScript", image: "/images/skills/js.svg", description: "Programming language for web development" },
//     { name: "React", image: "/images/skills/React.png", description: "JavaScript library for building user interfaces" },
//     { name: "Node.js", image: "/images/skills/Nodejs.svg", description: "JavaScript runtime built on Chrome's V8 JavaScript engine" },
//     { name: "Express", image: "/images/skills/Express.png", description: "Web application framework for Node.js" },
//     { name: "Git", image: "/images/skills/git.svg", description: "Distributed version control system" },
//     { name: "Tailwind CSS", image: "/images/skills/Tailwind.png", description: "Utility-first CSS framework" },
//     { name: "Figma", image: "/images/skills/Figma.svg", description: "Cloud-based design and prototyping tool" },
//     { name: "SQL", image: "/images/skills/SQL.svg", description: "Language for managing and manipulating databases" },
//   ];


//   useEffect(() => {
//     const container = containerRef.current;
//     const handleScroll = () => {
//       if (container) {
//         const scrollPosition = container.scrollTop;
//         const itemHeight = 150;
//         const newActiveSkill = Math.min(Math.max(Math.round(scrollPosition / itemHeight), 0), skills.length - 1);
//         setActiveSkill(newActiveSkill);
//       }
//     };

//     container?.addEventListener('scroll', handleScroll);
//     return () => container?.removeEventListener('scroll', handleScroll);
//   }, [skills.length]);

//   return (
//     <div className="py-24 px-4 md:px-16 bg-black text-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-5xl font-bold mb-16 text-center"
//         >
//           My Skills
//         </motion.h2>
//         <div className="flex flex-col md:flex-row items-start gap-12">
//           <div className="w-full md:w-1/3 h-[450px] relative overflow-hidden mt-[-200px]">
//             <div
//               ref={containerRef}
//               className="absolute top-0 left-0 w-full h-full overflow-y-scroll"
//               style={{
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none'
//               }}
//             >
//               <style jsx>{`
//                 div::-webkit-scrollbar {
//                   display: none;
//                 }
//               `}</style>
//               <div className="h-[225px]"></div>
//               {skills.map((_, index) => (
//                 <div key={index} className="h-[150px]" />
//               ))}
//               <div className="h-[225px]"></div>
//             </div>
//             <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//               {[-1, 0, 1].map((offset) => {
//                 const skillIndex = activeSkill + offset;
//                 const skill = skills[skillIndex];
//                 return skill ? (
//                   <motion.div
//                     key={skill.name}
//                     animate={{
//                       opacity: offset === 0 ? 1 : 0.3,
//                       y: offset * 150 + 225,
//                       filter: offset === 0 ? 'blur(0px)' : 'blur(3px)',
//                       scale: offset === 0 ? 1 : 0.85
//                     }}
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                     className="absolute top-0 left-0 w-full h-[150px] flex items-center justify-center"
//                   >
//                     <div className="bg-black rounded-lg p-4 w-full flex items-center space-x-4 border border-gray-800">
//                       <img src={skill.image} alt={skill.name} className="w-12 h-12" />
//                       <span className="text-xl font-semibold">{skill.name}</span>
//                     </div>
//                   </motion.div>
//                 ) : null;
//               })}
//             </div>
//           </div>
//           <div className="w-full md:w-2/3 md:pl-12">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeSkill}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-black rounded-lg p-8 shadow-xl border border-gray-800"
//               >
//                 <h3 className="text-4xl font-bold mb-4 text-yellow-400">
//                   {skills[activeSkill].name}
//                 </h3>
//                 <p className="text-xl text-gray-300">
//                   {skills[activeSkill].description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SkillsSection;

// ----------------------------------------

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SkillsSection({ isDarkTheme }) {
  const [activeSkill, setActiveSkill] = useState(0);
  const containerRef = useRef(null);

  // ... (skills array remains the same)
  
  const skills = [
    { name: "HTML", image: "/images/skills/HTML.png", description: "Markup language for creating web pages" },
    { name: "CSS", image: "/images/skills/css-3.png", description: "Style sheet language for designing web pages" },
    { name: "JavaScript", image: "/images/skills/js.svg", description: "Programming language for web development" },
    { name: "React", image: "/images/skills/React.png", description: "JavaScript library for building user interfaces" },
    { name: "Node.js", image: "/images/skills/Nodejs.svg", description: "JavaScript runtime built on Chrome's V8 JavaScript engine" },
    { name: "Express", image: "/images/skills/Express.png", description: "Web application framework for Node.js" },
    { name: "Git", image: "/images/skills/git.svg", description: "Distributed version control system" },
    { name: "Tailwind CSS", image: "/images/skills/Tailwind.png", description: "Utility-first CSS framework" },
    { name: "Figma", image: "/images/skills/Figma.svg", description: "Cloud-based design and prototyping tool" },
    { name: "SQL", image: "/images/skills/SQL.svg", description: "Language for managing and manipulating databases" },
  ];


  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container) {
        const scrollPosition = container.scrollTop;
        const itemHeight = 150;
        const newActiveSkill = Math.min(Math.max(Math.round(scrollPosition / itemHeight), 0), skills.length - 1);
        setActiveSkill(newActiveSkill);
      }
    };

    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [skills.length]);

  const themeClasses = isDarkTheme
    ? "bg-black text-white"
    : "bg-white text-black";

  const cardClasses = isDarkTheme
    ? "bg-black border-gray-800"
    : "bg-gray-100 border-gray-300";

  const highlightColor = isDarkTheme ? "text-yellow-400" : "text-blue-600";

  return (
    <div className={`py-24 px-4 md:px-16 ${themeClasses}`}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          
          <h2 className="text-5xl font-extrabold font-poppins mb-4">
            My Skills
          </h2>
          <div className={`w-32 h-2 ${isDarkTheme ? 'bg-purple-500' : 'bg-blue-500'} mx-auto rounded-full`}></div>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/3 h-[450px] relative overflow-hidden mt-[-200px]">
            <div
              ref={containerRef}
              className="absolute top-0 left-0 w-full h-full overflow-y-scroll"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="h-[225px]"></div>
              {skills.map((_, index) => (
                <div key={index} className="h-[150px]" />
              ))}
              <div className="h-[225px]"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {[-1, 0, 1].map((offset) => {
                const skillIndex = activeSkill + offset;
                const skill = skills[skillIndex];
                return skill ? (
                  <motion.div
                    key={skill.name}
                    animate={{
                      opacity: offset === 0 ? 1 : 0.3,
                      y: offset * 150 + 225,
                      filter: offset === 0 ? 'blur(0px)' : 'blur(3px)',
                      scale: offset === 0 ? 1 : 0.85
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-0 left-0 w-full h-[150px] flex items-center justify-center"
                  >
                    <div className={`rounded-lg p-4 w-full flex items-center space-x-4 border ${cardClasses}`}>
                      <img src={skill.image} alt={skill.name} className="w-12 h-12" />
                      <span className="text-xl font-semibold">{skill.name}</span>
                    </div>
                  </motion.div>
                ) : null;
              })}
            </div>
          </div>
          <div className="w-full md:w-2/3 md:pl-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`rounded-lg p-8 shadow-xl border ${cardClasses}`}
              >
                <h3 className={`text-4xl font-bold mb-4 ${highlightColor}`}>
                  {skills[activeSkill].name}
                </h3>
                <p className="text-xl">
                  {skills[activeSkill].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;

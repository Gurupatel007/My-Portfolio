import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const ProjectCard = ({ project, index, setActiveProject, isDarkTheme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardBg = isDarkTheme ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkTheme ? 'text-white' : 'text-gray-900';
  const descriptionColor = isDarkTheme ? 'text-gray-400' : 'text-gray-600';
  const tagBg = isDarkTheme ? 'bg-gray-800' : 'bg-gray-200';

  return (
    <motion.div
      ref={ref}
      className="relative group perspective"
      initial={{ opacity: 0, rotateY: -90 }}
      animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${isDarkTheme ? 'from-purple-500 to-pink-500' : 'from-blue-400 to-indigo-500'} transform -skew-y-6 group-hover:skew-y-0 transition-all duration-300`}></div>
      <motion.div
        className={`relative ${cardBg} p-6 transform transition-all duration-300 cursor-pointer`}
        whileHover={{ scale: 1.05, rotateY: 10 }}
        onClick={() => setActiveProject(project)}
      >
        <img src={project.image} alt={project.name} className="w-full h-48 object-cover mb-4 rounded" />
        <h3 className={`text-2xl font-bold mb-2 ${textColor}`}>{project.name}</h3>
        <p className={`${descriptionColor} mb-4 line-clamp-3`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className={`px-2 py-1 ${tagBg} text-xs rounded-full ${textColor}`}>{tag}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = ({ isDarkTheme }) => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      name: "Focus Timer",
      image: "/images/projects/focus-timer.png",
      live: "https://gurupatel007.github.io/Focus-Study-Timer/",
      github: "https://github.com/Gurupatel007/Focus-Study-Timer",
      description: "A productivity tool to help users manage their study time effectively.",
      tags: ["React", "JavaScript", "CSS"]
    },
    {
      name: "Hosterr",
      image: "/images/projects/hosterr2.png",
      live: "https://gurupatel007.github.io/Hosterr-Website-Landing-Page/",
      github: "https://github.com/Gurupatel007/Hosterr-Website-Landing-Page",
      description: "A modern landing page for a web hosting service.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Music Player",
      image: "/images/projects/music-player2.png",
      live: "https://gurupatel007.github.io/Music-Player-App/",
      github: "https://github.com/Gurupatel007/Music-Player-App",
      description: "A sleek and functional music player application.",
      tags: ["React", "JavaScript", "API Integration"]
    },
    {
      name: "Student Corner",
      image: "/images/projects/landing.png",
      live: "#",
      github: "https://github.com/Gurupatel007/Student-Corner",
      description: "A comprehensive platform for students to manage their academic life.",
      tags: ["React", "Node.js", "MongoDB"]
    },
  ];

  const bgColor = isDarkTheme ? 'bg-black' : 'bg-gray-100';
  const textColor = isDarkTheme ? 'text-white' : 'text-gray-900';

  return (
    <div className={`${bgColor} ${textColor} min-h-screen py-20 px-4 overflow-hidden`}>
      <motion.h2
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-extrabold font-poppins mb-4">
          Projects Showcase
        </h2>
        <div className={`w-32 h-2 ${isDarkTheme ? 'bg-purple-500' : 'bg-blue-500'} mx-auto rounded-full`}></div>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} setActiveProject={setActiveProject} isDarkTheme={isDarkTheme} />
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 ${isDarkTheme ? 'bg-black bg-opacity-90' : 'bg-white bg-opacity-90'} flex items-center justify-center p-4 z-50 backdrop-blur-sm`}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, rotateX: -30 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.8, y: 50, rotateX: 30 }}
              transition={{ type: "spring", damping: 15 }}
              className={`${isDarkTheme ? 'bg-gray-900' : 'bg-white'} p-8 rounded-lg max-w-3xl w-full shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeProject.image} alt={activeProject.name} className="w-full h-64 object-contain rounded-lg mb-6" />
              <h3 className={`text-3xl font-bold mb-4 ${textColor}`}>{activeProject.name}</h3>
              <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} mb-6`}>{activeProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className={`px-3 py-1 ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'} rounded-full ${textColor}`}>{tag}</span>
                ))}
              </div>
              <div className="flex justify-between">
                <motion.a
                  href={activeProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className={`${isDarkTheme ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-6 py-2 rounded-full transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`${isDarkTheme ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} ${textColor} px-6 py-2 rounded-full transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsSection;


// import React from "react";

// function ContactSection() {
//   return (
//     <div className="contactSection-wrapper">
//       <div className="contact-section">
//         <div className="contactSection-textContainer">
//           <div className="contactText-container">
//             <div className="contactText">CONTACT</div>
//             <div className="contact-line"></div>
//           </div>
//           <div className="contact-title">
//             <div className="title">
//               Questions, Thoughts, Any Suggestions
//             </div>
//             <div className="title-desc">
//               Feel free to contact me by filling out the form below.
//             </div>
//           </div>
//         </div>

//         <div className="contact-content">
//           <div className="form-group">
//             <div className="form-label">
//               <p>Name</p>
//             </div>
//             <div className="form-input">
//               <input type="text" placeholder="e.g. Guru Patel" />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="form-label">
//               <p>Email</p>
//             </div>
//             <div className="form-input">
//               <input type="email" placeholder="e.g. gurupatel279@gmail.com" />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="form-label">
//               <p>Message</p>
//             </div>
//             <div className="form-input">
//               <textarea placeholder="Write message..." rows="5" />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="btn">
//               <a href="mailto:gurupatel279@gmail.com">
//                 SEND
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactSection;

// import React from "react";
// import { motion } from "framer-motion";

// function ContactSection({ isDarkTheme }) {
//     return (
//         <div className={`py-20 px-4 md:px-16 ${isDarkTheme ? 'bg-contact-bg' : 'bg-gradient-light'}`}>
//             <div className="max-w-4xl mx-auto text-center">
//                 <motion.h2 
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-4xl font-bold mb-8 text-title"
//                 >
//                     Get in Touch
//                 </motion.h2>
//                 <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2, duration: 0.5 }}
//                     className="text-lg mb-8 text-title-desc"
//                 >
//                     I'm always open to new opportunities and collaborations. Feel free to reach out!
//                 </motion.p>
//                 <motion.a
//                     href="mailto:gurupatel279@gmail.com"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4, duration: 0.5 }}
//                     className="inline-block px-8 py-3 rounded-full text-btn-txt bg-btn-bg hover:bg-btn-hover-bg hover:text-white transition-all duration-300 transform hover:scale-105"
//                 >
//                     Contact Me
//                 </motion.a>
//             </div>
//         </div>
//     );
// }

// export default ContactSection;

// ------------------------------------

// import React from "react";
// import { motion } from "framer-motion";
// import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// function ContactSection({ isDarkTheme }) {
//   const contactMethods = [
//     { name: "Email", icon: FaEnvelope, link: "mailto:gurupatel279@gmail.com" },
//     { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/your-profile" },
//     { name: "GitHub", icon: FaGithub, link: "https://github.com/your-username" },
//     { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/your-handle" },
//   ];

//   return (
//     <div className={`py-20 px-4 md:px-16 ${isDarkTheme ? 'bg-contact-bg' : 'bg-gradient-light'}`}>
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-6xl font-bold mb-16 text-center text-title"
//         >
//           Let's Create Together
//         </motion.h2>
//         <div className="flex flex-wrap justify-center items-center gap-8">
//           {contactMethods.map((method, index) => (
//             <motion.a
//               key={method.name}
//               href={method.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               transition={{ delay: index * 0.1, duration: 0.3 }}
//               className={`flex flex-col items-center justify-center w-40 h-40 rounded-full ${isDarkTheme ? 'bg-black hover:bg-zinc-950' : 'bg-white hover:bg-gray-100'} shadow-lg transition-all duration-300`}
//             >
//               <method.icon className={`text-4xl mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`} />
//               <span className={`text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>{method.name}</span>
//             </motion.a>
//           ))}
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="mt-20 text-center"
//         >
//           <p className="text-xl mb-8 text-title-desc">
//             Ready to bring your ideas to life? Let's collaborate and create something extraordinary!
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-3 rounded-full text-btn-txt bg-btn-bg hover:bg-btn-hover-bg hover:text-white transition-all duration-300"
//           >
//             Start a Conversation
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default ContactSection;

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function ContactSection({ isDarkTheme }) {
  const contactMethods = [
    { name: "Email", icon: FaEnvelope, link: "mailto:gurupatel279@gmail.com" },
    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/guru-patel-42423b219" },
    { name: "GitHub", icon: FaGithub, link: "https://github.com/Gurupatel007" },
    { name: "Twitter", icon: FaTwitter, link: "https://x.com/Gurupat11727321" },
  ];

  const themeStyles = {
    background: isDarkTheme ? 'bg-black' : 'bg-gray-100',
    text: isDarkTheme ? 'text-white' : 'text-gray-900',
    card: isDarkTheme ? 'bg-black hover:bg-zinc-950 border-2 border-zinc-950' : 'bg-white hover:bg-gray-200',
    icon: isDarkTheme ? 'text-purple-400' : 'text-blue-500',
    button: isDarkTheme ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-500 hover:bg-blue-600',
  };

  return (
    <div className={`py-20 px-4 md:px-16 ${themeStyles.background} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-6xl font-bold mb-16 text-center ${themeStyles.text}`}
        >
          Let's Create Together
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className={`flex flex-col items-center justify-center w-40 h-40 rounded-full ${themeStyles.card} shadow-lg transition-all duration-300`}
            >
              <method.icon className={`text-4xl mb-2 ${themeStyles.icon}`} />
              <span className={`text-sm font-medium ${themeStyles.text}`}>{method.name}</span>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <p className={`text-xl mb-8 ${themeStyles.text}`}>
            Ready to bring your ideas to life? Let's collaborate and create something extraordinary!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full text-white ${themeStyles.button} transition-all duration-300`}
          >
            <a href="mailto:gurupatel279@gmail.com">Start a Conversation</a>
            
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactSection;

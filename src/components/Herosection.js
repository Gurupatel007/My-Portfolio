// import React from "react";
// // import "./Herosection.css";

// function HeroSection({isDarkTheme}) {
//   return (
//     <div className="heroSection-wrapper">
//       <div className="hero-section">

//         <div className="social-links">
//           <div>
//           <a className="links" href="https://www.linkedin.com/in/guru-patel-42423b219" target="_blank" rel="noreferrer">
//           {
//             isDarkTheme ?
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//       <path d="M20.448 20.6638H16.8936V15.0958C16.8936 13.7674 16.866 12.0586 15.0408 12.0586C13.188 12.0586 12.9048 13.5034 12.9048 14.9974V20.6638H9.3516V9.21223H12.7644V10.7722H12.8112C13.2876 9.87224 14.448 8.92424 16.1808 8.92424C19.782 8.92424 20.448 11.293 20.448 14.3782V20.6638ZM5.3364 7.64503C4.1916 7.64503 3.2724 6.71983 3.2724 5.58103C3.2724 4.44223 4.1928 3.51703 5.3364 3.51703C5.88381 3.51703 6.40879 3.73449 6.79587 4.12157C7.18294 4.50864 7.4004 5.03363 7.4004 5.58103C7.4004 6.12844 7.18294 6.65343 6.79587 7.0405C6.40879 7.42758 5.88381 7.64503 5.3364 7.64503ZM7.1172 20.665H3.5532V9.21223H7.1172V20.665ZM22.2264 0.212234H1.7712C0.792 0.212234 0 0.986235 0 1.94023V22.4842C0 23.4382 0.792 24.2122 1.7712 24.2122H22.2216C23.1996 24.2122 24 23.4394 24 22.4842V1.94023C24 0.987435 23.1996 0.212234 22.2216 0.212234H22.2264Z" fill="#F8F8F8"/>
//             </svg>
//             :
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 18 18" fill="none">
//   <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" fill="black"/>
// </svg>
//           }

//           </a>
//           </div>

//           <div>
//           <a className="links" href="https://www.github.com/Gurupatel007" target="_blank" rel="noreferrer">
//           {
//             isDarkTheme ? 
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="#F8F8F8"/>
//             </svg>
//             :
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="black"/>
// </svg>
//           }

//           </a>
//           </div>

//           <div>
//           <a className="links" href="https://instagram.com/its__g.t" target="_blank" rel="noreferrer">
//           {
//             isDarkTheme ? 
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//       <path d="M6.96 0.212234H17.04C20.88 0.212234 24 3.33223 24 7.17224V17.2522C24 19.0981 23.2667 20.8684 21.9615 22.1737C20.6562 23.479 18.8859 24.2122 17.04 24.2122H6.96C3.12 24.2122 0 21.0922 0 17.2522V7.17224C0 5.32633 0.733284 3.55602 2.03854 2.25077C3.34379 0.945518 5.11409 0.212234 6.96 0.212234ZM6.72 2.61223C5.57427 2.61223 4.47546 3.06738 3.6653 3.87753C2.85514 4.68769 2.4 5.7865 2.4 6.93223V17.4922C2.4 19.8802 4.332 21.8122 6.72 21.8122H17.28C18.4257 21.8122 19.5245 21.3571 20.3347 20.5469C21.1449 19.7368 21.6 18.638 21.6 17.4922V6.93223C21.6 4.54423 19.668 2.61223 17.28 2.61223H6.72ZM18.3 4.41223C18.6978 4.41223 19.0794 4.57027 19.3607 4.85157C19.642 5.13288 19.8 5.51441 19.8 5.91223C19.8 6.31006 19.642 6.69159 19.3607 6.9729C19.0794 7.2542 18.6978 7.41223 18.3 7.41223C17.9022 7.41223 17.5206 7.2542 17.2393 6.9729C16.958 6.69159 16.8 6.31006 16.8 5.91223C16.8 5.51441 16.958 5.13288 17.2393 4.85157C17.5206 4.57027 17.9022 4.41223 18.3 4.41223ZM12 6.21223C13.5913 6.21223 15.1174 6.84438 16.2426 7.96959C17.3679 9.09481 18 10.6209 18 12.2122C18 13.8035 17.3679 15.3297 16.2426 16.4549C15.1174 17.5801 13.5913 18.2122 12 18.2122C10.4087 18.2122 8.88258 17.5801 7.75736 16.4549C6.63214 15.3297 6 13.8035 6 12.2122C6 10.6209 6.63214 9.09481 7.75736 7.96959C8.88258 6.84438 10.4087 6.21223 12 6.21223ZM12 8.61224C11.0452 8.61224 10.1295 8.99152 9.45442 9.66665C8.77928 10.3418 8.4 11.2575 8.4 12.2122C8.4 13.167 8.77928 14.0827 9.45442 14.7578C10.1295 15.433 11.0452 15.8122 12 15.8122C12.9548 15.8122 13.8705 15.433 14.5456 14.7578C15.2207 14.0827 15.6 13.167 15.6 12.2122C15.6 11.2575 15.2207 10.3418 14.5456 9.66665C13.8705 8.99152 12.9548 8.61224 12 8.61224Z" fill="#F8F8F8"/>
//             </svg>
//             :
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 20 20" fill="none">
//   <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="black"/>
// </svg>
//           }

//           </a>
//           </div>
//           <div className="hero-line"></div>
//         </div>

//         <div className="hero-content">
//           <div className="eclipse"></div>
//           <div className="hero-name">
//             <p className="first-name">Guru</p>
//             <p className="last-name">Patel</p>
//           </div>
//           <div className="hero-image">
//           <img src="https://i.ibb.co/pnB72vv/profile-image-removebg-1.png" alt="profile-image-removebg-1" border="0" />
//           </div>
//         </div>

//         <div className="scrollText-container">
//           <div className="scrollText">
//             <p>SCROLL</p>
//           </div>
//           <div className="hero-line"></div>
//         </div>
//       </div>  
//     </div>

//   );
// }

// export default HeroSection;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import {
//   SiReact, SiNodedotjs, SiMongodb, SiExpress,
//   SiJavascript, SiHtml5, SiCss3, SiTailwindcss
// } from "react-icons/si";

// function HeroSection({ isDarkTheme }) {
//   const technologies = [
//     [
//       { Icon: SiReact, color: "#61DAFB" },
//       { Icon: SiNodedotjs, color: "#339933" },
//       { Icon: SiMongodb, color: "#47A248" },
//     ],
//     [
//       { Icon: SiJavascript, color: "#F7DF1E" },
//       { Icon: SiHtml5, color: "#E34F26" },
//       { Icon: SiCss3, color: "#1572B6" },
//     ]
//   ];

//   const orbitRadii = [50, 50]; // Radii for inner and outer orbits

//   return (
//     <div className={`min-h-screen flex items-center ${isDarkTheme ? 'bg-gradient-dark' : 'bg-gradient-light'}`}>
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 text-left mb-10 md:mb-0 pr-8">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className={`text-7xl md:text-8xl font-bold mb-4 ${isDarkTheme ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'}`}
//           >
//             Guru<br />Patel
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className={`text-xl md:text-2xl mb-8 ${isDarkTheme ? 'text-yellow-300' : 'text-purple-600'}`}
//           >
//             Full Stack Developer & UI/UX Enthusiast
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className={`text-lg mb-8 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}
//           >
//             Passionate about creating innovative web solutions using cutting-edge technologies.
//             Experienced in MERN stack development and always eager to learn new skills.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="flex space-x-6"
//           >
//             <a href="https://www.linkedin.com/in/guru-patel-42423b219" target="_blank" rel="noopener noreferrer"
//               className={`text-3xl ${isDarkTheme ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors`}>
//               <FaLinkedin />
//             </a>
//             <a href="https://www.github.com/Gurupatel007" target="_blank" rel="noopener noreferrer"
//               className={`text-3xl ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
//               <FaGithub />
//             </a>
//             <a href="https://instagram.com/its__g.t" target="_blank" rel="noopener noreferrer"
//               className={`text-3xl ${isDarkTheme ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-500'} transition-colors`}>
//               <FaInstagram />
//             </a>
//           </motion.div>
//         </div>
// <div className="md:w-1/2 relative">
//   <div className="relative w-96 h-96 mx-auto">
//     {technologies.map((techGroup, index) => (
//       <div
//         key={index}
//         className={`absolute inset-0 ${index === 0 ? 'scale-75' : 'scale-95'}`}
//       >
//         <div className={`w-full h-full rounded-full border-2 ${isDarkTheme ? 'border-white/20' : 'border-gray-300/50'}`}></div>
//         {techGroup.map(({ Icon, color }, techIndex) => (
//           <motion.div
//             key={techIndex}
//             animate={{
//               rotate: 360,
//             }}
//             transition={{
//               duration: 10 + index * 10, // Different speeds for different orbits
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             className="absolute top-0 left-0 w-full h-full"
//             style={{
//               transformOrigin: "50% 50%",
//             }}
//           >
//             <div
//               className="absolute"
//               style={{
//                 top: `${50 - orbitRadii[index] * Math.cos((2 * Math.PI * techIndex) / techGroup.length)}%`,
//                 left: `${50 + orbitRadii[index] * Math.sin((2 * Math.PI * techIndex) / techGroup.length)}%`,
//                 transform: "translate(-50%, -50%)",
//                 color: color,
//               }}
//             >
//               <Icon className="text-3xl" />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     ))}
//     <div className="absolute inset-0 flex items-center justify-center">
//       <img
//         src="https://i.ibb.co/pnB72vv/profile-image-removebg-1.png"
//         alt="Guru Patel"
//         className="w-4/5 h-4/5 object-contain rounded-full shadow-2xl z-10"
//       />
//     </div>
//   </div>
// </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


// -----------------------------
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

        <div className="md:w-1/2 text-left mb-10 md:mb-0 pr-8">
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
                src="https://i.ibb.co/pnB72vv/profile-image-removebg-1.png"
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


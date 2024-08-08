// import React from "react";
// // import "./Header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Link} from 'react-scroll';

// function Header({ onToggleTheme, isDarkTheme}) {
//     return (
//         <div className="header-wrapper">
//             <div className="header-container">
//                 <div className="logo">
//                     <h1>Portfolio<span className="dot"></span></h1>

//                 </div>
//                 <div className="navigation-container">
//                     <div className="navbar">
//                         <div className="nav-item">
//                             <Link to="about" smooth={true} duration={500} >About</Link>
//                         </div>
//                         <div className="nav-item">
//                             <Link to="skills" smooth={true} duration={500} >Skills</Link>
//                         </div>
//                         <div className="nav-item">
//                             <Link to="projects" smooth={true} duration={500}  >Projects</Link>
//                         </div>
//                         <div className="nav-item">
//                             <Link to="contact" smooth={true} duration={500} >Contact</Link>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="theme-container">
//                     {
//                         isDarkTheme?
//                         <div onClick={onToggleTheme} className="color-mode">

//                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
//         <path d="M16 0.770844C16.2818 0.770844 16.5521 0.882785 16.7513 1.08204C16.9506 1.2813 17.0625 1.55155 17.0625 1.83334V3.25001C17.0625 3.5318 16.9506 3.80205 16.7513 4.00131C16.5521 4.20057 16.2818 4.31251 16 4.31251C15.7182 4.31251 15.448 4.20057 15.2487 4.00131C15.0495 3.80205 14.9375 3.5318 14.9375 3.25001V1.83334C14.9375 1.55155 15.0495 1.2813 15.2487 1.08204C15.448 0.882785 15.7182 0.770844 16 0.770844ZM16 7.85418C13.8396 7.85418 11.7677 8.7124 10.24 10.24C8.7124 11.7677 7.85418 13.8396 7.85418 16C7.85418 18.1604 8.7124 20.2323 10.24 21.76C11.7677 23.2876 13.8396 24.1458 16 24.1458C18.1604 24.1458 20.2323 23.2876 21.76 21.76C23.2876 20.2323 24.1458 18.1604 24.1458 16C24.1458 13.8396 23.2876 11.7677 21.76 10.24C20.2323 8.7124 18.1604 7.85418 16 7.85418ZM6.73501 5.23193C6.53471 5.03829 6.26637 4.93107 5.98779 4.93335C5.7092 4.93564 5.44266 5.04726 5.24557 5.24416C5.04848 5.44107 4.93661 5.7075 4.93406 5.98609C4.93151 6.26467 5.03848 6.53311 5.23193 6.73359L6.23351 7.73518C6.33078 7.83957 6.44808 7.92329 6.57841 7.98137C6.70875 8.03944 6.84944 8.07066 6.9921 8.07318C7.13477 8.0757 7.27647 8.04946 7.40877 7.99602C7.54107 7.94258 7.66126 7.86304 7.76215 7.76215C7.86304 7.66126 7.94258 7.54107 7.99602 7.40877C8.04946 7.27647 8.0757 7.13477 8.07318 6.9921C8.07066 6.84944 8.03944 6.70875 7.98137 6.57841C7.92329 6.44808 7.83957 6.33078 7.73518 6.23351L6.73501 5.23193ZM31.2292 16C31.2292 16.2818 31.1172 16.5521 30.918 16.7513C30.7187 16.9506 30.4485 17.0625 30.1667 17.0625H28.75C28.4682 17.0625 28.198 16.9506 27.9987 16.7513C27.7995 16.5521 27.6875 16.2818 27.6875 16C27.6875 15.7182 27.7995 15.448 27.9987 15.2487C28.198 15.0495 28.4682 14.9375 28.75 14.9375H30.1667C30.4485 14.9375 30.7187 15.0495 30.918 15.2487C31.1172 15.448 31.2292 15.7182 31.2292 16ZM26.7681 6.73501C26.8696 6.63705 26.9506 6.51984 27.0064 6.39024C27.0621 6.26064 27.0915 6.12123 27.0928 5.98015C27.0941 5.83908 27.0672 5.69916 27.0139 5.56855C26.9605 5.43795 26.8817 5.31928 26.782 5.21948C26.6823 5.11967 26.5637 5.04072 26.4331 4.98723C26.3026 4.93375 26.1627 4.9068 26.0216 4.90796C25.8805 4.90912 25.7411 4.93836 25.6114 4.99399C25.4818 5.04961 25.3645 5.1305 25.2664 5.23193L24.2648 6.23351C24.1605 6.33078 24.0767 6.44808 24.0187 6.57841C23.9606 6.70875 23.9294 6.84944 23.9268 6.9921C23.9243 7.13477 23.9506 7.27647 24.004 7.40877C24.0574 7.54107 24.137 7.66126 24.2379 7.76215C24.3388 7.86304 24.4589 7.94258 24.5912 7.99602C24.7235 8.04946 24.8653 8.0757 25.0079 8.07318C25.1506 8.07066 25.2913 8.03944 25.4216 7.98137C25.5519 7.92329 25.6692 7.83957 25.7665 7.73518L26.7681 6.73501ZM16 27.6875C16.2818 27.6875 16.5521 27.7995 16.7513 27.9987C16.9506 28.198 17.0625 28.4682 17.0625 28.75V30.1667C17.0625 30.4485 16.9506 30.7187 16.7513 30.918C16.5521 31.1172 16.2818 31.2292 16 31.2292C15.7182 31.2292 15.448 31.1172 15.2487 30.918C15.0495 30.7187 14.9375 30.4485 14.9375 30.1667V28.75C14.9375 28.4682 15.0495 28.198 15.2487 27.9987C15.448 27.7995 15.7182 27.6875 16 27.6875ZM25.7665 24.2648C25.6692 24.1605 25.5519 24.0767 25.4216 24.0187C25.2913 23.9606 25.1506 23.9294 25.0079 23.9268C24.8653 23.9243 24.7235 23.9506 24.5912 24.004C24.4589 24.0574 24.3388 24.137 24.2379 24.2379C24.137 24.3388 24.0574 24.4589 24.004 24.5912C23.9506 24.7235 23.9243 24.8653 23.9268 25.0079C23.9294 25.1506 23.9606 25.2913 24.0187 25.4216C24.0767 25.5519 24.1605 25.6692 24.2648 25.7665L25.2664 26.7681C25.3637 26.8725 25.481 26.9562 25.6113 27.0143C25.7417 27.0724 25.8824 27.1036 26.025 27.1061C26.1677 27.1086 26.3094 27.0824 26.4417 27.0289C26.574 26.9755 26.6942 26.896 26.7951 26.7951C26.896 26.6942 26.9755 26.574 27.0289 26.4417C27.0824 26.3094 27.1086 26.1677 27.1061 26.025C27.1036 25.8824 27.0724 25.7417 27.0143 25.6113C26.9562 25.481 26.8725 25.3637 26.7681 25.2664L25.7665 24.2648ZM4.31251 16C4.31251 16.2818 4.20057 16.5521 4.00131 16.7513C3.80205 16.9506 3.5318 17.0625 3.25001 17.0625H1.83334C1.55155 17.0625 1.2813 16.9506 1.08204 16.7513C0.882785 16.5521 0.770844 16.2818 0.770844 16C0.770844 15.7182 0.882785 15.448 1.08204 15.2487C1.2813 15.0495 1.55155 14.9375 1.83334 14.9375H3.25001C3.5318 14.9375 3.80205 15.0495 4.00131 15.2487C4.20057 15.448 4.31251 15.7182 4.31251 16ZM7.73518 25.7665C7.92286 25.5651 8.02503 25.2987 8.02018 25.0234C8.01532 24.7482 7.90381 24.4855 7.70914 24.2909C7.51447 24.0962 7.25184 23.9847 6.97658 23.9798C6.70132 23.975 6.43493 24.0772 6.23351 24.2648L5.23193 25.2664C5.04425 25.4678 4.94207 25.7342 4.94693 26.0095C4.95179 26.2848 5.06329 26.5474 5.25796 26.7421C5.45263 26.9367 5.71526 27.0482 5.99052 27.0531C6.26578 27.058 6.53218 26.9558 6.73359 26.7681L7.73518 25.7665Z" fill="#F8F8F8"/>
//                             </svg>
//                         </div> : 
//                         <div onClick={onToggleTheme} className="color-mode">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M12.375 22.5C9.49077 22.5 6.72467 21.3542 4.68521 19.3148C2.64576 17.2753 1.5 14.5092 1.5 11.625C1.5 7.21874 4.03125 3.26812 7.95047 1.56234C8.0886 1.50214 8.24165 1.48494 8.3897 1.51298C8.53774 1.54102 8.6739 1.613 8.78045 1.71955C8.88699 1.82609 8.95897 1.96226 8.98701 2.1103C9.01506 2.25834 8.99786 2.4114 8.93766 2.54953C8.48766 3.58265 8.25 4.90593 8.25 6.37499C8.25 11.5444 12.4556 15.75 17.625 15.75C19.0941 15.75 20.4173 15.5123 21.4505 15.0623C21.5886 15.0021 21.7417 14.9849 21.8897 15.013C22.0377 15.041 22.1739 15.113 22.2804 15.2195C22.387 15.3261 22.459 15.4623 22.487 15.6103C22.5151 15.7583 22.4979 15.9114 22.4377 16.0495C20.7319 19.9687 16.7813 22.5 12.375 22.5Z" fill="#F8F8F8"/>
//                             </svg>
//                         </div>
//                     }
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default Header;


// import React from "react";
// import { Link } from 'react-scroll';

// function Header({ onToggleTheme, isDarkTheme }) {
//     return (
//         <header className={`fixed w-full z-50 py-4 px-6 md:px-16 transition-all duration-300`}>
            // <div className="max-w-7xl mx-auto flex justify-between items-center bg-opacity-20 backdrop-blur-md rounded-full px-8 py-4 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'} shadow-lg">
//                 <div className={`text-3xl font-extrabold ${isDarkTheme ? 'text-logo' : 'text-gray-800'}`}>
//                     Portfolio<span className="inline-block w-2 h-2 bg-dot-bg rounded-full ml-1 animate-pulse"></span>
//                 </div>
//                 <nav className="hidden md:flex space-x-8">
//                     {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
//                         <Link
//                             key={item}
//                             to={item.toLowerCase()}
//                             smooth={true}
//                             duration={500}
//                             className={`cursor-pointer text-lg font-medium font-montserrat ${isDarkTheme ? 'text-nav-item hover:text-nav-item-hover' : 'text-gray-700 hover:text-gray-900'
//                                 } transition-colors`}
//                         >
//                             {item}
//                         </Link>
//                     ))}
//                 </nav>
//                 <button
//                     onClick={onToggleTheme}
//                     className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-800'
//                         } transition-colors`}
//                 >
//                     {isDarkTheme ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//                         </svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//                         </svg>
//                     )}
//                 </button>
//             </div>
//         </header>
//     );
// }

// export default Header;


// ---------------------

import React, { useState } from "react";
import { Link } from 'react-scroll';

function Header({ onToggleTheme, isDarkTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed w-full z-50 py-4 px-6 md:px-16 transition-all duration-300`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center bg-opacity-20 backdrop-blur-md rounded-full px-8 py-4 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'} shadow-lg">
                <div className={`text-3xl font-extrabold ${isDarkTheme ? 'text-logo' : 'text-gray-800'}`}>
                    Portfolio<span className={`inline-block w-2 h-2 ${isDarkTheme ? 'bg-dot-bg' : 'bg-blue-600'} rounded-full ml-1 animate-pulse`}></span>
                </div>

                <nav className={`md:flex md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto bg-opacity-90 backdrop-blur-md ${isDarkTheme ? 'bg-navigation-bg' : 'bg-white'} md:bg-transparent p-4 md:p-0 rounded-b-lg md:rounded-none transition-all duration-300 ease-in-out`}>
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className={`block md:inline-block cursor-pointer text-xl font-medium font-montserrat ${isDarkTheme ? 'text-nav-item hover:text-nav-item-hover' : 'text-gray-700 hover:text-blue-700'} transition-colors mb-2 md:mb-0`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={onToggleTheme}
                        className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-800'} transition-colors`}
                    >
                        {isDarkTheme ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>

                    <button
                        className="md:hidden"
                        onClick={toggleMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDarkTheme ? 'text-nav-item' : 'text-gray-800'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;

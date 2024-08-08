import React, { useState } from "react";
import { Link } from 'react-scroll';

function Header({ onToggleTheme, isDarkTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed w-full z-50 py-4 px-6 md:px-16 transition-all duration-300`}>
            <div className={`max-w-7xl mx-auto flex justify-between items-center bg-opacity-20 backdrop-blur-md rounded-full px-8 py-4 ${isDarkTheme ? 'bg-black' : 'bg-white'} shadow-lg`}>
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

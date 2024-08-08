import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function Footer({ isDarkTheme }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className={`py-8 ${isDarkTheme ? 'bg-black text-footer-text' : 'bg-gradient-light text-gray-700'} border-t border-footer-border-top relative`}>
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="mb-4 md:mb-0">© 2024 Guru Patel. All Rights Reserved.</p>
                <div className="flex space-x-4">
                    <a href={scrollToTop} className="hover:text-footer-p transition-colors">Privacy Policy</a>
                    <a href={scrollToTop} className="hover:text-footer-p transition-colors">Terms of Service</a>
                </div>
            </div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg transition-all duration-300 hover:scale-110`}
                    aria-label="Back to top"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </footer>
    );
}

export default Footer;

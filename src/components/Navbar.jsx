// src/components/Navbar.jsx
import { useState } from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-cyan-400/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg shadow-cyan-400/30">
                            {personalInfo.initials}
                        </div>
                        <div className="">
                            <div className="text-lg font-bold gradient-text">{personalInfo.name}</div>
                            <div className="text-xs text-gray-400">{personalInfo.title}</div>
                        </div>
                    </div>

                    <ul className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="nav-link relative hover:text-cyan-400 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden flex flex-col gap-1.5 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden glass-card border-t border-cyan-400/20 h-screen`}>
                <ul className="px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={handleLinkClick}
                                className="block hover:text-cyan-400 transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
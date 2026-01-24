import { personalInfo, socialLinks, navLinks } from '../data/portfolioData';

export default function Footer() {
    return (
        <footer className="bg-black/50 mt-20 pt-16 pb-8 border-t border-cyan-400/20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">{personalInfo.name}</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Full Stack Developer specializing in scalable web and GIS-based applications.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="w-12 h-12 glass-card rounded-full border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-2 hover:rotate-[360deg]"
                                    aria-label={social.label}
                                >
                                    <span className="material-icons">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                            <span className="material-icons">link</span>Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                                    >
                                        <span className="material-icons text-sm">arrow_forward</span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:text-right">
                        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2 md:justify-end">
                            <span className="material-icons">contact_mail</span>Contact
                        </h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2 md:justify-end">
                                <span className="material-icons text-cyan-400 text-sm">email</span>
                                {personalInfo.email}
                            </li>
                            <li className="flex items-center gap-2 md:justify-end">
                                <span className="material-icons text-cyan-400 text-sm">phone</span>
                                {personalInfo.phone}
                            </li>
                            <li className="flex items-center gap-2 md:justify-end">
                                <span className="material-icons text-cyan-400 text-sm">location_on</span>
                                {personalInfo.location}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p className="flex items-center justify-center gap-2">
                        <span className="material-icons text-cyan-400">copyright</span>
                        {new Date().getFullYear()} {personalInfo.name}. Built with passion and code.
                    </p>
                </div>
            </div>
        </footer>
    );
}
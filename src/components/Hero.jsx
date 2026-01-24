import { personalInfo } from '../data/portfolioData';

export default function Hero() {
    return (
        <header className="pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto text-center animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
                    {personalInfo.name.toUpperCase()}
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 mb-8">
                    {personalInfo.title}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="glass-card px-6 py-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1 flex items-center gap-2"
                    >
                        <span className="material-icons text-xl">email</span>
                        <span>Email</span>
                    </a>
                    <a
                        href={`tel:${personalInfo.phone}`}
                        className="glass-card px-6 py-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1 flex items-center gap-2"
                    >
                        <span className="material-icons text-xl">phone</span>
                        <span>{personalInfo.phone}</span>
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card px-6 py-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1 flex items-center gap-2"
                    >
                        <span className="material-icons text-xl">business</span>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
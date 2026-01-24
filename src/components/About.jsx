import { about } from '../data/portfolioData';

export default function About() {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative pb-4">
                    <span className="gradient-text">About Me</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                </h2>
                <div className="glass-card p-8 md:p-12 rounded-2xl leading-relaxed text-gray-300 text-lg">
                    {about.summary}
                </div>
            </div>
        </section>
    );
}
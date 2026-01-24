import { education } from '../data/portfolioData';

export default function Education() {
    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative pb-4">
                    <span className="gradient-text">Education</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                </h2>
                <div className="glass-card p-8 md:p-10 rounded-2xl text-center">
                    <span className="material-icons text-cyan-400 text-5xl mb-4 block">school</span>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-3">{education.degree}</h3>
                    <p className="text-gray-300 mb-2">{education.institution}</p>
                    <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                        <span className="material-icons text-cyan-400">calendar_today</span>
                        <span>{education.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full border border-cyan-400">
                        <span className="material-icons text-cyan-400">military_tech</span>
                        <span className="text-xl font-bold text-cyan-400">{education.grade}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
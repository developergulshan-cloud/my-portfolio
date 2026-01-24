import { skills } from '../data/portfolioData';

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative pb-4">
                    <span className="gradient-text">Technical Skills</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((category, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-icons text-cyan-400 text-3xl">{category.icon}</span>
                                <h3 className="text-xl font-semibold text-cyan-400">{category.title}</h3>
                            </div>
                            <ul className="space-y-2 text-gray-300">
                                {category.items.map((skill, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <span className="material-icons text-cyan-400 text-sm">chevron_right</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
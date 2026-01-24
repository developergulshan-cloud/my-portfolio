import { projects } from '../data/portfolioData';

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative pb-4">
                    <span className="gradient-text">Featured Projects</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                </h2>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass-card p-8 md:p-10 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400 mb-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-icons text-cyan-400 text-3xl">{project.icon}</span>
                            <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="glass-card px-3 py-1 rounded-full text-sm border border-cyan-400/30 text-cyan-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

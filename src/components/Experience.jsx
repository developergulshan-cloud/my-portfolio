import { experience } from '../data/portfolioData';

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative pb-4">
                    <span className="gradient-text">Work Experience</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                </h2>
                {experience.map((job, index) => (
                    <div
                        key={index}
                        className="glass-card p-8 md:p-10 rounded-2xl border-l-4 border-cyan-400 hover:translate-x-2 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                                    <span className="material-icons">work</span>
                                    {job.title} - {job.company}
                                </h3>
                                <p className="text-gray-400 mt-2">{job.companyFull}</p>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <span className="material-icons text-cyan-400">calendar_today</span>
                                <span>{job.period}</span>
                            </div>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                            {job.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="material-icons text-cyan-400 mt-0.5">check_circle</span>
                                    <span>{responsibility}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
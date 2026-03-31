import { motion } from 'framer-motion';
import { Database, Network, Cpu, Box, Github, Terminal, Cloud, Activity } from 'lucide-react';

const pipelineSteps = [
    { title: 'Data Engineering', desc: 'Secure ingestion, ETL processing, and robust data warehousing.', icon: <Database size={24} /> },
    { title: 'Model Development', desc: 'Training, hyperparameter tuning, and cross-validation architectures.', icon: <Cpu size={24} /> },
    { title: 'System Deployment', desc: 'Containerized APIs deployed via Render with GitHub CI/CD integration.', icon: <Network size={24} /> },
    { title: 'Continuous Monitoring', desc: 'Real-time telemetry, model drift detection, and automated retraining.', icon: <Box size={24} /> }
];

const SystemsPage = () => {
    return (
        <section className="w-full flex-grow py-24 px-6 flex flex-col items-center relative z-10 w-full max-w-5xl mx-auto">

            <div className="w-full flex flex-col items-center text-center mb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded-full mb-6">
                    <span className="font-sans text-[10px] tracking-widest text-stone-500 uppercase font-semibold">Architecture</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-8">
                    Systems Engineering Process
                </h1>
                <p className="font-sans text-stone-600 font-light text-lg max-w-2xl leading-relaxed">
                    A structured approach to building intelligent infrastructure. From raw data ingestion to globally distributed models.
                </p>
            </div>

            {/* Pipeline Horizontal Flow */}
            <div className="w-full flex flex-col mb-32">

                <h2 className="font-sans text-xs tracking-widest text-stone-400 uppercase font-bold mb-10 w-full border-b border-stone-200 pb-2">
                    Machine Learning Pipeline
                </h2>

                <div className="flex flex-col md:flex-row justify-between w-full relative">

                    {/* Desktop Connecting Line */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-stone-200 z-0"></div>

                    {pipelineSteps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="flex flex-col items-center text-center px-4 mb-12 md:mb-0 relative z-10 w-full md:w-1/4"
                        >
                            <div className="w-14 h-14 bg-white border border-stone-200 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 z-10 relative">
                                {step.icon}
                            </div>

                            <h3 className="font-display text-lg text-[#1A1A1A] font-semibold mb-3">
                                {step.title}
                            </h3>

                            <p className="font-sans text-stone-500 text-sm font-light leading-relaxed max-w-[200px]">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>

            {/* Deployment Architecture */}
            <div className="w-full flex flex-col mb-32">
                <h2 className="font-sans text-xs tracking-widest text-stone-400 uppercase font-bold mb-10 w-full border-b border-stone-200 pb-2">
                    Deployment Infrastructure
                </h2>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
                    <div className="w-full md:w-1/3">
                        <p className="font-sans text-stone-600 font-light leading-relaxed text-lg">
                            I deploy ML models using <span className="font-semibold text-stone-800">GitHub-based CI/CD workflows</span> and <span className="font-semibold text-stone-800">Render hosting</span>, ensuring automated builds and production-level accessibility.
                        </p>
                    </div>

                    <div className="w-full md:w-2/3">
                        <div className="flex items-center justify-between w-full bg-stone-50 border border-stone-200 rounded-xl p-8 relative overflow-hidden shadow-sm">
                            <div className="absolute inset-0 system-grid opacity-[0.15] pointer-events-none"></div>

                            {/* Horizontal Flow */}
                            <div className="flex items-center justify-between w-full relative z-10">

                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg shadow-sm border border-stone-200 flex items-center justify-center text-[#1A1A1A] z-10 relative">
                                        <Terminal size={20} />
                                    </div>
                                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-stone-500 font-semibold mt-1">Code</span>
                                </div>

                                <div className="flex-grow h-px bg-stone-300 mx-2 md:mx-4 relative z-0">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-stone-400"></div>
                                </div>

                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg shadow-sm border border-stone-200 flex items-center justify-center text-[#1A1A1A] z-10 relative">
                                        <Github size={20} />
                                    </div>
                                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-stone-500 font-semibold mt-1">CI/CD</span>
                                </div>

                                <div className="flex-grow h-px bg-emerald-600/30 mx-2 md:mx-4 relative z-0">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-emerald-600/50"></div>
                                </div>

                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1A1A1A] rounded-lg shadow-sm border border-stone-800 flex items-center justify-center text-white z-10 relative group hover:bg-stone-800 hover:border-emerald-600/50 transition-colors">
                                        <Cloud size={20} className="group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-emerald-700 font-bold mt-1">Cloud</span>
                                </div>

                                <div className="flex-grow h-px bg-emerald-600/30 mx-2 md:mx-4 relative z-0">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-emerald-600/50"></div>
                                </div>

                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg shadow-sm border border-stone-200 flex items-center justify-center text-[#1A1A1A] z-10 relative">
                                        <Activity size={20} />
                                    </div>
                                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-stone-500 font-semibold mt-1">Monitor</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Execution History */}
            <div className="w-full flex flex-col">
                <h2 className="font-sans text-xs tracking-widest text-stone-400 uppercase font-bold mb-10 w-full border-b border-stone-200 pb-2">
                    Execution History
                </h2>

                <div className="flex flex-col border-l border-stone-200 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
                    {[
                        { date: "Jan 2025 - Jun 2026", title: "Research Intern", org: "Indian Internet Foundation", logs: ["Engineered automated data pipelines reducing ETL processing time by 40%.", "Optimized machine learning models for scale across distributed systems to handle large-scale datasets.", "Conducted advanced research independently and collaboratively in AI safety and ethics."] },
                        { date: "2023 - Present", title: "B.Tech Computer Science", org: "Koneru lakshmaiah university", logs: ["Specialization in Artificial Intelligence and Machine Learning paradigms.", "Capstone project focused on deploying predictive healthcare models into edge environments.", "Graduated with honors, distinction in algorithmic design and distributed computing."] }
                    ].map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                            className="flex flex-col md:flex-row gap-4 md:gap-12 py-10 border-b border-stone-100 last:border-b-0 relative group"
                        >

                            {/* Mobile timeline dot */}
                            <div className="md:hidden absolute -left-[37.5px] top-12 w-3 h-3 bg-white border-2 border-emerald-600 rounded-full"></div>

                            {/* Left Column (Date) */}
                            <div className="md:w-1/4 pt-1">
                                <span className="font-sans text-xs tracking-widest text-stone-400 uppercase font-semibold group-hover:text-emerald-600 transition-colors">
                                    {event.date}
                                </span>
                            </div>

                            {/* Right Column (Content) */}
                            <div className="md:w-3/4 flex flex-col">
                                <h3 className="font-display text-2xl text-[#1A1A1A] font-bold tracking-tight mb-1">
                                    {event.title}
                                </h3>
                                <span className="font-sans text-sm text-emerald-600 font-medium tracking-wide uppercase mb-6">
                                    {event.org}
                                </span>

                                <ul className="flex flex-col gap-3 font-sans text-sm md:text-base text-stone-600 font-light leading-relaxed">
                                    {event.logs.map((log, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="mt-2 shrink-0 block w-1.5 h-1.5 bg-emerald-600/40 rounded-full"></span>
                                            <span>{log}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default SystemsPage;

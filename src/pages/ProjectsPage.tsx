import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Activity, Network, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const projectsData = [
    {
        id: "health-ai",
        title: "Health Risk Predictor",
        description: "Machine learning system designed to predict physiological health risk levels for enhanced athletes using structured biomarker, lifestyle, and training data.",
        capabilities: [
            "Synthetic physiological dataset (3000+ profiles)",
            "Multi-class risk prediction",
            "Biomarker-driven modeling",
            "SHAP interpretability",
            "API-ready architecture"
        ],
        metrics: [
            { label: "Accuracy", value: "99.67%" },
            { label: "F1 Score", value: "0.94" },
            { label: "Confidence", value: "High" }
        ],
        stack: ["Python", "XGBoost", "CatBoost", "Pandas", "Scikit-learn", "Docker"],
        architecture: "Biomarker Data → Preprocessing → SHAP Feature Selection → CatBoost Classifier → Risk Level Prediction",
        icon: <Activity size={24} strokeWidth={1.5} />,
        links: { github: "https://github.com/vishalbunn", live: "https://enhanced-athlete-risk-predictor.onrender.com/docs" }
    },
    {
        id: "aiori-diag",
        title: "AIORI Network Diagnostic Intelligence",
        description: "Distributed network monitoring platform that analyzes RTT latency, DNS resolution, and endpoint health using anchor-based diagnostics and asynchronous task processing.",
        capabilities: [
            "Real-time RTT latency monitoring",
            "Distributed anchor-based ping testing",
            "DNS resolution diagnostics",
            "External API monitoring",
            "Background task orchestration"
        ],
        metrics: [
            { label: "Latency Monitoring", value: "Real-time" },
            { label: "Distributed Anchors", value: "Verified" },
            { label: "Async Processing", value: "Scalable" }
        ],
        stack: ["Django", "Django REST Framework", "Celery", "Redis", "Python", "Networking"],
        architecture: "Django API → Celery Queue → Redis Broker → Background Workers → Anchor Network Tests → RTT Analytics",
        icon: <Network size={24} strokeWidth={1.5} />,
        links: { github: "https://github.com/vishalbunn/Rtt_ping" }
    },
    {
        id: "sentiment-ai",
        title: "Sentiment Analysis Intelligence Platform",
        description: "Machine learning web application that predicts sentiment polarity for text inputs and bulk datasets using natural language processing pipelines.",
        capabilities: [
            "Single-text sentiment prediction",
            "Bulk CSV sentiment analysis",
            "Sentiment distribution visualization",
            "REST API prediction endpoint",
            "Automated NLP preprocessing pipeline"
        ],
        metrics: [
            { label: "Classification", value: "Accuracy" },
            { label: "Prediction API", value: "Ready" },
            { label: "Bulk Processing", value: "Optimized" }
        ],
        stack: ["Flask", "XGBoost", "Scikit-learn", "NLTK", "Pandas", "Matplotlib"],
        architecture: "Text Input → Vectorization → Feature Scaling → XGBoost Model → Sentiment Prediction",
        icon: <Activity size={24} strokeWidth={1.5} />,
        links: { github: "https://github.com/vishalbunn/Sentiment_Analysis" }
    }
];

const ProjectsPage = () => {
    return (
        <section className="w-full min-h-screen py-32 px-6 flex flex-col items-center relative z-10 max-w-6xl mx-auto">

            {/* Header Section */}
            <div className="w-full mb-20 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded-full mb-6 shadow-sm">
                    <span className="font-sans text-[10px] tracking-widest text-stone-500 uppercase font-semibold">Systems Showcase</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-6">
                    AI Systems & Infrastructure
                </h2>
                <p className="text-stone-500 text-lg max-w-2xl leading-relaxed">
                    Showcasing production-ready AI systems, distributed diagnostics, and automated machine learning pipelines.
                </p>
            </div>

            {/* Systems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                {projectsData.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.005 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="ai-panel p-0 flex flex-col overflow-hidden bg-white border border-stone-200 rounded-3xl hover:shadow-xl hover:border-black/[0.1] transition-all duration-500 group"
                    >
                        {/* Title & Description Area */}
                        <div className="p-10 pb-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-black shadow-sm group-hover:scale-110 transition-transform duration-500">
                                    {project.icon}
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl text-black font-bold tracking-tight">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="font-sans text-stone-600 text-[15px] leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Metrics Row */}
                            <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-stone-50">
                                {project.metrics.map((metric, mIdx) => (
                                    <div key={mIdx} className="flex flex-col">
                                        <span className="font-display font-bold text-lg text-black">{metric.value}</span>
                                        <span className="font-sans text-[10px] tracking-widest text-stone-400 uppercase font-semibold">{metric.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Details Area */}
                        <div className="flex-grow bg-stone-50/50 p-10 pt-6">
                            <div className="mb-8">
                                <h4 className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-4">Key Capabilities</h4>
                                <ul className="space-y-2.5">
                                    {(project.capabilities || []).map((cap, cIdx) => (
                                        <li key={cIdx} className="flex items-start gap-2.5 text-sm text-stone-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5 shrink-0"></div>
                                            {cap}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-4">Tech Heap</h4>
                                <div className="flex flex-wrap gap-2.5">
                                    {project.stack.map((tech, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-[11px] font-sans text-stone-600 font-semibold shadow-sm overflow-hidden relative group/tag">
                                            <span className="relative z-10">{tech}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Architecture Label */}
                            <div className="p-5 bg-white border border-stone-200 rounded-2xl shadow-[inset_0_1px_4px_rgba(0,0,0,0.02)] mb-8">
                                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Layers size={12} /> System Architecture
                                </h4>
                                <p className="font-mono text-[11px] leading-relaxed text-stone-500 break-words">
                                    {project.architecture}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4 mt-auto pt-4">
                                <a
                                    href={project.links.github} target="_blank" rel="noopener noreferrer"
                                    className="flex-1 btn-micro flex items-center justify-center gap-2 py-3.5 bg-black text-white rounded-2xl font-sans text-sm font-bold shadow-lg shadow-black/10 hover:bg-stone-900 transition-all"
                                >
                                    <Github size={18} />
                                    GitHub
                                </a>
                                {project.links.live ? (
                                    <a
                                        href={project.links.live} target="_blank" rel="noopener noreferrer"
                                        className="flex-1 btn-micro flex items-center justify-center gap-2 py-3.5 bg-white border border-stone-200 text-black rounded-2xl font-sans text-sm font-bold hover:bg-stone-50 transition-all shadow-sm"
                                    >
                                        Live Demo <ArrowUpRight size={16} />
                                    </a>
                                ) : project.links.caseStudy ? (
                                    <Link
                                        to={project.links.caseStudy || "#"}
                                        className="flex-1 btn-micro flex items-center justify-center gap-2 py-3.5 bg-white border border-stone-200 text-black rounded-2xl font-sans text-sm font-bold hover:bg-stone-50 transition-all shadow-sm"
                                    >
                                        Case Study <ArrowUpRight size={16} />
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Detailed Case Study Link */}
            <div className="mt-24 text-center">
                <p className="text-stone-400 text-sm font-medium mb-4">Interested in more technical details?</p>
                <Link to="/systems" className="inline-flex items-center gap-2 text-black font-bold border-b-2 border-black pb-1 hover:text-stone-600 hover:border-stone-400 transition-all cursor-pointer">
                    View Systems Architecture Pipeline <ArrowRight size={18} />
                </Link>
            </div>

        </section>
    );
};

export default ProjectsPage;

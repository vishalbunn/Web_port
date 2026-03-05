import { motion } from 'framer-motion';
import { Cpu, Terminal, Cloud, Database, Layout } from 'lucide-react';

const categories = [
    {
        title: "Machine Learning",
        description: "Building reliable ML pipelines and optimizing models for production environments.",
        icon: <Cpu size={24} className="text-emerald-600 mb-6" />,
        skills: ["TensorFlow", "PyTorch", "XGBoost", "CatBoost", "Scikit", "Pandas", "NumPy"]
    },
    {
        title: "Interface Engineering",
        description: "Designing responsive, high-performance user interfaces for AI products and developer platforms with a focus on usability, clarity, and system interaction.",
        icon: <Layout size={24} className="text-emerald-600 mb-6" />,
        skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Component Architecture", "REST API Integration"]
    },
    {
        title: "Automation",
        description: "Orchestrating complex workflows to reduce manual intervention overhead.",
        icon: <Terminal size={24} className="text-emerald-600 mb-6" />,
        skills: ["n8n", "RPA", "Workflow Orchestration", "Zapier", "Python Scripts"]
    },
    {
        title: "Cloud & Infrastructure",
        description: "Deploying and managing scalable architectures across distributed cloud environments.",
        icon: <Cloud size={24} className="text-emerald-600 mb-6" />,
        skills: ["AWS", "Azure", "Docker", "Kubernetes", "Containerized APIs"]
    },
    {
        title: "Backend Systems",
        description: "Engineering robust APIs, data architectures and monitoring solutions.",
        icon: <Database size={24} className="text-emerald-600 mb-6" />,
        skills: ["Python", "Flask", "FastAPI", "SQL", "PostgreSQL", "Monitoring & Logging"]
    }
];

const StackPage = () => {
    return (
        <section className="w-full flex-grow py-24 px-6 flex flex-col items-center relative z-10 w-full max-w-6xl mx-auto">

            <div className="w-full flex flex-col items-center text-center mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded-full mb-6 relative">
                    <span className="font-sans text-[10px] tracking-widest text-stone-500 uppercase font-semibold">Technical Profile</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-6">
                    Core Capabilities
                </h1>

                <p className="font-sans text-stone-600 font-light text-lg max-w-xl mx-auto leading-relaxed">
                    A comprehensive overview of the technologies and frameworks I use to engineer robust, scalable systems.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10 cursor-default">
                {categories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                        className="p-8 border border-stone-200 bg-white rounded-2xl flex flex-col hover:shadow-md transition-shadow duration-300"
                    >
                        {category.icon}

                        <h3 className="font-display text-2xl text-[#1A1A1A] font-bold tracking-tight mb-3">
                            {category.title}
                        </h3>

                        <p className="font-sans text-stone-500 font-light text-sm mb-8 leading-relaxed">
                            {category.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded text-xs font-sans text-stone-600 font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default StackPage;

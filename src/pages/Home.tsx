import { motion } from 'framer-motion';
import { Github, Cpu, Server, Code, ArrowRight, ArrowUpRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="w-full relative px-6 md:px-12 p-24 min-h-screen">

            {/* SPACIOUS HERO SECTION */}
            <section className="w-full flex flex-col justify-center relative min-h-[70vh] pt-24 md:pt-32 max-w-5xl mx-auto">
                <div className="flex flex-col relative z-20">

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-display text-[4rem] leading-[1.1] md:text-[6rem] lg:text-[8rem] text-black font-extrabold tracking-tighter m-0 p-0"
                    >
                        VISHAL HOTA
                    </motion.h1>

                    <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className="font-sans text-xl md:text-2xl text-black font-semibold leading-tight flex-1 max-w-md"
                        >
                            AI Engineer building intelligent systems and intuitive interfaces.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="font-sans text-base text-[#666666] leading-relaxed flex-1 max-w-sm"
                        >
                            Designing machine learning systems, automation workflows, and scalable AI infrastructure for real-world products.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-wrap items-center gap-4 mt-16"
                    >
                        <Link
                            to="/projects"
                            className="btn-micro flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 font-sans text-sm font-semibold whitespace-nowrap"
                        >
                            View Projects
                            <ArrowRight size={16} />
                        </Link>

                        <a
                            href="https://github.com/vishalbunn" target="_blank" rel="noopener noreferrer"
                            className="btn-micro flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-black/[0.1] text-black hover:bg-gray-50 font-sans text-sm font-medium whitespace-nowrap"
                        >
                            <Github size={16} />
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/vishal-hota-9a3858204/" target="_blank" rel="noopener noreferrer"
                            className="btn-micro flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-black/[0.1] text-black hover:bg-gray-50 font-sans text-sm font-medium whitespace-nowrap"
                        >
                            LinkedIn
                            <ArrowUpRight size={14} className="opacity-50" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* CORE CAPABILITIES SECTION */}
            <section className="w-full max-w-5xl mx-auto py-32 relative z-20">
                <div className="mb-14">
                    <h2 className="text-black font-display font-semibold tracking-tight text-2xl">Core Capabilities</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Capability Card 1 */}
                    <div className="ai-panel p-8">
                        <div className="w-10 h-10 flex items-center mb-12 text-black">
                            <Cpu size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-black font-semibold text-lg mb-3">AI Systems</h3>
                        <p className="text-[#666666] text-sm leading-relaxed">
                            Designing predictive machine learning models and intelligent data pipelines.
                        </p>
                    </div>

                    {/* Capability Card 2 */}
                    <div className="ai-panel p-8">
                        <div className="w-10 h-10 flex items-center mb-12 text-black">
                            <Server size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-black font-semibold text-lg mb-3">ML Deployment</h3>
                        <p className="text-[#666666] text-sm leading-relaxed">
                            Deploying AI models using scalable APIs with automated CI/CD workflows.
                        </p>
                    </div>

                    {/* Capability Card 3 */}
                    <div className="ai-panel p-8">
                        <div className="w-10 h-10 flex items-center mb-12 text-black">
                            <Code size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-black font-semibold text-lg mb-3">Automation</h3>
                        <p className="text-[#666666] text-sm leading-relaxed">
                            Building workflow automation systems that integrate machine learning into real-world applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECT SECTION - CASE STUDY */}
            <section className="w-full max-w-4xl mx-auto py-24 relative z-20 border-t border-black/[0.05]">
                {/* Headers */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <p className="text-[#888888] text-xs font-semibold tracking-widest uppercase mb-4">Featured Project</p>
                    <h2 className="text-black font-display font-bold tracking-tight text-4xl mb-6">Health Risk Predictor</h2>

                    <p className="text-[#333333] text-lg max-w-2xl leading-relaxed text-center mb-5">
                        Machine learning system designed to predict physiological health risk levels for enhanced athletes using structured biomarker, lifestyle, and training data.
                    </p>
                    <p className="text-[#666666] text-base max-w-2xl leading-relaxed text-center">
                        The system analyzes athlete health indicators such as blood biomarkers, body composition, sleep, training volume, and enhancement phases to classify health risk into three levels: low, moderate, and high.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Key Capabilities */}
                    <div className="ai-panel p-8 md:p-10">
                        <h3 className="text-black font-semibold text-lg mb-6">Key Capabilities</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Synthetic physiological dataset (3000+ profiles)', 'Multi-class risk prediction', 'Biomarker-driven modeling', 'SHAP interpretability', 'API-ready architecture'].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-gray-50 border border-black/[0.05] rounded-full text-sm text-[#333333] font-medium shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Model Architecture & Metrics */}
                        <div className="ai-panel p-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-black font-semibold text-lg mb-4">Model Architecture</h3>
                                <p className="text-[#666666] text-sm leading-relaxed mb-8">
                                    The system benchmarks multiple machine learning models including CatBoost, XGBoost, LightGBM, and MLP. CatBoost achieved the best performance due to its ability to handle categorical features and complex interactions between biomarkers.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/[0.05]">
                                <div>
                                    <span className="block text-[10px] font-semibold text-[#888888] uppercase tracking-wider mb-1">Accuracy</span>
                                    <span className="font-display font-semibold text-xl text-black">99.67%</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-semibold text-[#888888] uppercase tracking-wider mb-1">F1 Score</span>
                                    <span className="font-display font-semibold text-xl text-black">0.94</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-semibold text-[#888888] uppercase tracking-wider mb-1">Confidence</span>
                                    <span className="font-display font-semibold text-xl text-black">High</span>
                                </div>
                            </div>
                        </div>

                        {/* Key Biomarkers Analyzed */}
                        <div className="ai-panel p-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-black font-semibold text-lg mb-4">Key Biomarkers Analyzed</h3>
                                <ul className="space-y-3 mb-6">
                                    {['Hematocrit', 'Creatinine', 'LDL / HDL ratio', 'ALT & AST (liver markers)', 'Testosterone levels', 'Enhancement load'].map((biomarker) => (
                                        <li key={biomarker} className="flex items-center gap-3 text-sm text-[#333333]">
                                            <div className="w-1 h-1 rounded-full bg-black/40"></div>
                                            {biomarker}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-[#666666] text-sm leading-relaxed pt-5 border-t border-black/[0.05]">
                                These biomarkers drive risk predictions through feature importance analysis using SHAP.
                            </p>
                        </div>
                    </div>

                    {/* Example Prediction */}
                    <div className="ai-panel p-0 overflow-hidden flex flex-col md:flex-row">
                        {/* Code Snippet Side */}
                        <div className="p-8 md:p-10 md:w-1/2 bg-[#FAFAFA] border-b md:border-b-0 md:border-r border-black/[0.05]">
                            <h3 className="text-black font-semibold text-lg mb-6">Example Prediction</h3>
                            <div className="bg-white border border-black/[0.08] rounded-xl p-5 shadow-[inset_0_1px_4px_rgba(0,0,0,0.02)] overflow-x-auto">
                                <pre className="text-[13px] leading-[1.6] font-mono text-[#333333]">
                                    {`{
  age: 29,
  weight_kg: 88,
  bf_percent: 14,
  training_vol_hr_wk: 14,
  sleep_h: 6,
  testosterone_total: 1100,
  estradiol: 40,
  ALT: 55,
  AST: 50,
  HDL: 35,
  LDL: 170,
  hematocrit: 53,
  creatinine: 1.35,
  enhancement_load: 1.45,
  goal: "bulk"
}`}
                                </pre>
                            </div>
                        </div>

                        {/* Output Side */}
                        <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center items-center text-center bg-white relative">
                            {/* Accent visual background element */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none"></div>

                            <h4 className="text-[#888888] text-xs font-semibold uppercase tracking-wider mb-8">Predicted Output</h4>

                            <div className="flex flex-col items-center gap-2 mb-10 w-full">
                                <div className="text-sm font-medium text-[#666666]">Risk Level</div>
                                <div className="text-[2.5rem] font-display font-bold text-black flex items-center gap-4 leading-none">
                                    <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.3)]"></div>
                                    High
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2 mb-12 w-full max-w-[240px]">
                                <div className="flex justify-between w-full text-xs font-medium text-[#666666]">
                                    <span>Model Confidence</span>
                                    <span className="text-black font-bold">91%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                    <div className="h-full bg-black rounded-full" style={{ width: '91%' }}></div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <Link to="/project/health-predictor" className="btn-micro flex items-center justify-center gap-2 text-sm font-semibold text-white bg-black hover:bg-gray-900 px-6 py-3 rounded-full flex-1 max-w-[160px]">
                                    Case Study
                                    <ArrowRight size={16} />
                                </Link>
                                <a href="https://enhanced-athlete-risk-predictor.onrender.com/docs" target="_blank" rel="noopener noreferrer" className="btn-micro flex items-center justify-center gap-2 text-sm font-medium text-black bg-white border border-black/[0.1] hover:bg-gray-50 px-6 py-3 rounded-full flex-1 max-w-[160px]">
                                    <Activity size={16} className="text-[#666666]" />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center px-4">
                        <p className="text-[15px] text-[#666666] leading-relaxed max-w-3xl mx-auto">
                            The project introduces a novel synthetic physiological model for enhanced athlete risk analysis and serves as a foundation for future research and deployment of athlete monitoring systems.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;

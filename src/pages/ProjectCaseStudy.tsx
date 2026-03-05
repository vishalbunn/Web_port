import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import { projectsData } from './ProjectsPage';

const ProjectCaseStudy = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="w-full min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="font-display text-4xl text-[#1A1A1A]">Project Not Found</h2>
                <Link to="/projects" className="mt-6 text-emerald-600 hover:underline">Return to Projects</Link>
            </div>
        );
    }

    return (
        <section className="w-full flex-grow py-24 px-6 flex flex-col items-center relative z-10 w-full max-w-4xl mx-auto">

            {/* Top Navigation */}
            <div className="w-full flex mb-16">
                <Link to="/projects" className="group flex items-center gap-2 text-stone-500 hover:text-[#1A1A1A] transition-colors font-sans text-sm font-medium">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Systems
                </Link>
            </div>

            {/* Header Content */}
            <div className="w-full flex flex-col mb-16 border-b border-stone-200 pb-16">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-stone-200 flex items-center justify-center text-emerald-600">
                        {project.icon}
                    </div>
                    <span className="font-sans text-[11px] tracking-widest text-stone-500 uppercase font-semibold">Case Study</span>
                </div>

                <h1 className="font-display text-5xl md:text-6xl text-[#1A1A1A] font-bold tracking-tight mb-6">
                    {project.title}
                </h1>

                <p className="font-sans text-xl text-stone-600 font-light leading-relaxed max-w-3xl">
                    {project.description}
                </p>

                <div className="flex mt-10">
                    <a
                        href={project.links.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-xl font-sans text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                        <Github size={16} /> View Source Code
                    </a>
                </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="w-full mb-16">
                <h3 className="font-sans text-xs tracking-widest text-stone-400 uppercase font-bold mb-6">Performance Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-sm">
                            <span className="font-display text-5xl font-bold text-[#1A1A1A] mb-2">{metric.value}</span>
                            <span className="font-sans text-xs text-stone-500 uppercase tracking-widest font-medium">{metric.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Deployment Architecture */}
            {project.deployed && (
                <div className="w-full mb-16 border-b border-stone-200 pb-16">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                        <h3 className="font-sans text-xs tracking-widest text-stone-400 uppercase font-bold">Deployment Architecture</h3>
                        <span className="font-mono text-[10px] text-stone-500 bg-stone-50 px-3 py-1.5 rounded border border-stone-200 shadow-sm inline-flex w-max">Auto-deploy enabled via GitHub integration</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch">
                        {/* Flow Diagram */}
                        <div className="w-full md:w-1/2 bg-stone-50 border border-stone-200 rounded-xl p-8 font-mono text-xs text-stone-600 flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 system-grid opacity-[0.15] pointer-events-none"></div>
                            <div className="flex flex-col items-center relative z-10 w-full max-w-[200px]">
                                <div className="w-full py-3 bg-white border border-stone-200 rounded shadow-sm text-center font-semibold text-[#1A1A1A] z-10 relative">GitHub Repository</div>
                                <div className="h-6 w-px bg-stone-300 my-1"></div>
                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-stone-400 mb-1"></div>

                                <div className="w-full py-3 bg-white border border-stone-200 rounded shadow-sm text-center font-semibold text-[#1A1A1A] z-10 relative">Build Trigger</div>
                                <div className="h-6 w-px bg-stone-300 my-1"></div>
                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-stone-400 mb-1"></div>

                                <div className="w-full py-3 bg-[#1A1A1A] border border-stone-800 rounded shadow-sm text-center text-white font-semibold z-10 relative hover:bg-stone-800 transition-colors">Render Cloud</div>
                                <div className="h-6 w-px bg-emerald-600/40 my-1 z-0"></div>
                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-emerald-600/80 mb-1 z-0 relative"></div>

                                <div className="w-full py-3 bg-emerald-50 border border-emerald-200 rounded shadow-sm text-center text-emerald-700 font-bold z-10 relative">Live API Endpoint</div>
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
                            {[
                                "Containerized application",
                                "Auto-redeploy on push",
                                "Environment variables configured",
                                "Production logging enabled"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:border-stone-200 transition-colors">
                                    <div className="w-1.5 h-1.5 bg-emerald-600/80 rounded-full shrink-0 shadow-[0_0_4px_rgba(5,150,105,0.4)]"></div>
                                    <span className="font-sans text-stone-600 text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Model Input Simulations (Only for Health AI) */}
            {project.id === "health-ai" && (
                <div className="w-full mb-16 border-b border-stone-200 pb-16">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                        <h3 className="font-sans text-xs tracking-widest text-stone-400 uppercase font-bold">Model Input Simulations</h3>
                        <span className="font-mono text-[10px] text-stone-500 bg-stone-50 px-3 py-1.5 rounded border border-stone-200 shadow-sm inline-flex w-max">Real-world data processing example</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

                        {/* High Risk Profile */}
                        <div className="bg-stone-50 border border-stone-200 rounded-xl overflow-hidden flex flex-col shadow-sm">
                            <div className="bg-white border-b border-stone-200 p-5 flex flex-col gap-2 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/80 to-red-400/20"></div>
                                <h4 className="font-mono text-xs font-bold text-stone-800 tracking-wider">ON_CYCLE_BULK_PROFILE</h4>
                                <span className="font-sans text-[10px] uppercase tracking-widest text-stone-500 font-semibold">Simulated Risk Classification Input</span>
                            </div>

                            <div className="p-6 font-mono text-[11px] text-stone-600 grid grid-cols-2 gap-y-3 gap-x-6 w-full">
                                {[
                                    { label: "Age", val: "29" }, { label: "Weight", val: "88 kg" },
                                    { label: "Body Fat", val: "14%" }, { label: "Train Vol", val: "14 hrs/wk" },
                                    { label: "Sleep", val: "6 hrs" }, { label: "Testosterone", val: "1100 ng/dL" },
                                    { label: "Estradiol", val: "40 pg/mL" }, { label: "ALT", val: "55" },
                                    { label: "AST", val: "50" }, { label: "HDL", val: "35" },
                                    { label: "LDL", val: "170" }, { label: "Hematocrit", val: "53" },
                                    { label: "Creatinine", val: "1.35" }, { label: "Mood Score", val: "7" },
                                    { label: "Libido", val: "9" }, { label: "Enhance Load", val: "1.45" },
                                    { label: "Status", val: "On" }, { label: "Goal", val: "Bulk" },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-end border-b border-stone-200/50 pb-1">
                                        <span className="text-stone-400">{item.label}</span>
                                        <span className="text-stone-800 font-medium">{item.val}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto bg-white border-t border-stone-200 p-5 flex flex-col gap-3">
                                <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold">Model Output:</span>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-xs text-stone-500">Predicted Risk:</span>
                                        <span className="px-2 py-0.5 bg-red-50 text-red-700 border border-red-200/60 rounded font-mono text-[10px] font-bold tracking-wide">HIGH</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-xs text-stone-500">Confidence:</span>
                                        <span className="font-mono text-xs font-semibold text-stone-800">92.4%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Low Risk Profile */}
                        <div className="bg-stone-50 border border-stone-200 rounded-xl overflow-hidden flex flex-col shadow-sm">
                            <div className="bg-white border-b border-stone-200 p-5 flex flex-col gap-2 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/80 to-emerald-400/20"></div>
                                <h4 className="font-mono text-xs font-bold text-stone-800 tracking-wider">OFF_CYCLE_MAINTAIN_PROFILE</h4>
                                <span className="font-sans text-[10px] uppercase tracking-widest text-stone-500 font-semibold">Control Profile Input</span>
                            </div>

                            <div className="p-6 font-mono text-[11px] text-stone-600 grid grid-cols-2 gap-y-3 gap-x-6 w-full">
                                {[
                                    { label: "Age", val: "26" }, { label: "Weight", val: "78 kg" },
                                    { label: "Body Fat", val: "12%" }, { label: "Train Vol", val: "10 hrs/wk" },
                                    { label: "Sleep", val: "8 hrs" }, { label: "Testosterone", val: "650 ng/dL" },
                                    { label: "Estradiol", val: "25 pg/mL" }, { label: "ALT", val: "28" },
                                    { label: "AST", val: "25" }, { label: "HDL", val: "55" },
                                    { label: "LDL", val: "95" }, { label: "Hematocrit", val: "45" },
                                    { label: "Creatinine", val: "1.0" }, { label: "Mood Score", val: "8" },
                                    { label: "Libido", val: "8" }, { label: "Enhance Load", val: "0.65" },
                                    { label: "Status", val: "Off" }, { label: "Goal", val: "Maintain" },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-end border-b border-stone-200/50 pb-1">
                                        <span className="text-stone-400">{item.label}</span>
                                        <span className="text-stone-800 font-medium">{item.val}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto bg-white border-t border-stone-200 p-5 flex flex-col gap-3">
                                <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold">Model Output:</span>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-xs text-stone-500">Predicted Risk:</span>
                                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded font-mono text-[10px] font-bold tracking-wide">LOW</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-xs text-stone-500">Confidence:</span>
                                        <span className="font-mono text-xs font-semibold text-stone-800">96.8%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white border border-stone-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-sans text-xs tracking-widest text-stone-400 uppercase font-bold mb-3">MODEL_BEHAVIOR_ANALYSIS</h4>
                        <p className="font-sans text-stone-600 font-light text-sm leading-relaxed">
                            The model differentiates risk based on lipid markers, hematocrit elevation, liver enzyme levels, hormonal load, and enhancement intensity. It identifies compounding stress vectors rather than relying on single out-of-range biomarkers.
                        </p>
                    </div>

                </div>
            )}

            {/* Architecture / Tech Stack Details */}
            <div className="w-full">
                <h3 className="font-sans text-xs tracking-widest text-stone-400 uppercase font-bold mb-6">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-stone-100 text-stone-700 border border-stone-200 rounded-lg text-sm font-sans font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ProjectCaseStudy;

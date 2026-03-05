import { motion } from 'framer-motion';

const AICoreVisualizer = () => {
    return (
        <div className="relative flex justify-center items-center w-64 h-64 mx-auto perspective-1000">

            {/* Outer Pulse Rings */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border border-ai-primary/30"
            />
            <motion.div
                animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 rounded-full border border-ai-secondary/40"
            />

            {/* Core Orb */}
            <motion.div
                animate={{
                    boxShadow: [
                        "0 0 20px rgba(14,165,233,0.4), inset 0 0 20px rgba(14,165,233,0.4)",
                        "0 0 60px rgba(14,165,233,0.8), inset 0 0 40px rgba(14,165,233,0.6)",
                        "0 0 20px rgba(14,165,233,0.4), inset 0 0 20px rgba(14,165,233,0.4)"
                    ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 rounded-full bg-ai-surface flex items-center justify-center relative z-10 border border-ai-primary/50 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 blur-md"></div>
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
            </motion.div>

            {/* Orbiting Neural Nodes */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full rounded-full border border-dashed border-ai-primary/20"
            >
                {/* Node 1 */}
                <div className="absolute top-0 left-1/2 -mt-2 -ml-2 w-4 h-4 bg-ai-primary rounded-full shadow-[0_0_10px_#0ea5e9]"></div>
                {/* Node 2 */}
                <div className="absolute bottom-0 left-1/2 -mb-2 -ml-2 w-4 h-4 bg-ai-secondary rounded-full shadow-[0_0_10px_#8b5cf6]"></div>
                {/* Node 3 */}
                <div className="absolute top-1/2 left-0 -mt-2 -ml-2 w-3 h-3 bg-ai-accent rounded-full shadow-[0_0_10px_#059669]"></div>
            </motion.div>

            {/* Crosshairs & Alignment Marks for military/lab feel */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-ai-primary/10 -z-10"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-ai-primary/10 -z-10"></div>

        </div>
    );
};

export default AICoreVisualizer;

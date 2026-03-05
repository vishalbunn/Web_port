import { Network, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="w-full relative flex flex-col items-center justify-center min-h-[50vh] bg-[#1A1A1A] overflow-hidden">

            {/* Subtle Top Border */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-800"></div>

            {/* Content Container */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-4xl py-24 mb-10">

                <h2 className="font-display text-3xl md:text-4xl text-stone-50 font-bold tracking-tight mb-8 drop-shadow-sm text-depth-soft">
                    Engineering Intelligent Systems at Scale
                </h2>

                <p className="font-sans text-stone-400 max-w-lg mb-12 leading-relaxed font-light">
                    Designing, deploying, and scaling machine learning systems that move beyond experimentation into robust, reliable production environments.
                </p>

                <div className="flex gap-6 items-center">
                    <a href="https://github.com/vishalbunn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800 transition-all duration-300 flex items-center justify-center">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-hota-9a3858204/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-stone-800 text-stone-400 hover:text-emerald-500 hover:bg-stone-800 transition-all duration-300 flex items-center justify-center">
                        <Network size={18} />
                    </a>
                </div>
            </div>

            {/* Signature Area */}
            <div className="absolute bottom-10 w-full flex flex-col items-center justify-center z-20 pointer-events-none">
                <div className="font-sans text-[11px] tracking-widest text-stone-500 uppercase flex gap-4 pointer-events-auto">
                    <span>© 2025 Vishal Hota</span>
                    <span className="text-stone-700">|</span>
                    <a href="https://www.linkedin.com/in/vishal-hota-9a3858204/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">LinkedIn</a>
                    <span className="text-stone-700">|</span>
                    <a href="https://github.com/vishalbunn" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">GitHub</a>
                </div>
            </div>

            {/* Massive Faint Background Text */}
            <div className="absolute bottom-[-10%] left-0 w-full text-center flex justify-center overflow-hidden z-0 pointer-events-none select-none opacity-20">
                <span className="font-display text-[15vw] md:text-[200px] font-bold text-[#141414] tracking-tighter whitespace-nowrap leading-none">
                    VISHAL HOTA
                </span>
            </div>

        </footer>
    );
};

export default Footer;

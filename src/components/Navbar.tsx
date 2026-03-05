import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.05]">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="font-display font-medium text-lg text-[#050505] tracking-tighter hover:text-gray-600 transition-colors">
                    HOTA
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center group/nav">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'Projects', path: '/projects' },
                        { name: 'Systems', path: '/systems' },
                        { name: 'Stack', path: '/stack' },
                        { name: 'Contact', path: '/contact' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`relative group font-sans text-sm tracking-wide capitalize transition-colors duration-300 py-1.5
                                ${isActive(item.path) ? 'text-[#050505] font-medium' : 'text-[#525252] hover:text-[#050505]'}
                            `}
                        >
                            {item.name}

                            {/* Minimal Hover Underline */}
                            <span
                                className={`absolute left-0 bottom-0 w-full h-[1.5px] bg-[#050505] transform origin-left transition-transform duration-300 ease-out
                                    ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 opacity-0 group-hover:opacity-100 group-hover:scale-x-100'}
                                `}
                            ></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button Placeholder */}
                <button className="md:hidden flex flex-col gap-1.5 p-2">
                    <span className="w-5 h-[1.5px] bg-[#050505]"></span>
                    <span className="w-5 h-[1.5px] bg-[#050505]"></span>
                </button>

            </div>
        </nav>
    );
};

export default Navbar;

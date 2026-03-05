import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIBackground from './components/AIBackground';
import { AnimatePresence, motion } from 'framer-motion';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col items-center w-full overflow-hidden relative">
            <AIBackground />

            <Navbar />

            {/* Main Content Area */}
            <main className="w-full flex-grow flex flex-col items-center pt-24 pb-20 relative z-10 min-h-screen">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full flex flex-col items-center"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
};

export default Layout;

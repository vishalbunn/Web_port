import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

const sectionVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
            staggerChildren: 0.2,
        },
    },
};

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => {
    return (
        <motion.section
            id={id}
            className={`min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 sm:px-12 relative ${className}`}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;

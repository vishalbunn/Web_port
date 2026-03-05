import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <section className="w-full flex-grow py-24 px-6 flex flex-col items-center justify-center relative z-10 w-full max-w-2xl mx-auto min-h-[60vh]">

            <div className="w-full flex flex-col items-center text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded-full mb-6">
                    <span className="font-sans text-[10px] tracking-widest text-stone-500 uppercase font-semibold">Initiate Protocol</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-6">
                    Establish Connection
                </h1>
                <p className="font-sans text-stone-600 font-light text-lg">
                    Open to exploring new architectural challenges, machine learning implementations, and engineering roles.
                </p>
            </div>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full flex flex-col gap-6 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-200"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-sans text-xs tracking-widest text-stone-500 uppercase font-bold">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-[#1A1A1A] font-sans focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                        placeholder="John Doe"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-sans text-xs tracking-widest text-stone-500 uppercase font-bold">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-[#1A1A1A] font-sans focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-sans text-xs tracking-widest text-stone-500 uppercase font-bold">Message</label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-[#1A1A1A] font-sans focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors resize-none"
                        placeholder="How can we collaborate?"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 bg-[#1A1A1A] text-white font-sans text-sm font-semibold rounded-xl py-4 hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-sm flex items-center justify-center gap-2"
                >
                    Transmit Message
                </button>
            </motion.form>

        </section>
    );
};

export default ContactPage;

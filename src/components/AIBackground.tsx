const AIBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#FFFFFF] overflow-hidden flex items-center justify-center">

            {/* Pure White Base */}
            <div className="absolute inset-0 bg-[#FFFFFF]"></div>

            {/* Ultra-Subtle Architecture Grid (Linear/Vercel style) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.3]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '32px 32px'
                }}
            ></div>

            {/* Extremely Faint Noise Texture for solid depth */}
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none z-10 mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            ></div>

            {/* Very soft radial gradient in the center to focus the eye */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]"></div>

        </div>
    );
};

export default AIBackground;

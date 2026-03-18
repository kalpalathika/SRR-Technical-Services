import { motion } from "framer-motion";

const BlueprintGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <BlueprintGrid />
    <div className="container relative z-10">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <motion.div
          className="lg:col-span-3 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <p className="section-label">SRR Technical Services</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance text-foreground leading-[1.08]">
            Engineering Expertise{" "}
            <span className="text-primary">Built Over Four Decades.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl" style={{ textWrap: "pretty" as any }}>
            Advanced consulting in welding technology, manufacturing excellence, and quality systems for heavy engineering organizations.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            S. R. Ramanujam brings more than forty years of experience in shipbuilding, heavy fabrication, and pressure equipment manufacturing. Through SRR Technical Services, he helps organizations strengthen welding capability, improve manufacturing performance, and implement world-class quality systems.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#expertise"
              className="inline-flex items-center px-6 py-3 rounded-[4px] bg-primary text-primary-foreground font-medium text-sm transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
            >
              Explore Expertise
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-[4px] border border-border bg-card text-foreground font-medium text-sm transition-all hover:bg-muted active:scale-[0.98]"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-2 hidden lg:flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Technical vector illustration */}
          <svg viewBox="0 0 300 300" className="w-full max-w-sm text-primary/20" fill="none" stroke="currentColor" strokeWidth="0.5">
            {/* Outer circle */}
            <circle cx="150" cy="150" r="140" />
            <circle cx="150" cy="150" r="120" strokeDasharray="4 4" />
            {/* Cross hairs */}
            <line x1="150" y1="10" x2="150" y2="290" />
            <line x1="10" y1="150" x2="290" y2="150" />
            {/* Weld joint representation */}
            <rect x="100" y="120" width="100" height="60" rx="2" strokeWidth="1" className="text-primary/30" />
            <path d="M100 150 L130 135 L145 155 L160 130 L175 160 L190 140 L200 150" strokeWidth="1.5" className="text-primary/50" />
            {/* Dimension lines */}
            <line x1="100" y1="195" x2="200" y2="195" strokeWidth="0.5" className="text-muted-foreground/30" />
            <line x1="100" y1="190" x2="100" y2="200" strokeWidth="0.5" className="text-muted-foreground/30" />
            <line x1="200" y1="190" x2="200" y2="200" strokeWidth="0.5" className="text-muted-foreground/30" />
            {/* Corner marks */}
            <path d="M30 30 L50 30 M30 30 L30 50" strokeWidth="0.8" className="text-primary/40" />
            <path d="M270 30 L250 30 M270 30 L270 50" strokeWidth="0.8" className="text-primary/40" />
            <path d="M30 270 L50 270 M30 270 L30 250" strokeWidth="0.8" className="text-primary/40" />
            <path d="M270 270 L250 270 M270 270 L270 250" strokeWidth="0.8" className="text-primary/40" />
          </svg>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;

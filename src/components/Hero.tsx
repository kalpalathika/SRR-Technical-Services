import { motion } from "framer-motion";
import heroImage from "@/assets/hero-welding.png";

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
          className="lg:col-span-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Welding professional at work in a heavy fabrication facility"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/10" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;

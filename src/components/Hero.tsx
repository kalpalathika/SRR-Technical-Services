import { motion } from "framer-motion";
import heroImage from "@/assets/hero-welding.png";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden"
  >
    {/* Full-width background image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    />
    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />

    <div className="container relative z-10 py-32">
      <motion.div
        className="max-w-2xl space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/70">
          SRR Technical Services
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance text-white leading-[1.08]">
          Engineering Expertise{" "}
          <span className="text-accent">Built Over Four Decades.</span>
        </h1>
        <p
          className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl"
          style={{ textWrap: "pretty" as any }}
        >
          Advanced consulting in welding technology, manufacturing excellence,
          and quality systems for heavy engineering organizations.
        </p>
        <p className="text-sm text-white/60 leading-relaxed max-w-xl">
          S. R. Ramanujam brings more than forty years of experience in
          shipbuilding, heavy fabrication, and pressure equipment manufacturing.
          Through SRR Technical Services, he helps organizations strengthen
          welding capability, improve manufacturing performance, and implement
          world-class quality systems.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#expertise"
            className="inline-flex items-center px-6 py-3 rounded-[4px] bg-accent text-accent-foreground font-medium text-sm transition-all hover:bg-accent/90 hover:shadow-lg active:scale-[0.98]"
          >
            Explore Expertise
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-[4px] border border-white/30 bg-white/10 text-white font-medium text-sm transition-all hover:bg-white/20 active:scale-[0.98] backdrop-blur-sm"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;

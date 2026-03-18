import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container" ref={ref}>
        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <p className="section-label">Background</p>
          <h2 className="section-heading">About S. R. Ramanujam</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              S. R. Ramanujam is a senior welding and manufacturing professional with more than four decades of experience in heavy engineering, shipbuilding, offshore fabrication, and pressure equipment manufacturing.
            </p>
            <p>
              He began his career at Mazagon Dock Limited, working on fabrication and welding operations for naval ships and offshore platforms.
            </p>
            <p>
              He later spent 30 years at Larsen & Toubro in roles covering welding technology development, manufacturing engineering, quality assurance systems, and non-destructive examination coordination.
            </p>
            <p>
              After retiring from Larsen & Toubro in 2018, he founded <strong className="text-foreground font-semibold">SRR Technical Services</strong> to provide consulting and technical advisory services to manufacturing organizations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

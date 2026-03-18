import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  { title: "Advanced Welding Technology", desc: "Development of welding procedures, edge design optimization, and capability scaling." },
  { title: "Heavy Fabrication & Shipbuilding", desc: "Technical guidance for large-scale fabrication and ship construction projects." },
  { title: "Offshore Structure Welding", desc: "Specialized welding solutions for offshore platforms and marine structures." },
  { title: "Thick Section & Narrow Groove", desc: "Advanced techniques for thick section welding and narrow groove applications." },
  { title: "Cladding & Overlay Technologies", desc: "Corrosion-resistant cladding and weld overlay process development." },
  { title: "Tube-to-Tubesheet Welding", desc: "Precision tube-to-tubesheet welding for heat exchangers and pressure vessels." },
  { title: "QA/QC & NDE Integration", desc: "Quality assurance systems with integrated non-destructive examination programs." },
  { title: "Manufacturing Process Improvement", desc: "Operational improvements to achieve zero-defect production targets." },
  { title: "Code Compliance & Technical Audits", desc: "International code compliance reviews and manufacturing quality audits." },
];

const Expertise = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="expertise" className="py-20 md:py-28 bg-muted/40">
      <div className="container" ref={ref}>
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <p className="section-label mb-3">Capabilities</p>
          <h2 className="section-heading">Areas of Expertise</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              className="group relative bg-card p-7 rounded-xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover will-change-transform"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
            >
              <div className="absolute left-0 top-7 h-7 w-1 rounded-r bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="text-base font-bold mb-2 text-foreground">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

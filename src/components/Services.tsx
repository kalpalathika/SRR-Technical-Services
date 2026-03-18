import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Target, ShieldCheck, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Welding Technology Consulting",
    desc: "Development of welding procedures, welder qualification systems, weld edge design optimization, and advanced welding capability development.",
  },
  {
    icon: Target,
    title: "Manufacturing Excellence",
    desc: "Implementation of innovative manufacturing processes and operational improvements to support zero-defect production.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Systems",
    desc: "Design and implementation of quality manuals, NDE integration, and preparation for international certifications.",
  },
  {
    icon: GraduationCap,
    title: "Technology & Training",
    desc: "Structured development programs for welders and welding engineers, along with training infrastructure planning.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container" ref={ref}>
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <p className="section-label mb-3">What We Do</p>
          <h2 className="section-heading">Consulting Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-card p-8 rounded-xl shadow-card space-y-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
            >
              <div className="w-10 h-10 rounded-[4px] bg-primary/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

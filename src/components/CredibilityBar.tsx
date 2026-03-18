import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "40+", label: "Years Industry Experience" },
  { value: "30", label: "Years at Larsen & Toubro" },
  { value: "6", label: "Years at Mazagon Dock" },
  { value: "2018", label: "Independent Consulting Since" },
];

const CredibilityBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-primary text-primary-foreground py-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
            >
              <div className="text-3xl md:text-4xl font-bold tabular-nums">{m.value}</div>
              <div className="text-xs font-medium uppercase tracking-[0.08em] mt-1 opacity-80">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;

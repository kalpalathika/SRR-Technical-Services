import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const orgs = [
  "Larsen & Toubro",
  "ISGEC Yamuna Nagar",
  "HLE Glascoat Navsari",
  "Ratnamani Metals",
  "Everest Industries Dahej",
  "Chougule Steamship Ratnagiri",
];

const IndustryExperience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container" ref={ref}>
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <p className="section-label mb-3">Track Record</p>
          <h2 className="section-heading">Industry Experience</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {orgs.map((org, i) => (
            <motion.div
              key={org}
              className="bg-card rounded-xl shadow-card p-6 flex items-center justify-center text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.06, ease: [0.2, 0, 0, 1] }}
            >
              <span className="text-sm font-semibold text-foreground/80">{org}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExperience;

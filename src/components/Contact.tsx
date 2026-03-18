import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container" ref={ref}>
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="section-heading">Contact</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            If your organization is looking for expertise in welding technology, manufacturing improvement, or quality system implementation, please get in touch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          >
            <div>
              <h3 className="font-bold text-foreground">S. R. Ramanujam</h3>
              <p className="text-sm text-muted-foreground">SRR Technical Services</p>
            </div>

            <div className="space-y-4">
              <a href="tel:+919821449954" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +91 9821449954
              </a>
              <a href="mailto:srrhed03@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" /> srrhed03@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" /> Nerul, Navi Mumbai
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          >
            {submitted ? (
              <div className="bg-card rounded-xl shadow-card p-8 text-center">
                <p className="text-foreground font-semibold">Thank you for your message.</p>
                <p className="text-sm text-muted-foreground mt-2">We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-card p-8 space-y-5">
                <div>
                  <label className="text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1.5 block">Name</label>
                  <input required className="w-full px-4 py-3 rounded-[4px] border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1.5 block">Company</label>
                  <input className="w-full px-4 py-3 rounded-[4px] border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1.5 block">Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-[4px] border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1.5 block">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-[4px] border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none" />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-[4px] bg-primary text-primary-foreground font-medium text-sm transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground">© SRR Technical Services</p>
      <ul className="flex flex-wrap items-center gap-6">
        {footerLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;

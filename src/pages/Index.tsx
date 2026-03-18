import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import IndustryExperience from "@/components/IndustryExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <CredibilityBar />
    <About />
    <Expertise />
    <Services />
    <IndustryExperience />
    <Contact />
    <Footer />
  </div>
);

export default Index;

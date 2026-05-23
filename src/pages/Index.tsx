import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Donate from "@/components/portfolio/Donate";
import Feedback from "@/components/portfolio/Feedback";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.title = "KHALED SALEH — Developer & Electronics Technician Portfolio";
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    const desc = "Full-stack developer & electronics technician portfolio. Web, mobile, embedded systems and circuit design. Available worldwide.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, [i18n.language]);

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Donate />
      <Feedback />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

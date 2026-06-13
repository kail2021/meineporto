import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  // Map routes to section IDs for auto-scrolling
  const routeToSection: Record<string, string> = {
    "/about": "about",
    "/skills": "skills",
    "/projects": "projects",
    "/donate": "donate",
    "/feedback": "feedback",
    "/contact": "contact",
  };

  useEffect(() => {
    document.title = "KHALED SALEH — Full-Stack Developer & Electronics Engineer";
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    const desc = "Full-stack web developer and electronics engineer. Expertise in React, Node.js, Arduino, embedded systems, and circuit design. Available for projects worldwide.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, [i18n.language]);

  // Auto-scroll to section when route changes
  useEffect(() => {
    const sectionId = routeToSection[location.pathname];
    if (sectionId) {
      // Small delay to ensure component is rendered
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else if (location.pathname === "/") {
      // Scroll to top when on homepage
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

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

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDown, Download, Mail, Github, Youtube } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";
import heroService1 from "@/assets/hero-services-1.jpg";
import heroService2 from "@/assets/hero-services-2.jpg";
import heroService3 from "@/assets/hero-services-3.jpg";
import heroService4 from "@/assets/hero-services-4.jpg";

const heroSlides = [
  { src: heroImg, alt: "Developer portrait with circuit design" },
  { src: heroService1, alt: "Web development workspace" },
  { src: heroService2, alt: "Electronics engineering workbench" },
  { src: heroService3, alt: "Mobile app development setup" },
  { src: heroService4, alt: "3D CAD modeling and engineering design" },
];


const Hero = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);


  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-primary/40 -top-40 -start-40" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent/40 top-1/3 end-0 animation-delay-2000" />
      <div className="glow-orb w-[450px] h-[450px] bg-secondary/40 bottom-0 start-1/3 animation-delay-4000" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </div>

          <div className="space-y-3">
            <p className="text-lg text-muted-foreground">{t("hero.greeting")}</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-gradient">{t("hero.name")}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">{t("hero.role")}</p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground/90 max-w-xl leading-relaxed">
            {t("hero.tagline")}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full aurora-bg text-white font-medium shadow-glow hover:shadow-elevated hover:scale-[1.03] transition-all duration-300 ease-smooth"
            >
              {t("hero.cta_projects")}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:scale-[1.03] transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              {t("hero.cta_contact")}
            </a>
            <a
              href="/src/assets/khaled-cv.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:scale-[1.03] transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              {t("hero.cta_cv")}
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://github.com/Kail2021" 
              aria-label="Visit GitHub profile"
              className="glass w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.youtube.com/@KailSali" 
              aria-label="Visit YouTube channel"
              className="glass w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute inset-0 aurora-bg rounded-[2.5rem] blur-3xl opacity-40 scale-95" />
          <div className="relative glass-strong rounded-[2.5rem] p-3 shadow-elevated">
            <div className="relative rounded-[2rem] w-full aspect-square overflow-hidden">
              {heroSlides.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  width={1024}
                  height={1024}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-smooth ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-white shadow-glow" : "w-2.5 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -start-6 glass-strong rounded-2xl px-4 py-3 shadow-elevated animate-float">
              <p className="text-2xl font-bold text-gradient">5+</p>
              <p className="text-xs text-muted-foreground">Years Building</p>
            </div>
            <div className="absolute -top-6 -end-6 glass-strong rounded-2xl px-4 py-3 shadow-elevated animate-float animation-delay-2000">
              <p className="text-2xl font-bold text-gradient">30+</p>
              <p className="text-xs text-muted-foreground">Projects shipped</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

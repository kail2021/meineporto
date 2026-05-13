import { useTranslation } from "react-i18next";
import { ArrowDown, Download, Mail, Github, Youtube } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const { t } = useTranslation();

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
            <a href="https://github.com/Kail2021" className="glass w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@KailSali" className="glass w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute inset-0 aurora-bg rounded-[2.5rem] blur-3xl opacity-40 scale-95" />
          <div className="relative glass-strong rounded-[2.5rem] p-3 shadow-elevated">
            <img
              src={heroImg}
              alt="Developer portrait with circuit design"
              width={1024}
              height={1024}
              className="rounded-[2rem] w-full aspect-square object-cover"
            />
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

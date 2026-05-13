import { useTranslation } from "react-i18next";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-28 relative">
      <div className="container">
        <Reveal className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">{t("about.eyebrow")}</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">{t("about.title")}</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Reveal delay={100}>
            <div className="glass rounded-3xl p-7 h-full hover:shadow-glow transition-shadow duration-500">
              <div className="w-12 h-12 rounded-2xl aurora-bg flex items-center justify-center mb-4 shadow-glow">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("about.experience")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.experience_desc")}</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="glass rounded-3xl p-7 h-full hover:shadow-glow transition-shadow duration-500">
              <div className="w-12 h-12 rounded-2xl aurora-bg flex items-center justify-center mb-4 shadow-glow">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("about.education")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.education_desc")}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="glass-strong rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <Sparkles className="absolute top-6 end-6 w-6 h-6 text-primary/40" />
            <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">{t("about.bio")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;

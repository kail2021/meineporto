import { useTranslation } from "react-i18next";
import {
  Code2,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

// ----------------------
// Skill Type
// ----------------------
type Skill = {
  name: string;
  level: "experienced" | "intermediate";
  logo?: string;          // SimpleIcons slug
  color?: string;         // Brand color
  icon?: LucideIcon;      // Fallback icon
};

// ----------------------
// Skills Data
// ----------------------
const web: Skill[] = [
  { name: "HTML / CSS", level: "experienced", logo: "html5", color: "E34F26" },
  { name: "JavaScript / TS", level: "experienced", logo: "typescript", color: "3178C6" },
  { name: "React & React Native", level: "experienced", logo: "react", color: "4267fc" },
  { name: "Node.js", level: "intermediate", logo: "nodedotjs", color: "5FA04E" },
  { name: "Firebase", level: "experienced", logo: "firebase", color: "DD2C00" },
  { name: "Tailwind / Material UI", level: "experienced", logo: "tailwindcss", color: "06B6D4" },
];

const electrical: Skill[] = [
  { name: "Arduino & MCU Programming", level: "experienced", logo: "arduino", color: "02abb5" },
  { name: "Automotive ECU & TCU", level: "experienced", icon: Cpu },
  { name: "Circuit Design (PCB)", level: "intermediate", logo: "kicad", color: "6a43f7" },
  { name: "FreeCAD 3D Modeling", level: "experienced", logo: "freecad", color: "de415b" },
  { name: "Crypto Mining Rigs", level: "experienced", logo: "bitcoin", color: "F7931A" },
  { name: "Video & Photo Processing", level: "intermediate", logo: "ffmpeg", color: "007808" },
  { name: "Fraud & Risk Management", level: "experienced", icon: Code2 },
];

// ----------------------
// Skill Logo Component
// ----------------------
const SkillLogo = ({ skill }: { skill: Skill }) => {
  const fallbackIcon = skill.icon ?? Code2;

  if (skill.logo) {
    const url = `https://cdn.simpleicons.org/${skill.logo}/${skill.color ?? "ffffff"}`;

    return (
      <img
        src={url}
        alt={`${skill.name} logo`}
        loading="lazy"
        className="w-9 h-9 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }

  const Icon = fallbackIcon;
  return <Icon className="w-6 h-6 text-primary" strokeWidth={2.4} />;
};

// ----------------------
// Skill Card Component
// ----------------------
const SkillCard = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const { t } = useTranslation();

  return (
    <Reveal delay={delay}>
      <div className="group glass rounded-2xl p-5 flex items-start gap-4 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ease-smooth">
        
        {/* Icon Container */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 aurora-bg rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity" />

          <div
            className={cn(
              "relative w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1",
              "backdrop-blur-md bg-white/20 dark:bg-black/20 ring-1 ring-black/10 dark:ring-white/10 shadow-glow"
            )}
          >
            <SkillLogo skill={skill} />
          </div>
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <h4 className="font-medium leading-snug">{skill.name}</h4>

          <div className="flex items-center gap-1.5 mt-1.5">
            <span
              className={cn(
                "inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full",
                skill.level === "experienced"
                  ? "bg-primary/15 text-primary"
                  : "bg-muted text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  skill.level === "experienced" ? "bg-primary" : "bg-muted-foreground/50"
                )}
              />
              {skill.level === "experienced"
                ? t("skills.experienced")
                : t("skills.intermediate")}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

// ----------------------
// Main Component
// ----------------------
const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-28 relative">
      <div className="container">
        
        <Reveal className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {t("skills.eyebrow")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">{t("skills.title")}</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Web */}
          <Reveal>
            <div className="glass-strong rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl aurora-bg flex items-center justify-center shadow-glow">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{t("skills.web")}</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {web.map((s, i) => (
                  <SkillCard key={s.name} skill={s} delay={i * 60} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Electrical */}
          <Reveal delay={150}>
            <div className="glass-strong rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl aurora-bg flex items-center justify-center shadow-glow">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{t("skills.electrical")}</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {electrical.map((s, i) => (
                  <SkillCard key={s.name} skill={s} delay={i * 60} />
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Skills;

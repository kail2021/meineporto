import { useTranslation } from "react-i18next";
import {
  Code2,
  Cpu,
  FileCode2,
  Braces,
  Atom,
  Server,
  Flame,
  Wind,
  CircuitBoard,
  Car,
  Microchip,
  Bitcoin,
  Film,
  ShieldCheck,
  Box,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

type Skill = { name: string; level: "experienced" | "intermediate"; icon: LucideIcon };

const web: Skill[] = [
  { name: "HTML / CSS", level: "experienced", icon: FileCode2 },
  { name: "JavaScript / TS", level: "experienced", icon: Braces },
  { name: "React & React Native", level: "experienced", icon: Atom },
  { name: "Node.js", level: "intermediate", icon: Server },
  { name: "Firebase", level: "experienced", icon: Flame },
  { name: "Tailwind / Material UI", level: "experienced", icon: Wind },
];

const electrical: Skill[] = [
  { name: "Arduino & MCU Programming", level: "experienced", icon: Microchip },
  { name: "Automotive ECU & TCU", level: "experienced", icon: Car },
  { name: "Circuit Design (PCB)", level: "intermediate", icon: CircuitBoard },
  { name: "FreeCAD 3D Modeling", level: "experienced", icon: Box },
  { name: "Crypto Mining Rigs", level: "experienced", icon: Bitcoin },
  { name: "Video & Photo Processing", level: "intermediate", icon: Film },
  { name: "Fraud & Risk Management", level: "experienced", icon: ShieldCheck },
];

const SkillCard = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const { t } = useTranslation();
  const Icon = skill.icon;
  return (
    <Reveal delay={delay}>
      <div className="group glass rounded-2xl p-5 flex items-start gap-4 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ease-smooth">
        <div className="relative shrink-0">
          <div className="absolute inset-0 aurora-bg rounded-2xl blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
          <div
            className={cn(
              "relative w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
              "aurora-bg text-white shadow-glow ring-1 ring-white/20"
            )}
          >
            <Icon className="w-6 h-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" strokeWidth={2.4} />
          </div>
        </div>
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
              {skill.level === "experienced" ? t("skills.experienced") : t("skills.intermediate")}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-28 relative">
      <div className="container">
        <Reveal className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">{t("skills.eyebrow")}</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">{t("skills.title")}</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
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

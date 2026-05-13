import { useTranslation } from "react-i18next";
import { ExternalLink, Github } from "lucide-react";
import Reveal from "./Reveal";
import cafe from "@/assets/project-cafe.jpg";
import arduino from "@/assets/project-arduino.jpg";
import rideshare from "@/assets/project-rideshare.jpg";
import school from "@/assets/project-school-management.jpg";
import medical from "@/assets/project-medical-store.jpg";
import freecad from "@/assets/project-freecad.jpg";
import ecu from "@/assets/project-ecu.jpg";
import video from "@/assets/project-video.jpg";

const Projects = () => {
  const { t } = useTranslation();

  const items = [
    { 
      title: "CafeShop",
      desc: t("projects.cafe_desc"),
      img: cafe,
      tags: ["React", "Tailwind", "Firebase"],
      demo: "https://demo-cafe.com",
      code: "https://github.com/kail2021/cafeshop.git"
    },
    { 
      title: "16 LED Controller",
      desc: t("projects.arduino_desc"),
      img: arduino,
      tags: ["Arduino", "C", "Proteus"],
      demo: "https://youtu.be/4a35225X_R0?si=UXo8CPl72C6x3k4O",
      code: "https://github.com/kail2021/Simplify-This-Code.git"
    },
    { 
      title: "Ride Share",
      desc: t("projects.rideshare_desc"),
      img: rideshare,
      tags: ["React Native", "Maps", "Node"],
      demo: "https://demo-rideshare.com",
      code: "https://github.com/omar/rideshare"
    },
    { 
      title: "School Management System",
      desc: t("projects.school_desc"),
      img: school,
      tags: ["React", "Dashboard", "Database"],
      demo: "https://demo-school.com",
      code: "https://github.com/omar/school-system"
    },
    { 
      title: "Medical Equipment Store",
      desc: t("projects.medical_desc"),
      img: medical,
      tags: ["E-commerce", "UI/UX", "Payments"],
      demo: "https://demo-medical.com",
      code: "https://github.com/omar/medical-store"
    },
    { 
      title: "FreeCAD 3D Project",
      desc: t("projects.freecad_desc"),
      img: freecad,
      tags: ["FreeCAD", "3D", "Engineering"],
      demo: "https://demo-freecad.com",
      code: "https://github.com/omar/freecad-project"
    },
    { 
      title: "Automotive ECU & TCU",
      desc: t("projects.ecu_desc"),
      img: ecu,
      tags: ["ECU", "TCU", "Diagnostics"],
      demo: "https://youtube.com/shorts/lDbksawITDs?si=TORLdBP7qtocTBzJ",
      code: "https://github.com/omar/ecu-tcu"
    },
    { 
      title: "Video & Photo Processing",
      desc: t("projects.video_desc"),
      img: video,
      tags: ["FFmpeg", "Color Grading", "Batch"],
      demo: "https://demo-video.com",
      code: "https://github.com/omar/video-tools"
    },
  ];

  return (
    <section id="projects" className="py-28 relative">
      <div className="container">
        <Reveal className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {t("projects.eyebrow")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">{t("projects.title")}</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group glass rounded-3xl overflow-hidden hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 ease-smooth h-full flex flex-col">
                
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full glass">{tag}</span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full aurora-bg text-white text-sm font-medium hover:shadow-glow transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {t("projects.demo")}
                    </a>

                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-medium hover:scale-105 transition-transform"
                    >
                      <Github className="w-3.5 h-3.5" />
                      {t("projects.code")}
                    </a>
                  </div>

                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

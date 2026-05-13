import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "M. Schneider",
    role: "Startup Founder",
    quote: "Reliable delivery, clean communication and a polished web product that felt ready from day one.",
  },
  {
    name: "A. Hassan",
    role: "Electronics Client",
    quote: "The circuit and firmware work was practical, well documented and solved the real hardware issue fast.",
  },
  {
    name: "L. Romero",
    role: "Store Owner",
    quote: "Great eye for interface details, smooth responsive layouts and strong technical problem solving.",
  },
];

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <section id="feedback" className="py-28 relative">
      <div className="container">
        <Reveal className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">{t("feedback.eyebrow")}</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">{t("feedback.title")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t("feedback.subtitle")}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 120}>
              <article className="glass-strong rounded-3xl p-6 h-full hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ease-smooth">
                <div className="flex gap-1 mb-5" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">“{item.quote}”</p>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Mail, Phone, Github, Youtube, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import Reveal from "./Reveal";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!form.name.trim() || !emailOk || !form.message.trim()) {
      toast.error(t("contact.error"));
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\nFrom: ${form.name.trim()}\nEmail: ${form.email.trim()}`);
    window.location.href = `mailto:kail2021@outlook.com?subject=${subject}&body=${body}`;
    toast.success(t("contact.sent"));
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="container max-w-4xl">
        <Reveal className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">{t("contact.eyebrow")}</p>
          <h2 className="text-6xl sm:text-7xl font-bold">
            <span className="text-gradient">{t("contact.title")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t("contact.subtitle")}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          <Reveal delay={100}>
            <a
              href="mailto:kail2021@outlook.com"
              className="glass rounded-3xl p-6 flex items-center gap-4 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ease-smooth"
            >
              <div className="w-12 h-12 rounded-2xl aurora-bg flex items-center justify-center shadow-glow shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t("contact.email_label")}</p>
                <p className="font-medium truncate">kail2021@outlook.com</p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="https://wa.me/49015212425625"
              className="glass rounded-3xl p-6 flex items-center gap-4 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ease-smooth"
            >
              <div className="w-12 h-12 rounded-2xl aurora-bg flex items-center justify-center shadow-glow shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t("contact.phone_label")}</p>
                <p className="font-medium">+49 015212425625</p>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="flex justify-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/kail2021", label: "GitHub" },
              { Icon: Youtube, href: "https://www.youtube.com/@KailSali", label: "YouTube" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/khaled-saleh", label: "LinkedIn" }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${label} profile`}
                className="glass w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <form onSubmit={handleSend} className="glass-strong rounded-3xl p-6 sm:p-8 mt-10 space-y-4">
            <h3 className="text-2xl font-semibold text-center mb-6">{t("contact.form_title")}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name-input" className="sr-only">Name</label>
                <input
                  id="name-input"
                  value={form.name}
                  onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
                  placeholder={t("contact.name")}
                  maxLength={100}
                  required
                  className="glass rounded-2xl px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
                  aria-label="Your name"
                />
              </div>
              <div>
                <label htmlFor="email-input" className="sr-only">Email</label>
                <input
                  id="email-input"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
                  placeholder={t("contact.email")}
                  maxLength={255}
                  required
                  className="glass rounded-2xl px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
                  aria-label="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message-input" className="sr-only">Message</label>
              <textarea
                id="message-input"
                value={form.message}
                onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
                placeholder={t("contact.message")}
                maxLength={1000}
                rows={5}
                required
                className="glass rounded-2xl px-4 py-3 bg-transparent w-full resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Your message"
              />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl aurora-bg text-white font-semibold shadow-glow hover:scale-[1.01] transition-all duration-300 ease-smooth">
              <Send className="w-4 h-4" />
              {t("contact.send")}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

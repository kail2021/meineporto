import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import { languages } from "@/i18n/translations";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png";


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", sectionId: "about", label: t("nav.about") },
    { href: "#skills", sectionId: "skills", label: t("nav.skills") },
    { href: "#projects", sectionId: "projects", label: t("nav.projects") },
    { href: "#donate", sectionId: "donate", label: t("nav.donate") },
    { href: "#contact", sectionId: "contact", label: t("nav.contact") },
  ];

  const handleNavClick = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    
    // Scroll to section with smooth behavior
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
  };

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = code;
    setLangOpen(false);
  };

  const current = languages.find((l) => l.code === i18n.language) ?? languages[0];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-smooth",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <nav
        className={cn(
          "mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between rounded-full transition-all duration-500 ease-smooth",
          scrolled ? "glass-strong py-2" : "py-3"
        )}
      >
        <a href="/" className="flex items-center gap-2 px-2">
          <div className="w-12 h-12 rounded-xl shadow-glow flex items-center justify-center font-bold text-white">
            <img
              src={Logo}
              alt="Logo"
              className="w-12 h-12 object-contain"
            />          
            </div>
          <span className="font-semibold tracking-tight hidden sm:inline">KHALED SALEH</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.sectionId}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(l.sectionId, e)}
                className="px-3 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="Language"
            >
              <Globe className="w-4 h-4" />
            </button>
            {langOpen && (
              <div className="absolute end-0 mt-2 w-48 glass-strong rounded-2xl p-2 animate-scale-in origin-top-right">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm hover:bg-muted/60 transition-colors",
                      current.code === l.code && "bg-muted/60 font-medium"
                    )}
                  >
                    <span className="text-base">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggle}
            className="glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden glass w-10 h-10 rounded-full flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mt-2 glass-strong rounded-3xl p-4 animate-scale-in">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.sectionId}>
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(l.sectionId, e)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium hover:bg-muted/60 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

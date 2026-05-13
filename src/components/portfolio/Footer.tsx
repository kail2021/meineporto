import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-10 border-t border-border/50 mt-10">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Kail Sali — {t("footer.rights")}</p>
        <p>{t("footer.built")}</p>
      </div>
    </footer>
  );
};

export default Footer;

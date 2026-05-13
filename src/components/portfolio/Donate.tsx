import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Coffee, Heart } from "lucide-react";
import { toast } from "sonner";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

const presets = [3, 5, 10, 25];

const Donate = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState<number>(5);
  const [custom, setCustom] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleDonate = () => {
    const final = custom ? Number(custom) : amount;
    if (!final || final <= 0) {
      toast.error("Please pick an amount");
      return;
    }
    toast.success(t("donate.thanks"));
    // Demo: in production, integrate Stripe / PayPal here.
  };

  return (
    <section id="donate" className="py-28 relative">
      <div className="container max-w-4xl">
        <Reveal className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">{t("donate.eyebrow")}</p>
          <h2 className="text-4xl sm:text-5xl font-bold inline-flex items-center gap-3 flex-wrap justify-center">
            <Coffee className="w-9 h-9 text-primary" />
            <span className="text-gradient">{t("donate.title")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t("donate.subtitle")}</p>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative glass-strong rounded-[2rem] p-8 sm:p-10 overflow-hidden">
            <div className="glow-orb w-72 h-72 bg-accent/30 -top-20 -end-20" />
            <div className="glow-orb w-72 h-72 bg-primary/30 -bottom-20 -start-20 animation-delay-2000" />

            <div className="relative space-y-6">
              <div>
                <p className="text-sm font-medium mb-3">{t("donate.preset")}</p>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {presets.map((v) => (
                    <button
                      key={v}
                      onClick={() => { setAmount(v); setCustom(""); }}
                      className={cn(
                        "py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 ease-smooth",
                        amount === v && !custom
                          ? "aurora-bg text-white shadow-glow scale-[1.02]"
                          : "glass hover:scale-[1.02]"
                      )}
                    >
                      ${v}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-3">{t("donate.custom")}</p>
                <div className="relative">
                  <span className="absolute start-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    min="1"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    placeholder="0"
                    className="w-full glass rounded-2xl py-3.5 ps-9 pe-4 text-lg font-medium bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              <button
              disabled={isDisabled}
              className={isDisabled ? "btn-disabled" : "btn-active"}
                onClick={handleDonate}
                className="w-full group inline-flex items-center justify-center gap-2 py-4 rounded-2xl aurora-bg text-white font-semibold text-lg shadow-glow hover:shadow-elevated hover:scale-[1.01] transition-all duration-300 ease-smooth"
              >
                <Heart className="w-5 h-5 group-hover:scale-125 transition-transform" />
                {t("donate.button")} ${custom || amount}
              </button>

              <p className="text-xs text-center text-muted-foreground">{t("donate.methods")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Donate;

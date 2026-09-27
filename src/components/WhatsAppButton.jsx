
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    openWhatsApp(
      "Hello TurfZone, I would like to know more about turf bookings."
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={handleWhatsApp}
        aria-label="Contact TurfZone on WhatsApp"
        className="group fixed bottom-5 right-4 z-40 flex items-center gap-2.5 rounded-full border border-white/20 bg-slate-950/95 px-3 py-3 text-sm font-extrabold text-white shadow-[0_15px_40px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:shadow-[0_18px_45px_rgba(163,230,53,0.22)] active:translate-y-0 sm:bottom-6 sm:right-6 sm:gap-3 sm:px-4 sm:py-3.5"
      >
        {/* Animated outer ring */}
        <span className="pointer-events-none absolute inset-0 rounded-full border border-emerald-400/40 animate-[whatsappPulse_2.5s_ease-out_infinite]" />

        {/* Icon */}
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-500 shadow-[0_0_22px_rgba(16,185,129,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:bg-lime-400 sm:h-11 sm:w-11">
          {/* Icon glow */}
          <span className="absolute inset-0 rounded-full bg-white/10" />

          <MessageCircle
            className="relative h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:text-slate-950 sm:h-5.5 sm:w-5.5"
            strokeWidth={2.5}
          />

          {/* Shine */}
          <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/25 transition-all duration-700 group-hover:left-[130%]" />
        </span>

        {/* Text */}
        <span className="hidden text-left sm:block">
          <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
            Need Help?
          </span>

          <span className="block text-sm font-black text-white transition-colors duration-300 group-hover:text-lime-300">
            WhatsApp Us
          </span>
        </span>

        {/* Mobile text */}
        <span className="pr-1 text-xs font-black sm:hidden">
          WhatsApp
        </span>
      </button>

      <style>{`
@keyframes whatsappPulse {
    0 % {
        transform: scale(1);
        opacity: 0.7;
    }

    70 % {
        transform: scale(1.18);
        opacity: 0;
    }

    100 % {
        transform: scale(1.18);
        opacity: 0;
    }
}

@media(prefers - reduced - motion: reduce) {
          .animate -\\[whatsappPulse_2\\.5s_ease - out_infinite\\] {
        animation: none!important;
    }
}
`}</style>
    </>
  );
}

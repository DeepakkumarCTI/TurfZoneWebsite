
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SportsCard({ sport, count }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative isolate flex h-full w-full"
    >
      {/* Animated glow */}
      <div className="pointer-events-none absolute -inset-[2px] -z-10 rounded-[17px] bg-gradient-to-r from-lime-400 via-yellow-300 to-lime-500 opacity-40 blur-[3px] transition-opacity duration-500 group-hover:opacity-90 sm:rounded-[25px]" />

      {/* Animated border */}
      <div className="pointer-events-none absolute -inset-[1px] -z-10 overflow-hidden rounded-[16px] sm:rounded-[24px]">
        <div className="absolute inset-[-100%] animate-[sportBorder_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#a3e635_90deg,#facc15_180deg,transparent_270deg,#84cc16_360deg)] opacity-80 motion-reduce:animate-none" />
      </div>

      {/* Card */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[15px] border border-white/70 bg-white shadow-[0_6px_20px_rgba(15,23,42,0.07)] transition-shadow duration-300 group-hover:shadow-[0_15px_35px_rgba(15,23,42,0.14)] sm:rounded-[23px]">

        {/* Image */}
        <div className="relative h-20 shrink-0 overflow-hidden bg-slate-950 sm:h-40 md:h-44 lg:h-48">
          <img
            src={sport.image}
            alt={sport.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

          {/* Sport badge */}
          <div className="absolute left-1.5 top-1.5 sm:left-3 sm:top-3">
            <div className="flex items-center gap-1 rounded-full border border-white/20 bg-slate-950/60 px-1.5 py-1 text-[8px] font-black uppercase tracking-wide text-white backdrop-blur sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:text-[10px]">
              <Sparkles className="h-2.5 w-2.5 text-lime-400 sm:h-3 sm:w-3" />
              Sport
            </div>
          </div>

          {/* Available turf count */}
          <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-3 sm:left-3 sm:right-3">
            <p className="text-[8px] font-semibold uppercase tracking-wider text-lime-300 sm:text-[10px]">
              Available
            </p>

            <p className="mt-0.5 text-[10px] font-extrabold text-white sm:text-sm">
              {count} turf{count !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-2 sm:p-4 lg:p-5">
          <h3 className="line-clamp-2 font-display text-[11px] font-black leading-tight text-slate-950 sm:text-base lg:text-lg">
            {sport.name}
          </h3>

          <p className="mt-1 line-clamp-2 text-[9px] leading-4 text-slate-500 sm:mt-2 sm:min-h-[40px] sm:text-xs sm:leading-5 lg:text-sm">
            {sport.description}
          </p>

          {/* Bottom action */}
          <div className="mt-auto pt-2 sm:pt-4">
            <Link
              to={`/explore?sport=${encodeURIComponent(sport.id || sport.name)}`}
              className="inline-flex w-full items-center justify-center gap-1 rounded-lg bg-slate-950 px-1.5 py-2 text-[9px] font-extrabold text-white transition-all duration-300 hover:bg-lime-400 hover:text-slate-950 sm:gap-1.5 sm:rounded-xl sm:px-3 sm:py-2.5 sm:text-xs lg:text-sm"
            >
              <span>Explore</span>
              <ArrowRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            </Link>
          </div>
        </div>

        {/* Animated bottom line */}
        <div className="h-[2px] shrink-0 overflow-hidden bg-slate-100">
          <div className="h-full w-1/3 animate-[sportBottomLine_3s_linear_infinite] rounded-full bg-gradient-to-r from-transparent via-lime-400 to-transparent motion-reduce:animate-none" />
        </div>
      </div>

      <style>{`
        @keyframes sportBorder {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes sportBottomLine {
          from {
            transform: translateX(-150%);
          }
          to {
            transform: translateX(450%);
          }
        }
      `}</style>
    </motion.article>
  );
}
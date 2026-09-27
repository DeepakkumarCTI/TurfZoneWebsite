
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
} from "lucide-react";

export default function TurfCard({ turf }) {
  const sports = turf.sports || [];
  const facilities = turf.facilities || [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative isolate flex h-full w-full"
    >
      {/* Animated glow */}
      <div className="pointer-events-none absolute -inset-[2px] -z-10 rounded-[22px] bg-gradient-to-r from-lime-400 via-yellow-300 to-lime-500 opacity-40 blur-[3px] transition-opacity duration-500 group-hover:opacity-90" />

      {/* Animated border */}
      <div className="pointer-events-none absolute -inset-[1px] -z-10 overflow-hidden rounded-[21px]">
        <div className="absolute inset-[-100%] animate-[turfBorder_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#a3e635_90deg,#facc15_180deg,transparent_270deg,#84cc16_360deg)] opacity-80 motion-reduce:animate-none" />
      </div>

      {/* Card */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[20px] border border-white/80 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.08)] transition-shadow duration-300 group-hover:shadow-[0_15px_35px_rgba(15,23,42,0.14)]">

        {/* Image */}
        <div className="relative h-32 shrink-0 overflow-hidden bg-slate-950 sm:h-48 lg:h-52">
          <img
            src={turf.image}
            alt={turf.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent" />

          {/* Availability */}
          <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-lime-400 px-2 py-1 text-[9px] font-black uppercase tracking-wide text-slate-950 sm:px-3 sm:text-[10px]">
              <CheckCircle2 className="h-3 w-3" />
              Available
            </span>
          </div>

          {/* Rating */}
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full border border-white/20 bg-slate-950/65 px-2 py-1 text-[10px] font-bold text-white backdrop-blur sm:right-3 sm:top-3 sm:text-xs">
            <Star className="h-3 w-3 fill-yellow-300 text-yellow-300" />
            {turf.rating}
          </div>

          {/* Turf name and location */}
          <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
            <h3 className="line-clamp-2 font-display text-sm font-black leading-tight text-white sm:text-xl lg:text-2xl">
              {turf.name}
            </h3>

            <div className="mt-1 flex items-center gap-1 text-[10px] text-white/80 sm:mt-1.5 sm:text-xs">
              <MapPin className="h-3 w-3 shrink-0 text-lime-300 sm:h-3.5 sm:w-3.5" />
              <span className="truncate">{turf.location}</span>
            </div>
          </div>
        </div>

        {/* Card content */}
        <div className="flex flex-1 flex-col p-3 sm:p-5">

          {/* Price and rating */}
          <div className="mb-3 flex items-center justify-between sm:mb-4">
            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                Starting Price
              </p>

              <p className="mt-0.5 font-display text-base font-black text-slate-950 sm:text-2xl">
                ₹{turf.price}
                <span className="ml-1 text-[10px] font-bold text-slate-500 sm:text-xs">
                  /hr
                </span>
              </p>
            </div>

            <div className="hidden items-center gap-1 rounded-xl bg-amber-50 px-2.5 py-2 text-xs font-black text-amber-700 sm:flex">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {turf.rating}
            </div>
          </div>

          {/* Sports */}
          <div className="mb-3 sm:mb-4">
            <p className="mb-1.5 text-[9px] font-black uppercase tracking-wider text-slate-400 sm:mb-2 sm:text-[10px]">
              Sports
            </p>

            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {sports.slice(0, 2).map((sport) => (
                <span
                  key={sport}
                  className="rounded-md border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-bold capitalize text-slate-600 sm:rounded-lg sm:px-2.5 sm:py-1.5 sm:text-[11px]"
                >
                  {sport.replace("-", " ")}
                </span>
              ))}

              {sports.length > 2 && (
                <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-500 sm:rounded-lg sm:py-1.5 sm:text-[11px]">
                  +{sports.length - 2}
                </span>
              )}
            </div>
          </div>

          {/* Facilities */}
          <div className="mb-4 sm:mb-5">
            <p className="mb-1.5 text-[9px] font-black uppercase tracking-wider text-slate-400 sm:mb-2 sm:text-[10px]">
              Facilities
            </p>

            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {facilities.slice(0, 2).map((facility) => (
                <span
                  key={facility}
                  className="rounded-full bg-slate-100 px-2 py-1 text-[9px] font-semibold capitalize text-slate-500 sm:px-2.5 sm:py-1.5 sm:text-[10px]"
                >
                  {facility.replace("-", " ")}
                </span>
              ))}

              {facilities.length > 2 && (
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[9px] font-semibold text-slate-500 sm:px-2.5 sm:py-1.5 sm:text-[10px]">
                  +{facilities.length - 2}
                </span>
              )}
            </div>
          </div>

          {/* Buttons stay at the bottom */}
          <div className="mt-auto grid grid-cols-2 gap-1.5 sm:gap-2.5">
            <Link
              to={`/turf/${turf.id}`}
              className="inline-flex min-w-0 items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-1.5 py-2.5 text-[10px] font-extrabold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-3 sm:text-sm"
            >
              <span className="sm:hidden">Details</span>
              <span className="hidden sm:inline">View Details</span>
              <ArrowRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            </Link>

            <Link
              to={`/turf/${turf.id}#book`}
              className="inline-flex min-w-0 items-center justify-center gap-1 rounded-lg bg-slate-950 px-1.5 py-2.5 text-[10px] font-extrabold text-white transition hover:bg-lime-400 hover:text-slate-950 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-3 sm:text-sm"
            >
              <span>Book</span>
              <ArrowRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            </Link>
          </div>
        </div>

        {/* Animated bottom line */}
        <div className="h-[2px] shrink-0 overflow-hidden bg-slate-100">
          <div className="h-full w-1/3 animate-[turfBottomLine_3s_linear_infinite] rounded-full bg-gradient-to-r from-transparent via-lime-400 to-transparent motion-reduce:animate-none" />
        </div>
      </div>

      <style>{`
        @keyframes turfBorder {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes turfBottomLine {
          from { transform: translateX(-150%); }
          to { transform: translateX(450%); }
        }
      `}</style>
    </motion.article>
  );
}
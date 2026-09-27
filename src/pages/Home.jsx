import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import { useApp } from "../context/AppContext";
import { sports } from "../data/sports";
import { company } from "../data/company";

import TurfCard from "../components/TurfCard";
import SportsCard from "../components/SportsCard";

export default function Home() {
    const { turfs } = useApp();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        sport: "",
        date: "",
    });

    const submit = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();

        if (form.sport) {
            params.set("sport", form.sport);
        }

        if (form.date) {
            params.set("date", form.date);
        }

        navigate(`/explore?${params.toString()}`);
    };

    /*
     * Collect all sports available across all facilities
     * managed by this company.
     */
    const availableSportIds = [
        ...new Set(turfs.flatMap((turf) => turf.sports || [])),
    ];

    const availableSports = sports.filter((sport) =>
        availableSportIds.includes(sport.id)
    );

    return (
        <main>

            {/* =========================================================
    HERO
========================================================= */}

            <section className="relative isolate overflow-hidden bg-slate-950 lg:min-h-[88svh]">
                {/* Background video */}
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/hero-fallback.png"
                >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>

                {/* Fallback background */}
                <img
                    src="/images/hero-fallback.png"
                    alt="TurfZone sports arena"
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                {/* Reduced-opacity dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/45 to-slate-950/20" />

                {/* Background grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(163,230,53,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(163,230,53,.2) 1px,transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Hero content */}
                <div className="relative mx-auto flex w-full max-w-[1400px] flex-col px-3 pb-5 pt-28 sm:px-5 sm:pb-8 sm:pt-32 lg:min-h-[88svh] lg:justify-center lg:px-6 lg:pb-32 lg:pt-28">
                    {/* Heading and description */}
                    <div className="max-w-4xl">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[9px] font-black uppercase tracking-[0.2em] text-lime-300 sm:text-xs sm:tracking-[0.28em]"
                        >
                            {company.name}
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mt-3 font-display text-4xl font-black leading-[0.98] tracking-tight text-white sm:mt-4 sm:text-6xl sm:leading-[0.95] lg:text-8xl"
                        >
                            Your Game.
                            <br />
                            <span className="text-gradient">Your Turf.</span>
                            <br />
                            Your Time.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 max-w-xl text-xs leading-5 text-slate-200 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg"
                        >
                            {company.description}
                        </motion.p>

                        {/* Hero buttons */}
                        <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
                            <Link
                                to="/explore"
                                className="rounded-lg bg-gradient-to-r from-lime-400 to-yellow-300 px-4 py-2.5 text-xs font-extrabold text-slate-950 transition hover:-translate-y-1 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-sm"
                            >
                                Book Your Slot
                            </Link>

                            <Link
                                to="/about"
                                className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur transition hover:bg-white/20 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-sm"
                            >
                                About Our Arena
                            </Link>
                        </div>
                    </div>

                    {/* Search form */}
                    <div className="mt-6 w-full rounded-xl border border-white/15 bg-slate-950/80 p-2.5 shadow-2xl backdrop-blur-xl sm:mt-8 sm:rounded-2xl sm:p-4 lg:mt-10 lg:p-5">
                        <form
                            onSubmit={submit}
                            className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-[1fr_1fr_1fr_auto]"
                        >
                            {/* Sport */}
                            <select
                                required
                                value={form.sport}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        sport: e.target.value,
                                    })
                                }
                                className="min-w-0 rounded-lg bg-white px-2.5 py-3 text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-lime-400 sm:rounded-xl sm:px-4 sm:text-sm"
                            >
                                <option value="">Select Sport</option>

                                {availableSports.map((sport) => (
                                    <option key={sport.id} value={sport.id}>
                                        {sport.name}
                                    </option>
                                ))}
                            </select>

                            {/* Date */}
                            <input
                                required
                                type="date"
                                min={new Date().toISOString().slice(0, 10)}
                                value={form.date}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        date: e.target.value,
                                    })
                                }
                                className="min-w-0 rounded-lg bg-white px-2.5 py-3 text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-lime-400 sm:rounded-xl sm:px-4 sm:text-sm"
                            />

                            {/* Location */}
                            <div className="col-span-2 flex min-h-10 min-w-0 items-center rounded-lg bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 sm:rounded-xl sm:px-4 sm:text-sm lg:col-span-1">
                                <span className="truncate">{company.address}</span>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="col-span-2 rounded-lg bg-lime-400 px-4 py-3 text-xs font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-300 sm:rounded-xl sm:text-sm lg:col-span-1"
                            >
                                Find Slot
                            </button>
                        </form>
                    </div>
                </div>
            </section>


            {/* =========================================================
                SPORTS
            ========================================================= */}

            <section className="bg-slate-50 px-2 py-10 sm:px-5 sm:py-14 lg:px-6">
                <div className="mx-auto max-w-[1400px]">
                    <SectionTitle
                        eyebrow="Sports at our company"
                        title="Choose your game."
                    />

                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                        {availableSports.map((sport) => (
                            <SportsCard
                                key={sport.id}
                                sport={sport}
                                count={turfs.filter((turf) =>
                                    turf.sports?.includes(sport.id)
                                ).length}
                            />
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================
                ALL COMPANY TURFS
            ========================================================= */}

            <section className="px-2 py-10 sm:px-5 sm:py-14 lg:px-6">
                <div className="mx-auto max-w-[1400px]">
                    <SectionTitle
                        eyebrow="Our facilities"
                        title="Choose your playing space."
                    />

                    {turfs.length === 0 ? (
                        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-4 py-10 text-center sm:px-5 sm:py-12">
                            <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                                No facilities available
                            </h3>

                            <p className="mt-2 text-sm text-slate-500 sm:text-base">
                                Add a facility from the admin panel.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                            {turfs.map((turf) => (
                                <TurfCard
                                    key={turf.id}
                                    turf={turf}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>


            {/* =========================================================
                WHY CHOOSE US
            ========================================================= */}

            <section className="relative overflow-hidden bg-slate-950 px-3 py-10 text-white sm:px-5 sm:py-12 lg:px-6 lg:py-14">

                {/* SECTION ANIMATED BORDER */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 rounded-none border-y border-transparent bg-[linear-gradient(90deg,transparent,#a3e635,#facc15,#84cc16,transparent)] bg-[length:200%_100%] opacity-70 animate-[borderFlow_6s_linear_infinite]" />
                </div>

                {/* BACKGROUND GLOW */}
                <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-lime-400/10 blur-[100px]" />
                <div className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-yellow-400/10 blur-[100px]" />

                <div className="relative mx-auto max-w-[1400px]">

                    <SectionTitle
                        dark
                        eyebrow="Why choose us"
                        title="A focused sports experience."
                    />

                    {/* RESPONSIVE GRID */}
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">

                        {[
                            "Easy Online Booking",
                            "Clear Slot Availability",
                            "Quality Playing Surface",
                            "Professional Floodlights",
                            "Player Facilities",
                            "Direct WhatsApp Support",
                        ].map((item, index) => (

                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="group relative rounded-2xl p-[1px] sm:rounded-3xl"
                            >

                                {/* ANIMATED CARD BORDER */}
                                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                                    <div className="absolute inset-[-100%] animate-[borderSpin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#a3e635_60deg,#facc15_120deg,transparent_180deg,#84cc16_240deg,#facc15_300deg,transparent_360deg)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>

                                {/* CARD CONTENT */}
                                <div className="relative h-full min-h-[175px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-3 transition-all duration-300 group-hover:bg-slate-900 sm:min-h-[210px] sm:rounded-3xl sm:p-5 lg:p-6">

                                    {/* HOVER GLOW */}
                                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-lime-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* CARD NUMBER */}
                                    <span className="relative text-xs font-black tracking-widest text-lime-300 sm:text-sm">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {/* TITLE */}
                                    <h3 className="relative mt-3 break-words font-display text-sm font-bold leading-5 text-white sm:mt-5 sm:text-lg sm:leading-7 lg:text-xl">
                                        {item}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className="relative mt-2 text-xs leading-5 text-slate-400 sm:mt-3 sm:text-sm sm:leading-6">
                                        Designed around the needs of players booking{" "}
                                        {company.name}.
                                    </p>

                                </div>
                            </motion.div>

                        ))}

                    </div>
                </div>

                {/* BORDER ANIMATIONS */}
                <style>{`
    @keyframes borderSpin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    @keyframes borderFlow {
      0% {
        background-position: 0% 50%;
      }

      100% {
        background-position: 200% 50%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .animate-\\[borderSpin_6s_linear_infinite\\],
      .animate-\\[borderFlow_6s_linear_infinite\\] {
        animation: none !important;
      }
    }
  `}</style>

            </section>


            {/* =========================================================
                CTA
            ========================================================= */}
            <section className="px-3 py-10 sm:px-5 sm:py-12 lg:px-6">

                <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-lime-400 via-yellow-300 to-orange-400 p-6 text-slate-950 sm:rounded-[2rem] sm:p-10">

                    <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">

                        <div>

                            <p className="text-[11px] font-black uppercase tracking-[.2em]">
                                Ready to play?
                            </p>

                            <h2 className="mt-1.5 font-display text-3xl font-bold sm:text-4xl">
                                Book your slot at {company.name}.
                            </h2>

                        </div>

                        <Link
                            to="/explore"
                            className="rounded-xl bg-slate-950 px-5 py-3 font-extrabold text-white transition hover:-translate-y-1 sm:px-6 sm:py-3.5"
                        >
                            Book Your Turf Today
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}


/* =========================================================
   STAT COMPONENT
========================================================= */

function Stat({ n, t }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:rounded-2xl sm:p-5">

            <p className="font-display text-2xl font-bold text-lime-300 sm:text-3xl">
                {n}
            </p>

            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                {t}
            </p>

        </div>
    );
}


/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
    eyebrow,
    title,
    dark = false,
}) {
    return (
        <div className="mb-7 sm:mb-9">

            <p
                className={`text-[10px] font-black uppercase tracking-[.2em] sm:text-xs ${dark
                        ? "text-lime-300"
                        : "text-lime-700"
                    }`}
            >
                {eyebrow}
            </p>

            <h2
                className={`mt-1.5 font-display text-3xl font-bold sm:text-4xl ${dark
                        ? "text-white"
                        : "text-slate-950"
                    }`}
            >
                {title}
            </h2>

        </div>
    );
}
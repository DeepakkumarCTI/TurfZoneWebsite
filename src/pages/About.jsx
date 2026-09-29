
import { Link } from "react-router-dom";
import { company } from "../data/company";

const values = [
    {
        number: "01",
        title: "Quality Playing Surfaces",
        description:
            "Enjoy a comfortable playing experience with facilities designed for your favourite sports.",
        accent: "from-lime-400 to-emerald-500",
        badge: "bg-lime-400/15 text-lime-300",
    },
    {
        number: "02",
        title: "Easy Online Booking",
        description:
            "Explore available facilities, select your preferred date and make your booking with ease.",
        accent: "from-sky-400 to-blue-500",
        badge: "bg-sky-400/15 text-sky-300",
    },
    {
        number: "03",
        title: "Player-Friendly Facilities",
        description:
            "Access useful amenities that help make your game day comfortable and convenient.",
        accent: "from-orange-400 to-amber-500",
        badge: "bg-orange-400/15 text-orange-300",
    },
    {
        number: "04",
        title: "More Time to Play",
        description:
            "Spend less time arranging your game and more time enjoying it with your team.",
        accent: "from-fuchsia-400 to-purple-500",
        badge: "bg-fuchsia-400/15 text-fuchsia-300",
    },
];

export default function About() {
    return (
        <main className="overflow-hidden bg-slate-50 pt-[76px] sm:pt-[82px]">
            

            {/* =====================================================
    RESPONSIVE HERO SECTION
===================================================== */}
            <section className="relative isolate -mt-[76px] overflow-hidden bg-slate-950 px-4 pb-10 pt-[108px] text-white sm:-mt-[82px] sm:px-6 sm:pb-14 sm:pt-[130px] lg:px-20 lg:pb-16 lg:pt-[130px]">
                {/* Background effects */}
                <div className="pointer-events-none absolute -right-20 -top-10 h-56 w-56 rounded-full bg-lime-400/15 blur-3xl sm:h-96 sm:w-96" />

                <div className="pointer-events-none absolute -bottom-20 left-[10%] h-56 w-56 rounded-full bg-blue-500/15 blur-3xl sm:bottom-0 sm:left-[20%] sm:h-96 sm:w-96" />

                {/* Background grid */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(163,230,53,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(163,230,53,.15) 1px,transparent 1px)",
                        backgroundSize: "55px 55px",
                    }}
                />

                <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">

                    {/* About Content */}
                    <div className="relative z-10 min-w-0">

                        {/* Label */}
                        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-2">
                            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-lime-300" />

                            <p className="text-[10px] font-black uppercase tracking-[.15em] text-lime-300 sm:text-xs sm:tracking-[.2em]">
                                About {company.shortName}
                            </p>
                        </div>

                        {/* Heading */}
                        <h1 className="mt-5 max-w-3xl break-words font-display text-[clamp(2rem,8vw,3.5rem)] font-black leading-[1.08] tracking-tight sm:mt-6 sm:text-5xl sm:leading-tight lg:text-6xl">
                            One company.
                            <br />

                            <span className="bg-gradient-to-r from-lime-300 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                                One arena.
                            </span>

                            <br />

                            More game time.
                        </h1>

                        {/* Description */}
                        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
                            {company.description}
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-col gap-3 min-[380px]:flex-row sm:mt-7">

                            <Link
                                to="/explore"
                                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-300 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-lime-400/10 transition duration-300 hover:-translate-y-1 hover:shadow-lime-400/25 min-[380px]:w-auto sm:px-6"
                            >
                                Explore Our Turf

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur transition duration-300 hover:border-sky-300/40 hover:bg-sky-400/10 min-[380px]:w-auto sm:px-6"
                            >
                                Contact Us
                            </Link>

                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative mx-auto mt-2 w-full min-w-0 max-w-xl lg:mt-0">

                        {/* Image Glow */}
                        <div className="absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-lime-400/30 via-sky-400/20 to-orange-400/30 blur-xl sm:-inset-3 sm:rounded-[2rem]" />

                        {/* Image Card */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900 p-1.5 shadow-2xl sm:rounded-3xl sm:p-3">

                            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">

                                <img
                                    src="/images/about-hero.jpg"
                                    alt="TurfZone sports facility"
                                    className="h-52 w-full object-cover object-center sm:h-64 lg:h-[300px]"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

                                {/* Image Text */}
                                <div className="absolute inset-x-0 bottom-0 p-4 pt-10 sm:p-5 sm:pt-16">

                                    <p className="text-[9px] font-black uppercase tracking-[.18em] text-lime-300 sm:text-xs sm:tracking-[.2em]">
                                        Your game starts here
                                    </p>

                                    <p className="mt-1 font-display text-lg font-bold text-white sm:text-2xl">
                                        Play. Book. Enjoy.
                                    </p>

                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 left-3 z-10 rounded-xl border border-lime-300/20 bg-slate-900/95 px-3 py-2 shadow-xl sm:-bottom-5 sm:-left-4 sm:px-4 sm:py-3">

                            <p className="text-[10px] font-semibold text-slate-400 sm:text-xs">
                                Made for players
                            </p>

                            <p className="text-xs font-black text-lime-300 sm:text-sm">
                                Every game matters
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            {/* =====================================================
                INTRO STATS
            ===================================================== */}
            

            {/* =====================================================
                MISSION AND VISION
            ===================================================== */}

            <section className="px-3 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        eyebrow="What drives us"
                        title="Our purpose, our direction."
                        description="We want to make it easier for players to find a place, bring their team together and enjoy the game."
                    />

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6">
                        {/* Mission */}
                        <article className="rainbow-border group min-w-0 rounded-xl p-[1.5px] sm:rounded-3xl">
                            <div className="h-full overflow-hidden rounded-[calc(0.75rem-1.5px)] bg-white shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lime-900/10 sm:rounded-[calc(1.5rem-1.5px)]">
                                <div className="relative h-28 overflow-hidden xs:h-36 sm:h-60">
                                    <img
                                        src="/images/about-mission.jpg"
                                        alt="Our mission"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                                    <span className="absolute bottom-2 left-2 rounded-full bg-lime-400 px-2 py-1 text-[8px] font-black uppercase tracking-wider text-slate-950 sm:bottom-5 sm:left-5 sm:px-3 sm:py-1.5 sm:text-xs">
                                        Our Mission
                                    </span>
                                </div>

                                <div className="p-3 sm:p-7">
                                    <h2 className="font-display text-sm font-bold leading-snug text-slate-950 sm:text-2xl">
                                        Making every booking easier
                                    </h2>

                                    <p className="mt-2 text-[11px] leading-4 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
                                        Give local players a simple and professional way to
                                        reserve sports playing time without unnecessary calls
                                        or complicated booking steps.
                                    </p>

                                    <div className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-lime-400 to-emerald-500 transition-all duration-500 group-hover:w-20 sm:mt-5 sm:w-16 sm:group-hover:w-28" />
                                </div>
                            </div>
                        </article>

                        {/* Vision */}
                        <article className="rainbow-border group min-w-0 rounded-xl p-[1.5px] sm:rounded-3xl">
                            <div className="h-full overflow-hidden rounded-[calc(0.75rem-1.5px)] bg-white shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-900/10 sm:rounded-[calc(1.5rem-1.5px)]">
                                <div className="relative h-28 overflow-hidden xs:h-36 sm:h-60">
                                    <img
                                        src="/images/about-vision.jpg"
                                        alt="Our vision"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                                    <span className="absolute bottom-2 left-2 rounded-full bg-sky-300 px-2 py-1 text-[8px] font-black uppercase tracking-wider text-slate-950 sm:bottom-5 sm:left-5 sm:px-3 sm:py-1.5 sm:text-xs">
                                        Our Vision
                                    </span>
                                </div>

                                <div className="p-3 sm:p-7">
                                    <h2 className="font-display text-sm font-bold leading-snug text-slate-950 sm:text-2xl">
                                        A trusted home for every game
                                    </h2>

                                    <p className="mt-2 text-[11px] leading-4 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
                                        Build a trusted single-location sports destination
                                        where teams, friends and regular players can return
                                        for every game.
                                    </p>

                                    <div className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500 group-hover:w-20 sm:mt-5 sm:w-16 sm:group-hover:w-28" />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Continuous rainbow border animation */}
                <style>{`
        .rainbow-border {
            background: conic-gradient(
                from var(--rainbow-angle, 0deg),
                #ef4444,
                #f97316,
                #facc15,
                #22c55e,
                #06b6d4,
                #3b82f6,
                #8b5cf6,
                #ec4899,
                #ef4444
            );
            animation: rainbowBorderSpin 5s linear infinite;
        }

        @property --rainbow-angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }

        @keyframes rainbowBorderSpin {
            from {
                --rainbow-angle: 0deg;
            }
            to {
                --rainbow-angle: 360deg;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .rainbow-border {
                animation: none;
            }
        }
    `}</style>
            </section>

            <section className="relative z-10 -mt-1 bg-slate-950 px-3 pb-8 sm:px-6 sm:pb-12 lg:px-8 pt-10">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                    <StatCard
                        number="01"
                        title="Main Facility"
                        color="text-lime-300"
                        border="border-lime-400/20"
                    />

                    <StatCard
                        number="5+"
                        title="Sports Options"
                        color="text-sky-300"
                        border="border-sky-400/20"
                    />

                    <StatCard
                        number="5000+"
                        title="Demo Player Visits"
                        color="text-orange-300"
                        border="border-orange-400/20"
                    />

                    <StatCard
                        number="06–23"
                        title="Daily Open Hours"
                        color="text-fuchsia-300"
                        border="border-fuchsia-400/20"
                    />
                </div>
            </section>

            {/* =====================================================
                WHY CHOOSE US
            ===================================================== */}
            <section className="relative overflow-hidden bg-slate-950 px-3 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">
                    <SectionHeading
                        dark
                        eyebrow="The TurfZone experience"
                        title="More than just a place to play."
                        description="We focus on the little things that help make your game day smoother and more enjoyable."
                    />

                    <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
                        {values.map((item) => (
                            <article
                                key={item.number}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] sm:rounded-3xl sm:p-6"
                            >
                                <div className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-xs font-black sm:mb-6 sm:h-11 sm:w-11 sm:text-sm ${item.badge}`}>
                                    {item.number}
                                </div>

                                <h3 className="font-display text-base font-bold leading-snug text-white sm:text-xl">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-slate-400 sm:mt-3 sm:text-sm sm:leading-6">
                                    {item.description}
                                </p>

                                <div className={`mt-5 h-1 w-10 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-20 sm:mt-6 ${item.accent}`} />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                CUSTOMER BENEFITS
            ===================================================== */}
            <section className="px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[.2em] text-orange-600 sm:text-xs">
                            Built around your game
                        </p>

                        <h2 className="mt-3 font-display text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                            Your time on the field should be about playing.
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                            TurfZone helps you discover available sports,
                            choose a date and duration, check slot availability
                            and manage your booking from one place.
                        </p>

                        <Link
                            to="/explore"
                            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400 hover:text-slate-950 sm:mt-8 sm:px-6 sm:py-3.5"
                        >
                            Find Your Slot
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <BenefitCard
                            title="Choose Your Sport"
                            text="Explore the sports available at our facility."
                            color="bg-lime-400"
                            textColor="text-slate-950"
                        />

                        <BenefitCard
                            title="Pick Your Date"
                            text="Select a suitable day for your game."
                            color="bg-sky-500"
                            textColor="text-white"
                        />

                        <BenefitCard
                            title="Check Availability"
                            text="Review the available booking slots."
                            color="bg-orange-400"
                            textColor="text-slate-950"
                        />

                        <BenefitCard
                            title="Enjoy Your Game"
                            text="Bring your team and make it game time."
                            color="bg-purple-600"
                            textColor="text-white"
                        />
                    </div>
                </div>
            </section>

            {/* =====================================================
                CALL TO ACTION
            ===================================================== */}
            <section className="px-3 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-lime-400 via-yellow-300 to-orange-400 px-5 py-8 sm:rounded-3xl sm:px-10 sm:py-12 lg:px-14">
                    <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border-[25px] border-white/15 sm:h-64 sm:w-64" />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[.2em] text-slate-800 sm:text-xs">
                                Ready for your next game?
                            </p>

                            <h2 className="mt-2 font-display text-2xl font-black text-slate-950 sm:text-4xl">
                                Your turf is waiting.
                            </h2>

                            <p className="mt-2 max-w-xl text-xs leading-5 text-slate-800 sm:text-sm sm:leading-6">
                                Explore our facility and find a slot that works
                                for your team.
                            </p>
                        </div>

                        <Link
                            to="/explore"
                            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950 sm:px-6 sm:py-3.5"
                        >
                            Book at Our Arena
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

/* =============================================================
   REUSABLE COMPONENTS
============================================================= */

function SectionHeading({ eyebrow, title, description, dark = false }) {
    return (
        <div className="max-w-3xl">
            <p className={`text-[10px] font-black uppercase tracking-[.2em] sm:text-xs ${dark ? "text-lime-300" : "text-lime-700"}`}>
                {eyebrow}
            </p>

            <h2 className={`mt-3 font-display text-2xl font-black leading-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>
                {title}
            </h2>

            <p className={`mt-3 text-sm leading-6 sm:text-base sm:leading-7 ${dark ? "text-slate-400" : "text-slate-600"}`}>
                {description}
            </p>
        </div>
    );
}

function StatCard({ number, title, color, border }) {
    return (
        <div className={`rounded-xl border bg-white/[0.04] p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:rounded-2xl sm:p-5 ${border}`}>
            <p className={`font-display text-xl font-black sm:text-3xl ${color}`}>
                {number}
            </p>

            <p className="mt-1 text-[10px] font-semibold text-slate-400 sm:mt-2 sm:text-sm">
                {title}
            </p>
        </div>
    );
}

function BenefitCard({ title, text, color, textColor }) {
    return (
        <article className={`group rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-6 ${color} ${textColor}`}>
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-current/20 bg-white/20 text-sm font-black sm:mb-6 sm:h-10 sm:w-10">
                ✓
            </div>

            <h3 className="font-display text-sm font-black sm:text-lg">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-5 opacity-80 sm:text-sm sm:leading-6">
                {text}
            </p>
        </article>
    );
}
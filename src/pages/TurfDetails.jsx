
import { Link, useParams } from "react-router-dom";
import { useApp } from "../context/AppContext";
import BookingForm from "../components/BookingForm";
import { openWhatsApp } from "../utils/whatsapp";

export default function TurfDetails() {
    const { id } = useParams();
    const { turfs } = useApp();

    const turf = turfs.find((t) => String(t.id) === String(id));

    // Turf not found
    if (!turf) {
        return (
            <main className="min-h-screen bg-slate-50 px-4 pb-20 pt-32 text-center">
                <h1 className="font-display text-3xl font-bold text-slate-950">
                    Turf not found
                </h1>

                <Link
                    to="/explore"
                    className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-lime-500 hover:text-slate-950"
                >
                    Back to Explore
                </Link>
            </main>
        );
    }

    const base = turf.pricing;

    // Facilities
    const facilities = [
        ["floodlights", "Floodlights"],
        ["parking", "Parking"],
        ["changing-room", "Changing Rooms"],
        ["washroom", "Washrooms"],
        ["water", "Drinking Water"],
        ["seating", "Seating Area"],
        ["equipment", "Equipment Rental"],
        ["first-aid", "First Aid"],
        ["cafeteria", "Cafeteria"],
        ["shower", "Shower Facilities"],
    ];

    return (
        <main className="turf-details-page min-h-screen bg-slate-50 pb-12 pt-20">
            {/* WIDER PAGE CONTAINER */}
            <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6 2xl:px-8">

                {/* HERO IMAGE */}
                <div className="turf-details-hero relative overflow-hidden rounded-2xl bg-slate-950 shadow-xl sm:rounded-[2rem]">
                    <img
                        src={turf.image}
                        alt={turf.name}
                        className="h-[240px] w-full object-cover opacity-90 sm:h-[350px] lg:h-[420px]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                        <span className="inline-flex rounded-full border border-lime-300/30 bg-lime-400 px-3 py-1.5 text-xs font-black text-slate-950 shadow-lg">
                            TurfZone
                        </span>
                    </div>
                </div>

                {/* MAIN LAYOUT - EQUAL 50 / 50 COLUMNS */}
                <div className="turf-details-layout mt-5 grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-5 xl:gap-6">

                    {/* =========================================
              LEFT SECTION - TURF DETAILS
          ========================================== */}
                    <div className="turf-details-info min-w-0 w-full space-y-5">

                        {/* TURF SUMMARY */}
                        <div className="turf-details-summary rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                                <div className="min-w-0">
                                    <p className="text-sm font-black uppercase tracking-[0.12em] text-lime-700">
                                        {turf.location}
                                    </p>

                                    <h1 className="mt-2 break-words font-display text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                                        {turf.name}
                                    </h1>

                                    <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-500">
                                        <span className="mt-1 shrink-0">📍</span>
                                        <span>{turf.address}</span>
                                    </p>
                                </div>

                                {/* RATING */}
                                <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 sm:min-w-[110px] sm:flex-col sm:gap-1 sm:text-center">
                                    <span className="text-2xl">★</span>

                                    <div>
                                        <b className="font-display text-2xl font-black text-slate-950">
                                            {turf.rating}
                                        </b>

                                        <p className="text-xs text-slate-500">
                                            {turf.reviews} reviews
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* DESCRIPTION */}
                            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                                {turf.description}
                            </p>

                            {/* SPORTS */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {turf.sports.map((sport) => (
                                    <span
                                        key={sport}
                                        className="rounded-full bg-slate-950 px-3.5 py-2 text-xs font-black capitalize text-white transition hover:bg-lime-500 hover:text-slate-950"
                                    >
                                        {sport.replace("-", " ")}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* FACILITIES */}
                        <section className="turf-details-facilities rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">

                            <div>
                                <p className="text-xs font-black uppercase tracking-[0.18em] text-lime-700">
                                    Amenities
                                </p>

                                <h2 className="mt-1 font-display text-2xl font-black text-slate-950 sm:text-3xl">
                                    Facilities
                                </h2>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 xl:grid-cols-3">
                                {facilities
                                    .filter(([facilityId]) =>
                                        turf.facilities.includes(facilityId)
                                    )
                                    .map(([facilityId, name]) => (
                                        <div
                                            key={facilityId}
                                            className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-300 hover:bg-lime-50"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                                                <img
                                                    src={`/images/facilities/${facilityId}.png`}
                                                    onError={(event) => {
                                                        event.currentTarget.style.display = "none";
                                                    }}
                                                    className="h-8 w-8 object-contain"
                                                    alt={name}
                                                />
                                            </div>

                                            <span className="text-sm font-bold capitalize text-slate-700">
                                                {name}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </section>

                        {/* PRICING */}
                        <section className="turf-details-pricing rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">

                            <div>
                                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-600">
                                    Flexible Rates
                                </p>

                                <h2 className="mt-1 font-display text-2xl font-black text-slate-950 sm:text-3xl">
                                    Pricing
                                </h2>
                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 2xl:grid-cols-5">
                                {[
                                    ["Weekday", base.weekday],
                                    ["Weekend", base.weekend],
                                    ["Morning", base.morning],
                                    ["Evening", base.evening],
                                    ["Peak", base.peak],
                                ].map(([name, value]) => (
                                    <div
                                        key={name}
                                        className="rounded-2xl border border-slate-100 bg-slate-50 p-3 transition hover:border-lime-200 hover:bg-lime-50 sm:p-4"
                                    >
                                        <p className="text-xs font-semibold text-slate-500">
                                            {name}
                                        </p>

                                        <p className="mt-1 font-display text-xl font-black text-slate-950">
                                            ₹{value}
                                        </p>

                                        <p className="mt-0.5 text-[10px] font-semibold text-slate-400">
                                            per hour
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* WHATSAPP ENQUIRY */}
                        <section className="turf-details-enquiry overflow-hidden rounded-3xl bg-slate-950 p-4 text-white shadow-xl sm:p-6">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div className="min-w-0">
                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-lime-400">
                                        Quick Enquiry
                                    </p>

                                    <h2 className="mt-1 font-display text-2xl font-black sm:text-3xl">
                                        Need a quick enquiry?
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        Call {turf.phone} or send your booking details over
                                        WhatsApp.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        openWhatsApp(
                                            `Hello TurfZone, I am interested in ${turf.name} in ${turf.location}.`
                                        )
                                    }
                                    className="shrink-0 rounded-2xl bg-emerald-500 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400"
                                >
                                    Book via WhatsApp
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* =========================================
              RIGHT SECTION - BOOKING PANEL
          ========================================== */}
                    <aside className="turf-details-booking min-w-0 w-full lg:sticky lg:top-24 lg:self-start">

                        <div className="relative">

                            {/* OUTER ANIMATED GLOW */}
                            <div className="pointer-events-none absolute -inset-[3px] animate-[bookingGlow_5s_ease-in-out_infinite] rounded-[30px] bg-[linear-gradient(90deg,#a3e635,#facc15,#84cc16,#facc15,#a3e635)] opacity-60 blur-[5px]" />

                            {/* ANIMATED BORDER */}
                            <div className="pointer-events-none absolute -inset-[2px] overflow-hidden rounded-[29px]">
                                <div className="absolute inset-[-100%] animate-[bookingSpin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#a3e635_60deg,#facc15_120deg,transparent_180deg,#84cc16_240deg,#facc15_300deg,transparent_360deg)]" />
                            </div>

                            {/* BOOKING WRAPPER */}
                            <div className="relative rounded-[28px] bg-slate-950 p-[2px]">

                                <div className="turf-details-booking-inner rounded-[26px] bg-white p-3 sm:p-4 lg:p-5">

                                    {/* BOOKING HEADER */}
                                    <div className="mb-4 flex items-start gap-3">

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lime-100 text-lime-700">
                                            <span className="text-lg">⚡</span>
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-700">
                                                Reserve Your Slot
                                            </p>

                                            <h2 className="mt-1 break-words font-display text-xl font-black text-slate-950 sm:text-2xl">
                                                Book at {turf.name}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="mb-4 h-px bg-slate-100" />

                                    {/* BOOKING FORM */}
                                    <BookingForm turf={turf} />
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* ANIMATIONS */}
            <style>{`
        @keyframes bookingSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bookingGlow {
          0%, 100% {
            opacity: 0.45;
          }

          50% {
            opacity: 0.8;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[bookingSpin_5s_linear_infinite\\],
          .animate-\\[bookingGlow_5s_ease-in-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
        </main>
    );
}
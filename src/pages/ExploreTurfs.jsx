
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useApp } from "../context/AppContext";
import TurfCard from "../components/TurfCard";
import { sports } from "../data/sports";
import { company } from "../data/company";

export default function ExploreTurfs() {
    const { turfs } = useApp();
    const [searchParams] = useSearchParams();

    const [sport, setSport] = useState(
        searchParams.get("sport") || ""
    );

    const [date, setDate] = useState(
        searchParams.get("date") || ""
    );

    const [max, setMax] = useState(2000);

    /*
     * Get sports from all facilities.
     */
    const availableSportIds = [
        ...new Set(
            turfs.flatMap((turf) => turf.sports || [])
        ),
    ];

    const availableSports = sports.filter((item) =>
        availableSportIds.includes(item.id)
    );

    /*
     * Filter every turf.
     */
    const filtered = useMemo(() => {
        return turfs.filter((turf) => {
            const matchesSport =
                !sport || turf.sports?.includes(sport);

            const matchesPrice =
                Number(turf.price || 0) <= Number(max);

            const isEnabled =
                turf.enabled !== false;

            return matchesSport && matchesPrice && isEnabled;
        });
    }, [turfs, sport, max]);

    const clear = () => {
        setSport("");
        setDate("");
        setMax(2000);
    };

    return (
        <main className="min-h-screen bg-slate-50 px-2 pb-10 pt-20 sm:px-5 sm:pb-16 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-28">
            <div className="mx-auto max-w-[1400px]">

                {/* HEADER */}
                <div className="mb-5 rounded-2xl bg-slate-950 p-4 text-white sm:mb-7 sm:rounded-3xl sm:p-7 lg:mb-9 lg:rounded-[2rem] lg:p-10">
                    <p className="text-[9px] font-black uppercase tracking-[.2em] text-lime-300 sm:text-xs">
                        Our Facility
                    </p>

                    <h1 className="mt-1.5 font-display text-xl font-bold leading-tight sm:mt-2 sm:text-3xl lg:text-5xl">
                        Book {company.name}
                    </h1>

                    <p className="mt-2 max-w-2xl text-[11px] leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-6 lg:text-base lg:leading-7">
                        Choose from the playing spaces available at our company,
                        select your sport and find your preferred booking slot.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2.5">
                        <span className="max-w-full break-words rounded-full bg-white/10 px-2.5 py-1.5 text-[9px] font-semibold sm:px-3.5 sm:py-2 sm:text-xs lg:text-sm">
                            {company.address}
                        </span>

                        <span className="rounded-full bg-white/10 px-2.5 py-1.5 text-[9px] font-semibold sm:px-3.5 sm:py-2 sm:text-xs lg:text-sm">
                            {company.hours}
                        </span>
                    </div>
                </div>

                {/* FILTERS */}
                <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm sm:mb-7 sm:gap-3 sm:rounded-3xl sm:p-4 md:grid-cols-4">

                    <select
                        value={sport}
                        onChange={(e) => setSport(e.target.value)}
                        className="min-w-0 rounded-lg bg-slate-100 px-2.5 py-2.5 text-[11px] outline-none focus:ring-2 focus:ring-lime-400 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                    >
                        <option value="">
                            All sports
                        </option>

                        {availableSports.map((item) => (
                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.name}
                            </option>
                        ))}
                    </select>

                    <input
                        type="date"
                        min={new Date().toISOString().slice(0, 10)}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="min-w-0 rounded-lg bg-slate-100 px-2.5 py-2.5 text-[11px] outline-none focus:ring-2 focus:ring-lime-400 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                    />

                    <label className="col-span-2 rounded-lg bg-slate-100 px-3 py-2.5 text-[11px] font-semibold text-slate-600 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm md:col-span-1">
                        <span className="flex items-center justify-between gap-2">
                            <span>Max price</span>
                            <span className="font-bold text-slate-900">
                                ₹{max}/hr
                            </span>
                        </span>

                        <input
                            type="range"
                            min="400"
                            max="2000"
                            step="50"
                            value={max}
                            onChange={(e) =>
                                setMax(Number(e.target.value))
                            }
                            className="mt-2 w-full accent-lime-500"
                        />
                    </label>

                    <button
                        onClick={clear}
                        type="button"
                        className="col-span-2 rounded-lg border border-slate-200 px-3 py-2.5 text-[11px] font-bold text-slate-700 transition hover:bg-slate-50 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm md:col-span-1"
                    >
                        Clear Filters
                    </button>
                </div>

                {/* RESULT HEADER */}
                <div className="mb-3 flex items-end justify-between gap-2 sm:mb-5">
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-[.18em] text-lime-700 sm:text-xs sm:tracking-[.2em]">
                            Available facilities
                        </p>

                        <h2 className="mt-1 font-display text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
                            Our playing spaces
                        </h2>
                    </div>

                    <p className="shrink-0 text-[10px] font-semibold text-slate-500 sm:text-sm">
                        {filtered.length}{" "}
                        {filtered.length === 1
                            ? "facility"
                            : "facilities"}
                    </p>
                </div>

                {/* ALL TURFS */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-3">
                        {filtered.map((turf) => (
                            <TurfCard
                                key={turf.id}
                                turf={turf}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-3 py-10 text-center sm:rounded-3xl sm:px-6 sm:py-16 lg:py-20">
                        <h2 className="font-display text-lg font-bold sm:text-2xl">
                            No matching facility
                        </h2>

                        <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                            Try another sport or price range.
                        </p>

                        <button
                            onClick={clear}
                            className="mt-4 rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-lime-400 hover:text-slate-950 sm:mt-6 sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
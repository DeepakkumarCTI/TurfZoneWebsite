
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { cancelBooking } from "../utils/bookingUtils";

const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
};

const statusStyles = {
    Pending: "border-amber-200 bg-amber-50 text-amber-700",
    Confirmed: "border-emerald-200 bg-emerald-50 text-emerald-700",
    Cancelled: "border-rose-200 bg-rose-50 text-rose-700",
    Completed: "border-blue-200 bg-blue-50 text-blue-700",
};

export default function MyBookings() {
    const { bookings = [], refresh } = useApp();

    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("all");
    const [identity, setIdentity] = useState("");
    const [verified, setVerified] = useState(false);
    const [msg, setMsg] = useState("");

    const normalizedIdentity = identity.trim().toLowerCase();

    const matchingBookings = useMemo(() => {
        if (!verified || !normalizedIdentity) return [];

        return bookings.filter((booking) => {
            const email = String(booking.email || "").trim().toLowerCase();
            const phone = String(booking.phone || "").trim().toLowerCase();

            return email === normalizedIdentity || phone === normalizedIdentity;
        });
    }, [bookings, verified, normalizedIdentity]);

    const filtered = useMemo(() => {
        return matchingBookings.filter((booking) => {
            const bookingId = String(booking.id || "").toLowerCase();
            const matchesQuery = !query || bookingId.includes(query.toLowerCase());
            const matchesStatus = status === "all" || booking.status === status;

            return matchesQuery && matchesStatus;
        });
    }, [matchingBookings, query, status]);

    const stats = useMemo(() => {
        return {
            total: matchingBookings.length,
            confirmed: matchingBookings.filter(
                (booking) => booking.status === "Confirmed"
            ).length,
            pending: matchingBookings.filter(
                (booking) => booking.status === "Pending"
            ).length,
            completed: matchingBookings.filter(
                (booking) => booking.status === "Completed"
            ).length,
        };
    }, [matchingBookings]);

    const verify = (e) => {
        e.preventDefault();

        if (!identity.trim()) {
            setVerified(false);
            setMsg("Enter the email or phone number used for the booking.");
            return;
        }

        setVerified(true);
        setQuery("");
        setStatus("all");
        setMsg("Your matching bookings are shown below.");
    };

    const cancel = (id) => {
        if (
            window.confirm(
                "Cancel this booking? The selected slots will be released."
            )
        ) {
            cancelBooking(id);
            refresh();
            setMsg("Booking cancelled and slots released.");
        }
    };

    const resetSearch = () => {
        setIdentity("");
        setQuery("");
        setStatus("all");
        setVerified(false);
        setMsg("");
    };

    return (
        <main className="min-h-screen overflow-hidden bg-slate-50 pb-16">
            {/* Animated hero */}
            <section className="relative isolate overflow-hidden bg-slate-950 px-4 pb-10 pt-24 text-white sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-950 to-slate-950" />

                <motion.div
                    aria-hidden="true"
                    className="absolute -right-20 top-10 -z-10 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl sm:h-96 sm:w-96"
                    animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    aria-hidden="true"
                    className="absolute -bottom-20 left-1/4 -z-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80"
                    animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <motion.div
                        variants={pageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants}>
                            <span className="inline-flex rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-lime-300 sm:text-xs">
                                Customer dashboard
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="mt-5 max-w-3xl font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
                        >
                            Your games.
                            <span className="block bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                                Your bookings.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7"
                        >
                            Find your reservations, check booking details, and manage
                            upcoming matches in one place. Enter the email or phone
                            number used when you booked.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="mt-6 flex flex-wrap gap-3"
                        >
                            <a
                                href="#booking-search"
                                className="rounded-xl bg-lime-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-300"
                            >
                                Find My Bookings
                            </a>

                            <Link
                                to="/turfs"
                                className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                            >
                                Explore Turfs
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Decorative match card */}
                    <motion.div
                        initial={{ opacity: 0, x: 35, scale: 0.96 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                        className="relative mx-auto w-full max-w-lg"
                    >
                        <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-lime-400/30 via-cyan-400/20 to-blue-500/30 blur-xl" />

                        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur sm:p-7">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-300">
                                        Match day
                                    </p>
                                    <h2 className="mt-2 font-display text-2xl font-black sm:text-3xl">
                                        Ready to play?
                                    </h2>
                                    <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                                        Your next game is just a booking away.
                                    </p>
                                </div>

                                <motion.div
                                    aria-hidden="true"
                                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-lime-300/20 bg-lime-300/10"
                                    animate={{ rotate: [0, 8, -8, 0] }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <div className="h-7 w-7 rounded-full border-2 border-lime-300/80 bg-gradient-to-br from-lime-300/30 to-transparent" />
                                </motion.div>
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-2">
                                {[
                                    ["01", "Find a turf"],
                                    ["02", "Book a slot"],
                                    ["03", "Play together"],
                                ].map(([number, label], index) => (
                                    <motion.div
                                        key={number}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.35 + index * 0.12 }}
                                        className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                                    >
                                        <p className="text-xs font-black text-lime-300">
                                            {number}
                                        </p>
                                        <p className="mt-2 text-[11px] font-semibold leading-4 text-slate-300 sm:text-xs">
                                            {label}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                                <motion.div
                                    className="h-full rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        duration: 1.3,
                                        delay: 0.4,
                                        ease: "easeOut",
                                    }}
                                />
                            </div>

                            <p className="mt-3 text-xs leading-5 text-slate-500">
                                Keep your booking details handy and get ready for game time.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main booking content */}
            <section className="px-3 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Search heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="mb-5"
                    >
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-700">
                            Booking lookup
                        </p>

                        <h2 className="mt-2 font-display text-2xl font-black text-slate-950 sm:text-3xl">
                            Find your reservation
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                            Use the email address or phone number you provided when making
                            your booking to view your reservations.
                        </p>
                    </motion.div>

                    {/* Search card */}
                    <motion.div
                        id="booking-search"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6"
                    >
                        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400" />

                        <form
                            onSubmit={verify}
                            className="flex flex-col gap-3 sm:flex-row"
                        >
                            <label className="min-w-0 flex-1">
                                <span className="mb-2 block text-xs font-bold text-slate-700 sm:text-sm">
                                    Email address or phone number
                                </span>

                                <input
                                    type="text"
                                    value={identity}
                                    onChange={(e) => setIdentity(e.target.value)}
                                    placeholder="Enter your email or phone"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-100"
                                />
                            </label>

                            <div className="flex items-end gap-2">
                                <button
                                    type="submit"
                                    className="min-h-[46px] flex-1 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-lime-500 hover:text-slate-950 sm:flex-none"
                                >
                                    View Bookings
                                </button>

                                {verified && (
                                    <button
                                        type="button"
                                        onClick={resetSearch}
                                        className="min-h-[46px] rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-100"
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>
                        </form>

                        {msg && (
                            <motion.p
                                key={msg}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                role="status"
                                className="mt-3 text-xs font-semibold leading-5 text-slate-500 sm:text-sm"
                            >
                                {msg}
                            </motion.p>
                        )}
                    </motion.div>

                    {/* Booking summary and filters */}
                    {verified && (
                        <motion.div
                            variants={pageVariants}
                            initial="hidden"
                            animate="visible"
                            className="mt-6"
                        >
                            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                                <SummaryCard
                                    label="Total bookings"
                                    value={stats.total}
                                    detail="Matching records"
                                    accent="from-slate-900 to-slate-700"
                                />
                                <SummaryCard
                                    label="Confirmed"
                                    value={stats.confirmed}
                                    detail="Ready to play"
                                    accent="from-emerald-600 to-teal-500"
                                />
                                <SummaryCard
                                    label="Pending"
                                    value={stats.pending}
                                    detail="Awaiting confirmation"
                                    accent="from-amber-500 to-orange-400"
                                />
                                <SummaryCard
                                    label="Completed"
                                    value={stats.completed}
                                    detail="Matches played"
                                    accent="from-blue-600 to-cyan-500"
                                />
                            </div>

                            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-5">
                                <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-slate-950">
                                            Your reservations
                                        </h3>
                                        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                            Search by booking ID or filter by status.
                                        </p>
                                    </div>

                                    <span className="w-fit rounded-full bg-lime-100 px-3 py-1.5 text-xs font-black text-lime-800">
                                        {filtered.length} booking(s)
                                    </span>
                                </div>

                                <div className="grid gap-3 md:grid-cols-3">
                                    <input
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Search booking ID"
                                        className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-100"
                                    />

                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-100"
                                    >
                                        <option value="all">All statuses</option>
                                        {[
                                            "Pending",
                                            "Confirmed",
                                            "Cancelled",
                                            "Completed",
                                        ].map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>

                                    <div className="flex items-center rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500">
                                        Showing {filtered.length} of {matchingBookings.length}
                                    </div>
                                </div>
                            </div>

                            {/* Booking cards */}
                            <div className="mt-5 space-y-4">
                                {filtered.length > 0 ? (
                                    filtered.map((booking, index) => (
                                        <motion.article
                                            key={booking.id}
                                            variants={itemVariants}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.06,
                                            }}
                                            whileHover={{ y: -3 }}
                                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg sm:rounded-3xl"
                                        >
                                            <div className="h-1.5 bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400" />

                                            <div className="p-4 sm:p-6">
                                                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                                                    <div className="min-w-0">
                                                        <div className="flex flex-wrap items-center gap-2">
                                                            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-slate-500 sm:text-xs">
                                                                {booking.id}
                                                            </span>

                                                            <span
                                                                className={`rounded-full border px-3 py-1 text-[10px] font-black sm:text-xs ${statusStyles[booking.status] ||
                                                                    "border-slate-200 bg-slate-100 text-slate-600"
                                                                    }`}
                                                            >
                                                                {booking.status}
                                                            </span>
                                                        </div>

                                                        <h3 className="mt-3 break-words font-display text-xl font-black text-slate-950 sm:text-2xl">
                                                            {booking.turfName}
                                                        </h3>

                                                        <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                                                            {booking.date} <span className="px-1">·</span>
                                                            {booking.time} <span className="px-1">·</span>
                                                            {booking.duration} hour(s)
                                                        </p>

                                                        <p className="mt-1 text-xs font-semibold capitalize text-slate-500 sm:text-sm">
                                                            Sport: {String(booking.sport || "").replaceAll("-", " ")}
                                                        </p>
                                                    </div>

                                                    <div className="rounded-xl bg-slate-50 px-4 py-3 md:min-w-[150px] md:text-right">
                                                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                                            Booking total
                                                        </p>
                                                        <p className="mt-1 font-display text-xl font-black text-slate-950 sm:text-2xl">
                                                            ₹{Number(booking.total || 0).toLocaleString("en-IN")}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                                                    <Link
                                                        to={`/booking-confirmation/${booking.id}`}
                                                        className="rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white sm:text-sm"
                                                    >
                                                        View Details
                                                    </Link>

                                                    {booking.status !== "Completed" &&
                                                        booking.status !== "Cancelled" && (
                                                            <button
                                                                type="button"
                                                                onClick={() => cancel(booking.id)}
                                                                className="rounded-xl border border-rose-200 px-3 py-2.5 text-xs font-bold text-rose-700 transition hover:bg-rose-50 sm:text-sm"
                                                            >
                                                                Cancel Booking
                                                            </button>
                                                        )}

                                                    <button
                                                        type="button"
                                                        onClick={() => window.print()}
                                                        className="rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 sm:text-sm"
                                                    >
                                                        Print
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.article>
                                    ))
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center sm:rounded-3xl sm:py-16"
                                    >
                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100">
                                            <div className="h-7 w-7 rounded-full border-2 border-lime-700" />
                                        </div>

                                        <h3 className="mt-5 font-display text-xl font-black text-slate-950">
                                            No matching bookings
                                        </h3>

                                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                                            We couldn’t find a reservation matching these filters.
                                            Try another booking ID or choose a different status.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setQuery("");
                                                setStatus("all");
                                            }}
                                            className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-lime-500 hover:text-slate-950"
                                        >
                                            Clear Filters
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Initial state */}
                    {!verified && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="mt-6 grid grid-cols-3 gap-2 md:gap-4"
                        >
                            <InfoCard
                                number="01"
                                title="Enter your details"
                                description="Use the email address or phone number entered during booking."
                            />
                            <InfoCard
                                number="02"
                                title="Find your reservation"
                                description="View matching bookings and filter them by booking ID or status."
                            />
                            <InfoCard
                                number="03"
                                title="Manage your match"
                                description="Open booking details, print your reservation, or cancel eligible bookings."
                            />
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
}

function SummaryCard({ label, value, detail, accent }) {
    return (
        <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
            <div className={`h-1.5 bg-gradient-to-r ${accent}`} />

            <div className="p-4 sm:p-5">
                <p className="text-xs font-bold text-slate-500 sm:text-sm">
                    {label}
                </p>

                <p className="mt-2 font-display text-3xl font-black text-slate-950">
                    {value}
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-xs">
                    {detail}
                </p>
            </div>
        </motion.div>
    );
}


function InfoCard({ number, title, description }) {
    return (
        <motion.div
            whileHover={{ y: -3 }}
            className="min-w-0 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition-shadow hover:shadow-lg sm:rounded-3xl sm:p-6"
        >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-100 text-xs font-black text-lime-800 sm:h-10 sm:w-10 sm:rounded-xl sm:text-sm">
                {number}
            </div>

            <h3 className="mt-2 break-words font-display text-sm font-black leading-5 text-slate-950 sm:mt-4 sm:text-lg sm:leading-normal">
                {title}
            </h3>

            <p className="mt-1.5 break-words text-[11px] leading-4 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                {description}
            </p>
        </motion.div>
    );
}
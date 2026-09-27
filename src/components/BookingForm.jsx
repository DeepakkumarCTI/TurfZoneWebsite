
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    CalendarDays,
    Clock3,
    CreditCard,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Sparkles,
    Users,
    UserRound,
} from "lucide-react";

import TimeSlotPicker from "./TimeSlotPicker";
import { createBooking, slots, isPast } from "../utils/bookingUtils";

const getToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export default function BookingForm({ turf }) {
    const nav = useNavigate();

    const today = getToday();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        sport: turf.sports[0],
        date: today,
        duration: 1,
        startIndex: -1,
        players: 2,
        requirements: "",
        payment: "Pay at Venue",
    });

    const [error, setError] = useState("");

    // Calculate booking price
    const price = useMemo(() => {
        const selectedDate = form.date
            ? new Date(`${form.date}T00:00:00`)
            : null;

        const day = selectedDate ? selectedDate.getDay() : -1;
        const weekend = day === 0 || day === 6;

        const base = weekend
            ? turf.pricing.weekend
            : turf.pricing.weekday;

        const peak =
            form.startIndex >= 6 && form.startIndex <= 9
                ? Math.max(base, turf.pricing.peak)
                : base;

        return peak * form.duration;
    }, [
        form.date,
        form.duration,
        form.startIndex,
        turf,
    ]);

    // Update form values
    const set = (key, value) => {
        setForm((current) => ({
            ...current,
            [key]: value,
        }));
    };

    // Submit booking
    const submit = (e) => {
        e.preventDefault();
        setError("");

        const validEmail = /^\S+@\S+\.\S+$/.test(form.email);

        const validPhone = /^[0-9+\-\s]{8,15}$/.test(
            form.phone
        );

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !validEmail ||
            !validPhone ||
            !form.sport ||
            !form.date ||
            isPast(form.date) ||
            form.startIndex < 0 ||
            !form.duration ||
            !form.players ||
            Number(form.players) < 1
        ) {
            setError(
                "Please complete all required fields with valid details."
            );
            return;
        }

        const result = createBooking({
            ...form,
            turfId: turf.id,
            turfName: turf.name,
            location: turf.location,
            pricePerHour: price / form.duration,
            total: price,
        });

        if (!result.ok) {
            setError(result.error);
            return;
        }

        nav(`/booking-confirmation/${result.booking.id}`);
    };

    return (
        <div className="turf-booking-form relative w-full min-w-0">

            {/* Animated Border */}
            <div className="pointer-events-none absolute -inset-[1px] overflow-hidden rounded-[24px]">
                <div className="absolute inset-[-100%] animate-[bookingSpin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#a3e635_60deg,#facc15_120deg,transparent_180deg,#84cc16_240deg,#facc15_300deg,transparent_360deg)]" />
            </div>

            {/* Border Glow */}
            <div className="pointer-events-none absolute -inset-[2px] rounded-[25px] bg-gradient-to-r from-lime-400 via-yellow-300 to-lime-400 opacity-30 blur-md" />

            <form
                id="book"
                onSubmit={submit}
                className="relative w-full overflow-hidden rounded-[23px] bg-white"
            >
                {/* Decorative Background */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-300/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-yellow-300/10 blur-3xl" />

                <div className="turf-booking-form-content relative p-3 sm:p-4">

                    {/* Booking Header */}
                    <div className="mb-4 rounded-2xl bg-slate-50 p-3">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
                                <Sparkles className="h-4 w-4" />
                            </div>

                            <div className="min-w-0">
                                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-lime-700">
                                    Secure Booking
                                </p>

                                <h2 className="mt-0.5 font-display text-lg font-black text-slate-950">
                                    Book Your Turf
                                </h2>
                            </div>
                        </div>

                        <p className="mt-2 text-xs leading-5 text-slate-500">
                            Reserve your preferred time and get ready to play.
                        </p>
                    </div>

                    {/* Customer Details */}
                    <section className="mb-4">
                        <SectionTitle
                            icon={UserRound}
                            title="Customer Details"
                            description="Enter your contact information"
                        />

                        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <FormInput
                                label="Customer Name"
                                icon={UserRound}
                                value={form.name}
                                onChange={(e) => set("name", e.target.value)}
                                placeholder="Your full name"
                                required
                            />

                            <FormInput
                                label="Email Address"
                                icon={Mail}
                                type="email"
                                value={form.email}
                                onChange={(e) => set("email", e.target.value)}
                                placeholder="you@example.com"
                                required
                            />

                            <FormInput
                                label="Phone Number"
                                icon={Phone}
                                type="tel"
                                value={form.phone}
                                onChange={(e) => set("phone", e.target.value)}
                                placeholder="10 digit mobile number"
                                required
                            />

                            <FormSelect
                                label="Sport"
                                icon={MapPin}
                                value={form.sport}
                                onChange={(e) => set("sport", e.target.value)}
                                options={turf.sports.map((sport) => ({
                                    value: sport,
                                    label: sport.replace("-", " "),
                                }))}
                                required
                            />
                        </div>
                    </section>

                    {/* Booking Details */}
                    <section className="mb-4">
                        <SectionTitle
                            icon={CalendarDays}
                            title="Booking Details"
                            description="Choose date and duration"
                        />

                        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <FormInput
                                label="Booking Date"
                                icon={CalendarDays}
                                min={today}
                                type="date"
                                value={form.date}
                                onChange={(e) => {
                                    set("date", e.target.value);
                                    set("startIndex", -1);
                                }}
                                required
                            />

                            <FormSelect
                                label="Duration"
                                icon={Clock3}
                                value={form.duration}
                                onChange={(e) => {
                                    set("duration", Number(e.target.value));
                                    set("startIndex", -1);
                                }}
                                options={[1, 2, 3].map((n) => ({
                                    value: n,
                                    label: `${n} hour${n > 1 ? "s" : ""}`,
                                }))}
                                required
                            />
                        </div>
                    </section>

                    {/* Time Slot */}
                    <section className="mb-4">
                        <SectionTitle
                            icon={Clock3}
                            title="Choose Time Slot"
                            description={`Select consecutive slots for ${form.duration} hour${form.duration > 1 ? "s" : ""}`}
                        />

                        {form.startIndex >= 0 && (
                            <div className="mt-2 inline-flex rounded-full bg-lime-50 px-3 py-1 text-[11px] font-bold text-lime-700">
                                Slot Selected
                            </div>
                        )}

                        <div className="mt-3 max-h-52 w-full overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:p-3">
                            <TimeSlotPicker
                                turfId={turf.id}
                                date={form.date}
                                duration={form.duration}
                                value={form.startIndex}
                                onChange={(value) => set("startIndex", value)}
                            />
                        </div>
                    </section>

                    {/* Players and Payment */}
                    <section className="mb-4">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <FormInput
                                label="Number of Players"
                                icon={Users}
                                min="1"
                                type="number"
                                value={form.players}
                                onChange={(e) =>
                                    set("players", Number(e.target.value))
                                }
                                required
                            />

                            <FormSelect
                                label="Payment Method"
                                icon={CreditCard}
                                value={form.payment}
                                onChange={(e) => set("payment", e.target.value)}
                                options={[
                                    {
                                        value: "Pay at Venue",
                                        label: "Pay at Venue",
                                    },
                                    {
                                        value: "Online Payment – Demo Only",
                                        label: "Online Payment – Demo Only",
                                    },
                                ]}
                                required
                            />
                        </div>
                    </section>

                    {/* Additional Requirements */}
                    <section className="mb-4">
                        <label className="block text-xs font-bold text-slate-700">
                            Additional Requirements

                            <textarea
                                value={form.requirements}
                                onChange={(e) =>
                                    set("requirements", e.target.value)
                                }
                                rows={2}
                                className="mt-2 block w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-500/10"
                                placeholder="Any special requirements or notes..."
                            />
                        </label>
                    </section>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-3 text-xs font-semibold leading-5 text-rose-700">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100">
                                !
                            </div>

                            <p>{error}</p>
                        </div>
                    )}

                    {/* Booking Summary */}
                    <section className="relative overflow-hidden rounded-2xl bg-slate-950 p-3.5 text-white sm:p-4">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-lime-400/15 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-yellow-300/10 blur-3xl" />

                        <div className="relative">

                            {/* Total */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                        Estimated Total
                                    </p>
                                </div>

                                <p className="mt-1 font-display text-2xl font-black">
                                    ₹{price.toLocaleString("en-IN")}
                                </p>
                            </div>

                            {/* Booking Information */}
                            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-xs text-slate-400">
                                        Duration
                                    </span>

                                    <span className="text-sm font-bold">
                                        {form.duration} hour
                                        {form.duration > 1 ? "s" : ""}
                                    </span>
                                </div>

                                <div className="my-2 h-px bg-white/10" />

                                <p className="truncate text-right text-[11px] font-semibold text-lime-300">
                                    {form.startIndex >= 0
                                        ? slots
                                            .slice(
                                                form.startIndex,
                                                form.startIndex + form.duration
                                            )
                                            .join(" + ")
                                        : "No slot selected"}
                                </p>
                            </div>

                            {/* Confirm Booking */}
                            <button
                                type="submit"
                                className="group relative mt-3 w-full overflow-hidden rounded-xl bg-gradient-to-r from-lime-400 via-yellow-300 to-lime-400 bg-[length:200%_100%] px-4 py-3 text-sm font-black text-slate-950 shadow-lg shadow-lime-500/10 transition-all duration-500 hover:-translate-y-0.5 hover:bg-right hover:shadow-lime-500/20 active:translate-y-0"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Confirm Booking

                                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </span>

                                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                            </button>

                            {/* Security Message */}
                            <div className="mt-3 flex items-center justify-center gap-1.5 text-center text-[10px] text-slate-500">
                                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-lime-400" />

                                <span>
                                    Your booking details are handled securely.
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </form>

            {/* Animation */}
            <style>{`
        @keyframes bookingSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[bookingSpin_5s_linear_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
        </div>
    );
}

/* =============================================
   Section Title
============================================= */

function SectionTitle({
    icon: Icon,
    title,
    description,
}) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-4 w-4" />
            </div>

            <div className="min-w-0">
                <h3 className="text-sm font-black text-slate-900">
                    {title}
                </h3>

                <p className="text-xs text-slate-400">
                    {description}
                </p>
            </div>
        </div>
    );
}

/* =============================================
   Reusable Input
============================================= */

function FormInput({
    label,
    icon: Icon,
    type = "text",
    ...props
}) {
    return (
        <label className="block min-w-0 text-xs font-bold text-slate-700">
            {label}

            <div className="group relative mt-1.5">
                <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-lime-600" />

                <input
                    {...props}
                    type={type}
                    className="block h-[44px] w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3.5 pl-10 text-sm font-medium text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-500/10"
                />
            </div>
        </label>
    );
}

/* =============================================
   Reusable Select
============================================= */

function FormSelect({
    label,
    icon: Icon,
    options,
    ...props
}) {
    return (
        <label className="block min-w-0 text-xs font-bold text-slate-700">
            {label}

            <div className="group relative mt-1.5">
                <Icon className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-lime-600" />

                <select
                    {...props}
                    className="block h-[44px] w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-9 text-sm font-medium capitalize text-slate-800 outline-none transition-all duration-300 hover:border-slate-300 focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-500/10"
                >
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">
                    ▼
                </span>
            </div>
        </label>
    );
}
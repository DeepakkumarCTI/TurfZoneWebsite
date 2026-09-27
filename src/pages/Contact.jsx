
import { useState } from "react";

import { company } from "../data/company";
import { KEYS, read, write, uid } from "../utils/localStorage";
import { openWhatsApp } from "../utils/whatsapp";

const initialForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

export default function Contact() {
    const [f, setF] = useState(initialForm);
    const [ok, setOk] = useState(false);

    const updateField = (field, value) => {
        setF((prev) => ({ ...prev, [field]: value }));
        setOk(false);
    };

    const submit = (e) => {
        e.preventDefault();

        const validEmail = /^\S+@\S+\.\S+$/.test(f.email);

        if (
            !f.name.trim() ||
            !validEmail ||
            !f.phone.trim() ||
            !f.subject.trim() ||
            !f.message.trim()
        ) {
            return;
        }

        const enquiries = read(KEYS.enquiries, []);

        enquiries.push({
            ...f,
            id: uid("ENQ"),
            status: "Pending",
            createdAt: new Date().toISOString(),
        });

        write(KEYS.enquiries, enquiries);
        setF(initialForm);
        setOk(true);
    };

    const mapsQuery = encodeURIComponent(company.address);

    return (
        <main className="min-h-screen overflow-hidden bg-slate-50 pb-10 sm:pb-16">
            <style>{`
                @property --contact-angle {
                    syntax: "<angle>";
                    initial-value: 0deg;
                    inherits: false;
                }

                .contact-rainbow {
                    background: conic-gradient(
                        from var(--contact-angle),
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
                    animation: contactBorderSpin 6s linear infinite;
                }

                @keyframes contactBorderSpin {
                    from {
                        --contact-angle: 0deg;
                    }
                    to {
                        --contact-angle: 360deg;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .contact-rainbow {
                        animation: none;
                    }
                }
            `}</style>

            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-slate-950 px-4 pb-8 pt-20 text-white sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20">
                <div className="absolute -left-24 -top-24 -z-10 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl" />
                <div className="absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

                <div className="mx-auto grid max-w-7xl items-center gap-6 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <span className="inline-flex rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-lime-300 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                            Contact TurfZone
                        </span>

                        <h1 className="mt-4 max-w-3xl font-display text-3xl font-black leading-tight sm:mt-5 sm:text-5xl lg:text-6xl">
                            Let’s talk about
                            <span className="block bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                                your next game.
                            </span>
                        </h1>

                        <p className="mt-4 max-w-2xl text-xs leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
                            Need help finding a turf, planning a match, or understanding a
                            booking? Send us a message and our team will be happy to help.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
                            <a
                                href="#contact-form"
                                className="rounded-lg bg-lime-400 px-4 py-2.5 text-xs font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-300 sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm"
                            >
                                Send an Enquiry
                            </a>

                            <button
                                type="button"
                                onClick={() =>
                                    openWhatsApp("Hello TurfZone, I have an enquiry.")
                                }
                                className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/20 sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm"
                            >
                                Chat on WhatsApp
                            </button>
                        </div>
                    </div>

                    <div className="contact-rainbow rounded-2xl p-[2px] sm:rounded-3xl">
                        <div className="rounded-[calc(1rem-2px)] bg-slate-900 p-4 sm:rounded-[calc(1.5rem-2px)] sm:p-8">
                            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-lime-300 sm:text-xs sm:tracking-[0.18em]">
                                We’re here to help
                            </p>

                            <h2 className="mt-2 font-display text-xl font-bold sm:mt-3 sm:text-3xl">
                                Your game matters.
                            </h2>

                            <p className="mt-2 text-xs leading-5 text-slate-400 sm:mt-3 sm:text-sm sm:leading-6">
                                Get in touch for booking questions, venue information, or
                                general support.
                            </p>

                            <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
                                <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:rounded-2xl sm:p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs">
                                        Support
                                    </p>
                                    <p className="mt-1.5 text-xs font-bold text-white sm:mt-2 sm:text-sm">
                                        Booking help
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:rounded-2xl sm:p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs">
                                        Enquiries
                                    </p>
                                    <p className="mt-1.5 text-xs font-bold text-white sm:mt-2 sm:text-sm">
                                        Turf information
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10 sm:mt-5 sm:h-1.5">
                                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400" />
                            </div>

                            <p className="mt-2 text-[10px] leading-4 text-slate-500 sm:text-xs">
                                Tell us what you need and we’ll point you in the right direction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact form, details, and map */}
            <section className="px-2.5 py-5 sm:px-5 sm:py-10 lg:px-6">
                <div className="mx-auto max-w-[1600px]">
                    {/* Shared heading above both cards */}
                    <div className="mb-4 sm:mb-6">
                        <p className="text-[9px] font-black uppercase tracking-[0.12em] text-lime-700 sm:text-xs sm:tracking-[0.2em]">
                            Send a message
                        </p>

                        <h2 className="mt-1.5 font-display text-xl font-black leading-tight text-slate-950 sm:mt-2 sm:text-3xl">
                            How can we help?
                        </h2>

                        <p className="mt-1.5 max-w-2xl text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                            Send us your enquiry. It will be saved locally for the admin demo.
                        </p>
                    </div>

                    {/* Both cards begin at the same level */}
                    <div className="grid grid-cols-2 items-start gap-2.5 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                        {/* Contact form */}
                        <div className="col-span-1 min-w-0">
                            <div className="contact-rainbow h-full min-w-0 rounded-xl p-[1.5px] sm:rounded-3xl sm:p-[2px]">
                                <form
                                    id="contact-form"
                                    onSubmit={submit}
                                    className="h-full space-y-2.5 rounded-[calc(0.75rem-1.5px)] bg-white p-2.5 sm:space-y-4 sm:rounded-[calc(1.5rem-2px)] sm:p-5 lg:p-6"
                                >
                                    <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                                        <FormField label="Full name">
                                            <input
                                                required
                                                value={f.name}
                                                onChange={(e) =>
                                                    updateField("name", e.target.value)
                                                }
                                                placeholder="Enter your name"
                                                className={inputClass}
                                            />
                                        </FormField>

                                        <FormField label="Email address">
                                            <input
                                                required
                                                type="email"
                                                value={f.email}
                                                onChange={(e) =>
                                                    updateField("email", e.target.value)
                                                }
                                                placeholder="you@example.com"
                                                className={inputClass}
                                            />
                                        </FormField>

                                        <FormField label="Phone number">
                                            <input
                                                required
                                                type="tel"
                                                value={f.phone}
                                                onChange={(e) =>
                                                    updateField("phone", e.target.value)
                                                }
                                                placeholder="Phone number"
                                                className={inputClass}
                                            />
                                        </FormField>

                                        <FormField label="Subject">
                                            <input
                                                required
                                                value={f.subject}
                                                onChange={(e) =>
                                                    updateField("subject", e.target.value)
                                                }
                                                placeholder="Enquiry subject"
                                                className={inputClass}
                                            />
                                        </FormField>
                                    </div>

                                    <FormField label="Your message">
                                        <textarea
                                            required
                                            rows={3}
                                            value={f.message}
                                            onChange={(e) =>
                                                updateField("message", e.target.value)
                                            }
                                            placeholder="Write your message..."
                                            className={`${inputClass} min-h-20 resize-y sm:min-h-32`}
                                        />
                                    </FormField>

                                    {ok && (
                                        <div
                                            role="status"
                                            className="rounded-lg border border-emerald-200 bg-emerald-50 p-2 text-[10px] font-semibold leading-4 text-emerald-700 sm:rounded-xl sm:p-3 sm:text-sm sm:leading-5"
                                        >
                                            Your enquiry has been saved successfully.
                                        </div>
                                    )}

                                    <div className="space-y-2 sm:space-y-3">
                                        <p className="text-[10px] leading-4 text-slate-400 sm:text-xs sm:leading-5">
                                            Required fields must be completed before submitting.
                                        </p>

                                        <button
                                            type="submit"
                                            className="w-full rounded-lg bg-slate-950 px-3 py-2.5 text-[10px] font-black text-white transition hover:bg-lime-500 hover:text-slate-950 sm:rounded-xl sm:px-5 sm:py-3.5 sm:text-sm"
                                        >
                                            Send Enquiry
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact details */}
                        <aside className="col-span-1 min-w-0">
                            <div className="h-full min-w-0 rounded-xl bg-slate-950 p-2.5 text-white sm:rounded-3xl sm:p-5 lg:p-6">
                                <p className="text-[9px] font-black uppercase tracking-[0.1em] text-lime-300 sm:text-xs sm:tracking-[0.2em]">
                                    Contact details
                                </p>

                                <h2 className="mt-2 break-words font-display text-sm font-bold leading-tight sm:mt-3 sm:text-2xl">
                                    {company.name} Support
                                </h2>

                                <p className="mt-1.5 text-[10px] leading-4 text-slate-400 sm:mt-2 sm:text-sm sm:leading-6">
                                    Reach out to us using the contact information below.
                                </p>

                                <div className="mt-3 space-y-2.5 sm:mt-5 sm:space-y-4">
                                    <ContactDetail
                                        label="Phone"
                                        value={company.phone}
                                    />
                                    <ContactDetail
                                        label="Email"
                                        value={company.email}
                                    />
                                    <ContactDetail
                                        label="Address"
                                        value={company.address}
                                    />
                                    <ContactDetail
                                        label="Support hours"
                                        value={company.hours}
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        openWhatsApp("Hello TurfZone, I have an enquiry.")
                                    }
                                    className="mt-3 w-full rounded-lg bg-emerald-500 px-2 py-2 text-[10px] font-black leading-4 text-white transition hover:bg-emerald-400 sm:mt-6 sm:rounded-xl sm:px-5 sm:py-3.5 sm:text-sm"
                                >
                                    Chat on WhatsApp
                                </button>
                            </div>
                        </aside>

                        {/* Map: below the cards on mobile, third column on large screens */}
                        <div className="contact-rainbow col-span-2 min-w-0 rounded-xl p-[1.5px] sm:rounded-3xl sm:p-[2px] lg:col-span-1">
                            <div className="flex h-full flex-col overflow-hidden rounded-[calc(0.75rem-1.5px)] bg-white sm:rounded-[calc(1.5rem-2px)]">
                                <div className="p-3 sm:p-5">
                                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-cyan-700 sm:text-xs sm:tracking-[0.2em]">
                                        Find us
                                    </p>

                                    <h3 className="mt-1.5 font-display text-base font-bold leading-tight text-slate-950 sm:mt-2 sm:text-2xl">
                                        Visit our location
                                    </h3>

                                    <p className="mt-1.5 break-words text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                                        {company.address}
                                    </p>
                                </div>

                                <div className="h-40 w-full overflow-hidden bg-slate-100 sm:h-72 lg:h-[420px]">
                                    <iframe
                                        title="TurfZone location on Google Maps"
                                        src={`https://maps.google.com/maps?q=${mapsQuery}&output=embed`}
                                        className="h-full w-full border-0"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        allowFullScreen
                                    />
                                </div>

                                <div className="mt-auto flex flex-col gap-2 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:p-5">
                                    <p className="text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                                        View our location and nearby places.
                                    </p>

                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex shrink-0 justify-center rounded-lg bg-slate-950 px-3 py-2 text-[10px] font-bold text-white transition hover:bg-lime-500 hover:text-slate-950 sm:px-4 sm:py-2.5 sm:text-xs"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="px-3 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-5 text-center sm:mb-6">
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-lime-700 sm:text-xs sm:tracking-[0.2em]">
                            Quick answers
                        </p>

                        <h2 className="mt-2 font-display text-2xl font-black text-slate-950 sm:text-4xl">
                            Frequently asked questions
                        </h2>

                        <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                            A few useful details about how the TurfZone demo works.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                        <Faq
                            q="Is this a real payment system?"
                            a="No. Online Payment is a demo option only; no payment gateway is connected."
                        />

                        <Faq
                            q="Is availability real-time across users?"
                            a="No. Availability is simulated per browser using Local Storage."
                        />

                        <Faq
                            q="Can I cancel a booking?"
                            a="Yes. Eligible bookings can be cancelled from My Bookings."
                        />

                        <Faq
                            q="Can I replace the venue data?"
                            a="Yes. Demo turf data is centralized in src/data/turfs.js and can also be managed in the admin panel."
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

const inputClass =
    "w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 text-[10px] leading-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-lime-500 focus:bg-white focus:ring-2 focus:ring-lime-100 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm sm:leading-5 sm:focus:ring-4";

function FormField({ label, children }) {
    return (
        <label className="block min-w-0">
            <span className="mb-1 block text-[10px] font-bold leading-4 text-slate-700 sm:mb-2 sm:text-sm sm:leading-5">
                {label}
            </span>
            {children}
        </label>
    );
}

function ContactDetail({ label, value }) {
    return (
        <div className="border-b border-white/10 pb-2 last:border-0 last:pb-0 sm:pb-4">
            <p className="text-[9px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs sm:tracking-wider">
                {label}
            </p>

            <p className="mt-0.5 break-words text-[10px] font-semibold leading-4 text-white sm:mt-1 sm:text-sm sm:leading-6">
                {value}
            </p>
        </div>
    );
}

function Faq({ q, a }) {
    return (
        <div className="contact-rainbow rounded-xl p-[1.5px] sm:rounded-2xl">
            <div className="h-full rounded-[calc(0.75rem-1.5px)] bg-white p-3 sm:rounded-[calc(1rem-1.5px)] sm:p-6">
                <h3 className="text-xs font-bold leading-5 text-slate-900 sm:text-base">
                    {q}
                </h3>

                <p className="mt-1.5 text-[11px] leading-4 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                    {a}
                </p>
            </div>
        </div>
    );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { company } from "../data/company";

const quickLinks = [
    ["Our Turf", "/explore"],
    ["Sports", "/sports"],
    ["My Bookings", "/bookings"],
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
];

const sports = [
    "Football",
    "Cricket",
    "Box Cricket",
    "Badminton",
    "Basketball",
];

export default function Footer() {
    const [modal, setModal] = useState(null);

    return (
        <>
            <footer className="relative w-full overflow-hidden bg-slate-950 text-white">
                {/* Background glow */}
                <div className="pointer-events-none absolute -left-24 top-16 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl animate-[footerGlow_6s_ease-in-out_infinite] sm:h-56 sm:w-56" />
                <div className="pointer-events-none absolute -right-24 bottom-10 h-48 w-48 rounded-full bg-yellow-300/5 blur-3xl animate-[footerGlow_7s_ease-in-out_infinite_reverse] sm:h-64 sm:w-64" />

                {/* Floating particles */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <span className="absolute left-[12%] top-[30%] h-1 w-1 rounded-full bg-lime-300/40 animate-[particleFloat_5s_ease-in-out_infinite]" />
                    <span className="absolute left-[45%] top-[65%] h-1 w-1 rounded-full bg-yellow-300/30 animate-[particleFloat_7s_ease-in-out_infinite_1s]" />
                    <span className="absolute right-[25%] top-[25%] h-1.5 w-1.5 rounded-full bg-lime-300/30 animate-[particleFloat_6s_ease-in-out_infinite_2s]" />
                    <span className="absolute right-[8%] bottom-[25%] h-1 w-1 rounded-full bg-yellow-300/30 animate-[particleFloat_8s_ease-in-out_infinite]" />
                </div>

                {/* Animated top line */}
                <div className="relative h-[2px] w-full overflow-hidden bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400/10 to-transparent" />

                    <div className="absolute top-0 h-full w-[20%] min-w-[120px] rounded-full bg-gradient-to-r from-transparent via-lime-400 to-transparent shadow-[0_0_14px_rgba(163,230,53,0.9)] animate-[footerLine_3.5s_linear_infinite]" />

                    <div className="absolute top-0 h-full w-[10%] min-w-[70px] rounded-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent animate-[footerLine_5s_linear_infinite_1s]" />
                </div>

                {/* Main footer content */}
                <div className="relative w-full px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
                    <div className="grid w-full grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-8">

                        {/* Brand */}
                        <div className="col-span-2 animate-[footerItem_0.7s_ease-out] sm:col-span-1">
                            <Link
                                to="/"
                                className="group inline-flex items-center gap-2.5 sm:gap-3"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-lime-400/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-lime-400/30" />

                                    <img
                                        src="/images/logo.png"
                                        alt={company.name}
                                        className="relative h-9 w-auto object-contain transition-all duration-500 group-hover:scale-110 animate-[logoFloat_3s_ease-in-out_infinite] sm:h-11"
                                    />
                                </div>

                                <div>
                                    <h2 className="font-display text-base font-extrabold tracking-tight text-white sm:text-lg">
                                        {company.name}
                                    </h2>

                                    <div className="mt-1 h-0.5 w-9 overflow-hidden rounded-full bg-lime-400 sm:w-10">
                                        <div className="h-full w-full bg-yellow-300 animate-[brandLine_2s_ease-in-out_infinite]" />
                                    </div>
                                </div>
                            </Link>

                            <p className="mt-2 max-w-sm text-xs leading-5 text-slate-400 sm:mt-4 sm:text-sm sm:leading-6">
                                {company.description}
                            </p>

                            {/* Social links */}
                            <div className="mt-3 flex items-center gap-2 sm:mt-5 sm:gap-2.5">
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:rotate-3 hover:border-lime-400/30 hover:bg-lime-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)] sm:h-9 sm:w-9 sm:rounded-xl"
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-[18px] sm:w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <rect x="3" y="3" width="18" height="18" rx="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:-rotate-3 hover:border-lime-400/30 hover:bg-lime-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)] sm:h-9 sm:w-9 sm:rounded-xl"
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-[18px] sm:w-[18px]" fill="currentColor">
                                        <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v6h4v-6h3.2l.8-4H13V9c0-.67.33-1 1-1Z" />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    aria-label="WhatsApp"
                                    className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:rotate-3 hover:border-lime-400/30 hover:bg-lime-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)] sm:h-9 sm:w-9 sm:rounded-xl"
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-[18px] sm:w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" />
                                        <path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.5.9 1.3 1.6 2.2 2.1.2.1.4.1.5-.1l.6-.7c.1-.2.4-.2.6-.1l1.4.7c.2.1.3.3.2.6-.2.8-.8 1.3-1.6 1.4-1.3.1-3.1-.7-4.5-2-1.3-1.2-2.1-2.6-2.3-3.7-.1-.5.1-1 .5-1.3Z" />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    aria-label="X"
                                    className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:-rotate-3 hover:border-lime-400/30 hover:bg-lime-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)] sm:h-9 sm:w-9 sm:rounded-xl"
                                >
                                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor">
                                        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.49 22H3.38l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.86h1.73L8.27 4.04H6.41L17.8 19.86Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div className="animate-[footerItem_0.7s_ease-out_0.1s_both]">
                            <h3 className="mb-3 font-display text-sm font-bold text-white sm:mb-4 sm:text-base">
                                Quick Links
                            </h3>

                            <div className="grid gap-2 sm:gap-2.5">
                                {quickLinks.map(([name, path]) => (
                                    <Link
                                        key={path}
                                        to={path}
                                        className="group flex items-center gap-2 text-xs text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-lime-300 sm:text-sm"
                                    >
                                        <span className="h-1 w-1 shrink-0 rounded-full bg-slate-600 transition-all duration-300 group-hover:w-3 group-hover:bg-lime-400" />
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Sports */}
                        <div className="animate-[footerItem_0.7s_ease-out_0.2s_both]">
                            <h3 className="mb-3 font-display text-sm font-bold text-white sm:mb-4 sm:text-base">
                                Our Sports
                            </h3>

                            <div className="grid gap-2 sm:gap-2.5">
                                {sports.map((sport) => (
                                    <Link
                                        key={sport}
                                        to="/sports"
                                        className="group flex items-center gap-2 text-xs text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-lime-300 sm:text-sm"
                                    >
                                        <span className="h-1 w-1 shrink-0 rounded-full bg-slate-600 transition-all duration-300 group-hover:w-3 group-hover:bg-lime-400" />
                                        {sport}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Play with us */}
                        <div className="col-span-2 animate-[footerItem_0.7s_ease-out_0.3s_both] sm:col-span-1">
                            <h3 className="mb-3 font-display text-sm font-bold text-white sm:mb-4 sm:text-base">
                                Play With Us
                            </h3>

                            <div className="group relative h-28 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_35px_rgba(0,0,0,0.25)] sm:h-40">
                                <img
                                    src="/images/footer-turf.jpg"
                                    alt="TurfZone"
                                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                                <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-lime-400/20 blur-2xl transition-all duration-500 group-hover:scale-150" />

                                <div className="absolute bottom-3 left-3 right-3">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-lime-300 sm:text-xs">
                                        TurfZone
                                    </p>
                                    <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                                        Book. Play. Enjoy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}


                <div className="relative w-full border-t border-white/10">
                    {/* Animated top border */}
                    <div className="absolute left-0 top-0 h-px w-full overflow-hidden">
                        <div className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-[footerBottomLine_4s_linear_infinite]" />
                    </div>

                    {/* Centered footer content */}
                    <div className="relative flex w-full flex-col items-center justify-center gap-2 px-3 py-3 text-center sm:px-6 sm:py-4 lg:px-8">
                        <p className="text-center text-[10px] leading-4 text-slate-500 sm:text-[11px]">
                            © 2026 {company.name}. Frontend booking simulation using Local Storage.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                            <button
                                type="button"
                                onClick={() => setModal("privacy")}
                                className="text-[10px] font-semibold text-slate-500 transition-colors duration-300 hover:text-lime-300 sm:text-[11px]"
                            >
                                Privacy Policy
                            </button>

                            <span className="h-1 w-1 rounded-full bg-slate-700" />

                            <button
                                type="button"
                                onClick={() => setModal("terms")}
                                className="text-[10px] font-semibold text-slate-500 transition-colors duration-300 hover:text-lime-300 sm:text-[11px]"
                            >
                                Terms &amp; Conditions
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer animations */}
                <style>{`
                    @keyframes footerLine {
                        0% { transform: translateX(-150%); }
                        100% { transform: translateX(550%); }
                    }

                    @keyframes footerBottomLine {
                        0% { transform: translateX(-150%); }
                        100% { transform: translateX(900%); }
                    }

                    @keyframes footerGlow {
                        0%, 100% {
                            transform: scale(0.9);
                            opacity: 0.25;
                        }
                        50% {
                            transform: scale(1.15);
                            opacity: 0.65;
                        }
                    }

                    @keyframes footerItem {
                        from {
                            opacity: 0;
                            transform: translateY(18px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes logoFloat {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-4px); }
                    }

                    @keyframes brandLine {
                        0% { transform: translateX(-100%); }
                        50% { transform: translateX(0); }
                        100% { transform: translateX(100%); }
                    }

                    @keyframes particleFloat {
                        0%, 100% {
                            transform: translateY(0) scale(1);
                            opacity: 0.25;
                        }
                        50% {
                            transform: translateY(-18px) scale(1.5);
                            opacity: 0.8;
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        *, *::before, *::after {
                            animation-duration: 0.01ms !important;
                            animation-iteration-count: 1 !important;
                            scroll-behavior: auto !important;
                        }
                    }
                `}</style>
            </footer>

            <AnimateModal
                type={modal}
                close={() => setModal(null)}
            />
        </>
    );
}

/* =============================================================
   PRIVACY / TERMS MODAL
============================================================= */

function AnimateModal({ type, close }) {
    if (!type) return null;

    const privacy = type === "privacy";

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-3 py-4 backdrop-blur-md animate-[modalOverlay_.25s_ease-out] sm:px-4 sm:py-6"
            onClick={close}
        >
            <div
                className="relative max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 text-white shadow-[0_25px_80px_rgba(0,0,0,0.55)] animate-[modalIn_.35s_ease-out] sm:rounded-3xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Animated line */}
                <div className="relative h-[2px] overflow-hidden bg-white/5">
                    <div className="absolute inset-y-0 h-full w-1/3 bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-[modalLine_2.5s_linear_infinite]" />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-7 sm:py-4">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-300">
                            {company.name}
                        </p>

                        <h2 className="mt-1 font-display text-lg font-bold sm:text-2xl">
                            {privacy ? "Privacy Policy" : "Terms & Conditions"}
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={close}
                        aria-label="Close"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-lg text-slate-400 transition-all duration-300 hover:rotate-90 hover:bg-lime-400 hover:text-slate-950 sm:h-9 sm:w-9 sm:rounded-xl"
                    >
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="max-h-[60vh] overflow-y-auto px-4 py-4 sm:max-h-[65vh] sm:px-7 sm:py-5">
                    {privacy ? (
                        <div className="space-y-4 text-xs leading-5 text-slate-400 sm:space-y-5 sm:text-sm sm:leading-6">
                            <PolicySection title="1. Information We Collect">
                                TurfZone may collect information provided during the booking process, such as your name, phone number, email address, selected turf, booking date and selected time slot.
                            </PolicySection>

                            <PolicySection title="2. How We Use Your Information">
                                The information is used to process bookings, communicate booking updates, respond to enquiries and provide a better booking experience.
                            </PolicySection>

                            <PolicySection title="3. Booking Information">
                                Booking information is used for managing your turf reservations and related customer support.
                            </PolicySection>

                            <PolicySection title="4. Local Storage">
                                This frontend demo uses browser Local Storage to maintain booking and application state. Clearing browser storage may remove locally stored demo data.
                            </PolicySection>

                            <PolicySection title="5. Data Protection">
                                We aim to handle submitted information responsibly and use reasonable measures to protect information used within the booking application.
                            </PolicySection>

                            <PolicySection title="6. Contact">
                                If you have questions regarding this Privacy Policy, please contact {company.name} using the contact information provided on this website.
                            </PolicySection>
                        </div>
                    ) : (
                        <div className="space-y-4 text-xs leading-5 text-slate-400 sm:space-y-5 sm:text-sm sm:leading-6">
                            <PolicySection title="1. Booking">
                                Customers are responsible for providing accurate information while making a turf booking.
                            </PolicySection>

                            <PolicySection title="2. Slot Availability">
                                A booking is subject to the availability of the selected turf, date and time slot.
                            </PolicySection>

                            <PolicySection title="3. Booking Confirmation">
                                A booking request may remain pending until it is confirmed according to the booking system.
                            </PolicySection>

                            <PolicySection title="4. Cancellation">
                                Cancellation rules may depend on the booking conditions applicable to the selected turf and slot.
                            </PolicySection>

                            <PolicySection title="5. Customer Responsibility">
                                Customers are expected to use the facilities responsibly and follow the rules communicated by the turf management.
                            </PolicySection>

                            <PolicySection title="6. Website Usage">
                                Users should not attempt to misuse, disrupt or interfere with the normal operation of the website.
                            </PolicySection>

                            <PolicySection title="7. Changes">
                                {company.name} may update these terms when required. Updated terms will be displayed through the website.
                            </PolicySection>

                            <PolicySection title="8. Contact">
                                For questions regarding these terms, please contact {company.name} using the contact information available on the website.
                            </PolicySection>
                        </div>
                    )}
                </div>

                {/* Modal footer */}
                <div className="border-t border-white/10 px-4 py-3 sm:px-7 sm:py-4">
                    <button
                        type="button"
                        onClick={close}
                        className="w-full rounded-xl bg-lime-400 px-5 py-2.5 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.25)]"
                    >
                        Close
                    </button>
                </div>

                <style>{`
                    @keyframes modalOverlay {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    @keyframes modalIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px) scale(0.96);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }

                    @keyframes modalLine {
                        from { transform: translateX(-150%); }
                        to { transform: translateX(450%); }
                    }
                `}</style>
            </div>
        </div>
    );
}

/* =============================================================
   POLICY SECTION
============================================================= */

function PolicySection({ title, children }) {
    return (
        <section>
            <h3 className="font-display text-xs font-bold text-white sm:text-base">
                {title}
            </h3>

            <p className="mt-1.5">
                {children}
            </p>
        </section>
    );
}
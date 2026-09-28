
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
                <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
                    <div className="grid grid-cols-2 items-start gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-10">
                        {/* Brand and address */}
                        <div className="col-span-2 min-w-0 sm:col-span-1 animate-[footerItem_0.7s_ease-out]">
                            <Link
                                to="/"
                                className="group inline-flex items-center gap-2.5 sm:gap-3"
                            >
                                <div className="relative shrink-0">
                                    <div className="absolute inset-0 rounded-full bg-lime-400/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-lime-400/30" />

                                    <img
                                        src="/images/logo.png"
                                        alt={company.name}
                                        className="relative h-9 w-auto object-contain transition-all duration-500 group-hover:scale-110 animate-[logoFloat_3s_ease-in-out_infinite] sm:h-11"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <h2 className="font-display text-base font-extrabold tracking-tight text-white sm:text-lg">
                                        {company.name}
                                    </h2>

                                    <div className="mt-1 h-0.5 w-9 overflow-hidden rounded-full bg-lime-400 sm:w-10">
                                        <div className="h-full w-full bg-yellow-300 animate-[brandLine_2s_ease-in-out_infinite]" />
                                    </div>
                                </div>
                            </Link>

                            <p className="mt-3 max-w-sm text-xs leading-5 text-slate-400 sm:mt-4 sm:text-sm sm:leading-6">
                                {company.description}
                            </p>

                            {/* Address */}
                            <div className="mt-4 flex items-start gap-3 sm:mt-5">
                                

                               
                            </div>

                            {/* Social links */}
                            {/* Social Links */}
                            <div className="mt-5">
                                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                                    Follow Us
                                </h4>

                                <div className="grid grid-cols-2 gap-3">
                                    {/* Instagram */}
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Instagram"
                                        className="flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-gray-300 transition hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-white"
                                    >
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="h-5 w-5 text-white"
                                                aria-hidden="true"
                                            >
                                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                                <circle cx="12" cy="12" r="4" />
                                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                            </svg>
                                        </span>
                                        <span className="truncate">Instagram</span>
                                    </a>

                                    {/* Facebook */}
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Facebook"
                                        className="flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-gray-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                                    >
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-5 w-5 text-white"
                                                aria-hidden="true"
                                            >
                                                <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z" />
                                            </svg>
                                        </span>
                                        <span className="truncate">Facebook</span>
                                    </a>

                                    {/* YouTube */}
                                    <a
                                        href="https://www.youtube.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="YouTube"
                                        className="flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-gray-300 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-white"
                                    >
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-600">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-5 w-5 text-white"
                                                aria-hidden="true"
                                            >
                                                <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.3V8.7l5.8 3.3-5.8 3.3Z" />
                                            </svg>
                                        </span>
                                        <span className="truncate">YouTube</span>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn"
                                        className="flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-gray-300 transition hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-white"
                                    >
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-600">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-5 w-5 text-white"
                                                aria-hidden="true"
                                            >
                                                <path d="M5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3.4v11H3.5V9Zm5.5 0h3.2v1.5h.1A3.5 3.5 0 0 1 15.5 8c3.5 0 4.2 2.3 4.2 5.2V20h-3.4v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20H9V9Z" />
                                            </svg>
                                        </span>
                                        <span className="truncate">LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div className="min-w-0 animate-[footerItem_0.7s_ease-out_0.1s_both]">
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
                        <div className="min-w-0 animate-[footerItem_0.7s_ease-out_0.2s_both]">
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

                        {/* Contact Us */}
                        <div className="col-span-2 min-w-0 animate-[footerItem_0.7s_ease-out_0.3s_both] sm:col-span-1">
                            <h3 className="mb-3 font-display text-sm font-bold text-white sm:mb-4 sm:text-base">
                                Contact Us
                            </h3>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                                            <circle cx="12" cy="10" r="2.5" />
                                        </svg>
                                    </div>

                                    <div className="min-w-0">
                                        <h4 className="text-xs font-bold text-white sm:text-sm">
                                            Our Location
                                        </h4>
                                        <address className="mt-1 break-words text-xs not-italic leading-5 text-slate-400 sm:text-sm sm:leading-6">
                                            Sungam Main Road,
                                            <br />
                                            Coimbatore,
                                            <br />
                                            Tamil Nadu, 654345, India
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="relative w-full border-t border-white/10">
                    <div className="absolute left-0 top-0 h-px w-full overflow-hidden">
                        <div className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-[footerBottomLine_4s_linear_infinite]" />
                    </div>

                    <div className="relative flex w-full flex-col items-center justify-center gap-2 px-3 py-3 text-center sm:px-6 sm:py-4 lg:px-8">
                        <p className="text-center text-[10px] leading-4 text-slate-500 sm:text-[11px]">
                            © 2026 {company.name}. Frontend booking simulation.
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
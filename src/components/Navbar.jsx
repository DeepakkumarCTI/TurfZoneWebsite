
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "../data/company";

const links = [
    ["Home", "/"],
    ["Our Turf", "/explore"],
    ["Sports", "/sports"],
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
    ["My Bookings", "/bookings"],
    ["Admin Login", "/admin/login"],
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const loc = useLocation();
    const isHome = loc.pathname === "/";

    /* Close menu when route changes */
    useEffect(() => {
        setOpen(false);
    }, [loc.pathname]);

    /* Detect scroll */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 25);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => setOpen(false);

    return (
        <header
            className={`
                fixed inset-x-0 top-0 z-50
                transition-all duration-300
                ${scrolled || !isHome
                    ? "bg-slate-950/95 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
                    : "bg-slate-950/70 backdrop-blur-md"
                }
            `}
        >
            {/* MAIN NAVBAR */}
            <div
                className={`
                    mx-auto flex h-16 w-full max-w-[1500px]
                    items-center justify-between
                    px-3 sm:h-[72px] sm:px-6 lg:px-8
                    transition-all duration-300
                    ${scrolled ? "sm:h-[66px]" : ""}
                `}
            >
                {/* LOGO + COMPANY NAME */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="group flex min-w-0 shrink items-center"
                >
                    <div className="relative flex shrink-0 items-center">
                        <div className="absolute inset-0 scale-75 rounded-full bg-lime-400/20 blur-lg transition-all duration-500 group-hover:scale-100 group-hover:bg-lime-400/30" />

                        <img
                            src="/images/logo.png"
                            alt={company.name}
                            className="relative h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-11 lg:h-12"
                        />
                    </div>

                    {/* Always visible, including mobile */}
                    <div className="ml-2 min-w-0 sm:ml-3">
                        <p className="max-w-[170px] truncate font-display text-[11px] font-black leading-tight text-white sm:max-w-none sm:text-base">
                            {company.name}
                        </p>

                        <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.14em] text-lime-300/80 sm:text-[9px] sm:tracking-[0.22em]">
                            Play. Book. Enjoy.
                        </p>
                    </div>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {links.map(([name, path]) => {
                        const active = loc.pathname === path;

                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`
                                    group relative rounded-xl
                                    px-3 py-2.5
                                    text-[13px] font-bold
                                    transition-all duration-300
                                    ${active
                                        ? "text-lime-300"
                                        : "text-white/75 hover:bg-white/5 hover:text-white"
                                    }
                                `}
                            >
                                {name}

                                <span
                                    className={`
                                        absolute bottom-0 left-1/2 h-[2px]
                                        -translate-x-1/2 rounded-full
                                        bg-lime-400
                                        transition-all duration-300
                                        ${active
                                            ? "w-5 opacity-100"
                                            : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                                        }
                                    `}
                                />
                            </Link>
                        );
                    })}

                    {/* DESKTOP BOOK BUTTON */}
                    <Link
                        to="/explore"
                        className="group relative ml-3 overflow-hidden rounded-xl bg-gradient-to-r from-lime-400 via-yellow-300 to-lime-400 bg-[length:200%_100%] px-5 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_25px_rgba(163,230,53,0.18)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] hover:shadow-[0_0_35px_rgba(163,230,53,0.35)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Slot
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </span>

                        <span className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/40 blur-sm transition-all duration-700 group-hover:left-[110%]" />
                    </Link>
                </nav>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:border-lime-400/40 hover:bg-white/15 sm:h-11 sm:w-11 sm:rounded-xl lg:hidden"
                >
                    <div className="relative flex h-4 w-5 items-center justify-center sm:h-5 sm:w-6">
                        <span
                            className={`absolute h-0.5 w-5 rounded-full bg-white transition-all duration-300 sm:w-6 ${open ? "rotate-45" : "-translate-y-1.5"
                                }`}
                        />

                        <span
                            className={`absolute h-0.5 w-5 rounded-full bg-lime-300 transition-all duration-300 sm:w-6 ${open ? "opacity-0" : "opacity-100"
                                }`}
                        />

                        <span
                            className={`absolute h-0.5 w-5 rounded-full bg-white transition-all duration-300 sm:w-6 ${open ? "-rotate-45" : "translate-y-1.5"
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* ANIMATED LINE */}
            <div className="relative h-[2px] w-full overflow-hidden bg-white/5">
                <motion.div
                    className="absolute top-0 h-full w-[22%] min-w-[100px] rounded-full bg-gradient-to-r from-transparent via-lime-400 to-transparent shadow-[0_0_12px_rgba(163,230,53,0.8)]"
                    animate={{ x: ["-120%", "500%"] }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <motion.div
                    className="absolute top-0 h-full w-[12%] min-w-[70px] rounded-full bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent"
                    animate={{ x: ["-100%", "900%"] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.2,
                    }}
                />
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden border-b border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-2xl lg:hidden"
                    >
                        <div className="mx-auto w-full max-w-[1500px] px-3 pb-3 pt-2 sm:px-6 sm:pb-5 sm:pt-3">
                            <div className="grid gap-1 sm:gap-1.5">
                                {links.map(([name, path], index) => {
                                    const active = loc.pathname === path;

                                    return (
                                        <motion.div
                                            key={path}
                                            initial={{
                                                opacity: 0,
                                                x: -12,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            transition={{
                                                delay: index * 0.035,
                                                duration: 0.22,
                                            }}
                                            whileHover={{ x: 3 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Link
                                                to={path}
                                                onClick={closeMenu}
                                                className={`
                                                    group flex items-center justify-between
                                                    rounded-lg border
                                                    px-3 py-2
                                                    text-xs font-bold
                                                    transition-all duration-200
                                                    sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm
                                                    ${active
                                                        ? "border-lime-400/20 bg-lime-400/10 text-lime-300"
                                                        : "border-transparent text-white/75 hover:border-white/10 hover:bg-white/5 hover:text-white"
                                                    }
                                                `}
                                            >
                                                <span className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                                                    <span
                                                        className={`
                                                            flex h-6 w-6 shrink-0
                                                            items-center justify-center
                                                            rounded-md text-[9px] font-black
                                                            transition-all duration-200
                                                            group-hover:rotate-3 group-hover:scale-105
                                                            sm:h-7 sm:w-7 sm:rounded-lg sm:text-[10px]
                                                            ${active
                                                                ? "bg-lime-400 text-slate-950"
                                                                : "bg-white/5 text-slate-500 group-hover:bg-white/10 group-hover:text-lime-300"
                                                            }
                                                        `}
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>

                                                    <span className="truncate">
                                                        {name}
                                                    </span>
                                                </span>

                                                <span
                                                    className={`
                                                        ml-2 text-base
                                                        transition-all duration-200
                                                        group-hover:translate-x-1
                                                        ${active
                                                            ? "text-lime-300"
                                                            : "text-white/25 group-hover:text-lime-300"
                                                        }
                                                    `}
                                                >
                                                    →
                                                </span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                {/* MOBILE BOOK BUTTON */}
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: links.length * 0.035 + 0.03,
                                        duration: 0.25,
                                    }}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="pt-1.5 sm:pt-2"
                                >
                                    <Link
                                        to="/explore"
                                        onClick={closeMenu}
                                        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-lime-400 via-yellow-300 to-lime-400 px-4 py-2.5 text-xs font-black text-slate-950 shadow-[0_0_20px_rgba(163,230,53,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] sm:rounded-xl sm:py-3.5 sm:text-sm"
                                    >
                                        Book Your Slot
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

import {
    ArrowLeft,
    ArrowRight,
    Eye,
    EyeOff,
    ShieldCheck,
    LockKeyhole,
    UserRound,
} from "lucide-react";

export default function AdminLogin() {
    const { adminLogin } = useApp();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = (event) => {
        event.preventDefault();
        setError("");

        const normalizedUsername = username.trim().toLowerCase();

        if (!normalizedUsername || !password) {
            setError("Please enter your username and password.");
            return;
        }

        setIsSubmitting(true);

        try {
            const result = adminLogin(normalizedUsername, password);

            if (result?.success) {
                navigate("/admin");
            } else {
                setError(result?.message || "Invalid username or password.");
            }
        } catch (error) {
            setError(error?.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-10">
            {/* Background effects */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/20 blur-[100px] sm:h-[550px] sm:w-[550px] sm:blur-[130px]" />

            <div className="pointer-events-none absolute left-[8%] top-[18%] h-32 w-32 animate-[pulseGlow_5s_ease-in-out_infinite] rounded-full bg-lime-300/15 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[12%] right-[8%] h-40 w-40 animate-[pulseGlow_7s_ease-in-out_infinite_reverse] rounded-full bg-emerald-200/20 blur-3xl" />

            <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 animate-[float_7s_ease-in-out_infinite] rounded-full border border-lime-500/10 sm:h-80 sm:w-80" />

            <div className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 animate-[float_9s_ease-in-out_infinite_reverse] rounded-full border border-lime-500/10 sm:h-96 sm:w-96" />

            <div className="pointer-events-none absolute left-0 top-1/3 h-px w-20 bg-gradient-to-r from-transparent to-lime-500/20 sm:w-40" />

            <div className="pointer-events-none absolute right-0 top-2/3 h-px w-20 bg-gradient-to-l from-transparent to-lime-500/20 sm:w-40" />

            <div className="pointer-events-none absolute left-[15%] top-[70%] h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400/40" />

            <div className="pointer-events-none absolute right-[18%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-lime-500/30" />

            {/* Back to website */}
            <button
                type="button"
                onClick={() => navigate("/")}
                className="group absolute left-4 top-4 z-30 flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs font-bold text-slate-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-lime-400 hover:bg-white hover:text-slate-900 hover:shadow-md sm:left-7 sm:top-7 sm:px-4 sm:py-2.5 sm:text-sm"
            >
                <ArrowLeft
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                <span>Back to Website</span>
            </button>

            {/* Login wrapper */}
            <div className="relative z-10 w-full max-w-[430px] animate-[loginIn_.7s_ease-out]">
                {/* Animated border */}
                <div className="absolute -inset-[2px] overflow-hidden rounded-[2rem]">
                    <div className="absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 animate-[borderSpin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_35deg,rgba(132,204,22,0.08)_55deg,rgba(132,204,22,0.95)_90deg,rgba(163,230,53,0.8)_120deg,transparent_155deg,transparent_360deg)]" />

                    <div className="absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 animate-[borderSpinReverse_7s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0deg,transparent_120deg,rgba(132,204,22,0.35)_170deg,transparent_215deg,transparent_360deg)]" />
                </div>

                {/* Login card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_25px_80px_rgba(15,23,42,0.15)] sm:p-7 md:p-8">
                    <div className="pointer-events-none absolute inset-[1px] rounded-[2rem] border border-lime-400/10" />

                    {/* Animated top line */}
                    <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden bg-slate-100">
                        <div className="h-full w-1/3 animate-[lineMove_2s_linear_infinite] bg-lime-400 shadow-[0_0_18px_rgba(132,204,22,0.8)]" />
                    </div>

                    {/* Brand */}
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-950 shadow-lg sm:h-11 sm:w-11">
                                <ShieldCheck
                                    size={22}
                                    className="relative z-10 text-lime-400"
                                />
                                <div className="absolute inset-0 animate-pulse bg-lime-400/10" />
                                <div className="absolute inset-0 animate-[iconShine_3s_linear_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            </div>

                            <div className="min-w-0">
                                <div className="font-display text-lg font-black tracking-tight text-slate-950 sm:text-xl">
                                    Turf<span className="text-lime-600">Zone</span>
                                </div>

                                <p className="truncate text-[8px] font-bold uppercase tracking-[0.16em] text-slate-400 sm:text-[9px]">
                                    Sports Management
                                </p>
                            </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-lime-100 bg-lime-50 px-2 py-1.5 sm:px-2.5">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />
                            </span>

                            <span className="text-[8px] font-black uppercase tracking-wide text-lime-700 sm:text-[9px]">
                                Admin
                            </span>
                        </div>
                    </div>

                    {/* Admin access heading */}
                    <div className="mt-7 sm:mt-8">
                        <div className="mb-4 flex items-center gap-3 sm:mb-5">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime-100 transition-all duration-300 hover:rotate-6 hover:scale-110 sm:h-10 sm:w-10">
                                <LockKeyhole size={18} className="text-lime-700" />
                            </div>

                            <div>
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-lime-700 sm:text-[10px]">
                                    Admin Access
                                </p>

                                <div className="mt-1.5 flex items-center gap-1">
                                    <span className="h-1 w-1 animate-pulse rounded-full bg-lime-400" />

                                    <span className="relative h-1 w-12 overflow-hidden rounded-full bg-lime-400/20 sm:w-14">
                                        <span className="absolute left-0 top-0 h-full w-1/2 animate-[miniLine_1.4s_linear_infinite] rounded-full bg-lime-400 shadow-[0_0_8px_rgba(132,204,22,0.8)]" />
                                    </span>

                                    <span className="h-1 w-2 rounded-full bg-lime-400/50" />
                                </div>
                            </div>
                        </div>

                        <h1 className="font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                            Welcome back.
                        </h1>

                        <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                            Sign in to manage your turfs, bookings and enquiries.
                        </p>
                    </div>

                    {/* Login form */}
                    <form onSubmit={submit} className="mt-6 space-y-4 sm:mt-7">
                        {/* Username */}
                        <div>
                            <label
                                htmlFor="admin-username"
                                className="mb-2 block text-[11px] font-bold text-slate-600 sm:text-xs"
                            >
                                Username
                            </label>

                            <div className="group relative">
                                <UserRound
                                    size={16}
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 group-focus-within:text-lime-600 sm:left-4"
                                />

                                <input
                                    id="admin-username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    value={username}
                                    onChange={(event) => {
                                        setUsername(event.target.value);
                                        setError("");
                                    }}
                                    required
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-xs font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-lime-400 focus:bg-white focus:ring-4 focus:ring-lime-400/10 sm:py-3.5 sm:pl-11 sm:text-sm"
                                    placeholder="Enter admin username"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="admin-password"
                                className="mb-2 block text-[11px] font-bold text-slate-600 sm:text-xs"
                            >
                                Password
                            </label>

                            <div className="group relative">
                                <LockKeyhole
                                    size={16}
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 group-focus-within:text-lime-600 sm:left-4"
                                />

                                <input
                                    id="admin-password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                        setError("");
                                    }}
                                    required
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-11 text-xs font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-lime-400 focus:bg-white focus:ring-4 focus:ring-lime-400/10 sm:py-3.5 sm:pl-11 sm:text-sm"
                                    placeholder="Enter admin password"
                                />

                                <button
                                    type="button"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    onClick={() =>
                                        setShowPassword((previous) => !previous)
                                    }
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition-all duration-200 hover:bg-slate-100 hover:text-slate-700 active:scale-90"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div
                                role="alert"
                                className="animate-[shake_.35s_ease-in-out] rounded-xl border border-rose-100 bg-rose-50 px-3.5 py-2.5 sm:px-4 sm:py-3"
                            >
                                <p className="text-[11px] font-bold text-rose-600 sm:text-xs">
                                    {error}
                                </p>
                            </div>
                        )}

                        {/* Sign in */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-slate-950 px-4 py-3 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:shadow-[0_12px_30px_rgba(15,23,42,0.20)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:py-3.5 sm:text-sm"
                        >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-500 group-hover:w-full" />

                            <span className="relative">
                                {isSubmitting ? "Signing In..." : "Sign In"}
                            </span>

                            {!isSubmitting && (
                                <ArrowRight
                                    size={16}
                                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                                />
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4 sm:mt-6">
                        <ShieldCheck
                            size={13}
                            className="mt-0.5 shrink-0 text-slate-400"
                        />

                        <p className="text-[9px] leading-4 text-slate-400 sm:text-[10px] sm:leading-5">
                            This demo uses fixed credentials in frontend code. Do not use
                            this authentication method for a production application.
                        </p>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes loginIn {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes borderSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes borderSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes lineMove {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(450%);
          }
        }

        @keyframes miniLine {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(220%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.15);
          }
        }

        @keyframes iconShine {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(150%);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
        </main>
    );
}
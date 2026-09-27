import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import {
    ArrowLeft,
    Eye,
    EyeOff,
    ShieldCheck,
    LockKeyhole,
    Mail,
    ArrowRight,
} from "lucide-react";

export default function AdminLogin() {
    const { setAdmin } = useApp();
    const nav = useNavigate();

    const [email, setEmail] = useState("admin@turfzone.com");
    const [password, setPassword] = useState("Admin@123");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        if (
            email === "admin@turfzone.com" &&
            password === "Admin@123"
        ) {
            setAdmin({ loggedIn: true, email });
            nav("/admin");
        } else {
            setError("Invalid demo credentials.");
        }
    };

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-10">

            {/* =====================================================
          LIGHT BACKGROUND
      ====================================================== */}

            {/* Main Lime Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/20 blur-[100px] sm:h-[550px] sm:w-[550px] sm:blur-[130px]" />

            {/* Secondary Glow */}
            <div className="pointer-events-none absolute left-[8%] top-[18%] h-32 w-32 rounded-full bg-lime-300/15 blur-3xl animate-[pulseGlow_5s_ease-in-out_infinite]" />

            <div className="pointer-events-none absolute bottom-[12%] right-[8%] h-40 w-40 rounded-full bg-emerald-200/20 blur-3xl animate-[pulseGlow_7s_ease-in-out_infinite_reverse]" />

            {/* Floating Circle 1 */}
            <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full border border-lime-500/10 animate-[float_7s_ease-in-out_infinite] sm:h-80 sm:w-80" />

            {/* Floating Circle 2 */}
            <div className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full border border-lime-500/10 animate-[float_9s_ease-in-out_infinite_reverse] sm:h-96 sm:w-96" />

            {/* Decorative Lines */}
            <div className="pointer-events-none absolute left-0 top-1/3 h-px w-20 bg-gradient-to-r from-transparent to-lime-500/20 sm:w-40" />

            <div className="pointer-events-none absolute right-0 top-2/3 h-px w-20 bg-gradient-to-l from-transparent to-lime-500/20 sm:w-40" />

            {/* Small Decorative Dots */}
            <div className="pointer-events-none absolute left-[15%] top-[70%] h-1.5 w-1.5 rounded-full bg-lime-400/40 animate-pulse" />

            <div className="pointer-events-none absolute right-[18%] top-[25%] h-2 w-2 rounded-full bg-lime-500/30 animate-pulse" />


            {/* =====================================================
          BACK TO WEBSITE
      ====================================================== */}

            <button
                onClick={() => nav("/")}
                className="
          group
          absolute
          left-4
          top-4
          z-30
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-200
          bg-white/80
          px-3
          py-2
          text-xs
          font-bold
          text-slate-600
          shadow-sm
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-x-1
          hover:border-lime-400
          hover:bg-white
          hover:text-slate-900
          hover:shadow-md
          sm:left-7
          sm:top-7
          sm:px-4
          sm:py-2.5
          sm:text-sm
        "
            >
                <ArrowLeft
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                />

                <span>Back to Website</span>
            </button>


            {/* =====================================================
          LOGIN WRAPPER
      ====================================================== */}

            <div
                className="
          relative
          z-10
          w-full
          max-w-[430px]
          animate-[loginIn_.7s_ease-out]
        "
            >

                {/* =====================================================
            CONTINUOUS ANIMATED BORDER
        ====================================================== */}

                <div className="absolute -inset-[2px] overflow-hidden rounded-[2rem]">

                    {/* Main Rotating Border */}
                    <div
                        className="
              absolute
              left-1/2
              top-1/2
              h-[180%]
              w-[180%]
              -translate-x-1/2
              -translate-y-1/2
              animate-[borderSpin_4s_linear_infinite]
              bg-[conic-gradient(from_0deg,transparent_0deg,transparent_35deg,rgba(132,204,22,0.08)_55deg,rgba(132,204,22,0.95)_90deg,rgba(163,230,53,0.8)_120deg,transparent_155deg,transparent_360deg)]
            "
                    />

                    {/* Secondary Rotating Light */}
                    <div
                        className="
              absolute
              left-1/2
              top-1/2
              h-[180%]
              w-[180%]
              -translate-x-1/2
              -translate-y-1/2
              animate-[borderSpinReverse_7s_linear_infinite]
              bg-[conic-gradient(from_180deg,transparent_0deg,transparent_120deg,rgba(132,204,22,0.35)_170deg,transparent_215deg,transparent_360deg)]
            "
                    />

                </div>


                {/* =====================================================
            LOGIN CARD
        ====================================================== */}

                <div
                    className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-200
            bg-white
            p-5
            shadow-[0_25px_80px_rgba(15,23,42,0.15)]
            sm:p-7
            md:p-8
          "
                >

                    {/* Inner Border */}
                    <div className="pointer-events-none absolute inset-[1px] rounded-[2rem] border border-lime-400/10" />


                    {/* =================================================
              TOP ANIMATED LINE
          ================================================== */}

                    <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden bg-slate-100">

                        <div
                            className="
                h-full
                w-1/3
                animate-[lineMove_2s_linear_infinite]
                bg-lime-400
                shadow-[0_0_18px_rgba(132,204,22,0.8)]
              "
                        />

                    </div>


                    {/* =================================================
              LOGO / BRAND
          ================================================== */}

                    <div className="flex items-center justify-between gap-3">

                        <div className="flex min-w-0 items-center gap-3">

                            {/* Logo Icon */}
                            <div
                                className="
                  relative
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-slate-950
                  shadow-lg
                  sm:h-11
                  sm:w-11
                "
                            >

                                <ShieldCheck
                                    size={22}
                                    className="relative z-10 text-lime-400"
                                />

                                <div className="absolute inset-0 animate-pulse bg-lime-400/10" />

                                {/* Icon Shine */}
                                <div className="absolute inset-0 animate-[iconShine_3s_linear_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            </div>


                            {/* Brand */}
                            <div className="min-w-0">

                                <div className="font-display text-lg font-black tracking-tight text-slate-950 sm:text-xl">
                                    Turf<span className="text-lime-600">Zone</span>
                                </div>

                                <p className="truncate text-[8px] font-bold uppercase tracking-[0.16em] text-slate-400 sm:text-[9px]">
                                    Sports Management
                                </p>

                            </div>

                        </div>


                        {/* Secure Status */}
                        <div
                            className="
                flex
                shrink-0
                items-center
                gap-1.5
                rounded-full
                border
                border-lime-100
                bg-lime-50
                px-2
                py-1.5
                sm:px-2.5
              "
                        >

                            <span className="relative flex h-1.5 w-1.5">

                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />

                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />

                            </span>

                            <span className="text-[8px] font-black uppercase tracking-wide text-lime-700 sm:text-[9px]">
                                Secure
                            </span>

                        </div>

                    </div>


                    {/* =================================================
              ADMIN ACCESS
          ================================================== */}

                    <div className="mt-7 sm:mt-8">

                        <div className="mb-4 flex items-center gap-3 sm:mb-5">

                            {/* Lock Icon */}
                            <div
                                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-lime-100
                  transition-all
                  duration-300
                  hover:rotate-6
                  hover:scale-110
                  sm:h-10
                  sm:w-10
                "
                            >

                                <LockKeyhole
                                    size={18}
                                    className="text-lime-700"
                                />

                            </div>


                            <div>

                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-lime-700 sm:text-[10px]">
                                    Admin Access
                                </p>


                                {/* Continuous Loop Line */}
                                <div className="mt-1.5 flex items-center gap-1">

                                    <span className="h-1 w-1 animate-pulse rounded-full bg-lime-400" />

                                    <span className="relative h-1 w-12 overflow-hidden rounded-full bg-lime-400/20 sm:w-14">

                                        <span
                                            className="
                        absolute
                        left-0
                        top-0
                        h-full
                        w-1/2
                        rounded-full
                        bg-lime-400
                        shadow-[0_0_8px_rgba(132,204,22,0.8)]
                        animate-[miniLine_1.4s_linear_infinite]
                      "
                                        />

                                    </span>

                                    <span className="h-1 w-2 rounded-full bg-lime-400/50" />

                                </div>

                            </div>

                        </div>


                        {/* Heading */}
                        <h1 className="font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                            Welcome back.
                        </h1>

                        <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                            Sign in to manage your turfs, bookings and enquiries.
                        </p>

                    </div>


                    {/* =================================================
              LOGIN FORM
          ================================================== */}

                    <form
                        onSubmit={submit}
                        className="mt-6 space-y-4 sm:mt-7"
                    >

                        {/* EMAIL */}
                        <div>

                            <label className="mb-2 block text-[11px] font-bold text-slate-600 sm:text-xs">
                                Email Address
                            </label>

                            <div className="group relative">

                                <Mail
                                    size={16}
                                    className="
                    absolute
                    left-3.5
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    transition-colors
                    duration-200
                    group-focus-within:text-lime-600
                    sm:left-4
                  "
                                />

                                <input
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError("");
                                    }}
                                    className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-3
                    pl-10
                    pr-4
                    text-xs
                    font-medium
                    text-slate-900
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-lime-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-lime-400/10
                    sm:py-3.5
                    sm:pl-11
                    sm:text-sm
                  "
                                    placeholder="Enter admin email"
                                />

                            </div>

                        </div>


                        {/* PASSWORD */}
                        <div>

                            <label className="mb-2 block text-[11px] font-bold text-slate-600 sm:text-xs">
                                Password
                            </label>

                            <div className="group relative">

                                <LockKeyhole
                                    size={16}
                                    className="
                    absolute
                    left-3.5
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    transition-colors
                    duration-200
                    group-focus-within:text-lime-600
                    sm:left-4
                  "
                                />

                                <input
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError("");
                                    }}
                                    type={showPassword ? "text" : "password"}
                                    className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-3
                    pl-10
                    pr-11
                    text-xs
                    font-medium
                    text-slate-900
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-lime-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-lime-400/10
                    sm:py-3.5
                    sm:pl-11
                    sm:text-sm
                  "
                                    placeholder="Enter password"
                                />


                                {/* Show Password */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="
                    absolute
                    right-2.5
                    top-1/2
                    -translate-y-1/2
                    rounded-lg
                    p-1.5
                    text-slate-400
                    transition-all
                    duration-200
                    hover:bg-slate-100
                    hover:text-slate-700
                    active:scale-90
                  "
                                >

                                    {showPassword ? (
                                        <EyeOff size={16} />
                                    ) : (
                                        <Eye size={16} />
                                    )}

                                </button>

                            </div>

                        </div>


                        {/* ERROR */}
                        {error && (
                            <div className="animate-[shake_.35s_ease-in-out] rounded-xl border border-rose-100 bg-rose-50 px-3.5 py-2.5 sm:px-4 sm:py-3">

                                <p className="text-[11px] font-bold text-rose-600 sm:text-xs">
                                    {error}
                                </p>

                            </div>
                        )}


                        {/* =================================================
                SIGN IN BUTTON
            ================================================== */}

                        <button
                            type="submit"
                            className="
                group
                relative
                flex
                w-full
                items-center
                justify-center
                gap-2
                overflow-hidden
                rounded-xl
                bg-slate-950
                px-4
                py-3
                text-xs
                font-bold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-slate-900
                hover:shadow-[0_12px_30px_rgba(15,23,42,0.20)]
                active:translate-y-0
                sm:py-3.5
                sm:text-sm
              "
                        >

                            {/* Button Shine */}
                            <span
                                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
                            />

                            {/* Button Moving Lime Line */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-500 group-hover:w-full" />

                            <span className="relative">
                                Sign In
                            </span>

                            <ArrowRight
                                size={16}
                                className="relative transition-transform duration-300 group-hover:translate-x-1"
                            />

                        </button>

                    </form>


                    {/* =================================================
              FOOTER
          ================================================== */}

                    <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4 sm:mt-6">

                        <ShieldCheck
                            size={13}
                            className="mt-0.5 shrink-0 text-slate-400"
                        />

                        <p className="text-[9px] leading-4 text-slate-400 sm:text-[10px] sm:leading-5">
                            Frontend demonstration only. Local Storage authentication
                            is not secure for production use.
                        </p>

                    </div>

                </div>
            </div>


            {/* =====================================================
          ANIMATIONS
      ====================================================== */}

            <style>{`
        /* Login Entrance */
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


        /* Main Border Rotation */
        @keyframes borderSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }


        /* Secondary Border Rotation */
        @keyframes borderSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }


        /* Top Moving Line */
        @keyframes lineMove {
          0% {
            transform: translateX(-150%);
          }

          100% {
            transform: translateX(450%);
          }
        }


        /* Admin Access Line */
        @keyframes miniLine {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(220%);
          }
        }


        /* Floating Background Circles */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }


        /* Background Glow */
        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.15);
          }
        }


        /* Logo Shine */
        @keyframes iconShine {
          0% {
            transform: translateX(-150%);
          }

          100% {
            transform: translateX(150%);
          }
        }


        /* Error Shake */
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }

          25% {
            transform: translateX(-5px);
          }

          75% {
            transform: translateX(5px);
          }
        }
      `}</style>

        </main>
    );
}
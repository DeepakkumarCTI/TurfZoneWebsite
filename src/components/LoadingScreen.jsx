
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2500;
        const intervalTime = 25;
        const increment = (intervalTime / duration) * 100;

        let completeTimeout;

        const interval = setInterval(() => {
            setProgress((previous) => {
                const next = Math.min(previous + increment, 100);

                if (next >= 100) {
                    clearInterval(interval);

                    completeTimeout = setTimeout(() => {
                        onComplete?.();
                    }, 500);
                }

                return next;
            });
        }, intervalTime);

        return () => {
            clearInterval(interval);
            clearTimeout(completeTimeout);
        };
    }, [onComplete]);

    return (
        <div className="loading-screen fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-5 text-white">

            {/* Animated Background */}
            <div className="loading-orb loading-orb-one pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lime-400/15 blur-3xl sm:h-96 sm:w-96" />

            <div className="loading-orb loading-orb-two pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl sm:h-96 sm:w-96" />

            <div className="loading-orb loading-orb-three pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />

            {/* Animated Background Grid */}
            <div
                className="loading-grid pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(163,230,53,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(163,230,53,.2) 1px,transparent 1px)",
                    backgroundSize: "45px 45px",
                }}
            />

            {/* Decorative Floating Circles */}
            <div className="loading-particle loading-particle-one pointer-events-none absolute left-[12%] top-[20%] h-3 w-3 rounded-full bg-lime-300/70 blur-[1px]" />

            <div className="loading-particle loading-particle-two pointer-events-none absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-sky-300/70" />

            <div className="loading-particle loading-particle-three pointer-events-none absolute bottom-[22%] left-[20%] h-2.5 w-2.5 rounded-full bg-orange-300/70" />

            <div className="loading-particle loading-particle-four pointer-events-none absolute bottom-[18%] right-[20%] h-3 w-3 rounded-full bg-purple-300/70" />

            {/* Loading Content */}
            <div className="loading-content relative z-10 flex w-full max-w-sm flex-col items-center text-center">

                {/* Animated Logo */}
                <div className="relative mb-8 flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">

                    {/* Outer Rotating Ring */}
                    <div className="loading-ring absolute inset-0 rounded-full border-2 border-transparent border-t-lime-400 border-r-sky-400" />

                    {/* Inner Rotating Ring */}
                    <div className="loading-ring-reverse absolute inset-2 rounded-full border border-transparent border-b-orange-400 border-l-purple-400" />

                    {/* Glow */}
                    <div className="loading-logo-glow absolute inset-5 rounded-full bg-lime-400/20 blur-xl" />

                    {/* Logo Background */}
                    <div className="absolute inset-4 rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_50px_rgba(163,230,53,0.12)] backdrop-blur-xl" />

                    {/* Logo */}
                    <img
                        src="/images/logo.png"
                        alt="TurfZone Logo"
                        className="loading-logo relative z-10 h-16 w-16 object-contain sm:h-20 sm:w-20"
                    />

                </div>

                {/* Brand Name */}
                <h1 className="loading-title font-display text-3xl font-black tracking-tight sm:text-4xl">
                    TurfZone
                    <span className="ml-2 bg-gradient-to-r from-lime-300 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                        Sports Arena
                    </span>
                </h1>

                {/* Tagline */}
                <p className="loading-tagline mt-3 text-xs font-bold uppercase tracking-[0.25em] text-lime-300 sm:text-sm">
                    Play. Book. Enjoy.
                </p>

                {/* Loading Text */}
                <div className="mt-10 flex items-center gap-2">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />

                    <p className="text-sm font-medium text-slate-300">
                        Preparing your game
                    </p>

                    {/* Animated Dots */}
                    <div className="flex items-center gap-1">
                        <span className="loading-dot h-1 w-1 rounded-full bg-lime-300" />
                        <span className="loading-dot h-1 w-1 rounded-full bg-lime-300" />
                        <span className="loading-dot h-1 w-1 rounded-full bg-lime-300" />
                    </div>

                </div>

                {/* Progress Bar */}
                <div className="relative mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">

                    {/* Progress Fill */}
                    <div
                        className="loading-progress-fill relative h-full rounded-full bg-gradient-to-r from-lime-400 via-yellow-300 to-orange-400 transition-[width] duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                    >
                        {/* Moving Shine */}
                        <div className="loading-shimmer absolute inset-0" />
                    </div>

                </div>

                {/* Progress Percentage */}
                <div className="mt-3 flex w-full items-center justify-between">

                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        Loading Experience
                    </p>

                    <p className="text-xs font-black tabular-nums text-lime-300">
                        {Math.round(progress)}%
                    </p>

                </div>

                {/* Bottom Text */}
                <p className="loading-bottom-text mt-10 text-xs text-slate-500">
                    Your next game starts here.
                </p>

            </div>

            {/* Animation Styles */}
            <style>{`
                .loading-content {
                    animation: contentReveal 1s cubic-bezier(.2,.8,.2,1) both;
                }

                .loading-ring {
                    animation: ringRotate 3s linear infinite;
                }

                .loading-ring-reverse {
                    animation: ringRotateReverse 5s linear infinite;
                }

                .loading-logo {
                    animation: logoFloat 3s ease-in-out infinite;
                    filter: drop-shadow(0 0 12px rgba(163,230,53,.2));
                }

                .loading-logo-glow {
                    animation: logoGlow 2.5s ease-in-out infinite;
                }

                .loading-orb-one {
                    animation: orbFloatOne 8s ease-in-out infinite alternate;
                }

                .loading-orb-two {
                    animation: orbFloatTwo 10s ease-in-out infinite alternate;
                }

                .loading-orb-three {
                    animation: orbPulse 5s ease-in-out infinite;
                }

                .loading-grid {
                    animation: gridMove 20s linear infinite;
                }

                .loading-particle {
                    animation: particleFloat 4s ease-in-out infinite;
                }

                .loading-particle-two {
                    animation-delay: .5s;
                }

                .loading-particle-three {
                    animation-delay: 1s;
                }

                .loading-particle-four {
                    animation-delay: 1.5s;
                }

                .loading-title {
                    animation: titleReveal .9s .2s both;
                }

                .loading-tagline {
                    animation: titleReveal .9s .4s both;
                }

                .loading-bottom-text {
                    animation: titleReveal .9s .7s both;
                }

                .loading-dot {
                    animation: dotBounce 1s ease-in-out infinite;
                }

                .loading-dot:nth-child(2) {
                    animation-delay: .15s;
                }

                .loading-dot:nth-child(3) {
                    animation-delay: .3s;
                }

                .loading-shimmer {
                    background: linear-gradient(
                        110deg,
                        transparent 20%,
                        rgba(255,255,255,.65) 50%,
                        transparent 80%
                    );
                    animation: shimmerMove 1.5s linear infinite;
                }

                @keyframes contentReveal {
                    from {
                        opacity: 0;
                        transform: translateY(25px) scale(.96);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes ringRotate {
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes ringRotateReverse {
                    to {
                        transform: rotate(-360deg);
                    }
                }

                @keyframes logoFloat {
                    0%, 100% {
                        transform: translateY(0) scale(1);
                    }
                    50% {
                        transform: translateY(-7px) scale(1.04);
                    }
                }

                @keyframes logoGlow {
                    0%, 100% {
                        opacity: .4;
                        transform: scale(.9);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.15);
                    }
                }

                @keyframes orbFloatOne {
                    from {
                        transform: translate(0, 0);
                    }
                    to {
                        transform: translate(50px, 35px);
                    }
                }

                @keyframes orbFloatTwo {
                    from {
                        transform: translate(0, 0);
                    }
                    to {
                        transform: translate(-45px, -35px);
                    }
                }

                @keyframes orbPulse {
                    0%, 100% {
                        opacity: .3;
                        transform: scale(.8);
                    }
                    50% {
                        opacity: .8;
                        transform: scale(1.2);
                    }
                }

                @keyframes gridMove {
                    from {
                        background-position: 0 0;
                    }
                    to {
                        background-position: 45px 45px;
                    }
                }

                @keyframes particleFloat {
                    0%, 100% {
                        transform: translateY(0) scale(1);
                        opacity: .5;
                    }
                    50% {
                        transform: translateY(-18px) scale(1.4);
                        opacity: 1;
                    }
                }

                @keyframes titleReveal {
                    from {
                        opacity: 0;
                        transform: translateY(12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes dotBounce {
                    0%, 60%, 100% {
                        transform: translateY(0);
                        opacity: .4;
                    }
                    30% {
                        transform: translateY(-4px);
                        opacity: 1;
                    }
                }

                @keyframes shimmerMove {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(100%);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .loading-screen *,
                    .loading-screen *::before,
                    .loading-screen *::after {
                        animation-duration: .01ms !important;
                        animation-iteration-count: 1 !important;
                        scroll-behavior: auto !important;
                    }
                }
            `}</style>

        </div>
    );
}
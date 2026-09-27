export default function Loader({ label = "Loading..." }) {
    return (
        <div className="flex min-h-[220px] items-center justify-center overflow-hidden bg-transparent px-5">
            <div className="relative flex flex-col items-center text-center">

                {/* =====================================================
            OUTER GLOW
        ===================================================== */}
                <div
                    className="
            absolute top-2
            h-32 w-32
            rounded-full
            bg-lime-400/10
            blur-2xl
            animate-[loaderGlow_2s_ease-in-out_infinite]
          "
                />

                {/* =====================================================
            ANIMATED OUTER RING
        ===================================================== */}
                <div
                    className="
            absolute
            h-28 w-28
            rounded-full
            border border-lime-400/10
            animate-[loaderPulse_2s_ease-in-out_infinite]
          "
                />

                {/* =====================================================
            SPINNING RING
        ===================================================== */}
                <div
                    className="
            relative
            flex h-24 w-24
            items-center justify-center
            rounded-full
            border-2 border-slate-200/70
          "
                >
                    <div
                        className="
              absolute inset-[-3px]
              rounded-full
              border-2
              border-transparent
              border-t-lime-400
              border-r-yellow-300
              animate-[loaderSpin_1.2s_linear_infinite]
            "
                    />

                    {/* =================================================
              LOGO
          ================================================= */}
                    <div
                        className="
              relative z-10
              flex h-16 w-16
              items-center justify-center
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-[0_8px_30px_rgba(15,23,42,0.15)]
              animate-[logoFloat_2s_ease-in-out_infinite]
            "
                    >
                        <img
                            src="/images/logo.png"
                            alt="TurfZone"
                            className="
                h-12 w-12
                object-contain
                animate-[logoPulse_2s_ease-in-out_infinite]
              "
                        />

                        {/* Logo shine */}
                        <span
                            className="
                pointer-events-none
                absolute inset-y-0 -left-10
                w-5 rotate-12
                bg-white/70
                blur-sm
                animate-[logoShine_2.5s_ease-in-out_infinite]
              "
                        />
                    </div>

                    {/* =================================================
              ORBIT DOTS
          ================================================= */}
                    <span
                        className="
              absolute -top-1 left-1/2
              h-2.5 w-2.5
              -translate-x-1/2
              rounded-full
              bg-lime-400
              shadow-[0_0_12px_rgba(163,230,53,0.9)]
              animate-[orbitTop_1.8s_linear_infinite]
            "
                    />

                    <span
                        className="
              absolute -bottom-1 left-1/2
              h-2 w-2
              -translate-x-1/2
              rounded-full
              bg-yellow-300
              shadow-[0_0_12px_rgba(253,224,71,0.9)]
              animate-[orbitBottom_1.8s_linear_infinite]
            "
                    />
                </div>

                {/* =====================================================
            BRAND
        ===================================================== */}
                <div className="mt-5">
                    <p
                        className="
              font-display
              text-lg
              font-black
              tracking-tight
              text-slate-950
            "
                    >
                        TurfZone
                    </p>

                    <p
                        className="
              mt-1
              text-[10px]
              font-black
              uppercase
              tracking-[0.25em]
              text-lime-600
            "
                    >
                        Play • Book • Enjoy
                    </p>
                </div>

                {/* =====================================================
            LOADING LABEL
        ===================================================== */}
                <p
                    className="
            mt-4
            text-sm
            font-semibold
            text-slate-500
            animate-[textFade_1.5s_ease-in-out_infinite]
          "
                >
                    {label}
                </p>

                {/* =====================================================
            ANIMATED PROGRESS LINE
        ===================================================== */}
                <div className="mt-4 h-1 w-32 overflow-hidden rounded-full bg-slate-200">
                    <div
                        className="
              h-full
              w-1/2
              rounded-full
              bg-gradient-to-r
              from-lime-400
              via-yellow-300
              to-lime-400
              animate-[loadingLine_1.4s_ease-in-out_infinite]
            "
                    />
                </div>

                {/* =====================================================
            DOT LOADING
        ===================================================== */}
                <div className="mt-3 flex items-center justify-center gap-1.5">
                    {[0, 1, 2].map((dot) => (
                        <span
                            key={dot}
                            className="
                h-1.5 w-1.5
                rounded-full
                bg-lime-400
              "
                            style={{
                                animation: `dotBounce 1.2s ease-in-out ${dot * 0.15
                                    }s infinite`,
                            }}
                        />
                    ))}
                </div>

                {/* =====================================================
            ANIMATIONS
        ===================================================== */}
                <style>{`
          @keyframes loaderSpin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes loaderGlow {
            0%, 100% {
              transform: scale(0.85);
              opacity: 0.35;
            }
            50% {
              transform: scale(1.15);
              opacity: 0.8;
            }
          }

          @keyframes loaderPulse {
            0%, 100% {
              transform: scale(0.9);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.15);
              opacity: 0.8;
            }
          }

          @keyframes logoFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }

          @keyframes logoPulse {
            0%, 100% {
              transform: scale(0.96);
            }
            50% {
              transform: scale(1.05);
            }
          }

          @keyframes logoShine {
            0% {
              left: -40px;
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            55%, 100% {
              left: 120%;
              opacity: 0;
            }
          }

          @keyframes orbitTop {
            0% {
              transform: translate(-50%, 0) rotate(0deg);
            }
            25% {
              transform: translate(25px, 8px) rotate(90deg);
            }
            50% {
              transform: translate(0, 24px) rotate(180deg);
            }
            75% {
              transform: translate(-25px, 8px) rotate(270deg);
            }
            100% {
              transform: translate(-50%, 0) rotate(360deg);
            }
          }

          @keyframes orbitBottom {
            0% {
              transform: translate(-50%, 0) rotate(180deg);
            }
            25% {
              transform: translate(-25px, -8px) rotate(270deg);
            }
            50% {
              transform: translate(0, -24px) rotate(360deg);
            }
            75% {
              transform: translate(25px, -8px) rotate(450deg);
            }
            100% {
              transform: translate(-50%, 0) rotate(540deg);
            }
          }

          @keyframes textFade {
            0%, 100% {
              opacity: 0.45;
            }
            50% {
              opacity: 1;
            }
          }

          @keyframes loadingLine {
            0% {
              transform: translateX(-120%);
            }
            50% {
              transform: translateX(70%);
            }
            100% {
              transform: translateX(220%);
            }
          }

          @keyframes dotBounce {
            0%, 60%, 100% {
              transform: translateY(0);
              opacity: 0.35;
            }
            30% {
              transform: translateY(-5px);
              opacity: 1;
            }
          }
        `}</style>
            </div>
        </div>
    );
}
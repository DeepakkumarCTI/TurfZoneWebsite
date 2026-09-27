
import { slots, availability } from "../utils/bookingUtils";
import { Clock3, Check, LockKeyhole } from "lucide-react";

export default function TimeSlotPicker({
  turfId,
  date,
  duration,
  value,
  onChange,
}) {
  return (
    <div className="w-full min-w-0">
      {/* Header */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime-100 text-lime-700">
            <Clock3 className="h-4 w-4" />
          </div>

          <div>
            <p className="text-xs font-black text-slate-800 sm:text-sm">
              Available Time Slots
            </p>
            <p className="text-[10px] text-slate-400 sm:text-xs">
              Select a starting slot
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold sm:text-xs">
          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
            Available
          </div>

          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            Booked
          </div>

          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
            Selected
          </div>
        </div>
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
        {slots.map((slot, index) => {
          const isAvailable = availability(
            turfId,
            date,
            index,
            duration
          );

          const isSelected = value === index;

          return (
            <SlotButton
              key={slot}
              slot={slot}
              isAvailable={isAvailable}
              isSelected={isSelected}
              onClick={() => onChange(index)}
            />
          );
        })}
      </div>

      {/* Selected slot information */}
      <div
        className={`mt-4 rounded-2xl border p-3 transition-all duration-300 sm:p-4 ${value >= 0
            ? "border-lime-200 bg-lime-50"
            : "border-slate-200 bg-white"
          }`}
      >
        {value >= 0 ? (
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime-400 text-slate-950 shadow-sm">
              <Check className="h-4 w-4" strokeWidth={3} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-lime-700">
                Selected Start Time
              </p>
              <p className="truncate text-sm font-black text-slate-900 sm:text-base">
                {slots[value]}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Duration: {duration} hour{duration > 1 ? "s" : ""}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              <Clock3 className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-bold text-slate-700 sm:text-sm">
                No time slot selected
              </p>
              <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">
                Choose an available slot above
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slotPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(163, 230, 53, 0);
          }

          50% {
            box-shadow: 0 0 0 5px rgba(163, 230, 53, 0.1);
          }
        }

        @keyframes slotShine {
          0% {
            transform: translateX(-150%) skewX(-12deg);
          }

          100% {
            transform: translateX(350%) skewX(-12deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .slot-selected-animation,
          .slot-shine-animation {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function SlotButton({
  slot,
  isAvailable,
  isSelected,
  onClick,
}) {
  const disabled = !isAvailable && !isSelected;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-pressed={isSelected}
      aria-label={`${slot} - ${isSelected ? "Selected" : isAvailable ? "Available" : "Booked"
        }`}
      className={`
        group relative min-h-[68px] w-full min-w-0 overflow-hidden rounded-2xl
        border px-2.5 py-3 text-center transition-all duration-300
        sm:min-h-[74px] sm:px-3 sm:py-3.5
        ${isSelected
          ? "slot-selected-animation border-lime-400 bg-slate-950 text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)]"
          : isAvailable
            ? "border-slate-200 bg-white text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-lime-300 hover:bg-lime-50 hover:shadow-[0_8px_20px_rgba(163,230,53,0.12)] active:translate-y-0"
            : "cursor-not-allowed border-slate-100 bg-slate-100/80 text-slate-400"
        }
      `}
    >
      {/* Selected glow */}
      {isSelected && (
        <>
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.22),transparent_55%)]" />

          <span className="slot-shine-animation pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[slotShine_2.5s_linear_infinite]" />
        </>
      )}

      {/* Available hover effect */}
      {isAvailable && !isSelected && (
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-lime-100/0 via-lime-100/0 to-lime-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}

      <span className="relative z-10 flex h-full flex-col items-center justify-center">
        <span
          className={`text-xs font-black sm:text-sm ${isSelected
              ? "text-white"
              : isAvailable
                ? "text-slate-800"
                : "text-slate-400"
            }`}
        >
          {slot}
        </span>

        <span className="mt-1.5 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide sm:text-[10px]">
          {isSelected ? (
            <>
              <Check className="h-3 w-3 text-lime-400" strokeWidth={3} />
              <span className="text-lime-300">Selected</span>
            </>
          ) : isAvailable ? (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
              <span className="text-lime-700">Available</span>
            </>
          ) : (
            <>
              <LockKeyhole className="h-3 w-3" />
              <span className="text-slate-400">Booked</span>
            </>
          )}
        </span>
      </span>
    </button>
  );
}
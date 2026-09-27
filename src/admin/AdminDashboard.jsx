
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.06,
    },
  }),
};

const statusColors = {
  Confirmed: "from-emerald-400 to-teal-500",
  Pending: "from-amber-400 to-orange-500",
  Cancelled: "from-rose-400 to-pink-500",
  Completed: "from-blue-400 to-cyan-500",
};

export default function AdminDashboard() {
  const { turfs, bookings, enquiries } = useApp();

  const eligible = bookings.filter((booking) => booking.status !== "Cancelled");

  const revenue = eligible.reduce(
    (total, booking) => total + Number(booking.total || 0),
    0
  );

  const cards = [
    {
      name: "Total Turfs",
      value: turfs.length,
      description: "Turf venues listed",
      accent: "from-lime-400 to-emerald-500",
      code: "TF",
    },
    {
      name: "Total Bookings",
      value: bookings.length,
      description: "All reservations",
      accent: "from-cyan-400 to-blue-500",
      code: "BK",
    },
    {
      name: "Pending Bookings",
      value: bookings.filter((booking) => booking.status === "Pending").length,
      description: "Awaiting confirmation",
      accent: "from-amber-400 to-orange-500",
      code: "PD",
    },
    {
      name: "Confirmed Bookings",
      value: bookings.filter((booking) => booking.status === "Confirmed").length,
      description: "Ready to play",
      accent: "from-emerald-400 to-teal-500",
      code: "CF",
    },
    {
      name: "Cancelled Bookings",
      value: bookings.filter((booking) => booking.status === "Cancelled").length,
      description: "Cancelled reservations",
      accent: "from-rose-400 to-pink-500",
      code: "CX",
    },
    {
      name: "Total Enquiries",
      value: enquiries.length,
      description: "Customer messages",
      accent: "from-violet-400 to-purple-500",
      code: "EN",
    },
    {
      name: "Eligible Revenue",
      value: `₹${revenue.toLocaleString("en-IN")}`,
      description: "Excludes cancelled bookings",
      accent: "from-lime-400 to-cyan-400",
      code: "₹",
    },
  ];

  const recentBookings = bookings.slice(-6).reverse();

  const statusItems = ["Confirmed", "Pending", "Cancelled", "Completed"];

  return (
    <div className="w-full space-y-6 pb-6">
      {/* Dashboard header */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-lg sm:p-7 lg:p-8"
      >
        <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-lime-400/15 blur-3xl" />
        <div className="absolute -bottom-20 right-1/3 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-lime-400" />
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-lime-300 sm:text-xs">
                Admin Dashboard
              </p>
            </div>

            <h1 className="mt-4 font-display text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Operations Overview
            </h1>

            <p className="mt-2 max-w-xl text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
              Monitor turf bookings, track reservations, and review your
              TurfZone operations from one place.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-3 text-xs font-black text-slate-950 shadow-lg shadow-lime-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-lime-300 sm:px-5 sm:text-sm"
          >
            <span>View Website</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="relative mt-6 grid grid-cols-2 gap-2 border-t border-white/10 pt-5 sm:grid-cols-3 sm:gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs">
              Active venues
            </p>
            <p className="mt-1 font-display text-xl font-black sm:text-2xl">
              {turfs.length}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs">
              Total reservations
            </p>
            <p className="mt-1 font-display text-xl font-black sm:text-2xl">
              {bookings.length}
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs">
              Eligible revenue
            </p>
            <p className="mt-1 font-display text-xl font-black text-lime-300 sm:text-2xl">
              ₹{revenue.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Statistics */}
      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-lime-700 sm:text-xs">
              At a glance
            </p>
            <h2 className="mt-1 font-display text-xl font-black text-slate-950 sm:text-2xl">
              Dashboard Statistics
            </h2>
          </div>

          <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-500 sm:text-xs">
            Live local data
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
          {cards.map((card, index) => (
            <motion.article
              key={card.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:rounded-3xl sm:p-5"
            >
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${card.accent}`}
              />

              <div className="flex items-start justify-between gap-2">
                <p className="text-[9px] font-black uppercase leading-4 tracking-wide text-slate-400 sm:text-xs">
                  {card.name}
                </p>

                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-[10px] font-black text-slate-950 shadow-sm sm:h-10 sm:w-10 sm:text-xs`}
                >
                  {card.code}
                </div>
              </div>

              <p className="mt-3 break-words font-display text-xl font-black tracking-tight text-slate-950 sm:mt-5 sm:text-3xl">
                {card.value}
              </p>

              <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                {card.description}
              </p>

              <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-100 sm:mt-4">
                <div
                  className={`h-full w-1/3 rounded-full bg-gradient-to-r ${card.accent} transition-all duration-500 group-hover:w-full`}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Recent bookings and booking status */}
      <section className="grid min-w-0 gap-5 xl:grid-cols-[1.35fr_0.85fr]">
        {/* Recent bookings */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-lime-700 sm:text-xs">
                Latest activity
              </p>
              <h2 className="mt-1 font-display text-lg font-black text-slate-950 sm:text-xl">
                Recent Bookings
              </h2>
              <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                Latest turf reservations
              </p>
            </div>

            <div className="flex h-9 min-w-9 items-center justify-center rounded-xl bg-lime-100 px-2 text-xs font-black text-lime-800 sm:h-11 sm:min-w-11 sm:text-sm">
              {bookings.length}
            </div>
          </div>

          <div className="mt-5 space-y-2.5">
            {recentBookings.length > 0 ? (
              recentBookings.map((booking, index) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition hover:border-lime-200 hover:bg-lime-50/40 sm:gap-4 sm:p-4"
                >
                  <div className="min-w-0">
                    <p className="truncate text-xs font-black text-slate-900 sm:text-sm">
                      {booking.turfName}
                    </p>

                    <p className="mt-1 truncate text-[10px] text-slate-500 sm:text-xs">
                      {booking.date}
                      <span className="mx-1">·</span>
                      {booking.sport}
                    </p>

                    <p className="mt-1 truncate text-[9px] font-bold text-slate-400 sm:text-[10px]">
                      {booking.id}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-xs font-black text-slate-950 sm:text-sm">
                      ₹{Number(booking.total || 0).toLocaleString("en-IN")}
                    </p>

                    <span
                      className={`mt-1 inline-flex rounded-full px-2 py-1 text-[9px] font-black sm:text-[10px] ${booking.status === "Confirmed"
                          ? "bg-emerald-100 text-emerald-700"
                          : booking.status === "Pending"
                            ? "bg-amber-100 text-amber-700"
                            : booking.status === "Cancelled"
                              ? "bg-rose-100 text-rose-700"
                              : "bg-slate-200 text-slate-600"
                        }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 px-4 py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-100">
                  <span className="text-sm font-black text-lime-800">BK</span>
                </div>
                <h3 className="mt-3 text-sm font-black text-slate-900">
                  No bookings yet
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  New turf reservations will appear here.
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Booking status */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="relative overflow-hidden rounded-2xl bg-slate-950 p-4 text-white shadow-lg sm:rounded-3xl sm:p-6"
        >
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-lime-300 sm:text-xs">
              Reservation insights
            </p>
            <h2 className="mt-1 font-display text-lg font-black sm:text-xl">
              Booking Status
            </h2>
            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
              Current booking distribution
            </p>

            <div className="mt-6 space-y-5">
              {statusItems.map((status) => {
                const count = bookings.filter(
                  (booking) => booking.status === status
                ).length;

                const percentage = bookings.length
                  ? Math.round((count / bookings.length) * 100)
                  : 0;

                return (
                  <div key={status}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${statusColors[status]
                            }`}
                        />
                        <span className="text-xs font-semibold text-slate-300">
                          {status}
                        </span>
                      </div>

                      <span className="text-xs font-black text-white">
                        {count}
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{
                          duration: 0.7,
                          delay: 0.15,
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${statusColors[status]
                          }`}
                      />
                    </div>

                    <p className="mt-1 text-right text-[10px] text-slate-500">
                      {percentage}%
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                Total enquiries
              </p>
              <p className="mt-1 font-display text-2xl font-black text-white">
                {enquiries.length}
              </p>
              <p className="mt-1 text-[10px] leading-4 text-slate-400">
                Customer messages saved in the system.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
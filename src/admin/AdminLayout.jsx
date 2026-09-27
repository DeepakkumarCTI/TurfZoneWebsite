
import { motion } from "framer-motion";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

const adminLinks = [
  { name: "Dashboard", path: "/admin", code: "DB" },
  { name: "Manage Turfs", path: "/admin/turfs", code: "TF" },
  { name: "Manage Bookings", path: "/admin/bookings", code: "BK" },
  { name: "Manage Enquiries", path: "/admin/enquiries", code: "EN" },
];

export default function AdminLayout() {
  const { setAdmin } = useApp();
  const navigate = useNavigate();

  const logout = () => {
    setAdmin({ loggedIn: false });
    navigate("/admin/login");
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto grid w-full max-w-[1600px] items-start gap-4 px-3 py-3 sm:px-4 sm:py-4 lg:grid-cols-[235px_minmax(0,1fr)] lg:gap-5 lg:px-5 xl:gap-6">
        {/* Admin sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="min-w-0 overflow-hidden rounded-2xl bg-slate-950 text-white shadow-lg sm:rounded-3xl lg:sticky lg:top-4 lg:max-h-[calc(100vh-32px)] lg:overflow-y-auto"
        >
          {/* Brand and website link */}
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5 sm:py-5 lg:flex-col lg:items-stretch">
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <img
                src="/images/logo.png"
                alt="TurfZone logo"
                className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
              />

              <div className="min-w-0">
                <p className="truncate font-display text-sm font-black sm:text-base">
                  TurfZone
                </p>
                <p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.16em] text-lime-300 sm:text-[10px]">
                  Admin Panel
                </p>
              </div>
            </Link>

            <Link
              to="/"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-bold text-slate-200 transition hover:border-lime-300/40 hover:bg-lime-400 hover:text-slate-950 sm:text-xs lg:mt-4 lg:w-full"
            >
              <span>View Website</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="p-3 sm:p-4">
            <p className="mb-2 hidden px-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 lg:block">
              Workspace
            </p>

            <nav className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {adminLinks.map(({ name, path, code }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/admin"}
                  className={({ isActive }) =>
                    `group flex min-w-0 items-center gap-2.5 rounded-xl px-3 py-3 text-xs font-bold transition duration-200 sm:text-sm ${isActive
                      ? "bg-lime-400 text-slate-950 shadow-md shadow-lime-950/20"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[9px] font-black transition sm:h-8 sm:w-8 sm:text-[10px] ${isActive
                            ? "bg-slate-950/10 text-slate-950"
                            : "bg-white/10 text-lime-300 group-hover:bg-white/15"
                          }`}
                      >
                        {code}
                      </span>

                      <span className="min-w-0 break-words leading-4">
                        {name}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Sidebar footer */}
            <div className="mt-4 border-t border-white/10 pt-3 lg:mt-6 lg:pt-5">
              <div className="mb-3 hidden rounded-xl border border-white/10 bg-white/5 p-3 lg:block">
                <p className="text-[10px] font-black uppercase tracking-wide text-slate-400">
                  Admin workspace
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-300">
                  Manage venues, bookings, and customer enquiries.
                </p>
              </div>

              <button
                type="button"
                onClick={logout}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-rose-300/20 bg-rose-400/5 px-3 py-2.5 text-xs font-bold text-rose-200 transition hover:border-rose-300/40 hover:bg-rose-500/15 sm:text-sm lg:justify-start lg:px-4"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-400/10 text-[10px] font-black">
                  ↪
                </span>
                Logout
              </button>
            </div>
          </div>
        </motion.aside>

        {/* Main page content */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="min-w-0"
        >
          <Outlet />
        </motion.section>
      </div>
    </main>
  );
}
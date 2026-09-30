
import { useState, useEffect } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
    useNavigate,
} from "react-router-dom";

import { AppProvider, useApp } from "./context/AppContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";
import ExploreTurfs from "./pages/ExploreTurfs";
import TurfDetails from "./pages/TurfDetails";
import SportsCategories from "./pages/SportsCategories";
import MyBookings from "./pages/MyBookings";
import BookingConfirmation from "./pages/BookingConfirmation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import ManageTurfs from "./admin/ManageTurfs";
import ManageBookings from "./admin/ManageBookings";
import ManageEnquiries from "./admin/ManageEnquiries";

/* =====================================================
   REFRESH / DIRECT URL REDIRECT
===================================================== */

function RefreshRedirect() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Only check on the first page load.
        // Normal React Router navigation should not trigger this.
        const navigationEntry =
            performance.getEntriesByType("navigation")[0];

        const isInitialPageLoad =
            !sessionStorage.getItem("turfzone_app_loaded");

        const isReload =
            navigationEntry?.type === "reload";

        /*
         * If:
         * - this is the first browser load/reload
         * - AND current URL is not Home
         *
         * redirect to Home.
         */
        if (
            (isInitialPageLoad || isReload) &&
            location.pathname !== "/"
        ) {
            sessionStorage.setItem(
                "turfzone_app_loaded",
                "true"
            );

            navigate("/", {
                replace: true,
            });

            return;
        }

        // Mark application as loaded
        sessionStorage.setItem(
            "turfzone_app_loaded",
            "true"
        );
    }, []);

    return null;
}

/* =====================================================
   PROTECTED ADMIN ROUTE
===================================================== */

function Protected() {
    const { admin } = useApp();

    return admin.loggedIn ? (
        <AdminLayout />
    ) : (
        <Navigate
            to="/admin/login"
            replace
        />
    );
}

/* =====================================================
   MAIN WEBSITE LAYOUT
===================================================== */

function Shell() {
    const loc = useLocation();

    const isAdmin =
        loc.pathname.startsWith("/admin");

    /*
     * Scroll to top whenever route changes.
     */
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [loc.pathname]);

    return (
        <>
            {/* Refresh/direct URL handler */}
            <RefreshRedirect />

            {/* Customer Navbar */}
            {!isAdmin && <Navbar />}

            <Routes>

                {/* =================================================
                    CUSTOMER PAGES
                ================================================= */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/explore"
                    element={<ExploreTurfs />}
                />

                <Route
                    path="/turf/:id"
                    element={<TurfDetails />}
                />

                <Route
                    path="/sports"
                    element={<SportsCategories />}
                />

                <Route
                    path="/bookings"
                    element={<MyBookings />}
                />

                <Route
                    path="/booking-confirmation/:id"
                    element={<BookingConfirmation />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                {/* =================================================
                    ADMIN LOGIN
                ================================================= */}

                <Route
                    path="/admin/login"
                    element={<AdminLogin />}
                />

                {/* =================================================
                    PROTECTED ADMIN
                ================================================= */}

                <Route
                    path="/admin"
                    element={<Protected />}
                >
                    <Route
                        index
                        element={<AdminDashboard />}
                    />

                    <Route
                        path="turfs"
                        element={<ManageTurfs />}
                    />

                    <Route
                        path="bookings"
                        element={<ManageBookings />}
                    />

                    <Route
                        path="enquiries"
                        element={<ManageEnquiries />}
                    />
                </Route>

                {/* =================================================
                    404
                ================================================= */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

            {/* =================================================
                CUSTOMER FOOTER
            ================================================= */}

            {!isAdmin && (
                <>
                    <Footer />
                    <WhatsAppButton />
                </>
            )}
        </>
    );
}

/* =====================================================
   APP COMPONENT
===================================================== */

export default function App() {

    const [isLoading, setIsLoading] =
        useState(true);

    return (
        <BrowserRouter>

            <AppProvider>

                {isLoading ? (
                    <LoadingScreen
                        onComplete={() =>
                            setIsLoading(false)
                        }
                    />
                ) : (
                    <Shell />
                )}

            </AppProvider>

        </BrowserRouter>
    );
}


import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import { AppProvider, useApp } from "./context/AppContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

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

function Protected() {
    const { admin } = useApp();

    return admin.loggedIn ? (
        <AdminLayout />
    ) : (
        <Navigate to="/admin/login" replace />
    );
}

function Shell() {
    const loc = useLocation();
    const isAdmin = loc.pathname.startsWith("/admin");

    // Scroll to the top whenever the page route changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [loc.pathname]);

    return (
        <>
            {!isAdmin && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<ExploreTurfs />} />
                <Route path="/turf/:id" element={<TurfDetails />} />
                <Route path="/sports" element={<SportsCategories />} />
                <Route path="/bookings" element={<MyBookings />} />
                <Route
                    path="/booking-confirmation/:id"
                    element={<BookingConfirmation />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/admin/login" element={<AdminLogin />} />

                <Route path="/admin" element={<Protected />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="turfs" element={<ManageTurfs />} />
                    <Route path="bookings" element={<ManageBookings />} />
                    <Route path="enquiries" element={<ManageEnquiries />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>

            {!isAdmin && (
                <>
                    <Footer />
                    <WhatsAppButton />
                </>
            )}
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <Shell />
            </AppProvider>
        </BrowserRouter>
    );
}
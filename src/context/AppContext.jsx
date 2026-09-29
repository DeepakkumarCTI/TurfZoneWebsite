
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import { defaultTurfs } from "../data/turfs";
import { KEYS, read, write } from "../utils/localStorage";

const AppContext = createContext(null);

// Demo admin credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

const DEFAULT_ADMIN = {
    loggedIn: false,
};

const getArray = (key, fallback) => {
    const saved = read(key, fallback);
    return Array.isArray(saved) ? saved : fallback;
};

const getAdminSession = () => {
    const saved = read(KEYS.admin, DEFAULT_ADMIN);

    if (!saved || typeof saved !== "object") {
        return DEFAULT_ADMIN;
    }

    return {
        loggedIn: Boolean(saved.loggedIn),
        ...(saved.username ? { username: saved.username } : {}),
    };
};

export function AppProvider({ children }) {
    // ------------------------------------------
    // TURFS
    // ------------------------------------------

    const [turfs, setTurfs] = useState(() =>
        getArray(KEYS.turfs, defaultTurfs)
    );

    // ------------------------------------------
    // BOOKINGS
    // ------------------------------------------

    const [bookings, setBookings] = useState(() =>
        getArray(KEYS.bookings, [])
    );

    // ------------------------------------------
    // ENQUIRIES
    // ------------------------------------------

    const [enquiries, setEnquiries] = useState(() =>
        getArray(KEYS.enquiries, [])
    );

    // ------------------------------------------
    // ADMIN SESSION
    // ------------------------------------------

    const [admin, setAdmin] = useState(getAdminSession);

    // ------------------------------------------
    // ADMIN LOGIN
    // ------------------------------------------

    const adminLogin = (username, password) => {
        const normalizedUsername = String(username || "")
            .trim()
            .toLowerCase();

        const enteredPassword = String(password || "");

        if (!normalizedUsername || !enteredPassword) {
            return {
                success: false,
                message: "Please enter your username and password.",
            };
        }

        if (
            normalizedUsername !== ADMIN_USERNAME ||
            enteredPassword !== ADMIN_PASSWORD
        ) {
            return {
                success: false,
                message: "Invalid username or password.",
            };
        }

        setAdmin({
            loggedIn: true,
            username: ADMIN_USERNAME,
        });

        return {
            success: true,
            message: "Login successful.",
        };
    };

    // ------------------------------------------
    // ADMIN LOGOUT
    // ------------------------------------------

    const adminLogout = () => {
        setAdmin(DEFAULT_ADMIN);
    };

    // ------------------------------------------
    // SAVE APP DATA
    // ------------------------------------------

    useEffect(() => {
        write(KEYS.turfs, turfs);
    }, [turfs]);

    useEffect(() => {
        write(KEYS.bookings, bookings);
    }, [bookings]);

    useEffect(() => {
        write(KEYS.enquiries, enquiries);
    }, [enquiries]);

    useEffect(() => {
        write(KEYS.admin, admin);
    }, [admin]);

    // ------------------------------------------
    // REFRESH APP DATA
    // ------------------------------------------

    const refresh = () => {
        setTurfs(getArray(KEYS.turfs, defaultTurfs));
        setBookings(getArray(KEYS.bookings, []));
        setEnquiries(getArray(KEYS.enquiries, []));
        setAdmin(getAdminSession());
    };

    // ------------------------------------------
    // CONTEXT VALUE
    // ------------------------------------------

    const value = useMemo(
        () => ({
            // Turfs
            turfs,
            setTurfs,

            // Bookings
            bookings,
            setBookings,

            // Enquiries
            enquiries,
            setEnquiries,

            // Admin
            admin,
            setAdmin,
            adminLogin,
            adminLogout,

            // Refresh
            refresh,
        }),
        [turfs, bookings, enquiries, admin]
    );

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

// ------------------------------------------
// CUSTOM HOOK
// ------------------------------------------

export function useApp() {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useApp must be used inside an AppProvider.");
    }

    return context;
}
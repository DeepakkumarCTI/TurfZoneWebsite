import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import { defaultTurfs } from "../data/turfs";
import {
    KEYS,
    read,
    write,
} from "../utils/localStorage";

const AppContext = createContext(null);

export function AppProvider({ children }) {
    /*
     * Read existing saved turfs.
     *
     * If nothing exists, use defaultTurfs.
     */
    const [turfs, setTurfs] = useState(() => {
        const saved = read(KEYS.turfs, null);

        return Array.isArray(saved)
            ? saved
            : defaultTurfs;
    });

    const [bookings, setBookings] = useState(() => {
        const saved = read(
            KEYS.bookings,
            []
        );

        return Array.isArray(saved)
            ? saved
            : [];
    });

    const [enquiries, setEnquiries] = useState(() => {
        const saved = read(
            KEYS.enquiries,
            []
        );

        return Array.isArray(saved)
            ? saved
            : [];
    });

    const [admin, setAdmin] = useState(() => {
        const saved = read(
            KEYS.admin,
            { loggedIn: false }
        );

        return saved || {
            loggedIn: false,
        };
    });

    /*
     * Save turfs whenever Admin adds,
     * edits, enables/disables or deletes.
     */
    useEffect(() => {
        write(KEYS.turfs, turfs);
    }, [turfs]);

    /*
     * Save bookings.
     */
    useEffect(() => {
        write(KEYS.bookings, bookings);
    }, [bookings]);

    /*
     * Save enquiries.
     */
    useEffect(() => {
        write(KEYS.enquiries, enquiries);
    }, [enquiries]);

    /*
     * Save admin login state.
     */
    useEffect(() => {
        write(KEYS.admin, admin);
    }, [admin]);

    /*
     * Manually reload everything from Local Storage.
     */
    const refresh = () => {
        const savedTurfs = read(
            KEYS.turfs,
            defaultTurfs
        );

        const savedBookings = read(
            KEYS.bookings,
            []
        );

        const savedEnquiries = read(
            KEYS.enquiries,
            []
        );

        const savedAdmin = read(
            KEYS.admin,
            { loggedIn: false }
        );

        setTurfs(
            Array.isArray(savedTurfs)
                ? savedTurfs
                : defaultTurfs
        );

        setBookings(
            Array.isArray(savedBookings)
                ? savedBookings
                : []
        );

        setEnquiries(
            Array.isArray(savedEnquiries)
                ? savedEnquiries
                : []
        );

        setAdmin(
            savedAdmin || {
                loggedIn: false,
            }
        );
    };

    const value = useMemo(
        () => ({
            turfs,
            setTurfs,

            bookings,
            setBookings,

            enquiries,
            setEnquiries,

            admin,
            setAdmin,

            refresh,
        }),
        [
            turfs,
            bookings,
            enquiries,
            admin,
        ]
    );

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}
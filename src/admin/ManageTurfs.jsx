import { useState } from "react";

import { useApp } from "../context/AppContext";
import { uid } from "../utils/localStorage";
import { sports } from "../data/sports";

const empty = {
    name: "",
    location: "",
    address: "",
    sports: ["football"],
    price: 700,
    rating: 4.5,
    reviews: 0,
    image: "/images/turfs/turf-1.png",
    description:
        "Premium sports facility managed by our company.",
    phone: "+91 90000 10000",
    hours: "06:00 AM - 11:00 PM",

    facilities: [
        "floodlights",
        "parking",
    ],

    pricing: {
        weekday: 700,
        weekend: 900,
        morning: 600,
        evening: 800,
        peak: 1000,
    },

    enabled: true,
};

export default function ManageTurfs() {
    const {
        turfs,
        setTurfs,
    } = useApp();

    const [form, setForm] = useState(empty);
    const [editing, setEditing] = useState(null);

    const save = (e) => {
        e.preventDefault();

        if (!form.name.trim()) {
            alert("Please enter the turf name.");
            return;
        }

        if (!form.location.trim()) {
            alert("Please enter the location.");
            return;
        }

        if (!form.sports.length) {
            alert("Please select at least one sport.");
            return;
        }

        const item = {
            ...form,

            id: editing || uid("TURF"),

            name: form.name.trim(),

            location: form.location.trim(),

            address: form.address.trim(),

            price: Number(form.price),

            rating: Number(form.rating),

            reviews: Number(form.reviews),

            enabled: Boolean(form.enabled),
        };

        if (editing) {
            setTurfs((current) =>
                current.map((turf) =>
                    turf.id === editing
                        ? item
                        : turf
                )
            );
        } else {
            setTurfs((current) => [
                ...current,
                item,
            ]);
        }

        setForm(empty);
        setEditing(null);

        alert(
            editing
                ? "Turf updated successfully."
                : "Turf added successfully."
        );
    };

    const edit = (turf) => {
        setForm({
            ...empty,
            ...turf,
            sports: turf.sports || [],
            facilities: turf.facilities || [],
            pricing: {
                ...empty.pricing,
                ...(turf.pricing || {}),
            },
        });

        setEditing(turf.id);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const del = (id) => {
        if (
            window.confirm(
                "Are you sure you want to delete this turf?"
            )
        ) {
            setTurfs((current) =>
                current.filter(
                    (turf) => turf.id !== id
                )
            );
        }
    };

    const toggleEnabled = (id) => {
        setTurfs((current) =>
            current.map((turf) =>
                turf.id === id
                    ? {
                        ...turf,
                        enabled: !turf.enabled,
                    }
                    : turf
            )
        );
    };

    return (
        <div>
            {/* HEADER */}
            <div className="mb-7">
                <p className="text-xs font-black uppercase tracking-[.2em] text-lime-700">
                    Manage facilities
                </p>

                <h1 className="mt-2 font-display text-4xl font-bold">
                    Venue Inventory
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-slate-500">
                    Add and manage all playing spaces belonging to
                    your company.
                </p>
            </div>

            {/* FORM */}
            <form
                onSubmit={save}
                className="rounded-3xl bg-white p-6 shadow-sm"
            >
                <div className="grid gap-4 md:grid-cols-2">

                    {/* NAME */}
                    <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                            Turf Name
                        </label>

                        <input
                            required
                            value={form.name}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    name: e.target.value,
                                })
                            }
                            placeholder="Example: Premium Football Turf"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400"
                        />
                    </div>

                    {/* LOCATION */}
                    <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                            Location
                        </label>

                        <input
                            required
                            value={form.location}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    location: e.target.value,
                                })
                            }
                            placeholder="Example: Main Arena"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400"
                        />
                    </div>

                    {/* ADDRESS */}
                    <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                            Address
                        </label>

                        <input
                            value={form.address}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    address: e.target.value,
                                })
                            }
                            placeholder="Facility address"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400"
                        />
                    </div>

                    {/* PRICE */}
                    <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                            Price Per Hour
                        </label>

                        <input
                            type="number"
                            min="0"
                            value={form.price}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    price: e.target.value,
                                })
                            }
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400"
                        />
                    </div>

                    {/* SPORTS */}
                    <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                            Sports
                        </label>

                        <select
                            multiple
                            value={form.sports}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    sports: [
                                        ...e.target.selectedOptions,
                                    ].map(
                                        (option) => option.value
                                    ),
                                })
                            }
                            className="min-h-36 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400"
                        >
                            {sports.map((sport) => (
                                <option
                                    key={sport.id}
                                    value={sport.id}
                                >
                                    {sport.name}
                                </option>
                            ))}
                        </select>

                        <p className="mt-1 text-xs text-slate-400">
                            Hold Ctrl and select multiple sports.
                        </p>
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                            Description
                        </label>

                        <textarea
                            value={form.description}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    description:
                                        e.target.value,
                                })
                            }
                            rows={6}
                            placeholder="Describe this facility..."
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400"
                        />
                    </div>
                </div>

                {/* ACTIONS */}
                <div className="mt-6 flex flex-wrap gap-2">
                    <button
                        type="submit"
                        className="rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
                    >
                        {editing
                            ? "Update Turf"
                            : "Add Turf"}
                    </button>

                    {editing && (
                        <button
                            type="button"
                            onClick={() => {
                                setEditing(null);
                                setForm(empty);
                            }}
                            className="rounded-xl border border-slate-200 px-5 py-3 font-bold"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            {/* TURF LIST */}
            <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[.2em] text-lime-700">
                            Current inventory
                        </p>

                        <h2 className="mt-1 font-display text-2xl font-bold">
                            {turfs.length}{" "}
                            {turfs.length === 1
                                ? "Facility"
                                : "Facilities"}
                        </h2>
                    </div>
                </div>

                <div className="space-y-3">
                    {turfs.length === 0 ? (
                        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                            <h3 className="font-display text-xl font-bold">
                                No facilities added
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Add your first facility using the form above.
                            </p>
                        </div>
                    ) : (
                        turfs.map((turf) => (
                            <div
                                key={turf.id}
                                className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm md:flex-row md:items-center"
                            >
                                <img
                                    src={
                                        turf.image ||
                                        "/images/turfs/turf-1.png"
                                    }
                                    alt={turf.name}
                                    className="h-24 w-full rounded-xl object-cover md:h-20 md:w-28"
                                />

                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h2 className="font-display text-xl font-bold">
                                            {turf.name}
                                        </h2>

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-bold ${turf.enabled !== false
                                                    ? "bg-lime-100 text-lime-700"
                                                    : "bg-slate-100 text-slate-500"
                                                }`}
                                        >
                                            {turf.enabled !== false
                                                ? "Active"
                                                : "Disabled"}
                                        </span>
                                    </div>

                                    <p className="mt-1 text-sm text-slate-500">
                                        {turf.location}
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        ₹{turf.price}/hr
                                    </p>

                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {(turf.sports || []).map(
                                            (sportId) => {
                                                const sport = sports.find(
                                                    (item) =>
                                                        item.id === sportId
                                                );

                                                return (
                                                    <span
                                                        key={sportId}
                                                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
                                                    >
                                                        {sport?.name ||
                                                            sportId}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleEnabled(turf.id)
                                        }
                                        className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold"
                                    >
                                        {turf.enabled !== false
                                            ? "Disable"
                                            : "Enable"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => edit(turf)}
                                        className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => del(turf.id)}
                                        className="rounded-xl border border-rose-200 px-4 py-2 text-sm font-bold text-rose-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
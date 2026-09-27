# TurfZone – Single Company Sports Arena Booking Website

TurfZone is a React + Vite + Tailwind CSS frontend website designed for **one sports company and one primary sports arena**. It is not a multi-city marketplace.

## Stack
- React 18 + Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Local Storage
- HTML5 background video

## Run
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
```

## Single-company setup
The main company information is centralized in:

`src/data/company.js`

Update the company name, phone, WhatsApp number, email, address and opening hours there.

The website starts with one facility in:

`src/data/turfs.js`

The sports are offerings of that facility. They are not separate turf businesses or separate city locations.

## Main booking flow
1. Home
2. Choose a sport and date
3. Our Turf
4. Turf details
5. Select duration and time slot
6. Enter customer details
7. Confirm booking
8. View booking in My Bookings

Bookings and availability are simulated with Local Storage. This is not server-side real-time availability and does not synchronize between different browsers/devices.

## Admin demo
Email: `admin@turfzone.com`
Password: `Admin@123`

The admin panel is frontend-only. Local Storage authentication is not secure enough for production use.

## Hero video
Replace:

`public/videos/hero-video.mp4`

with your company's real turf video. The Home page also has `/images/hero-fallback.png` as a fallback poster/image.

## Images
- Turf photos: `public/images/turfs/`
- Sports images: `public/images/sports/`
- Facility icons: `public/images/facilities/`
- General PNG icons: `public/images/icons/`
- Logo: `public/images/logo.png`

## Customizing the venue
Edit the single object in `src/data/turfs.js` to change the facility name, location, supported sports, pricing, facilities, phone number, images and opening hours.

## WhatsApp
Update `whatsapp` in `src/data/company.js`. The app generates a pre-filled enquiry/booking message but does not confirm bookings through WhatsApp.

## Important demo limitation
This application intentionally has no backend, database, Firebase, payment gateway or external booking API. Data is stored in the current browser's Local Storage. For production use, authentication, booking locking, payments and real-time availability should be moved to a server/database architecture.

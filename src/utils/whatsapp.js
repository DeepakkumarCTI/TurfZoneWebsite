export const WHATSAPP_NUMBER='919000010000';
export function openWhatsApp(message){window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer')}
export function bookingMessage(b,turf){return `Hello TurfZone, I am interested in booking ${turf?.name||'a turf'}. Sport: ${b.sport}. Date: ${b.date}. Time: ${b.time}. Duration: ${b.duration} hour(s). Estimated amount: ₹${b.total}.`}

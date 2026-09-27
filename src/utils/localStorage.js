export const KEYS={turfs:'turfzone_company_turf_v2',bookings:'turfzone_bookings_v2',enquiries:'turfzone_enquiries_v2',admin:'turfzone_admin',search:'turfzone_search',favorites:'turfzone_favorites'};
export function read(key,fallback=[]){try{const raw=localStorage.getItem(key);if(raw===null)return fallback;const data=JSON.parse(raw);return data??fallback}catch{return fallback}}
export function write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch{return false}}
export function update(key,fn,fallback=[]){const next=fn(read(key,fallback));write(key,next);return next}
export function uid(prefix='TZ'){return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8).toUpperCase()}`}
export function initDemo(key,data){try{if(localStorage.getItem(key)===null)write(key,data)}catch{}}
export const testimonials=[
{name:'Arun Kumar',sport:'Football',rating:5,review:'The slot selection was simple and the turf was exactly as shown.',image:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80'},
{name:'Meera Nair',sport:'Badminton',rating:5,review:'Clean court, easy booking and a smooth experience for our group.',image:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80'},
{name:'Rahul Dev',sport:'Cricket',rating:4,review:'Good facilities and transparent pricing. We booked our weekly game here.',image:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80'},
{name:'Sanjay P',sport:'Basketball',rating:5,review:'Loved the evening lights and the quick confirmation flow.',image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80'},
];

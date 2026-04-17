import { 
  Plus, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  User, 
  Video,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const appointments = [
  { time: "09:00 AM", client: "John Wick", service: "Strategic Consultation", type: "Video", duration: "60 min" },
  { time: "11:30 AM", client: "Selina Kyle", service: "Security Audit", type: "On-site", duration: "90 min" },
  { time: "02:00 PM", client: "Bruce Wayne", service: "Investment Review", type: "Video", duration: "45 min" },
  { time: "04:30 PM", client: "Clark Kent", service: "Press Interview", type: "In-person", duration: "30 min" },
];

export default function BookingPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Booking & Scheduling</h2>
          <p className="text-slate-400">Coordinate appointments and manage your availability calendar.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all">
            Settings
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <Plus className="w-5 h-5" />
            Book Now
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-bold">Today's Schedule</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">March 17, 2024</span>
              </div>
              <div className="flex gap-1">
                <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-all"><ChevronLeft className="w-5 h-5" /></button>
                <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-all"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="space-y-4">
              {appointments.map((apt) => (
                <div key={apt.time} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group relative overflow-hidden">
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex gap-6">
                      <div className="text-center min-w-[80px]">
                        <p className="text-sm font-bold text-primary mb-1">{apt.time}</p>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">{apt.duration}</p>
                      </div>
                      <div className="w-[2px] bg-white/10 self-stretch" />
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">{apt.service}</h4>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {apt.client}</span>
                          <span className="flex items-center gap-1.5">
                            {apt.type === "Video" ? <Video className="w-4 h-4 text-primary" /> : <MapPin className="w-4 h-4 text-emerald-400" />}
                            {apt.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                      Confirm
                    </button>
                  </div>
                  
                  {/* Subtle progress indicator for the current time slot (example) */}
                  {apt.time === "09:00 AM" && (
                    <div className="absolute left-0 bottom-0 h-1 bg-primary w-full animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card">
            <h3 className="text-lg font-bold mb-6">Upcoming Slots</h3>
            <div className="grid grid-cols-7 gap-2 mb-6 text-center text-[10px] uppercase font-bold text-slate-500">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <div key={i}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={cn(
                  "aspect-square flex items-center justify-center text-xs font-bold rounded-lg cursor-pointer transition-all",
                  i + 1 === 17 ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110" : "hover:bg-white/5 text-slate-400 hover:text-white"
                )}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h4 className="font-black text-xs uppercase tracking-widest text-primary mb-2">Pro Tip</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              You have 3 video consultations remaining this week. Sync your Google Calendar to avoid overbooking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

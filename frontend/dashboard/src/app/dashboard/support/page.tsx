import { 
  LifeBuoy, 
  MessageCircle, 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  BookOpen,
  ThumbsUp,
  MoreVertical,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

const tickets = [
  { id: "T-849", subject: "Invoicing discrepancy for Q1", user: "Alice Walker", status: "open", priority: "high", time: "10m ago" },
  { id: "T-848", subject: "Unable to sync Google Calendar", user: "Bob Ross", status: "pending", priority: "medium", time: "2h ago" },
  { id: "T-847", subject: "Request for white-labeling docs", user: "Charlie Day", status: "resolved", priority: "low", time: "1d ago" },
];

export default function SupportPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Help & Support</h2>
          <p className="text-slate-400">Manage customer inquiries, feedback, and knowledge base documentation.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          Create Ticket
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search tickets by ID, name, or subject... " 
                className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/5 rounded-2xl text-sm focus:outline-none focus:border-primary/50 text-white"
              />
            </div>
            <button className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-slate-300 hover:text-white transition-all">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>

          <div className="glass-card !p-0 overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
              <h3 className="font-bold flex items-center gap-2">
                <LifeBuoy className="w-5 h-5 text-primary" /> Active Ticket Ledger
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase text-slate-500">Auto-refresh: 30s</span>
              </div>
            </div>
            
            <div className="divide-y divide-white/5">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-6 hover:bg-white/[0.02] transition-colors group">
                  <div className="flex items-center gap-6">
                    <div className="text-[10px] font-black text-slate-600 bg-white/5 px-2 py-1 rounded ring-1 ring-white/5">
                      {ticket.id}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm group-hover:text-primary transition-colors">{ticket.subject}</h4>
                      <p className="text-[10px] text-slate-500 uppercase font-black">{ticket.user} • {ticket.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <span className={cn(
                      "text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm ring-1",
                      ticket.priority === 'high' ? "bg-red-400/10 text-red-400 ring-red-400/20" :
                      ticket.priority === 'medium' ? "bg-amber-400/10 text-amber-400 ring-amber-400/20" :
                      "bg-emerald-400/10 text-emerald-400 ring-emerald-400/20"
                    )}>
                      {ticket.priority} priority
                    </span>

                    <div className="flex items-center gap-2 w-28">
                      {ticket.status === 'open' ? <Activity className="w-3 h-3 text-primary animate-pulse" /> :
                       ticket.status === 'pending' ? <Clock className="w-3 h-3 text-amber-400" /> :
                       <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                      <span className={cn(
                        "text-[10px] font-black uppercase",
                        ticket.status === 'open' ? "text-primary" : 
                        ticket.status === 'pending' ? "text-amber-400" : "text-emerald-400"
                      )}>
                        {ticket.status}
                      </span>
                    </div>

                    <button className="p-2 text-slate-600 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Resolution Stats</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Avg. Response Time</span>
                <span className="text-sm font-black text-white">12.4m</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Satisfaction Score</span>
                <span className="text-sm font-black text-emerald-400">98.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Tickets Resolved</span>
                <span className="text-sm font-black text-primary">1,240</span>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Quick Docs</h3>
            </div>
            <div className="space-y-3">
              {['System Initialization', 'API Authentication', 'Role Management'].map(doc => (
                <div key={doc} className="p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:border-purple-400/50 hover:bg-purple-400/[0.02] transition-all flex items-center justify-between group">
                  <span className="text-xs font-bold text-slate-300 group-hover:text-white">{doc}</span>
                  <Activity className="w-3 h-3 text-slate-600 group-hover:text-purple-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card bg-primary/10 border-primary/20 flex flex-col items-center text-center p-8">
            <ThumbsUp className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold text-white mb-2">Great work today!</h4>
            <p className="text-[10px] text-slate-400 leading-relaxed uppercase font-black tracking-widest">
              You are in the top 5% of resolution speed this week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

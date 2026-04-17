import { 
  BarChart3, 
  LineChart, 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Filter, 
  Calendar,
  Layers,
  Activity,
  Zap,
  DollarSign,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/utils";

const kpis = [
  { label: "MRR", value: 12450000, change: "+12.4%", trend: "up", color: "text-emerald-400" },
  { label: "Churn Rate", value: "2.4%", change: "-0.8%", trend: "down", color: "text-emerald-400" },
  { label: "Customer LTV", value: 420000, change: "+5.1%", trend: "up", color: "text-primary" },
  { label: "CAC", value: 8500, change: "+1.2%", trend: "up", color: "text-amber-400" },
];

const revenueSources = [
  { name: "Direct Sales", value: "54%", color: "bg-primary" },
  { name: "Partnerships", value: "22%", color: "bg-purple-500" },
  { name: "Marketplace", value: "18%", color: "bg-emerald-400" },
  { name: "Others", value: "6%", color: "bg-slate-600" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Business Intelligence</h2>
          <p className="text-slate-400">Deep-dive into revenue streams, retention, and growth performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="glass-card group hover:border-primary/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{kpi.label}</span>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-black uppercase",
                kpi.trend === 'up' ? "text-emerald-400" : "text-amber-400"
              )}>
                {kpi.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {kpi.change}
              </div>
            </div>
            <h3 className="text-2xl font-black text-white">
              {typeof kpi.value === 'number' ? formatCurrency(kpi.value) : kpi.value}
            </h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card !p-8 h-[400px] relative overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <LineChart className="w-6 h-6 text-primary" /> Revenue Velocity
              </h3>
              <div className="flex bg-black/40 rounded-xl p-1 border border-white/5">
                {['1W', '1M', '3M', '1Y'].map(p => (
                  <button key={p} className={cn(
                    "px-4 py-1.5 text-xs font-bold rounded-lg transition-all",
                    p === '3M' ? "bg-primary text-white" : "text-slate-500 hover:text-white"
                  )}>{p}</button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex items-end gap-2 pb-2">
              {/* Mock Chart Visualization */}
              {[40, 60, 45, 90, 65, 80, 55, 100, 85, 75, 95, 110].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div 
                    className={cn(
                      "w-full rounded-t-lg transition-all duration-500 group-hover:bg-primary shadow-lg",
                      i === 11 ? "bg-primary" : "bg-primary/20"
                    )} 
                    style={{ height: `${h}%` }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-primary px-2 py-1 rounded text-[10px] font-black transition-opacity shadow-xl ring-1 ring-white/10">
                      {formatCurrency(h * 100000)}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">M{i+1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                <Layers className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Active Segments</h4>
                <p className="text-2xl font-black">12.4k</p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-400/10 flex items-center justify-center text-purple-400">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">API Velocity</h4>
                <p className="text-2xl font-black">94.2%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Distribution */}
        <div className="space-y-6">
          <div className="glass-card">
            <h3 className="text-lg font-bold mb-8">Revenue Distribution</h3>
            <div className="space-y-6">
              {revenueSources.map((source) => (
                <div key={source.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-400">{source.name.toUpperCase()}</span>
                    <span className="text-white">{source.value}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className={cn("h-full", source.color)} style={{ width: source.value }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 text-center">
              <p className="text-xs text-slate-500 font-medium mb-4 italic">"Growth is projected to hit +15% by the end of next fiscal quarter."</p>
              <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase text-white hover:bg-primary hover:border-primary transition-all shadow-xl active:scale-[0.98]">
                Deep Analysis
              </button>
            </div>
          </div>

          <div className="glass-card bg-gradient-to-br from-[#12141c] to-black border-primary/10">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Retention Pulse</h3>
            <div className="flex items-end justify-between h-24 gap-1">
              {[60, 40, 70, 50, 80, 60, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/10 rounded-t-sm hover:bg-primary transition-all" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-black text-slate-600 mt-4 uppercase">
              <span>Mon</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

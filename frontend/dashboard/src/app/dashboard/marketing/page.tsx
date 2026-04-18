import { 
  Megaphone, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Plus, 
  Mail, 
  Smartphone, 
  Globe,
  ArrowUpRight,
  Eye,
  MousePointer2
} from "lucide-react";
import { cn } from "@/lib/utils";

const campaigns = [
  { name: "Spring Clearance 2024", type: "Email", status: "Sent", reach: "12,400", conv: "4.2%" },
  { name: "Product Launch SMS", type: "SMS", status: "Scheduled", reach: "5,800", conv: "-" },
  { name: "Global Rebranding", type: "Social", status: "Draft", reach: "0", conv: "-" },
];

export default function MarketingPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Marketing & Growth</h2>
          <p className="text-slate-400">Launch campaigns, track conversions, and analyze market reach.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          New Campaign
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card flex flex-col items-center text-center p-6 border-b-2 border-primary">
          <Eye className="w-6 h-6 text-primary mb-3" />
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Total Impressions</p>
          <h3 className="text-2xl font-black">1.4M</h3>
        </div>
        <div className="glass-card flex flex-col items-center text-center p-6 border-b-2 border-emerald-400">
          <MousePointer2 className="w-6 h-6 text-emerald-400 mb-3" />
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Avg. Click Rate</p>
          <h3 className="text-2xl font-black">8.4%</h3>
        </div>
        <div className="glass-card flex flex-col items-center text-center p-6 border-b-2 border-amber-400">
          <Target className="w-6 h-6 text-amber-400 mb-3" />
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Leads Generated</p>
          <h3 className="text-2xl font-black">2,840</h3>
        </div>
        <div className="glass-card flex flex-col items-center text-center p-6 border-b-2 border-purple-400">
          <TrendingUp className="w-6 h-6 text-purple-400 mb-3" />
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">ROAS</p>
          <h3 className="text-2xl font-black">4.2x</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card !p-0">
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-primary" /> Active Campaigns
            </h3>
            <button className="text-xs font-bold text-slate-500 hover:text-white transition-all uppercase tracking-widest">View Archives</button>
          </div>
          <div className="divide-y divide-white/5">
            {campaigns.map((c) => (
              <div key={c.name} className="flex items-center justify-between p-6 hover:bg-white/[0.02] transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-primary transition-all">
                    {c.type === 'Email' ? <Mail className="w-6 h-6" /> : c.type === 'SMS' ? <Smartphone className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{c.name}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-black">{c.type} • {c.status}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-12 text-right">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Reach</p>
                    <p className="text-sm font-bold">{c.reach}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Conv.</p>
                    <p className="text-sm font-black text-emerald-400">{c.conv}</p>
                  </div>
                  <button className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h3 className="text-lg font-bold mb-6">Channel Attribution</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>E-MAIL</span>
                <span>42%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[42%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>SMS MARKETING</span>
                <span>28%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-[28%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>ORGANIC SEARCH</span>
                <span>15%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 w-[15%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>SOCIAL MEDIA</span>
                <span>15%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-purple-400 w-[15%]" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-2">Grow Recommendation</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your SMS campaigns have a 25% higher conversion rate than average. Increase budget in this sector to maximize Q2 yield.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

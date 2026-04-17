import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const stats = [
  { label: "Total Revenue", value: 1245000, change: "+12.5%", trending: "up", icon: DollarSign },
  { label: "Active Contacts", value: 2420, change: "+3.2%", trending: "up", icon: Users },
  { label: "New Orders", value: 48, change: "-2.4%", trending: "down", icon: TrendingUp },
  { label: "Team Velocity", value: "92%", change: "+5.1%", trending: "up", icon: Activity },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold">Good morning, Admin</h2>
        <p className="text-slate-400">Here's what's happening with your business today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card group relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
                stat.trending === "up" ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
              )}>
                {stat.trending === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold">
                {typeof stat.value === "number" ? formatCurrency(stat.value) : stat.value}
              </h3>
            </div>
            
            {/* Subtle background glow on hover */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card h-[400px] flex items-center justify-center border-dashed">
          <p className="text-slate-500 font-medium">Revenue Analytics Chart Space</p>
        </div>
        <div className="glass-card h-[400px]">
          <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4 items-start border-l-2 border-primary/20 pl-4 py-1">
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">New appointment booked</p>
                  <p className="text-xs text-slate-400">by John Doe • 2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

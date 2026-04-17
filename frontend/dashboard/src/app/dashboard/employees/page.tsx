import { 
  Users, 
  Calendar, 
  Clock, 
  Plus, 
  Award,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";

const employees = [
  { name: "Marcus Aurelius", role: "CEO", email: "marcus@mymanager.com", shifts: 12, performance: "98%" },
  { name: "Seneca Modern", role: "Manager", email: "seneca@mymanager.com", shifts: 22, performance: "92%" },
  { name: "Epictetus Slave", role: "Developer", email: "epictetus@mymanager.com", shifts: 18, performance: "95%" },
  { name: "Cato Younger", role: "HR Specialist", email: "cato@mymanager.com", shifts: 14, performance: "89%" },
];

export default function EmployeesPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Team & Workforce</h2>
          <p className="text-slate-400">Manage your employees, roles, and shift performance.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          Onboard Staff
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="glass-card flex flex-col items-center text-center p-8">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
            <Users className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold">24</h3>
          <p className="text-slate-400 font-medium">Total Staff</p>
        </div>
        <div className="glass-card flex flex-col items-center text-center p-8">
          <div className="w-20 h-20 rounded-2xl bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-4">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold">18</h3>
          <p className="text-slate-400 font-medium">Currently Active</p>
        </div>
        <div className="glass-card flex flex-col items-center text-center p-8">
          <div className="w-20 h-20 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
            <Clock className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold">06</h3>
          <p className="text-slate-400 font-medium">On Leave</p>
        </div>
        <div className="glass-card flex flex-col items-center text-center p-8">
          <div className="w-20 h-20 rounded-2xl bg-purple-400/10 flex items-center justify-center text-purple-400 mb-4">
            <Award className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold">94%</h3>
          <p className="text-slate-400 font-medium">Average Perf.</p>
        </div>
      </div>

      <div className="glass-card !p-0">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
          <h3 className="font-bold text-lg">Staff Directory</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-semibold rounded-xl bg-white/5 border border-white/10">All Departments</button>
          </div>
        </div>
        <div className="divide-y divide-white/5">
          {employees.map((emp) => (
            <div key={emp.name} className="flex items-center justify-between p-6 hover:bg-white/[0.02] transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/10 flex items-center justify-center font-bold text-primary">
                  {emp.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors">{emp.name}</h4>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <Briefcase className="w-3 h-3" /> {emp.role}
                    </span>
                    <span className="text-slate-700">•</span>
                    <span className="text-xs text-slate-500 font-medium">{emp.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-12">
                <div className="text-center">
                  <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-1">Monthly Shifts</p>
                  <p className="font-bold">{emp.shifts}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-1">Performance</p>
                  <p className="font-bold text-emerald-400">{emp.performance}</p>
                </div>
                <button className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-primary hover:text-white transition-all">
                  <Calendar className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

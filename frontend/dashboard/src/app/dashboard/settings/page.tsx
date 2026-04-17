import { 
  User, 
  Building, 
  Bell, 
  Shield, 
  Palette, 
  Globe,
  CreditCard,
  Mail,
  Smartphone
} from "lucide-react";
import { cn } from "@/lib/utils";

const settingGroups = [
  { label: "Account", icon: User, active: true },
  { label: "Organization", icon: Building },
  { label: "Notifications", icon: Bell },
  { label: "Security", icon: Shield },
  { label: "Appearance", icon: Palette },
  { label: "Billing", icon: CreditCard },
];

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold">Preferences</h2>
        <p className="text-slate-400">Configure your personal profile and organization settings.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 space-y-1">
          {settingGroups.map((group) => (
            <button 
              key={group.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                group.active ? "bg-primary text-white font-bold shadow-lg shadow-primary/10" : "text-slate-400 font-medium hover:text-white hover:bg-white/5"
              )}
            >
              <group.icon className="w-5 h-5" />
              {group.label}
            </button>
          ))}
        </aside>

        <div className="flex-1 space-y-6">
          <div className="glass-card">
            <h3 className="text-xl font-bold mb-6">Profile Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-6 pb-6 border-b border-white/5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-2xl font-black">
                  JS
                </div>
                <div>
                  <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all mb-2 block">Change Avatar</button>
                  <p className="text-xs text-slate-500 font-medium">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Full Name</label>
                  <input type="text" defaultValue="John Smith" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input type="email" defaultValue="john@mymanager.com" className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Phone</label>
                  <div className="relative">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input type="text" defaultValue="+1 (555) 000-0000" className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Timezone</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <select className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white font-medium appearance-none">
                      <option>(GMT-05:00) Eastern Time</option>
                      <option>(GMT-08:00) Pacific Time</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button className="px-6 py-2.5 rounded-xl font-bold text-slate-400 hover:text-white transition-all">Discard</button>
                <button className="px-8 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">Save Changes</button>
              </div>
            </div>
          </div>

          <div className="glass-card border-red-500/20">
            <h3 className="text-lg font-bold text-red-400 mb-2">Danger Zone</h3>
            <p className="text-sm text-slate-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
            <button className="px-6 py-2.5 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

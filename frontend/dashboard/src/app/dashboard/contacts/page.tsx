import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone,
  UserPlus
} from "lucide-react";
import { cn } from "@/lib/utils";

const mockContacts = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", phone: "+1 234 567 890", status: "Active", role: "Owner" },
  { id: "2", name: "Bob Smith", email: "bob@tech.com", phone: "+1 987 654 321", status: "Lead", role: "Client" },
  { id: "3", name: "Charlie Davis", email: "charlie@web.io", phone: "+1 555 012 345", status: "Inactive", role: "Partner" },
  { id: "4", name: "Diana Prince", email: "diana@wonder.com", phone: "+1 202 555 019", status: "Active", role: "Client" },
  { id: "5", name: "Edward Norton", email: "edward@fight.club", phone: "+1 999 555 011", status: "Active", role: "Employee" },
];

export default function ContactsPage() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Contacts</h2>
          <p className="text-slate-400">Manage your customers and partners in one place.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          Add Contact
        </button>
      </header>

      <div className="glass-card !p-0 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between bg-white/5">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search contacts..." 
              className="w-full pl-10 pr-4 py-2 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all font-medium">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all font-medium">
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-slate-400 text-sm uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Contact</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Last Active</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{contact.name}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Mail className="w-3 h-3" /> {contact.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-bold ring-1",
                      contact.status === "Active" ? "bg-emerald-400/10 text-emerald-400 ring-emerald-400/20" :
                      contact.status === "Lead" ? "bg-amber-400/10 text-amber-400 ring-amber-400/20" :
                      "bg-slate-400/10 text-slate-400 ring-slate-400/20"
                    )}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    {contact.role}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    2 hours ago
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-all text-slate-400 hover:text-white">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-white/10 flex items-center justify-between text-sm text-slate-400 bg-white/5">
          <p>Showing 5 of 1,240 contacts</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50 transition-all font-medium">Previous</button>
            <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-medium">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

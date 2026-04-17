import { 
  Download, 
  ExternalLink, 
  FileCheck, 
  Plus, 
  Search,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle2
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

const mockInvoices = [
  { id: "1", number: "INV-2024-001", client: "Acme Corp", amount: 450000, status: "Paid", date: "Mar 12, 2024" },
  { id: "2", number: "INV-2024-002", client: "Global Tech", amount: 120000, status: "Sent", date: "Mar 15, 2024" },
  { id: "3", number: "INV-2024-003", client: "Stark Ind", amount: 890000, status: "Overdue", date: "Mar 01, 2024" },
  { id: "4", number: "INV-2024-004", client: "Wayne Ent", amount: 230000, status: "Draft", date: "Mar 16, 2024" },
];

const summary = [
  { label: "Total Invoiced", value: 1690000, icon: DollarSign, color: "text-primary" },
  { label: "Paid Invoices", value: 450000, icon: CheckCircle2, color: "text-emerald-400" },
  { label: "Pending Amount", value: 350000, icon: Clock, color: "text-amber-400" },
];

export default function BillingPage() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Billing & Invoices</h2>
          <p className="text-slate-400">Track payments, issue invoices, and manage finances.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all">
            <Download className="w-5 h-5" />
            Report
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <Plus className="w-5 h-5" />
            Create Invoice
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summary.map((item) => (
          <div key={item.label} className="glass-card flex items-center gap-4">
            <div className={cn("p-3 rounded-2xl bg-white/5", item.color)}>
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-400 font-medium">{item.label}</p>
              <h3 className="text-xl font-bold">{formatCurrency(item.value)}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card !p-0">
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-4">
            <h3 className="font-bold text-lg">Invoices</h3>
            <div className="flex bg-black/20 rounded-lg p-1">
              <button className="px-3 py-1 text-xs font-bold rounded-md bg-primary text-white">All</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white transition-colors">Paid</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white transition-colors">Pending</button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Filter invoices..." 
              className="pl-10 pr-4 py-2 bg-black/20 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-primary/50"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-slate-400 text-xs uppercase tracking-wider">
                <th className="px-6 py-4">Invoice #</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4 font-mono text-sm text-primary group-hover:underline cursor-pointer">
                    {inv.number}
                  </td>
                  <td className="px-6 py-4 font-medium text-white">
                    {inv.client}
                  </td>
                  <td className="px-6 py-4 font-bold">
                    {formatCurrency(inv.amount)}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    {inv.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-black uppercase ring-1",
                      inv.status === "Paid" ? "bg-emerald-400/10 text-emerald-400 ring-emerald-400/20" :
                      inv.status === "Overdue" ? "bg-rose-400/10 text-rose-400 ring-rose-400/20" :
                      inv.status === "Sent" ? "bg-primary/10 text-primary ring-primary/20" :
                      "bg-slate-400/10 text-slate-400 ring-slate-400/20"
                    )}>
                      <div className={cn("w-1 h-1 rounded-full", 
                        inv.status === "Paid" ? "bg-emerald-400" :
                        inv.status === "Overdue" ? "bg-rose-400" : 
                        inv.status === "Sent" ? "bg-primary" : "bg-slate-400"
                      )} />
                      {inv.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

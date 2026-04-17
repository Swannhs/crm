import { 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Plus, 
  ArrowUpRight,
  Monitor,
  Smartphone,
  Tag
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const products = [
  { name: "Premium SaaS Plan", category: "Subscription", price: 9900, stock: "∞", sales: 412 },
  { name: "Enterprise Gateway", category: "Hardware", price: 249900, stock: 12, sales: 5 },
  { name: "Support Bundle", category: "Service", price: 2900, stock: "∞", sales: 84 },
  { name: "Analytics Add-on", category: "Software", price: 1490, stock: "∞", sales: 156 },
];

export default function CommercePage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Commerce & Inventory</h2>
          <p className="text-slate-400">Manage your product catalog, stock, and sales performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Monthly Gross</p>
            <h3 className="text-3xl font-black">{formatCurrency(4580000)}</h3>
            <span className="text-emerald-400 text-xs font-bold">+18.4% from last month</span>
          </div>
          <div className="p-4 rounded-2xl bg-primary/10 text-primary">
            <BarChart3 className="w-8 h-8" />
          </div>
        </div>
        <div className="glass-card flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Total Orders</p>
            <h3 className="text-3xl font-black">1,412</h3>
            <span className="text-slate-500 text-xs font-bold">Updated 5 min ago</span>
          </div>
          <div className="p-4 rounded-2xl bg-amber-400/10 text-amber-400">
            <ShoppingCart className="w-8 h-8" />
          </div>
        </div>
        <div className="glass-card flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Avg. Order Value</p>
            <h3 className="text-3xl font-black">{formatCurrency(32400)}</h3>
            <span className="text-primary text-xs font-bold">Industry High</span>
          </div>
          <div className="p-4 rounded-2xl bg-purple-400/10 text-purple-400">
            <Tag className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card !p-0">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
            <h3 className="font-bold text-lg">Product Catalog</h3>
            <div className="flex bg-black/20 rounded-lg p-1">
              <button className="px-3 py-1 text-xs font-bold rounded-md bg-primary text-white">Grid</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-400">List</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-slate-500 text-[10px] uppercase font-black tracking-widest">
                  <th className="px-6 py-4">Item</th>
                  <th className="px-6 py-4 text-center">Price</th>
                  <th className="px-6 py-4 text-center">Stock</th>
                  <th className="px-6 py-4 text-center">Sales</th>
                  <th className="px-6 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {products.map((p) => (
                  <tr key={p.name} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black/20 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                          <Package className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{p.name}</p>
                          <p className="text-[10px] text-slate-500 uppercase font-bold">{p.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-bold text-slate-300">
                      {formatCurrency(p.price)}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-mono text-slate-400">
                      {p.stock}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-1 text-emerald-400 text-xs font-bold">
                        <ArrowUpRight className="w-3 h-3" />
                        {p.sales}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20">Active</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card">
          <h3 className="text-lg font-bold mb-6">Channel Performance</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-400"><Monitor className="w-4 h-4" /> Desktop</span>
                <span className="font-bold">64%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[64%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-400"><Smartphone className="w-4 h-4" /> Mobile</span>
                <span className="font-bold">36%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-purple-400 w-[36%]" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">Top Selling Region</h4>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">North America</span>
              <span className="text-primary font-bold">42%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

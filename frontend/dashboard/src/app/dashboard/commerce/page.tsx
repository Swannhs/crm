'use client';

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
import { commerceService } from "@/services/commerce.service";
import { useQuery } from "@tanstack/react-query";

export default function CommercePage() {
  const { data: productsResponse, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => commerceService.getProducts(),
  });

  const products = productsResponse?.data || [];

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
            <p className="text-slate-400 text-sm font-medium mb-1">Items in Catalog</p>
            <h3 className="text-3xl font-black">{products.length}</h3>
            <span className="text-emerald-400 text-xs font-bold">Live from Backend</span>
          </div>
          <div className="p-4 rounded-2xl bg-primary/10 text-primary">
            <Package className="w-8 h-8" />
          </div>
        </div>
        <div className="glass-card flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Total Sales</p>
            <h3 className="text-3xl font-black">--</h3>
            <span className="text-slate-500 text-xs font-bold">Orders endpoint pending</span>
          </div>
          <div className="p-4 rounded-2xl bg-amber-400/10 text-amber-400">
            <ShoppingCart className="w-8 h-8" />
          </div>
        </div>
        <div className="glass-card flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Stock Status</p>
            <h3 className="text-3xl font-black">{products.filter(p => (p.stockQuantity ?? 0) > 0).length}</h3>
            <span className="text-primary text-xs font-bold">In Stock Items</span>
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
          </div>
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="p-12 text-center text-slate-400">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                Loading products...
              </div>
            ) : error ? (
              <div className="p-12 text-center text-red-400 bg-red-400/5">
                Failed to load product catalog.
              </div>
            ) : products.length === 0 ? (
              <div className="p-12 text-center text-slate-500 italic">
                No products found.
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="text-left text-slate-500 text-[10px] uppercase font-black tracking-widest">
                    <th className="px-6 py-4">Item</th>
                    <th className="px-6 py-4 text-center">Price</th>
                    <th className="px-6 py-4 text-center">Stock</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-black/20 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                            <Package className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white max-w-[200px] truncate">{p.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-bold text-slate-300">
                        {formatCurrency((p.priceCents || 0) / 100)}
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-mono text-slate-400">
                        {p.stockQuantity ?? 0}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={cn(
                          "px-2 py-0.5 rounded-md text-[10px] font-black uppercase ring-1",
                          p.status === 'active' ? "bg-emerald-400/10 text-emerald-400 ring-emerald-400/20" : "bg-slate-400/10 text-slate-400 ring-slate-400/20"
                        )}>{p.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="glass-card">
          <h3 className="text-lg font-bold mb-6">Channel Performance</h3>
          <div className="space-y-6">
            <div className="space-y-2 opacity-50">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-400"><Monitor className="w-4 h-4" /> Desktop</span>
                <span className="font-bold">--</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-0" />
              </div>
            </div>
            <p className="text-xs text-slate-500 italic mt-4 text-center">Analytics data integration pending aggregation microservice.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

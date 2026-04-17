'use client';

import { 
  FileText, 
  Upload, 
  Eye, 
  Download,
  Share2,
  Lock,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { documentService } from "@/services/document.service";
import { useQuery } from "@tanstack/react-query";

export default function DocumentsPage() {
  const { data: docsResponse, isLoading, error } = useQuery({
    queryKey: ['documents'],
    queryFn: () => documentService.getDocuments(),
  });

  const documents = docsResponse?.data || [];

  const signedCount = documents.filter(d => d.status === 'signed').length;
  const pendingCount = documents.filter(d => d.status === 'pending').length;

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Document vault</h2>
          <p className="text-slate-400">Securely store, sign, and manage organization documents.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Upload className="w-5 h-5" />
          Upload New
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card text-center border-b-4 border-emerald-400">
          <p className="text-slate-400 text-xs font-bold uppercase mb-2">Signed</p>
          <h3 className="text-2xl font-black">{signedCount}</h3>
        </div>
        <div className="glass-card text-center border-b-4 border-amber-400">
          <p className="text-slate-400 text-xs font-bold uppercase mb-2">Pending</p>
          <h3 className="text-2xl font-black">{pendingCount}</h3>
        </div>
        <div className="glass-card text-center border-b-4 border-primary">
          <p className="text-slate-400 text-xs font-bold uppercase mb-2">Total Files</p>
          <h3 className="text-2xl font-black">{documents.length}</h3>
        </div>
        <div className="glass-card text-center border-b-4 border-purple-400">
          <p className="text-slate-400 text-xs font-bold uppercase mb-2">Vault Status</p>
          <h3 className="text-2xl font-black">Active</h3>
        </div>
      </div>

      <div className="glass-card !p-0 overflow-hidden">
        <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
          <div className="flex gap-4">
            <button className="text-sm font-bold text-white border-b-2 border-primary pb-1">All Files</button>
            <button className="text-sm font-semibold text-slate-500 hover:text-white transition-colors">Shared with me</button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Search files..." className="pl-10 pr-4 py-2 bg-black/40 border border-white/5 rounded-xl text-sm focus:outline-none" />
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {isLoading ? (
            <div className="p-12 text-center text-slate-400">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              Loading vault...
            </div>
          ) : error ? (
            <div className="p-12 text-center text-red-400 bg-red-400/5">
              Failed to load document vault.
            </div>
          ) : documents.length === 0 ? (
            <div className="p-12 text-center text-slate-500 italic">
              No documents found in your vault.
            </div>
          ) : (
            documents.map((doc) => (
              <div key={doc.id} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary transition-all">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm cursor-pointer hover:underline">{doc.name}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter mt-0.5">
                      {doc.type} • {(doc.sizeBytes / 1024).toFixed(1)} KB • Uploaded {new Date(doc.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-black uppercase ring-1 shadow-sm capitalize",
                    doc.status === "signed" ? "bg-emerald-400/10 text-emerald-400 ring-emerald-400/20" :
                    doc.status === "pending" ? "bg-amber-400/10 text-amber-400 ring-amber-400/20" :
                    "bg-primary/10 text-primary ring-primary/20"
                  )}>
                    {doc.status}
                  </span>

                  <div className="flex gap-1">
                    <button title="Preview" className="p-2 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all"><Eye className="w-4 h-4" /></button>
                    <button title="Download" className="p-2 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all"><Download className="w-4 h-4" /></button>
                    <button title="Share" className="p-2 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all"><Share2 className="w-4 h-4" /></button>
                    <button title="Security" className="p-2 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all"><Lock className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}


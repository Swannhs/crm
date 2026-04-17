import { 
  File, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  Upload, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Download, 
  Trash2,
  FolderOpen
} from "lucide-react";
import { cn } from "@/lib/utils";

const assets = [
  { id: "1", name: "Brand_Identity_2024.pdf", type: "pdf", size: "12.4 MB", date: "Apr 12, 2024", color: "text-red-400" },
  { id: "2", name: "Hero_Section_Concept.jpg", type: "image", size: "2.8 MB", date: "Apr 10, 2024", color: "text-emerald-400" },
  { id: "3", name: "Product_Demo_Video.mp4", type: "video", size: "45.2 MB", date: "Apr 08, 2024", color: "text-primary" },
  { id: "4", name: "Quarterly_Report.docx", type: "document", size: "1.2 MB", date: "Apr 05, 2024", color: "text-blue-400" },
];

export default function MediaPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Media & Assets</h2>
          <p className="text-slate-400">Manage your organization's digital assets, brand files, and documents.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Upload className="w-5 h-5" />
          Upload New File
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar: Categories */}
        <div className="space-y-6">
          <div className="glass-card">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Storage Pulse</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>Total Capacity</span>
                <span>42.5 GB / 100 GB</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[42.5%]" />
              </div>
              <p className="text-[10px] text-slate-500 font-medium">Auto-cleanup active for files older than 90 days.</p>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Quick Folders</h3>
            <div className="space-y-1">
              {['Marketing', 'Product Designs', 'Financial Docs', 'Social Media'].map((folder) => (
                <button key={folder} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-all">
                  <FolderOpen className="w-4 h-4 text-primary/60" />
                  {folder}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Asset Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search assets... " 
                className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/5 rounded-2xl text-sm focus:outline-none focus:border-primary/50 text-white"
              />
            </div>
            <div className="flex bg-black/40 rounded-2xl p-1 border border-white/5">
              <button className="p-2.5 bg-white/10 text-white rounded-xl shadow-lg"><ImageIcon className="w-4 h-4" /></button>
              <button className="p-2.5 text-slate-600 hover:text-white transition-all"><Video className="w-4 h-4" /></button>
              <button className="p-2.5 text-slate-600 hover:text-white transition-all"><FileText className="w-4 h-4" /></button>
            </div>
            <button className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-slate-300 hover:text-white transition-all">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {assets.map((asset) => (
              <div key={asset.id} className="glass-card !p-0 group overflow-hidden hover:border-primary/30 transition-all duration-500">
                <div className="aspect-video w-full bg-black/40 flex flex-col items-center justify-center relative group-hover:bg-black/60 transition-all">
                  {asset.type === 'image' ? <ImageIcon className="w-12 h-12 text-emerald-400/20" /> :
                   asset.type === 'video' ? <Video className="w-12 h-12 text-primary/20" /> :
                   asset.type === 'pdf' ? <FileText className="w-12 h-12 text-red-400/20" /> :
                   <File className="w-12 h-12 text-blue-400/20" />}
                  
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <button className="p-2 bg-black/80 rounded-lg hover:bg-primary transition-all text-white"><Download className="w-4 h-4" /></button>
                    <button className="p-2 bg-black/80 rounded-lg hover:bg-red-500 transition-all text-white"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="p-5 flex items-start justify-between">
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-white truncate mb-1">{asset.name}</h4>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{asset.size} • {asset.date}</p>
                  </div>
                  <button className="text-slate-600 hover:text-white transition-all"><MoreHorizontal className="w-5 h-5" /></button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State / "Load More" Placeholder */}
          <div className="flex justify-center pt-8">
            <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase text-slate-500 hover:text-white hover:bg-white/10 transition-all">
              Load More Assets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

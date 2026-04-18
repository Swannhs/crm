'use client';

import { 
  Plus, 
  MousePointer2, 
  Layers, 
  Settings, 
  Play, 
  Save, 
  Code,
  Type,
  ToggleLeft,
  Calendar,
  Zap,
  Mail,
  Smartphone,
  ChevronRight,
  LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

interface LibraryItem {
  icon: LucideIcon;
  label: string;
  color?: string;
}

interface ComponentGroup {
  group: string;
  items: LibraryItem[];
}

const componentLibrary: ComponentGroup[] = [
  { group: 'Form Elements', items: [
    { icon: Type, label: 'Text Input' },
    { icon: ToggleLeft, label: 'Checkbox' },
    { icon: Calendar, label: 'Date Picker' },
  ]},
  { group: 'Automation', items: [
    { icon: Zap, label: 'Lead Trigger', color: 'text-amber-400' },
    { icon: Mail, label: 'Send Email', color: 'text-primary' },
    { icon: Smartphone, label: 'Send SMS', color: 'text-emerald-400' },
  ]},
];

const nodes = [
  { id: '1', type: 'trigger', label: 'New Lead Created', x: 100, y: 100 },
  { id: '2', type: 'action', label: 'Calculate Score', x: 400, y: 100 },
  { id: '3', type: 'action', label: 'Send Welcome Email', x: 700, y: 150 },
];

export default function BuilderPage() {
  return (
    <div className="h-[calc(100vh-160px)] flex flex-col gap-6 animate-in slide-in-from-right-4 duration-700">
      <header className="flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-2xl shadow-xl">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">Onboarding Automation</h2>
            <span className="px-2 py-0.5 bg-emerald-400/10 text-emerald-400 text-[10px] font-black uppercase rounded">Published</span>
          </div>
          <div className="flex bg-black/40 rounded-xl p-1 border border-white/5">
            <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-primary text-white flex items-center gap-2">
              <MousePointer2 className="w-3 h-3" /> Designer
            </button>
            <button className="px-4 py-1.5 text-xs font-medium text-slate-500 flex items-center gap-2">
              <Settings className="w-3 h-3" /> Settings
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-300 hover:text-white transition-all">
            <Play className="w-4 h-4 text-emerald-400" /> Test
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-primary rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </header>

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Left Library */}
        <aside className="w-72 glass-card !p-0 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" />
            <h3 className="font-bold text-sm">Components</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-8">
            {componentLibrary.map((group) => (
              <div key={group.group} className="space-y-3">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{group.group}</h4>
                <div className="grid grid-cols-1 gap-2">
                  {group.items.map((item) => (
                    <div 
                      key={item.label} 
                      className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-grab hover:border-primary/50 transition-all group"
                    >
                      <item.icon className={cn("w-5 h-5", item.color || "text-slate-400")} />
                      <span className="text-xs font-bold text-slate-300 group-hover:text-white">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase">
              <span>Canvas Status</span>
              <span className="text-emerald-400">Synced</span>
            </div>
          </div>
        </aside>

        {/* Canvas Area */}
        <div className="flex-1 glass-card relative overflow-hidden bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]">
          {/* Mock Nodes */}
          {nodes.map((node) => (
            <div 
              key={node.id}
              className={cn(
                "absolute w-64 p-5 rounded-2xl shadow-2xl ring-1 group cursor-move transition-all active:scale-95",
                node.type === 'trigger' ? "bg-[#1a1c2e] ring-amber-400/20" : "bg-black/60 ring-white/5 hover:ring-primary/40"
              )}
              style={{ left: node.x, top: node.y }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {node.type === 'trigger' ? <Zap className="w-4 h-4 text-amber-400" /> : <ChevronRight className="w-4 h-4 text-primary" />}
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{node.type}</span>
                </div>
                <Settings className="w-4 h-4 text-slate-600 cursor-pointer hover:text-white transition-all" />
              </div>
              <h4 className="font-bold text-white mb-4">{node.label}</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-bold text-slate-500">Active Node</span>
              </div>
              
              {/* Connector dots */}
              <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-700 -translate-y-1/2" />
              <div className="absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-primary border-2 border-primary/20 -translate-y-1/2 shadow-lg shadow-primary/20" />
            </div>
          ))}

          {/* Context Controls */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            <button className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all"><Code className="w-5 h-5" /></button>
            <div className="w-[1px] bg-white/10 h-10 self-center" />
            <div className="flex bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-1">
              <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white transition-all">25%</button>
              <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white transition-all">50%</button>
              <button className="px-4 py-2 text-xs font-bold bg-white/10 text-white rounded-xl">100%</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

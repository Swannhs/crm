import { 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  Plus, 
  Users, 
  MoreHorizontal,
  GripVertical,
  Flag
} from "lucide-react";
import { cn } from "@/lib/utils";

const columns = [
  { id: 'todo', label: 'To Do', color: 'bg-slate-500' },
  { id: 'in-progress', label: 'In Progress', color: 'bg-primary' },
  { id: 'review', label: 'Review', color: 'bg-amber-400' },
  { id: 'done', label: 'Completed', color: 'bg-emerald-400' },
];

const tasks = [
  { id: '1', title: 'Migrate API Gateway', status: 'in-progress', priority: 'high', team: 3 },
  { id: '2', title: 'Implement Auth Service', status: 'done', priority: 'medium', team: 2 },
  { id: '3', title: 'Draft Community Schema', status: 'todo', priority: 'low', team: 1 },
  { id: '4', title: 'Refactor Frontend Layout', status: 'review', priority: 'high', team: 4 },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Project Workspace</h2>
          <p className="text-slate-400">Manage your workflows, team tasks, and sprint progress.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all">
            <BarChart3 className="w-5 h-5" />
            Analytics
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <Plus className="w-5 h-5" />
            New Project
          </button>
        </div>
      </header>

      <div className="flex gap-6 overflow-x-auto pb-6 -mx-2 px-2 scrollbar-hide">
        {columns.map((column) => (
          <div key={column.id} className="min-w-[320px] flex-1 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className={cn("w-2 h-2 rounded-full", column.color)} />
                <h3 className="font-bold text-sm text-white uppercase tracking-widest">{column.label}</h3>
                <span className="text-[10px] font-black bg-white/5 px-2 py-0.5 rounded text-slate-500">
                  {tasks.filter(t => t.status === column.id).length}
                </span>
              </div>
              <button className="p-1 hover:bg-white/5 rounded transition-all"><Plus className="w-4 h-4 text-slate-500" /></button>
            </div>

            <div className="flex-1 space-y-4">
              {tasks.filter(t => t.status === column.id).map((task) => (
                <div key={task.id} className="glass-card !p-5 group cursor-grab active:cursor-grabbing hover:border-primary/40 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <span className={cn(
                      "text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm ring-1",
                      task.priority === 'high' ? "bg-red-400/10 text-red-400 ring-red-400/20" :
                      task.priority === 'medium' ? "bg-amber-400/10 text-amber-400 ring-amber-400/20" :
                      "bg-slate-400/10 text-slate-400 ring-slate-400/20"
                    )}>
                      {task.priority} Priority
                    </span>
                    <button className="text-slate-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"><MoreHorizontal className="w-4 h-4" /></button>
                  </div>
                  
                  <h4 className="font-bold text-white mb-4 group-hover:text-primary transition-colors">{task.title}</h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[...Array(task.team)].map((_, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-white/10 border-2 border-[#12141c] flex items-center justify-center text-[10px] font-bold">
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-500">
                      <div className="flex items-center gap-1 text-[10px] font-bold">
                        <Flag className="w-3 h-3" />
                        Today
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="w-full py-3 border-2 border-dashed border-white/5 rounded-2xl text-slate-600 font-bold text-sm hover:border-white/10 hover:text-slate-400 transition-all">
                + Add Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

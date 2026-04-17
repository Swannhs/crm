import { 
  Send, 
  Search, 
  MoreVertical, 
  Phone, 
  Video, 
  Info,
  Paperclip,
  Smile,
  CheckCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const chats = [
  { id: '1', name: 'John Smith', lastMsg: 'I have checked the invoice...', time: '12:45 PM', unread: 2 },
  { id: '2', name: 'Marissa Mayer', lastMsg: 'The campaign looks great!', time: 'Yesterday', unread: 0 },
  { id: '3', name: 'Elon Musk', lastMsg: 'When is the deadline?', time: '2 Days ago', unread: 0 },
];

const messages = [
  { id: '1', text: 'Hello! How is the integration going?', isMe: false, time: '10:00 AM' },
  { id: '2', text: 'Almost there. I just finished the Docker cleanup.', isMe: true, time: '10:05 AM' },
  { id: '3', text: 'Great. Let me know if you need help with the gateway.', isMe: false, time: '10:06 AM' },
  { id: '4', text: 'Sure thing! Checking the mappings now.', isMe: true, time: '10:10 AM' },
];

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-160px)] flex gap-6 animate-in fade-in zoom-in-95 duration-500">
      {/* Inbox List */}
      <div className="w-80 flex flex-col glass-card !p-0 overflow-hidden">
        <div className="p-4 border-b border-white/10 space-y-4">
          <h3 className="text-xl font-bold">Inbox</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Search chats..." className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/5 rounded-xl text-sm focus:outline-none" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto divide-y divide-white/5">
          {chats.map((chat) => (
            <div key={chat.id} className={cn(
              "p-4 flex gap-3 cursor-pointer hover:bg-white/5 transition-colors",
              chat.id === '1' && "bg-primary/5 border-l-4 border-primary"
            )}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center font-bold text-primary shrink-0">
                {chat.name[0]}
              </div>
              <div className="min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-sm text-white truncate">{chat.name}</h4>
                  <span className="text-[10px] text-slate-500">{chat.time}</span>
                </div>
                <p className="text-xs text-slate-400 truncate">{chat.lastMsg}</p>
              </div>
              {chat.unread > 0 && (
                <div className="ml-auto w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col glass-card !p-0 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">J</div>
            <div>
              <h4 className="font-bold text-white text-sm">John Smith</h4>
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Online</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-all"><Phone className="w-5 h-5" /></button>
            <button className="p-2 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-all"><Video className="w-5 h-5" /></button>
            <button className="p-2 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-all"><Info className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Console / Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/10">
          <div className="flex justify-center">
            <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-slate-500 uppercase">Today</span>
          </div>
          
          {messages.map((msg) => (
            <div key={msg.id} className={cn(
              "flex flex-col max-w-[70%]",
              msg.isMe ? "ml-auto items-end" : "mr-auto items-start"
            )}>
              <div className={cn(
                "p-4 rounded-2xl text-sm font-medium shadow-xl ring-1",
                msg.isMe 
                  ? "bg-primary text-white rounded-tr-none ring-primary/20" 
                  : "bg-white/5 text-slate-300 rounded-tl-none ring-white/10"
              )}>
                {msg.text}
              </div>
              <div className="flex items-center gap-1.5 mt-1 px-1">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{msg.time}</span>
                {msg.isMe && <CheckCheck className="w-3 h-3 text-primary" />}
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="p-6 border-t border-white/10 bg-white/5">
          <div className="relative flex items-center gap-4">
            <button className="p-1.5 text-slate-500 hover:text-white transition-all"><Paperclip className="w-5 h-5" /></button>
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Type your message... " 
                className="w-full pl-4 pr-12 py-4 bg-black/40 border border-white/5 rounded-2xl text-sm focus:outline-none focus:border-primary/50 text-white"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-primary transition-all">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            <button className="p-4 bg-primary text-white rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

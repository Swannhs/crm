import { 
  MessageSquare, 
  Heart, 
  Share2, 
  Search, 
  Plus, 
  MoreHorizontal,
  Bookmark,
  TrendingUp,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const posts = [
  {
    id: "1",
    title: "Scaling Microservices with KrakenD Gateway",
    author: "Jane Doe",
    role: "Architect",
    category: "Architecture",
    likes: 124,
    comments: 18,
    date: "2 hours ago",
    excerpt: "Learn how we reduced latency by 40% using declarative routing and custom middleware in our API gateway layer...",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "2",
    title: "The Future of MyManager Dashboard Design",
    author: "Alex Rivera",
    role: "Lead Designer",
    category: "Design",
    likes: 89,
    comments: 42,
    date: "5 hours ago",
    excerpt: "Glassmorphism, micro-interactions, and the philosophy behind our new minimalist aesthetics for 2024...",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60"
  }
];

export default function CommunityPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Community & Insights</h2>
          <p className="text-slate-400">Collaborate with your organization and share industry knowledge.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          Create Post
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Left: Categories */}
        <div className="lg:col-span-3 space-y-6">
          <div className="glass-card">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Feed Discovery</h3>
            <div className="space-y-1">
              {['Recent', 'Popular', 'Following', 'Bookmarked'].map((item) => (
                <button key={item} className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all",
                  item === 'Recent' ? "bg-primary/10 text-primary font-bold" : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}>
                  {item}
                  {item === 'Recent' && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Trending Topics</h3>
            <div className="flex flex-wrap gap-2">
              {['#architecture', '#uxdesign', '#fintech', '#saas', '#leadership'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300 hover:border-primary/50 cursor-pointer transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-6 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search conversations, knowledge... " 
              className="w-full pl-12 pr-4 py-4 bg-black/40 border border-white/5 rounded-2xl focus:outline-none focus:border-primary/50 text-white shadow-xl transition-all"
            />
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="glass-card !p-0 overflow-hidden group hover:border-primary/30 transition-all duration-500">
                <div className="aspect-[21/9] w-full relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="px-3 py-1 bg-primary text-[10px] font-black uppercase rounded-md shadow-lg">{post.category}</span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-600 border-2 border-white/10 flex items-center justify-center text-sm font-bold shadow-lg">
                        {post.author[0]}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{post.author}</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">{post.role} • {post.date}</p>
                      </div>
                    </div>
                    <button className="text-slate-500 hover:text-white transition-all"><MoreHorizontal className="w-6 h-6" /></button>
                  </div>

                  <div className="space-y-2">
                    <Link href={`/dashboard/community/${post.id}`} className="text-2xl font-black text-white hover:text-primary transition-colors leading-tight block">
                      {post.title}
                    </Link>
                    <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-slate-400 hover:text-pink-500 transition-all text-xs font-bold uppercase tracking-wider">
                        <Heart className="w-4 h-4" /> {post.likes}
                      </button>
                      <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-all text-xs font-bold uppercase tracking-wider">
                        <MessageSquare className="w-4 h-4" /> {post.comments}
                      </button>
                    </div>
                    <div className="flex gap-4">
                      <button className="text-slate-500 hover:text-white transition-all"><Share2 className="w-5 h-5" /></button>
                      <button className="text-slate-500 hover:text-white transition-all"><Bookmark className="w-5 h-5" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Right: Stats & Top Members */}
        <div className="lg:col-span-3 space-y-6">
          <div className="glass-card bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="font-bold">Ecosystem Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Monthly Reach</span>
                <span className="text-sm font-black text-white">+24k</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Contributor Score</span>
                <span className="text-sm font-black text-emerald-400">Elite</span>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Top Contributors</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-xs">U{i}</div>
                    <div className="absolute -top-1 -right-1"><Award className="w-3 h-3 text-amber-400" /></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-white">User {i}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">1.2k Contribution Pts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

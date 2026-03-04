import Link from "next/link";
import { getTimelinePosts, type TimelinePost } from "@/lib/content";
import { ArrowLeft, Clock, ExternalLink, Film, Swords, Sparkles, Users } from "lucide-react";

const categoryConfig: Record<TimelinePost["category"], { color: string; bg: string; border: string; icon: typeof Film }> = {
  Movies:   { color: "text-um-cyan",   bg: "bg-um-cyan/10",   border: "border-um-cyan/25",   icon: Film },
  Battles:  { color: "text-red-400",   bg: "bg-red-400/10",   border: "border-red-400/25",   icon: Swords },
  Reveals:  { color: "text-um-purple", bg: "bg-um-purple/10", border: "border-um-purple/25", icon: Sparkles },
  Variants: { color: "text-um-green",  bg: "bg-um-green/10",  border: "border-um-green/25",  icon: Users },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function TimelinePage() {
  const posts = getTimelinePosts();

  return (
    <div className="min-h-screen bg-[#060b18] relative">
      {/* Scanline overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(167,139,250,0.08), transparent), radial-gradient(ellipse 40% 40% at 80% 100%, rgba(34,211,238,0.05), transparent)",
        }}
      />

      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#060b18]/80 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-um-text-muted hover:text-um-text transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-[11px] font-mono tracking-wider uppercase">Back</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <Clock size={14} className="text-um-purple" />
            <span className="text-[12px] font-mono text-um-purple tracking-[0.15em] uppercase font-bold">
              Canon Timeline
            </span>
          </div>
          <span className="text-[10px] font-mono text-um-text-dim">
            {posts.length} <span className="hidden sm:inline">events</span>
          </span>
        </div>
      </header>

      {/* Timeline */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Vertical line */}
        <div className="absolute left-[27px] sm:left-[39px] top-0 bottom-0 w-px bg-white/[0.06]" />

        <div className="space-y-6">
          {posts.map((post, i) => {
            const cat = categoryConfig[post.category];
            const Icon = cat.icon;

            return (
              <div key={post.id} className="relative flex gap-4 sm:gap-5">
                {/* Timeline node */}
                <div className="relative z-10 flex-shrink-0 mt-5">
                  <div
                    className={`w-[14px] h-[14px] rounded-full border-2 ${cat.border} ${cat.bg} flex items-center justify-center`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${cat.color.replace("text-", "bg-")}`} />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 glass-card p-4 sm:p-5 hover:bg-white/[0.04] transition-colors group"
                  style={{
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  {/* Top row: date + category */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono text-um-text-dim tracking-wider">
                      {formatDate(post.date)}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded ${cat.bg} ${cat.color} border ${cat.border}`}
                    >
                      <Icon size={10} />
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-[15px] sm:text-base font-semibold text-um-text mb-1.5 leading-tight">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[12px] sm:text-[13px] text-um-text-muted leading-relaxed mb-3">
                    {post.description}
                  </p>

                  {/* Metadata row */}
                  <div className="flex items-center flex-wrap gap-x-4 gap-y-1.5">
                    {/* Engagement */}
                    <span className="text-[10px] font-mono text-um-text-dim">
                      {post.engagement}
                    </span>

                    {/* Type badge */}
                    <span className="text-[9px] font-mono text-um-text-dim uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                      {post.type}
                    </span>

                    {/* Tweet link */}
                    <a
                      href={post.tweetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-um-purple hover:text-um-purple-bright transition-colors ml-auto"
                    >
                      <span className="tracking-wider uppercase">View Post</span>
                      <ExternalLink size={9} className="opacity-60" />
                    </a>
                  </div>

                  {/* Lore note */}
                  <div className="mt-3 pt-3 border-t border-white/[0.06]">
                    <p className="text-[11px] text-um-text-dim italic leading-relaxed">
                      <span className="text-um-purple font-mono not-italic text-[9px] tracking-wider uppercase mr-1.5">
                        Lore
                      </span>
                      {post.loreNote}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

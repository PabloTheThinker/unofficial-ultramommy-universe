import Link from "next/link";
import { getTimelinePosts, type TimelinePost } from "@/lib/content";
import { ArrowLeft, Clock, ExternalLink, Film, Swords, Sparkles, Users, Play, Image as ImageIcon } from "lucide-react";

const categoryConfig: Record<
  TimelinePost["category"],
  { color: string; bg: string; border: string; glow: string; icon: typeof Film; hex: string }
> = {
  Movies:   { color: "text-um-cyan",   bg: "bg-um-cyan/10",   border: "border-um-cyan/25",   glow: "shadow-[0_0_12px_rgba(34,211,238,0.2)]", icon: Film,     hex: "#22D3EE" },
  Battles:  { color: "text-red-400",   bg: "bg-red-400/10",   border: "border-red-400/25",   glow: "shadow-[0_0_12px_rgba(239,68,68,0.2)]",  icon: Swords,   hex: "#EF4444" },
  Reveals:  { color: "text-um-purple", bg: "bg-um-purple/10", border: "border-um-purple/25", glow: "shadow-[0_0_12px_rgba(167,139,250,0.2)]", icon: Sparkles, hex: "#A78BFA" },
  Variants: { color: "text-um-green",  bg: "bg-um-green/10",  border: "border-um-green/25",  glow: "shadow-[0_0_12px_rgba(34,197,94,0.2)]",  icon: Users,    hex: "#22C55E" },
};

function formatDateShort(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function TimelinePage() {
  const posts = getTimelinePosts();

  return (
    <div className="min-h-screen bg-[#060b18] relative">
      {/* Scanline overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
        }}
      />

      {/* Ambient glows */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 60% 25% at 50% 0%, rgba(167,139,250,0.1), transparent)",
            "radial-gradient(ellipse 40% 40% at 90% 100%, rgba(34,211,238,0.06), transparent)",
            "radial-gradient(ellipse 30% 30% at 10% 60%, rgba(239,68,68,0.04), transparent)",
          ].join(", "),
        }}
      />

      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#060b18]/80 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-um-text-muted hover:text-um-text transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-[11px] font-mono tracking-wider uppercase">Roster</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-um-purple/20 border border-um-purple/30 flex items-center justify-center">
              <Clock size={12} className="text-um-purple" />
            </div>
            <span className="text-[15px] font-semibold text-um-text tracking-wide uppercase">
              Canon Timeline
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-um-green animate-pulse" />
            <span className="text-[10px] font-mono text-um-text-dim">
              {posts.length} events
            </span>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-2">
        <div className="text-center space-y-3 mb-4">
          <p className="text-[10px] font-mono text-um-purple tracking-[0.3em] uppercase">
            Jan 22 — Mar 4, 2025
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-um-text tracking-tight text-glow-purple">
            The Ultra Chronicle
          </h1>
          <p className="text-[14px] text-um-text-muted max-w-md mx-auto leading-relaxed">
            Every canon event in the Ultra Mommy Universe, from the first reveal to the family lore drop.
          </p>
        </div>

        {/* Category legend */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 py-4">
          {(Object.entries(categoryConfig) as [TimelinePost["category"], typeof categoryConfig["Movies"]][]).map(([name, cat]) => {
            const Icon = cat.icon;
            return (
              <div key={name} className="flex items-center gap-1.5">
                <Icon size={10} className={cat.color} />
                <span className={`text-[9px] font-mono tracking-wider uppercase ${cat.color}`}>{name}</span>
              </div>
            );
          })}
        </div>

        <div className="energy-line my-2" />
      </div>

      {/* Timeline */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Vertical connector line */}
        <div className="absolute left-[31px] sm:left-[43px] top-0 bottom-0 w-px timeline-line" />

        <div className="space-y-5 pt-8">
          {posts.map((post, i) => {
            const cat = categoryConfig[post.category];
            const Icon = cat.icon;
            const isVideo = post.type === "video";

            return (
              <div
                key={post.id}
                className="relative flex gap-4 sm:gap-6 stagger-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Timeline node */}
                <div className="relative z-10 flex-shrink-0 mt-6">
                  <div
                    className={`timeline-node w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${cat.glow}`}
                    style={{ borderColor: cat.hex, backgroundColor: `${cat.hex}15` }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: cat.hex }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-card hud-corner scan-sweep overflow-hidden group">
                  {/* Top accent bar */}
                  <div
                    className="h-[2px] transition-all duration-300 group-hover:h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${cat.hex}, ${cat.hex}40, transparent)`,
                    }}
                  />

                  <div className="p-4 sm:p-5">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[20px] sm:text-[22px] font-bold tabular-nums leading-none"
                          style={{ color: cat.hex }}
                        >
                          {formatDateShort(post.date)}
                        </span>
                        <span className="text-[10px] font-mono text-um-text-dim mt-1">
                          {new Date(post.date + "T00:00:00").getFullYear()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Type icon */}
                        <div className="w-6 h-6 rounded bg-white/[0.04] border border-white/[0.06] flex items-center justify-center" title={isVideo ? "Video" : "Image"}>
                          {isVideo ? <Play size={10} className="text-um-text-dim ml-0.5" /> : <ImageIcon size={10} className="text-um-text-dim" />}
                        </div>
                        {/* Category badge */}
                        <span
                          className={`inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded ${cat.bg} ${cat.color} border ${cat.border}`}
                        >
                          <Icon size={10} />
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-[17px] sm:text-[18px] font-bold text-um-text mb-1.5 leading-tight tracking-tight group-hover:text-white transition-colors">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[13px] text-um-text-muted leading-relaxed mb-4">
                      {post.description}
                    </p>

                    {/* Bottom row */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                      <div className="flex items-center gap-4">
                        {/* Engagement */}
                        <span className="text-[11px] font-mono font-semibold text-um-text-dim">
                          {post.engagement}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Lore tag */}
                        <span className="text-[10px] text-um-text-dim italic hidden sm:inline max-w-[200px] truncate">
                          {post.loreNote}
                        </span>

                        {/* View post link */}
                        <a
                          href={post.tweetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold tracking-wider uppercase px-3 py-1.5 rounded transition-all border ${cat.bg} ${cat.color} ${cat.border} hover:brightness-125`}
                        >
                          View Post
                          <ExternalLink size={9} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* End marker */}
        <div className="flex items-center gap-4 mt-10 ml-[7px] sm:ml-[19px]">
          <div className="w-[18px] h-[18px] rounded-full border-2 border-um-purple/40 bg-um-purple/10 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-um-purple animate-pulse" />
          </div>
          <div>
            <p className="text-[11px] font-mono text-um-text-dim tracking-wider uppercase">
              End of known timeline
            </p>
            <p className="text-[10px] text-um-text-dim mt-0.5">
              More lore incoming whenever @SuperSisi posts...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

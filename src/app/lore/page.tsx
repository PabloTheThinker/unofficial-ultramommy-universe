import Link from "next/link";
import { ArrowLeft, BookOpen, Shield, AlertTriangle, Users, Zap, Heart, Laugh } from "lucide-react";

const characters = [
  {
    name: "Ultra Mommy",
    subtitle: "The Original Protector",
    color: "text-red-400",
    accentBg: "bg-red-400/10",
    accentBorder: "border-red-400/25",
    description:
      'The primordial heroine. Red-and-silver form-fitting armor, signature pigtails, glowing yellow eyes, and legendary curves. She is the eternal guardian who flies through the skies, delivers lightning fists, and crushes kaiju with "mommy hugs." Canon origin: The very first image and video series that launched the entire meme. She is the heart and soul of the universe.',
  },
  {
    name: "Ultra Sisters",
    subtitle: "The Squad",
    color: "text-um-purple",
    accentBg: "bg-um-purple/10",
    accentBorder: "border-um-purple/25",
    description:
      'A powerful team of purple-armored elite warrior women revealed in the breakout March 2025 video. They fight as a coordinated group, each with slight armor variations but unified "thicc" aesthetic and purple energy motifs. They represent the expansion of the family \u2014 more sisters mean more protection for Earth.',
  },
  {
    name: "Ultra Sister",
    subtitle: "The Newest Reveal",
    color: "text-um-purple",
    accentBg: "bg-um-purple/10",
    accentBorder: "border-um-purple/25",
    description:
      "Agile newcomer with ornate purple-and-white armor, prominent horned helmet with central fin, glowing pink eyes, and a bright blue chest crystal. Dramatic purple aura and smoke effects emphasize her graceful yet devastating power. Officially introduced as the latest addition to the universe, bridging the classic Ultra Mommy style with fresh design elements.",
  },
  {
    name: "Ultra Thicc",
    subtitle: "The Curvy Variant",
    color: "text-um-cyan",
    accentBg: "bg-um-cyan/10",
    accentBorder: "border-um-cyan/25",
    description:
      "A humorous curvy variant spotlighted shortly after the Sisters debut. Pure fanservice energy with the same heroic spirit \u2014 proof that the universe embraces every body type in the Ultra family.",
  },
  {
    name: "Fat Tiga",
    subtitle: "The Brother",
    color: "text-um-green",
    accentBg: "bg-um-green/10",
    accentBorder: "border-um-green/25",
    description:
      'The only confirmed male family member (a chubby Ultraman Tiga parody). Canonically established as "Ultra Sisters\u2019 brother." Adds comedic family dynamics and shows the universe is open to light-hearted crossovers and expansions.',
  },
];

const loreElements = [
  {
    icon: Heart,
    title: "Family-First Theme",
    text: "The Ultra line is portrayed as a loving, protective sisterhood (with the occasional brother). New members are welcomed instantly.",
  },
  {
    icon: Zap,
    title: "Powers & Style",
    text: "Flight, energy beams from the chest crystal, lightning fists, giant-scale city defense, and dramatic transformation poses \u2014 all delivered with maximum curves and charisma.",
  },
  {
    icon: Laugh,
    title: "Tone",
    text: 'Humorous tokusatsu parody. Expect celebrity cameos (like the 1975 Muhammad Ali fight), "Part III" sequels, flying sequences, and endless roster growth.',
  },
  {
    icon: Users,
    title: "Universe Rules",
    text: "Open-ended and creator-driven. SuperSisi adds lore on the fly through posts, and fans are encouraged to suggest respectful expansions.",
  },
];

export default function LorePage() {
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
            "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(167,139,250,0.08), transparent), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(239,68,68,0.04), transparent)",
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
            <BookOpen size={14} className="text-um-purple" />
            <span className="text-[12px] font-mono text-um-purple tracking-[0.15em] uppercase font-bold">
              Lore
            </span>
          </div>
          <span className="text-[10px] font-mono text-um-text-dim">
            Fan Wiki
          </span>
        </div>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-um-text tracking-tight">
            Ultra Mommy Lore
          </h1>
          <p className="text-[13px] text-um-text-muted max-w-lg mx-auto leading-relaxed">
            <span className="font-semibold text-um-text">Unofficial Fan Wiki</span> &bull; Tribute to{" "}
            <a
              href="https://x.com/SuperSisi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-um-purple hover:text-um-purple-bright transition-colors"
            >
              @SuperSisi
            </a>
          </p>
        </section>

        {/* Disclaimer */}
        <div className="glass-card p-4 sm:p-5 border-l-2 border-l-yellow-500/50">
          <div className="flex items-start gap-3">
            <AlertTriangle size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <p className="text-[11px] font-mono font-bold text-yellow-500 tracking-wider uppercase">
                Legal Disclaimer
              </p>
              <p className="text-[12px] text-um-text-muted leading-relaxed">
                This is an <strong className="text-um-text">unofficial fan-made website</strong>. All
                characters, artwork, videos, and concepts belong exclusively to @SuperSisi. We only embed
                public posts from X. This site is transformative parody under fair use and is{" "}
                <strong className="text-um-text">not affiliated</strong> with @SuperSisi, Tsuburaya
                Productions, or the official Ultraman franchise.
              </p>
              <p className="text-[11px] text-um-text-dim leading-relaxed">
                If you are a rights holder and wish for any content to be removed, please contact{" "}
                <a
                  href="https://x.com/pablothethinker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-um-cyan hover:text-um-cyan/80 transition-colors"
                >
                  @pablothethinker
                </a>{" "}
                immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Universe intro */}
        <section className="glass-card p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <Shield size={14} className="text-um-purple" />
            <h2 className="text-[11px] font-mono font-bold text-um-purple tracking-[0.15em] uppercase">
              The Ultra Mommy Universe
            </h2>
          </div>
          <p className="text-[13px] text-um-text-muted leading-[1.8]">
            In an alternate branch of the legendary M78 Nebula, the Ultra race evolved differently &mdash;
            not as stoic male warriors, but as powerful, curvaceous, eternally youthful giant heroines who
            protect Earth with style, strength, and undeniable &ldquo;mommy energy.&rdquo;
          </p>
          <p className="text-[13px] text-um-text-muted leading-[1.8]">
            This is the <strong className="text-um-text">Ultra Mommy Universe</strong> &mdash; a playful,
            fanservice-heavy tokusatsu parody created and popularized by @SuperSisi (who proudly calls herself
            &ldquo;Ultra Mommy&rsquo;s mommy&rdquo;).
          </p>
          <p className="text-[13px] text-um-text-muted leading-[1.8]">
            The universe blends classic Ultraman tropes (city battles, energy beams, dramatic poses, giant
            monster fights) with exaggerated feminine designs, humorous crossovers, and rapid roster expansion.
            Everything stays light-hearted, over-the-top, and respectful to the original meme that went viral
            in early 2025.
          </p>
        </section>

        {/* Characters */}
        <section className="space-y-4">
          <h2 className="text-[11px] font-mono font-bold text-um-text-dim tracking-[0.2em] uppercase px-1">
            Core Characters
          </h2>
          <div className="space-y-3">
            {characters.map((c) => (
              <div key={c.name} className="glass-card p-4 sm:p-5">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <h3 className={`text-[15px] sm:text-base font-semibold ${c.color}`}>{c.name}</h3>
                  <span
                    className={`text-[9px] font-mono font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded ${c.accentBg} ${c.color} border ${c.accentBorder}`}
                  >
                    {c.subtitle}
                  </span>
                </div>
                <p className="text-[12px] sm:text-[13px] text-um-text-muted leading-[1.8]">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Lore Elements */}
        <section className="space-y-4">
          <h2 className="text-[11px] font-mono font-bold text-um-text-dim tracking-[0.2em] uppercase px-1">
            Key Lore Elements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {loreElements.map((el) => {
              const Icon = el.icon;
              return (
                <div key={el.title} className="glass-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={13} className="text-um-purple" />
                    <h3 className="text-[13px] font-semibold text-um-text">{el.title}</h3>
                  </div>
                  <p className="text-[11px] sm:text-[12px] text-um-text-muted leading-relaxed">
                    {el.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer note */}
        <div className="text-center space-y-2 pt-4 border-t border-white/[0.06]">
          <p className="text-[11px] text-um-text-dim">
            All lore is directly pulled from{" "}
            <a
              href="https://x.com/SuperSisi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-um-purple hover:text-um-purple-bright transition-colors"
            >
              @SuperSisi&rsquo;s
            </a>{" "}
            own posts and videos. The universe grows whenever she drops new content.
          </p>
          <p className="text-[10px] font-mono text-um-text-dim">
            Last updated: March 4, 2025 &bull; All credit goes to @SuperSisi
          </p>
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Shield,
  AlertTriangle,
  Users,
  Zap,
  Heart,
  Laugh,
  Atom,
  Crown,
  Swords,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

interface CharacterEntry {
  name: string;
  subtitle: string;
  color: string;
  hex: string;
  icon: LucideIcon;
  description: string;
}

const characters: CharacterEntry[] = [
  {
    name: "Ultra Mommy",
    subtitle: "The Original Protector",
    color: "text-red-400",
    hex: "#EF4444",
    icon: Crown,
    description:
      'The primordial heroine. Red-and-silver form-fitting armor, signature pigtails, glowing yellow eyes, and legendary curves. She is the eternal guardian who flies through the skies, delivers lightning fists, and crushes kaiju with "mommy hugs." Canon origin: The very first image and video series that launched the entire meme. She is the heart and soul of the universe.',
  },
  {
    name: "Ultra Sisters",
    subtitle: "The Squad",
    color: "text-um-purple",
    hex: "#A78BFA",
    icon: Users,
    description:
      'A powerful team of purple-armored elite warrior women revealed in the breakout March 2025 video. They fight as a coordinated group, each with slight armor variations but unified "thicc" aesthetic and purple energy motifs. They represent the expansion of the family \u2014 more sisters mean more protection for Earth.',
  },
  {
    name: "Ultra Sister",
    subtitle: "The Newest Reveal",
    color: "text-um-purple",
    hex: "#A78BFA",
    icon: Sparkles,
    description:
      "Agile newcomer with ornate purple-and-white armor, prominent horned helmet with central fin, glowing pink eyes, and a bright blue chest crystal. Dramatic purple aura and smoke effects emphasize her graceful yet devastating power. Officially introduced as the latest addition to the universe, bridging the classic Ultra Mommy style with fresh design elements.",
  },
  {
    name: "Ultra Thicc",
    subtitle: "The Curvy Variant",
    color: "text-um-cyan",
    hex: "#22D3EE",
    icon: Atom,
    description:
      "A humorous curvy variant spotlighted shortly after the Sisters debut. Pure fanservice energy with the same heroic spirit \u2014 proof that the universe embraces every body type in the Ultra family.",
  },
  {
    name: "Fat Tiga",
    subtitle: "The Brother",
    color: "text-um-green",
    hex: "#22C55E",
    icon: Swords,
    description:
      'The only confirmed male family member (a chubby Ultraman Tiga parody). Canonically established as "Ultra Sisters\u2019 brother." Adds comedic family dynamics and shows the universe is open to light-hearted crossovers and expansions.',
  },
];

const loreElements = [
  {
    icon: Heart,
    title: "Family-First Theme",
    text: "The Ultra line is portrayed as a loving, protective sisterhood (with the occasional brother). New members are welcomed instantly.",
    hex: "#EF4444",
  },
  {
    icon: Zap,
    title: "Powers & Style",
    text: "Flight, energy beams from the chest crystal, lightning fists, giant-scale city defense, and dramatic transformation poses \u2014 all delivered with maximum curves and charisma.",
    hex: "#FBBF24",
  },
  {
    icon: Laugh,
    title: "Tone",
    text: 'Humorous tokusatsu parody. Expect celebrity cameos (like the 1975 Muhammad Ali fight), "Part III" sequels, flying sequences, and endless roster growth.',
    hex: "#22D3EE",
  },
  {
    icon: Users,
    title: "Universe Rules",
    text: "Open-ended and creator-driven. SuperSisi adds lore on the fly through posts, and fans are encouraged to suggest respectful expansions.",
    hex: "#A78BFA",
  },
];

export default function LorePage() {
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

      {/* Ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 50% 25% at 50% 0%, rgba(167,139,250,0.1), transparent)",
            "radial-gradient(ellipse 40% 40% at 20% 80%, rgba(239,68,68,0.05), transparent)",
            "radial-gradient(ellipse 30% 30% at 85% 50%, rgba(34,211,238,0.04), transparent)",
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
              <BookOpen size={12} className="text-um-purple" />
            </div>
            <span className="text-[15px] font-semibold text-um-text tracking-wide uppercase">
              Lore Database
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-um-green animate-pulse" />
            <span className="text-[10px] font-mono text-um-text-dim">Fan Wiki</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
        {/* Hero */}
        <section className="text-center space-y-4 stagger-in">
          <p className="text-[10px] font-mono text-um-purple tracking-[0.3em] uppercase">
            Unofficial Fan Wiki
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text text-glow-purple">Ultra Mommy</span>{" "}
            <span className="text-um-text">Lore</span>
          </h1>
          <p className="text-[14px] text-um-text-muted max-w-lg mx-auto leading-relaxed">
            Every character, power, and canon event from the universe created by{" "}
            <a
              href="https://x.com/SuperSisi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-um-purple hover:text-um-purple-bright transition-colors font-semibold"
            >
              @SuperSisi
            </a>
          </p>
        </section>

        {/* Disclaimer */}
        <div className="glass-card overflow-hidden stagger-in" style={{ animationDelay: "100ms" }}>
          <div className="h-[2px] bg-gradient-to-r from-yellow-500/60 via-yellow-500/20 to-transparent" />
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <div className="w-8 h-8 rounded bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle size={14} className="text-yellow-500" />
            </div>
            <div className="space-y-1.5">
              <p className="text-[12px] font-semibold text-yellow-500 tracking-wide uppercase">
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
                Rights holder? Contact{" "}
                <a
                  href="https://x.com/pablothethinker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-um-cyan hover:text-um-cyan/80 transition-colors font-medium"
                >
                  @pablothethinker
                </a>{" "}
                for immediate removal.
              </p>
            </div>
          </div>
        </div>

        {/* Universe intro */}
        <section
          className="glass-card overflow-hidden scan-sweep stagger-in"
          style={{ animationDelay: "200ms" }}
        >
          <div className="h-[2px] bg-gradient-to-r from-um-purple/60 via-um-cyan/30 to-transparent" />
          <div className="p-5 sm:p-7 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-um-purple/15 border border-um-purple/25 flex items-center justify-center">
                <Shield size={14} className="text-um-purple" />
              </div>
              <div>
                <h2 className="text-[17px] font-bold text-um-text tracking-tight">
                  The Ultra Mommy Universe
                </h2>
                <p className="text-[10px] font-mono text-um-text-dim tracking-wider uppercase">
                  M78 Nebula — Alternate Branch
                </p>
              </div>
            </div>

            <div className="space-y-4 text-[13px] sm:text-[14px] text-um-text-muted leading-[1.85]">
              <p>
                In an alternate branch of the legendary M78 Nebula, the Ultra race evolved differently &mdash;
                not as stoic male warriors, but as powerful, curvaceous, eternally youthful giant heroines who
                protect Earth with style, strength, and undeniable &ldquo;mommy energy.&rdquo;
              </p>
              <p>
                This is the <strong className="text-um-text">Ultra Mommy Universe</strong> &mdash; a playful,
                fanservice-heavy tokusatsu parody created and popularized by @SuperSisi (who proudly calls herself
                &ldquo;Ultra Mommy&rsquo;s mommy&rdquo;).
              </p>
              <p>
                The universe blends classic Ultraman tropes (city battles, energy beams, dramatic poses, giant
                monster fights) with exaggerated feminine designs, humorous crossovers, and rapid roster expansion.
                Everything stays light-hearted, over-the-top, and respectful to the original meme that went viral
                in early 2025.
              </p>
            </div>
          </div>
        </section>

        <div className="energy-line" />

        {/* Characters */}
        <section className="space-y-5">
          <div className="flex items-center gap-3 px-1">
            <Users size={14} className="text-um-purple" />
            <h2 className="text-[12px] font-mono font-bold text-um-purple tracking-[0.2em] uppercase">
              Core Characters
            </h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-[10px] font-mono text-um-text-dim">{characters.length} entries</span>
          </div>

          <div className="space-y-4">
            {characters.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.name}
                  className="glass-card hud-corner overflow-hidden group stagger-in"
                  style={{ animationDelay: `${300 + i * 80}ms` }}
                >
                  {/* Color accent top line */}
                  <div
                    className="h-[2px] transition-all duration-300 group-hover:h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${c.hex}, ${c.hex}40, transparent)`,
                    }}
                  />

                  <div className="p-4 sm:p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 border"
                        style={{
                          backgroundColor: `${c.hex}10`,
                          borderColor: `${c.hex}30`,
                        }}
                      >
                        <Icon size={16} style={{ color: c.hex }} />
                      </div>
                      <div>
                        <h3 className={`text-[17px] sm:text-[18px] font-bold ${c.color} leading-tight`}>
                          {c.name}
                        </h3>
                        <span className="text-[10px] font-mono text-um-text-dim tracking-wider uppercase">
                          {c.subtitle}
                        </span>
                      </div>
                    </div>
                    <p className="text-[13px] text-um-text-muted leading-[1.85] pl-12">
                      {c.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="energy-line" />

        {/* Key Lore Elements */}
        <section className="space-y-5">
          <div className="flex items-center gap-3 px-1">
            <Atom size={14} className="text-um-cyan" />
            <h2 className="text-[12px] font-mono font-bold text-um-cyan tracking-[0.2em] uppercase">
              Key Lore Elements
            </h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {loreElements.map((el, i) => {
              const Icon = el.icon;
              return (
                <div
                  key={el.title}
                  className="glass-card overflow-hidden group stagger-in"
                  style={{ animationDelay: `${700 + i * 80}ms` }}
                >
                  <div
                    className="h-[2px]"
                    style={{ background: `linear-gradient(90deg, ${el.hex}60, transparent)` }}
                  />
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div
                        className="w-7 h-7 rounded flex items-center justify-center border"
                        style={{ backgroundColor: `${el.hex}10`, borderColor: `${el.hex}25` }}
                      >
                        <Icon size={13} style={{ color: el.hex }} />
                      </div>
                      <h3 className="text-[14px] font-bold text-um-text">{el.title}</h3>
                    </div>
                    <p className="text-[12px] text-um-text-muted leading-relaxed">
                      {el.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center space-y-3 pt-6 stagger-in" style={{ animationDelay: "1000ms" }}>
          <div className="energy-line mb-6" />
          <p className="text-[12px] text-um-text-dim leading-relaxed">
            All lore is directly pulled from{" "}
            <a
              href="https://x.com/SuperSisi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-um-purple hover:text-um-purple-bright transition-colors font-semibold"
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

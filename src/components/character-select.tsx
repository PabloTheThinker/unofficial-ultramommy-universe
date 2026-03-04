"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ZoomIn, BookOpen, ChevronLeft, ChevronRight, Clock, ScrollText } from "lucide-react";

interface CodexSection {
  title: string;
  content: string;
}

interface CharacterData {
  name: string;
  slug: string;
  type: "canon" | "fan";
  colors: string[];
  powers: string[];
  first_appearance: string;
  first_appearance_url: string;
  edit_url?: string;
  tagline: string;
  image: string;
  width: number;
  height: number;
  imageScale?: number;
  codex: CodexSection[];
}

const characters: CharacterData[] = [
  {
    name: "Ultra Mommy",
    slug: "ultra-mommy",
    type: "canon",
    colors: ["red", "silver"],
    powers: ["Giant transformation", "Superhuman strength", "City-scale combat", "Dramatic posing"],
    first_appearance: "2025-01-22",
    first_appearance_url: "https://x.com/SuperSisi/status/2014361042009333955",
    edit_url: "https://x.com/pablothethinker/status/2015327232265199754",
    tagline: "The original giant heroine who started it all.",
    image: "/characters/ultra-mommy.png",
    width: 832,
    height: 1248,
    codex: [
      { title: "Origin", content: "Ultra Mommy burst onto the scene on January 22, 2025, when @SuperSisi posted the first reveal of a curvaceous giant heroine in a red and silver suit — a loving parody of classic tokusatsu characters. The post went immediately viral, racking up over 32,000 likes and spawning an entirely new fan universe." },
      { title: "Appearance", content: "Ultra Mommy wears a striking red and silver suit reminiscent of classic Ultra heroes, but redesigned with exaggerated proportions that became the series' signature style. Her design blends tokusatsu homage with modern AI-rendered aesthetics." },
      { title: "Powers & Abilities", content: "Giant Transformation — Can grow to enormous size to protect cities\nSuperhuman Strength — Capable of battling kaiju-level threats\nLightning Fist — A devastating punch attack surrounded by electrical energy\nFlight — Soars through the skies in classic Ultra fashion\nDramatic Posing — Every battle ends with an iconic pose" },
      { title: "Key Appearances", content: "Jan 22 — First reveal (red/silver suit)\nJan 25 — \"Ultra Mommy isn't all front\" (side/back view reveal, 61k likes)\nFeb 15 — Ultra Mommy: The Movie (24s edit, 71k likes)\nFeb 17–19 — Sequels, flying sequences, lightning fist, Part III\nMar 1 — Ultra Mommy vs Muhammad Ali (1975 crossover edit)" },
      { title: "Cultural Impact", content: "Ultra Mommy became the foundation of the entire Ultra Mommy Universe, inspiring sequels, new characters, and a passionate fan community. The character's success led @SuperSisi to expand the roster with Ultra Sisters, Ultra Sister, Ultra Thicc, and more." },
    ],
  },
  {
    name: "Ultra Sister",
    slug: "ultra-sister",
    type: "canon",
    colors: ["purple", "white"],
    powers: ["Flight", "Lightning aura", "Horned helmet strike", "Energy projection"],
    first_appearance: "2025-03-03",
    first_appearance_url: "https://x.com/SuperSisi/status/2028738712750969276",
    edit_url: "https://x.com/pablothethinker/status/2028741159212679569",
    tagline: "The horned warrior in purple and white.",
    image: "/characters/ultra-sister.png",
    width: 880,
    height: 1184,
    codex: [
      { title: "Origin", content: "Ultra Sister was revealed on March 3, 2025, as the newest addition to the Ultra Mommy Universe. Announced with a striking image showing her distinctive horned helmet and purple/white armor, she represents the evolution of the series into a full roster of giant heroines." },
      { title: "Appearance", content: "Ultra Sister features a dramatically different design from Ultra Mommy. Her armor is purple and white, with an imposing horned helmet that gives her a more aggressive, warrior-like silhouette. The purple/white palette has become her signature and a key part of the Ultra Mommy Universe's expanding visual identity." },
      { title: "Powers & Abilities", content: "Flight — Standard Ultra-family aerial capability\nLightning Aura — Surrounded by crackling energy during combat\nHorned Helmet Strike — A devastating charging attack using her signature headgear\nEnergy Projection — Can channel focused beams of purple energy" },
      { title: "Family Connections", content: "Ultra Sister is part of the growing Ultra family. Canon lore (established March 4, 2025) confirms that Fat Tiga is Ultra Sister's brother — a playful joke connecting the characters in family-style relationships." },
      { title: "Key Appearances", content: "Mar 3 — Character reveal (horned helmet, purple/white armor)\nMar 4 — Family lore drop confirming Fat Tiga connection" },
    ],
  },
  {
    name: "Ultra Thicc",
    slug: "ultra-thicc",
    type: "canon",
    colors: ["red", "silver"],
    powers: ["Giant transformation", "Body slam", "Thicc shield", "Seismic stomp"],
    first_appearance: "2025-03-03",
    first_appearance_url: "https://x.com/SuperSisi/status/2028851133322817793",
    tagline: "The curvy powerhouse who embraces every body type in the Ultra family.",
    image: "/characters/ultra-thicc.png",
    width: 768,
    height: 1360,
    codex: [
      { title: "Origin", content: "Ultra Thicc was introduced on March 3, 2025, shortly after the Ultra Sisters group debut. She represents the universe's embrace of all body types — a humorous, fanservice-heavy variant with the same heroic spirit as the rest of the Ultra family." },
      { title: "Appearance", content: "Ultra Thicc wears the classic red and silver Ultra armor in an exaggerated, curvy form. Her design features pigtail-like head fins, glowing yellow eyes, and a blue chest crystal. The suit's proportions are intentionally over-the-top, leaning fully into the parody aesthetic." },
      { title: "Powers & Abilities", content: "Giant Transformation — Standard Ultra-family size-shifting\nBody Slam — A devastating close-range attack using her full mass\nThicc Shield — Can absorb impacts that would flatten other Ultras\nSeismic Stomp — Ground-shaking attack that stuns kaiju" },
      { title: "Cultural Impact", content: "Ultra Thicc proved the Ultra Mommy Universe welcomes every body type. Her introduction expanded the roster's diversity and reinforced the series' light-hearted, inclusive tone. Pure fanservice energy with genuine heroic spirit." },
    ],
  },
  {
    name: "Fat Tiga",
    slug: "fat-tiga",
    type: "canon",
    colors: ["red", "blue", "silver"],
    powers: ["Belly bounce", "Tiga beam", "Comedic relief", "Family bonding"],
    first_appearance: "2025-03-04",
    first_appearance_url: "https://x.com/SuperSisi/status/2029024946152968318",
    tagline: "Ultra Sister's brother — the only confirmed male in the Ultra family.",
    image: "/characters/fat-tiga.png",
    width: 768,
    height: 1360,
    imageScale: 1.3,
    codex: [
      { title: "Origin", content: "Fat Tiga was canonically confirmed on March 4, 2025, when @SuperSisi declared him Ultra Sister's brother. A chubby parody of Ultraman Tiga, he is the first and only confirmed male member of the Ultra Mommy family." },
      { title: "Appearance", content: "Fat Tiga wears the classic red, purple, and silver Tiga color scheme but with a rotund, heavyset build. His design features a green chest crystal, glowing yellow eyes, and the iconic Tiga head crest — all rendered with comedic exaggeration." },
      { title: "Powers & Abilities", content: "Belly Bounce — Uses his massive frame to deflect attacks\nTiga Beam — A classic energy beam fired from his chest crystal\nComedic Relief — Disarms enemies with unexpected humor\nFamily Bonding — Strengthens the Ultra family through brotherhood" },
      { title: "Family Connections", content: "Canonically Ultra Sister's brother. His addition proves the Ultra Mommy Universe is open to male characters and comedic crossovers, expanding the family dynamic beyond the sisterhood." },
    ],
  },
];

const colorMap: Record<string, string> = {
  red: "#ef4444",
  silver: "#94a3b8",
  purple: "#a78bfa",
  white: "#e2e8f0",
  blue: "#3b82f6",
};

/* ── Fullscreen Lightbox ── */
function Lightbox({ image, name, onClose }: { image: string; name: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
      <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-5 py-4">
        <span className="text-[13px] font-medium text-white/70">{name}</span>
        <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <X size={18} className="text-white/80" />
        </button>
      </div>
      <motion.div
        className="relative z-10 w-full h-full p-8 sm:p-12 pt-16 pb-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Image src={image} alt={name} fill quality={100} className="object-contain" sizes="100vw" priority />
      </motion.div>
    </motion.div>
  );
}

/* ── Codex Overlay ── */
function CodexView({ char, onClose, onPrev, onNext }: { char: CharacterData; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  const [activeSection, setActiveSection] = useState(0);
  const accent = colorMap[char.colors[0]] || "#a78bfa";

  useEffect(() => { setActiveSection(0); }, [char.slug]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowUp") setActiveSection((s) => Math.max(0, s - 1));
      if (e.key === "ArrowDown") setActiveSection((s) => Math.min(char.codex.length - 1, s + 1));
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext, char.codex.length]);

  return (
    <motion.div className="fixed inset-0 z-[90] flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <div className="absolute inset-0 bg-[#060b18]/95 backdrop-blur-2xl" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px)" }} />

      {/* Top bar */}
      <div className="relative z-20 flex items-center justify-between px-6 lg:px-8 py-4 border-b border-white/[0.06] flex-shrink-0">
        <div className="flex items-center gap-3">
          <BookOpen size={16} className="text-um-purple" />
          <span className="text-[13px] font-mono text-um-purple tracking-[0.2em] uppercase font-bold">Codex</span>
          <span className="text-[11px] font-mono text-um-text-dim ml-2 hidden sm:inline">/ {char.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onPrev} className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-um-text-muted hover:text-um-text transition-all text-[11px] font-mono">
            <ChevronLeft size={12} /> <span className="hidden sm:inline">Prev</span>
          </button>
          <button onClick={onNext} className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-um-text-muted hover:text-um-text transition-all text-[11px] font-mono">
            <span className="hidden sm:inline">Next</span> <ChevronRight size={12} />
          </button>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors ml-1">
            <X size={16} className="text-um-text-muted" />
          </button>
        </div>
      </div>

      {/* Content — fills remaining space */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row min-h-0">
        {/* Left — text */}
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <div className="px-6 lg:px-8 pt-5 pb-2 flex flex-wrap gap-1 flex-shrink-0">
            {char.codex.map((section, i) => (
              <button key={section.title} onClick={() => setActiveSection(i)} className={`px-3 py-1.5 text-[11px] font-mono rounded transition-all ${i === activeSection ? "bg-um-purple/15 text-um-purple border border-um-purple/30" : "text-um-text-dim hover:text-um-text hover:bg-white/[0.04] border border-transparent"}`}>
                {section.title}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-5">
            <AnimatePresence mode="wait">
              <motion.div key={`${char.slug}-${activeSection}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                <h2 className="text-xl lg:text-2xl font-bold text-um-text mb-2 tracking-tight">{char.codex[activeSection].title}</h2>
                <div className="w-12 h-[2px] rounded-full mb-5" style={{ backgroundColor: accent }} />
                <div className="space-y-3">
                  {char.codex[activeSection].content.split("\n").map((line, i) => {
                    const dashMatch = line.match(/^(.+?) — (.+)$/);
                    if (dashMatch) {
                      return (
                        <div key={i} className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: accent }} />
                          <p className="text-[13px] lg:text-[14px] text-um-text leading-relaxed">
                            <span className="font-semibold" style={{ color: accent }}>{dashMatch[1]}</span>
                            <span className="text-um-text-muted"> — {dashMatch[2]}</span>
                          </p>
                        </div>
                      );
                    }
                    return <p key={i} className="text-[13px] lg:text-[14px] text-um-text-muted leading-[1.8]">{line}</p>;
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="px-6 lg:px-8 py-3 border-t border-white/[0.06] flex items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-2">
              {char.colors.map((c) => (
                <div key={c} className="w-3 h-3 rounded-full border border-white/10" style={{ backgroundColor: colorMap[c] || "#666" }} />
              ))}
            </div>
            <span className="text-[10px] font-mono text-um-text-dim">{char.type.toUpperCase()} / FIRST SEEN {char.first_appearance}</span>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="hidden lg:block w-[38%] max-w-[480px] relative flex-shrink-0 border-l border-white/[0.06]">
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 60%, ${accent}12, transparent)` }} />
          <AnimatePresence mode="wait">
            <motion.div key={char.slug} className="relative w-full h-full" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
              <Image src={char.image} alt={char.name} fill quality={100} className="object-contain object-center" sizes="38vw" priority />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Component ── */
export function CharacterSelect() {
  const [selected, setSelected] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [codexOpen, setCodexOpen] = useState(false);
  const char = characters[selected];

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const openCodex = useCallback(() => setCodexOpen(true), []);
  const closeCodex = useCallback(() => setCodexOpen(false), []);
  const codexPrev = useCallback(() => { setSelected((s) => (s - 1 + characters.length) % characters.length); }, []);
  const codexNext = useCallback(() => { setSelected((s) => (s + 1) % characters.length); }, []);

  return (
    <div className="h-screen flex flex-col relative overflow-hidden select-none">
      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)" }} />

      {/* Ambient glow */}
      <AnimatePresence mode="wait">
        <motion.div key={selected} className="fixed inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          style={{ background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${colorMap[char.colors[0]] || "#a78bfa"}20, transparent), radial-gradient(ellipse 40% 30% at 80% 50%, ${colorMap[char.colors[0]] || "#a78bfa"}10, transparent)` }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <AnimatePresence>{lightboxOpen && <Lightbox image={char.image} name={char.name} onClose={closeLightbox} />}</AnimatePresence>
      <AnimatePresence>{codexOpen && <CodexView char={char} onClose={closeCodex} onPrev={codexPrev} onNext={codexNext} />}</AnimatePresence>

      {/* Top bar — fixed height */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06] flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="UM" width={28} height={28} className="w-7 h-7 object-contain" />
          <span className="text-[12px] sm:text-[13px] font-mono text-um-text-dim tracking-[0.15em] uppercase">
            Ultra Mommy Universe
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-um-text-dim tracking-wider hidden sm:inline">
            ROSTER <span className="text-um-purple">{characters.length}</span>
          </span>
          <Link href="/timeline" className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-um-purple/30 transition-all">
            <Clock size={11} className="text-um-purple" />
            <span className="text-[10px] font-mono text-um-purple tracking-wider">TIMELINE</span>
          </Link>
          <Link href="/lore" className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-um-purple/30 transition-all">
            <ScrollText size={11} className="text-um-purple" />
            <span className="text-[10px] font-mono text-um-purple tracking-wider">LORE</span>
          </Link>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-um-green animate-pulse" />
            <span className="text-[10px] font-mono text-um-green">CANON</span>
          </div>
        </div>
      </div>

      {/* Main content — fills all remaining space */}
      <div className="flex-1 relative z-10 flex flex-col lg:flex-row min-h-0 overflow-hidden">

        {/* Left panel — scrollable */}
        <div className="lg:w-[340px] xl:w-[400px] 2xl:w-[440px] border-r border-white/[0.06] flex flex-col min-h-0 flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 overflow-y-auto p-5 lg:p-7 xl:p-8 flex flex-col"
            >
              {/* Type badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[9px] font-mono font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded border ${
                  char.type === "canon" ? "bg-um-green/10 text-um-green border-um-green/20" : "bg-um-purple/10 text-um-purple border-um-purple/20"
                }`}>{char.type}</span>
                <span className="text-[10px] font-mono text-um-text-dim">{char.first_appearance}</span>
              </div>

              {/* Name */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-um-text tracking-tight mb-2 leading-none">
                {char.name}
              </h1>

              {/* Tagline */}
              <p className="text-[13px] lg:text-[14px] text-um-text-muted leading-relaxed mb-5">
                {char.tagline}
              </p>

              {/* Color orbs */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-[10px] font-mono text-um-text-dim tracking-wider">COLORS</span>
                {char.colors.map((c) => (
                  <div key={c} className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full border border-white/10" style={{ backgroundColor: colorMap[c] || "#666" }} />
                    <span className="text-[10px] font-mono text-um-text-dim capitalize">{c}</span>
                  </div>
                ))}
              </div>

              {/* Powers */}
              <div className="mb-5">
                <span className="text-[10px] font-mono text-um-text-dim tracking-wider block mb-3">ABILITIES</span>
                <div className="space-y-2">
                  {char.powers.map((p, i) => (
                    <motion.div key={p} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08, duration: 0.3 }} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: colorMap[char.colors[0]] || "#a78bfa" }} />
                      <span className="text-[13px] text-um-text font-medium">{p}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Codex button */}
              <button onClick={openCodex} className="mt-auto mb-4 flex items-center gap-3 px-4 py-2.5 rounded-lg bg-um-purple/10 hover:bg-um-purple/20 border border-um-purple/20 hover:border-um-purple/40 transition-all group flex-shrink-0">
                <BookOpen size={15} className="text-um-purple group-hover:text-um-purple-bright transition-colors" />
                <div className="text-left">
                  <span className="text-[11px] font-semibold text-um-purple group-hover:text-um-purple-bright transition-colors block leading-tight">Open Codex</span>
                  <span className="text-[9px] font-mono text-um-text-dim leading-tight">Full lore, origin & appearances</span>
                </div>
              </button>

              {/* Post links */}
              <div className="flex flex-col gap-1.5 flex-shrink-0">
                <a href={char.first_appearance_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-mono text-um-purple hover:text-um-purple-bright transition-colors group">
                  <span className="tracking-wider uppercase">Original Post — @SuperSisi</span>
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="opacity-60 group-hover:translate-x-0.5 transition-transform"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                {char.edit_url && (
                  <a href={char.edit_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-mono text-um-cyan hover:text-um-cyan/80 transition-colors group">
                    <span className="tracking-wider uppercase">Fan Edit — @pablothethinker</span>
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="opacity-60 group-hover:translate-x-0.5 transition-transform"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right panel — portraits with uniform height */}
        <div className="flex-1 flex items-end justify-center gap-3 lg:gap-5 p-3 lg:p-6 min-h-0 overflow-hidden">
          {characters.map((c, i) => {
            const isSelected = i === selected;
            const accent = colorMap[c.colors[0]] || "#a78bfa";

            return (
              <motion.button
                key={c.slug}
                onClick={() => setSelected(i)}
                className={`relative flex flex-col items-stretch transition-all duration-300 outline-none group ${
                  isSelected ? "z-10" : "z-0"
                }`}
                style={{
                  flex: isSelected ? "1.15" : "1",
                  maxWidth: "380px",
                  height: "100%",
                }}
                whileHover={{ scale: isSelected ? 1 : 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Portrait — uniform 3/4 aspect ratio for all characters */}
                <div
                  className="relative overflow-hidden flex-1 min-h-0 rounded-t transition-all duration-300"
                  style={{
                    borderLeft: `1px solid ${isSelected ? accent + "40" : "rgba(255,255,255,0.06)"}`,
                    borderRight: `1px solid ${isSelected ? accent + "40" : "rgba(255,255,255,0.06)"}`,
                    borderTop: `1px solid ${isSelected ? accent + "40" : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  {isSelected && (
                    <motion.div className="absolute inset-0 pointer-events-none z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      style={{ boxShadow: `inset 0 0 60px ${accent}15, 0 0 40px ${accent}10` }}
                    />
                  )}

                  <Image
                    src={c.image}
                    alt={c.name}
                    width={c.width}
                    height={c.height}
                    quality={100}
                    className={`w-full h-full object-cover object-top transition-all duration-500 ${
                      isSelected ? "brightness-100" : "brightness-[0.6] grayscale-[30%]"
                    } group-hover:brightness-[0.8] group-hover:grayscale-0`}
                    style={{
                      transform: `scale(${isSelected ? (c.imageScale || 1) : (c.imageScale || 1) * 1.05})`,
                    }}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    priority
                  />

                  {/* Action buttons */}
                  {isSelected && (
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="absolute bottom-14 right-3 z-30 flex flex-col gap-2">
                      <div role="button" tabIndex={0} onClick={(e) => { e.stopPropagation(); openLightbox(); }} onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); openLightbox(); } }}
                        className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-black/70 hover:border-white/25 transition-all cursor-pointer" title="View full image">
                        <ZoomIn size={14} className="text-white/80" />
                      </div>
                      <div role="button" tabIndex={0} onClick={(e) => { e.stopPropagation(); openCodex(); }} onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); openCodex(); } }}
                        className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-black/70 hover:border-white/25 transition-all cursor-pointer" title="Open Codex">
                        <BookOpen size={13} className="text-white/80" />
                      </div>
                    </motion.div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060b18] via-[#060b18]/80 to-transparent z-10" />

                  {isSelected && (
                    <motion.div className="absolute top-0 left-0 right-0 h-[2px] z-20" style={{ backgroundColor: accent }} layoutId="selectedIndicator" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                </div>

                {/* Name plate — fixed height so all names align */}
                <div className={`px-3 py-2.5 transition-all duration-200 border-x border-b flex-shrink-0 rounded-b ${isSelected ? "bg-white/[0.04]" : "bg-white/[0.02] group-hover:bg-white/[0.03]"}`}
                  style={{ borderColor: isSelected ? accent + "40" : "rgba(255,255,255,0.06)", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p className={`text-[13px] font-semibold text-center truncate transition-colors ${isSelected ? "text-um-text" : "text-um-text-muted group-hover:text-um-text"}`}>
                    {c.name}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Bottom bar — fixed height */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-2.5 border-t border-white/[0.06] flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-um-text-dim tracking-wider">SELECT A CHARACTER</span>
          <div className="flex gap-1">
            {characters.map((_, i) => (
              <button key={i} onClick={() => setSelected(i)} className={`w-2 h-2 rounded-full transition-all ${i === selected ? "bg-um-purple scale-125" : "bg-white/10 hover:bg-white/20"}`} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://x.com/SuperSisi" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-um-text-dim hover:text-um-purple transition-colors tracking-wider">@SUPERSISI</a>
          <span className="text-[10px] font-mono text-um-text-dim opacity-50">|</span>
          <span className="text-[10px] font-mono text-um-text-dim opacity-50">BUILT BY</span>
          <a href="https://x.com/pablothethinker" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-um-text-dim hover:text-um-cyan transition-colors tracking-wider">@PABLOTHETHINKER</a>
        </div>
      </div>
    </div>
  );
}

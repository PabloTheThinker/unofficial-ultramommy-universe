"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    title: "Ultra Mommy",
    subtitle: "The Original Giant Heroine",
    description:
      "She started it all — the red and silver icon that took the internet by storm with 32k+ likes on her debut.",
    accentColor: "rgba(239, 68, 68, 0.35)",
    glowColor: "rgba(239, 68, 68, 0.12)",
    image: "/characters/ultra-mommy.png",
    tweetUrl: "https://x.com/SuperSisi/status/1882164633765241059",
  },
  {
    title: "Ultra Sisters",
    subtitle: "The Squad Assembles",
    description:
      "3.1 million views. 25.7k likes. The full team of giant heroines together for the first time.",
    accentColor: "rgba(167, 139, 250, 0.35)",
    glowColor: "rgba(167, 139, 250, 0.12)",
    image: "/characters/ultra-mommy-02.png",
    tweetUrl: "https://x.com/SuperSisi/status/1896223291864023076",
  },
  {
    title: "Ultra Sister",
    subtitle: "Horned Warrior in Purple & White",
    description:
      "The newest addition — a fierce warrior with a horned helmet and lightning aura.",
    accentColor: "rgba(124, 58, 237, 0.4)",
    glowColor: "rgba(124, 58, 237, 0.15)",
    image: "/characters/ultra-sister.png",
    tweetUrl: "https://x.com/SuperSisi/status/1896581287114625337",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <div className="glass-premium relative overflow-hidden min-h-[480px] md:min-h-[560px]">
      {/* Animated background glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 120%, ${slide.accentColor}, transparent),
              radial-gradient(ellipse 50% 40% at 75% 50%, ${slide.glowColor}, transparent),
              radial-gradient(ellipse 40% 30% at 20% 30%, rgba(34, 211, 238, 0.04), transparent)
            `,
          }}
        />
      </AnimatePresence>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content — split layout with image */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-16 min-h-[480px] md:min-h-[560px] gap-8">
        {/* Text side */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-um-text-muted text-[11px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
                {slide.subtitle}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-5 tracking-tight leading-[0.95]">
                {slide.title}
              </h1>
              <p className="text-um-text-muted text-[15px] md:text-base max-w-lg mb-8 leading-relaxed">
                {slide.description}
              </p>
              <a
                href={slide.tweetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-um-purple/15 hover:bg-um-purple/25 border border-um-purple/30 hover:border-um-purple/50 text-um-purple-bright font-medium px-5 py-2.5 rounded-lg text-[13px] transition-all hover:glow-purple"
              >
                View Original Post
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="opacity-60"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image side */}
        <div className="flex-shrink-0 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow behind image */}
              <div
                className="absolute inset-0 blur-3xl opacity-40 -z-10 scale-110"
                style={{
                  background: `radial-gradient(circle, ${slide.accentColor}, transparent 70%)`,
                }}
              />
              <div className="relative w-[240px] h-[340px] md:w-[300px] md:h-[420px] rounded-2xl overflow-hidden border border-white/[0.06]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 240px, 300px"
                />
                {/* Gradient fade at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060b18] to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-um-text-muted hover:text-um-text transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-um-text-muted hover:text-um-text transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={16} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-um-purple w-8"
                : "bg-white/15 hover:bg-white/25 w-4"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

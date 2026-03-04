"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="bg-um-surface-solid/70 backdrop-blur-xl border-b border-um-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md bg-um-purple/20 border border-um-purple/30 flex items-center justify-center group-hover:bg-um-purple/30 group-hover:border-um-purple/50 transition-all">
            <span className="text-um-purple text-xs font-bold font-mono">U</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-semibold text-um-text group-hover:text-um-purple-bright transition-colors">
              Ultra Mommy
            </span>
            <span className="text-[11px] font-mono text-um-text-dim tracking-wider uppercase hidden sm:inline">
              Universe
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          <a
            href="https://x.com/SuperSisi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-[13px] font-medium rounded-md text-um-text-muted hover:text-um-text hover:bg-white/[0.03] transition-all"
          >
            @SuperSisi
          </a>
          <a
            href="https://vipeach.com/SuperSisi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-[13px] font-medium rounded-md text-um-text-muted hover:text-um-text hover:bg-white/[0.03] transition-all"
          >
            Support
          </a>
        </nav>
      </div>
    </header>
  );
}

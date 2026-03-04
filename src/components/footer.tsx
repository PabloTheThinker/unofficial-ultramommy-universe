import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-um-border bg-um-surface-solid/40 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-um-purple/20 border border-um-purple/30 flex items-center justify-center">
                <span className="text-um-purple text-[10px] font-bold font-mono">U</span>
              </div>
              <h3 className="text-um-text font-semibold text-sm">
                Ultra Mommy Universe
              </h3>
            </div>
            <p className="text-[13px] text-um-text-muted leading-relaxed">
              A fan-run wiki and community hub celebrating{" "}
              <a
                href="https://x.com/SuperSisi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-um-purple hover:text-um-purple-bright transition-colors"
              >
                @SuperSisi
              </a>
              &apos;s viral tokusatsu-parody series of giant heroines.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-mono font-semibold text-um-text-dim uppercase tracking-widest mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/roster", label: "Character Roster" },
                { href: "/timeline", label: "Lore Timeline" },
                { href: "/gallery", label: "Media Gallery" },
                { href: "/submit", label: "Submit a Character" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-um-text-muted hover:text-um-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-mono font-semibold text-um-text-dim uppercase tracking-widest mb-4">
              Support the Creator
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "https://x.com/SuperSisi", label: "@SuperSisi on X" },
                { href: "https://www.youtube.com/@SuperSisi", label: "YouTube" },
                { href: "https://vipeach.com/SuperSisi", label: "VIPeach" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-um-text-muted hover:text-um-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-um-purple/20 to-transparent my-8" />

        <div className="text-[11px] text-center text-um-text-dim font-mono leading-relaxed space-y-2">
          <p>
            Unofficial fan site. All characters, art, and videos belong to{" "}
            <a href="https://x.com/SuperSisi" target="_blank" rel="noopener noreferrer" className="text-um-purple hover:text-um-purple-bright transition-colors">
              @SuperSisi
            </a>
            . Transformative parody/fan content under fair use. Not affiliated with SuperSisi,
            Tsuburaya Productions, or any official Ultraman IP. DM{" "}
            <a href="https://x.com/pablothethinker" target="_blank" rel="noopener noreferrer" className="text-um-cyan hover:text-um-cyan/80 transition-colors">
              @pablothethinker
            </a>{" "}
            for removal requests.
          </p>
          <p className="text-um-text-dim/50">
            Built by{" "}
            <a href="https://x.com/pablothethinker" target="_blank" rel="noopener noreferrer" className="hover:text-um-text-dim transition-colors">
              @PabloTheThinker
            </a>{" "}
            | First Watch Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}

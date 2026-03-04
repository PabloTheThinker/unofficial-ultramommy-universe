export function DisclaimerBanner() {
  return (
    <div className="bg-um-surface-solid/80 backdrop-blur-sm border-b border-um-border text-um-text-muted text-[11px] text-center py-1.5 px-4 font-mono tracking-wide">
      <span className="opacity-60">UNOFFICIAL FAN SITE</span>
      <span className="mx-2 opacity-30">|</span>
      All characters, art & videos belong to{" "}
      <a
        href="https://x.com/SuperSisi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-um-purple hover:text-um-purple-bright transition-colors"
      >
        @SuperSisi
      </a>
      <span className="mx-2 opacity-30">|</span>
      Transformative parody/fan content under fair use
      <span className="mx-2 opacity-30">|</span>
      DM{" "}
      <a
        href="https://x.com/pablothethinker"
        target="_blank"
        rel="noopener noreferrer"
        className="text-um-cyan hover:text-um-cyan/80 transition-colors"
      >
        @pablothethinker
      </a>{" "}
      for removal
    </div>
  );
}

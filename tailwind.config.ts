import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Warren OS Navy Foundation */
        "um-bg": "#060b18",
        "um-surface": "rgba(15, 23, 42, 0.6)",
        "um-surface-solid": "#0f172a",
        "um-border": "rgba(30, 58, 95, 0.3)",
        "um-border-hover": "rgba(60, 90, 140, 0.4)",

        /* Text Hierarchy */
        "um-text": "#e2e8f0",
        "um-text-muted": "#64748b",
        "um-text-dim": "#475569",

        /* Accent System — Purple primary, Cyan secondary */
        "um-purple": "#A78BFA",
        "um-purple-bright": "#C4B5FD",
        "um-purple-deep": "#7C3AED",
        "um-cyan": "#22D3EE",
        "um-green": "#22C55E",
        "um-red": "#EF4444",
        "um-orange": "#F97316",
        "um-yellow": "#FBBF24",
        "um-indigo": "#6366F1",

        /* shadcn compat */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(rgba(167, 139, 250, 0.06) 1px, transparent 1px)",
        "glow-purple":
          "radial-gradient(ellipse at center, rgba(167, 139, 250, 0.15), transparent 70%)",
        "glow-cyan":
          "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.12), transparent 70%)",
      },
      backgroundSize: {
        "grid-24": "24px 24px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

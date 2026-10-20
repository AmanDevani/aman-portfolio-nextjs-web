import LaptopMockup from "@/components/custom/LaptopMockup/LaptopMockup";

import { cn } from "@/lib/utils";

interface DeskSceneProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

// Illustrated workspace: wall, window light, desk, laptop showing the project
// screenshot, plus plant / mug / notebook / mouse props. Everything is drawn with
// theme tokens (fill-*, bg-*), so it re-skins with the theme and light/dark mode.
export default function DeskScene({ src, alt, sizes, priority = false, className }: DeskSceneProps) {
  return (
    <div className={cn("relative aspect-[16/10] w-full overflow-hidden bg-secondary/50", className)}>
      {/* Window light */}
      <div className="aurora-a absolute -top-1/4 -left-[10%] h-[120%] w-[70%] rounded-full" aria-hidden="true" />
      <div className="aurora-b absolute -right-[15%] -bottom-1/4 h-[90%] w-[60%] rounded-full" aria-hidden="true" />

      {/* Wall shelf line + frame for depth */}
      <div className="absolute top-[12%] right-[7%] h-[22%] w-[11%] rounded-sm border border-border bg-card/60" aria-hidden="true">
        <div className="m-[14%] h-[72%] rounded-[1px] bg-linear-to-br from-primary/30 to-accent/30" />
      </div>

      {/* Desk surface */}
      <div
        className="absolute inset-x-0 bottom-0 h-[34%] border-t border-border bg-linear-to-b from-primary/25 via-primary/15 to-primary/25"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-foreground/10" />
        {/* wood grain */}
        <div className="absolute inset-0 opacity-50 [background:repeating-linear-gradient(90deg,transparent_0_46px,color-mix(in_oklab,var(--foreground)_6%,transparent)_46px_47px)]" />
      </div>

      {/* Plant */}
      <svg
        className="absolute bottom-[27%] left-[3%] w-[12%]"
        viewBox="0 0 100 130"
        aria-hidden="true"
      >
        <g className="fill-accent">
          <ellipse cx="50" cy="52" rx="9" ry="34" opacity="0.95" />
          <ellipse cx="50" cy="56" rx="9" ry="30" transform="rotate(-38 50 86)" opacity="0.8" />
          <ellipse cx="50" cy="56" rx="9" ry="30" transform="rotate(38 50 86)" opacity="0.8" />
          <ellipse cx="50" cy="62" rx="8" ry="24" transform="rotate(-68 50 90)" opacity="0.6" />
          <ellipse cx="50" cy="62" rx="8" ry="24" transform="rotate(68 50 90)" opacity="0.6" />
        </g>
        <path d="M24 88h52l-6 38H30z" className="fill-primary" opacity="0.85" />
        <rect x="22" y="84" width="56" height="8" rx="3" className="fill-primary" />
        <rect x="22" y="84" width="56" height="3" rx="1.5" className="fill-foreground" opacity="0.12" />
      </svg>

      {/* Laptop */}
      <div className="absolute bottom-[17%] left-1/2 w-[68%] -translate-x-1/2">
        <LaptopMockup src={src} alt={alt} sizes={sizes} priority={priority} />
      </div>

      {/* Mouse */}
      <svg className="absolute bottom-[10%] right-[21%] w-[4.5%]" viewBox="0 0 40 60" aria-hidden="true">
        <ellipse cx="20" cy="56" rx="16" ry="3" className="fill-foreground" opacity="0.15" />
        <rect x="4" y="4" width="32" height="50" rx="16" className="fill-card stroke-border" strokeWidth="1.5" />
        <path d="M20 4v20M4 24h32" className="stroke-border" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Mug with steam */}
      <svg className="absolute bottom-[23%] right-[3.5%] w-[9%]" viewBox="0 0 80 100" aria-hidden="true">
        <path
          d="M28 24c-6-8 6-10 0-18M44 26c-6-8 6-10 0-20"
          className="stroke-muted-foreground animate-steam"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <ellipse cx="38" cy="96" rx="30" ry="4" className="fill-foreground" opacity="0.15" />
        <path d="M60 46h6a10 10 0 0 1 0 22h-8" className="stroke-card" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M10 34h54v42a16 16 0 0 1-16 16H26a16 16 0 0 1-16-16z" className="fill-card stroke-border" strokeWidth="1.5" />
        <ellipse cx="37" cy="34" rx="27" ry="6" className="fill-primary" opacity="0.7" />
      </svg>

      {/* Notebook + pen */}
      <svg className="absolute bottom-[4%] left-[10%] w-[19%] -rotate-6" viewBox="0 0 140 90" aria-hidden="true">
        <rect x="6" y="10" width="120" height="74" rx="4" className="fill-foreground" opacity="0.12" />
        <rect x="2" y="4" width="120" height="74" rx="4" className="fill-card stroke-border" strokeWidth="1.5" />
        <rect x="2" y="4" width="14" height="74" rx="4" className="fill-primary" opacity="0.85" />
        <path d="M30 24h80M30 38h80M30 52h54" className="stroke-border" strokeWidth="2" strokeLinecap="round" />
        <rect x="70" y="60" width="64" height="5" rx="2.5" transform="rotate(-18 70 60)" className="fill-accent" />
        <rect x="70" y="60" width="10" height="5" rx="2.5" transform="rotate(-18 70 60)" className="fill-foreground" opacity="0.4" />
      </svg>
    </div>
  );
}

import Image from "next/image";

import { cn } from "@/lib/utils";

interface LaptopMockupProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

// Laptop frame drawn with CSS only; every colour comes from theme tokens so it
// follows light/dark mode. The screenshot is a 16:10 image shown in the screen.
export default function LaptopMockup({ src, alt, sizes, priority = false, className }: LaptopMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full", className)}>
      {/* Lid */}
      <div className="relative mx-auto w-[88%] rounded-t-[0.9rem] border border-border bg-secondary px-[2.2%] pt-[3%] shadow-2xl ring-1 ring-foreground/10">
        {/* Camera */}
        <span
          className="absolute left-1/2 top-[1%] h-1 w-1 -translate-x-1/2 rounded-full bg-muted-foreground/50 sm:top-[1.1%] sm:h-1.5 sm:w-1.5"
          aria-hidden="true"
        />
        {/* Screen */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[0.35rem] bg-background">
          <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
          {/* Soft glass reflection */}
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-foreground/10 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Base / keyboard deck */}
      <div className="relative h-2.5 w-full rounded-b-[1.1rem] rounded-t-[0.15rem] border border-border bg-linear-to-b from-muted to-secondary shadow-lg sm:h-3.5">
        <span
          className="absolute left-1/2 top-0 h-1 w-[18%] -translate-x-1/2 rounded-b-md bg-border sm:h-1.5"
          aria-hidden="true"
        />
      </div>

      {/* Ground shadow */}
      <div
        className="absolute -bottom-3 left-1/2 h-4 w-[80%] -translate-x-1/2 rounded-full bg-foreground/20 blur-xl"
        aria-hidden="true"
      />
    </div>
  );
}

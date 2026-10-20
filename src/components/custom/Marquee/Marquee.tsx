import { Badge } from "@/components/ui/badge";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  if (items.length === 0) return null;

  // Repeat short lists so one half always spans the viewport
  const repeats = Math.max(1, Math.ceil(12 / items.length));
  const half = Array.from({ length: repeats }, () => items).flat();

  return (
    <div
      className="marquee relative overflow-hidden border-y border-border bg-card/40 py-4"
      role="region"
      aria-label={`Technologies: ${items.join(", ")}`}
    >
      <div className="flex w-max animate-marquee gap-3" aria-hidden="true">
        {[...half, ...half].map((item, index) => (
          <Badge
            key={`${item}-${index}`}
            variant="outline"
            className="h-8 px-4 text-sm font-mono text-muted-foreground"
          >
            <span className="mr-2 text-primary">{">"}</span>
            {item}
          </Badge>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-linear-to-l from-background to-transparent" />
    </div>
  );
}

import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

type SpotlightCardProps = React.ComponentProps<typeof Card>;

// Plain card with a soft hover ring — no cursor-tracking effects.
export default function SpotlightCard({ className, ...props }: SpotlightCardProps) {
  return (
    <Card
      className={cn("relative transition-shadow duration-300 hover:ring-primary/40", className)}
      {...props}
    />
  );
}

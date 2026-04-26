import React from "react";
import { Badge } from "./ui/badge";

type techStacks = {
  techStacks: { name: string; id: number }[];
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
};

const TechStacks = ({
  techStacks,
  variant = "secondary",
  className,
}: techStacks) => {
  return (
    <div className={`flex align-center gap-2 flex-wrap ${className}`}>
      {techStacks?.map(({ name, id }) => (
        <Badge key={id} variant={variant}>
          {name}
        </Badge>
      ))}
    </div>
  );
};

export default TechStacks;

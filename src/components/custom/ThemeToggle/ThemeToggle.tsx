"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { Sun, Moon } from "lucide-react";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon-lg" aria-label="Toggle theme" disabled>
        <Sun />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className="relative text-muted-foreground hover:text-foreground"
          aria-label={label}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          <Sun className="scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
          <Moon className="absolute scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { personalInfo } from "@/data/personal";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-card/40">
      <Separator />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-[10px] font-bold font-mono">
              {initials}
            </span>
            <span className="text-xs text-muted-foreground font-mono text-center sm:text-left">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </span>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={handleBackToTop}
            className="gap-2 font-mono text-xs"
          >
            Back to top
            <ArrowUp />
          </Button>
        </div>
      </div>
    </footer>
  );
}

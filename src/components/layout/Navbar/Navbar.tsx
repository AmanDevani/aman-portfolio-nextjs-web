"use client";

import { useState } from "react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";
import { trackNavLinkClick, trackMobileMenuOpen } from "@/lib/analytics";

import ThemeToggle from "@/components/custom/ThemeToggle/ThemeToggle";

import { Menu } from "lucide-react";

const allNavLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const navLinks = allNavLinks.filter(
  (navLink) => navLink.label !== "Projects" || projects.length > 0
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleMobileOpenChange(isOpen: boolean) {
    setMobileOpen(isOpen);
    if (isOpen) trackMobileMenuOpen();
  }

  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold font-display shadow-sm group-hover:shadow-md group-hover:shadow-primary/30 transition-shadow duration-200">
            {initials}
          </div>
          <span className="text-sm font-semibold text-foreground hidden sm:block tracking-tight">
            {personalInfo.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.label}
              href={navLink.href}
              onClick={() => trackNavLinkClick(navLink.label)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 rounded-lg"
            >
              {navLink.label}
            </Link>
          ))}
          <Button size="sm" asChild className="ml-3 h-8 px-4 text-xs font-semibold shadow-sm shadow-primary/20">
            <a href={personalInfo.resumeUrl} download>
              Resume
            </a>
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={handleMobileOpenChange}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-card border-border p-0">
            <div className="flex items-center gap-2.5 px-6 py-5 border-b border-border">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold font-display">
                {initials}
              </div>
              <span className="text-sm font-semibold text-foreground">{personalInfo.name}</span>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.label}
                  href={navLink.href}
                  onClick={() => {
                    trackNavLinkClick(navLink.label);
                    setMobileOpen(false);
                  }}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors duration-150"
                >
                  {navLink.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <Button size="sm" asChild className="w-full h-9">
                  <a href={personalInfo.resumeUrl} download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        </div>

      </div>
    </header>
  );
}

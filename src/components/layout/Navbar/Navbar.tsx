"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "motion/react";

import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

import ThemeToggle from "@/components/custom/ThemeToggle/ThemeToggle";
import ScrollProgress from "@/components/custom/ScrollProgress/ScrollProgress";

import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";
import { useActiveSection } from "@/hooks/useActiveSection";
import { trackNavLinkClick, trackMobileMenuOpen } from "@/lib/analytics";
import { cn } from "@/lib/utils";

import { Download, Menu } from "lucide-react";

const allNavLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const navLinks = allNavLinks.filter(
  (navLink) => navLink.label !== "Projects" || projects.length > 0
);

const sectionIds = navLinks.map((navLink) => navLink.id);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection(sectionIds);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  function handleMobileOpenChange(isOpen: boolean) {
    setMobileOpen(isOpen);
    if (isOpen) trackMobileMenuOpen();
  }

  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${personalInfo.name} — home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold font-mono shadow-sm transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-105">
            {initials}
          </span>
          <span className="hidden sm:block font-mono text-sm font-semibold text-foreground tracking-tight">
            {personalInfo.name}
            <span className="caret ml-1 h-[1em] animate-blink" aria-hidden="true" />
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-2 lg:gap-3">
              {navLinks.map((navLink) => (
                <NavigationMenuItem key={navLink.label}>
                  <NavigationMenuLink
                    asChild
                    active={isHome && activeSection === navLink.id}
                    className={cn(
                      "px-4 font-mono text-sm text-muted-foreground hover:text-foreground",
                      isHome && activeSection === navLink.id && "text-primary bg-primary/10"
                    )}
                  >
                    <Link href={`/#${navLink.id}`} onClick={() => trackNavLinkClick(navLink.label)}>
                      {navLink.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild size="lg" className="ml-2 gap-2 px-4 font-semibold lg:ml-4">
            <a href={personalInfo.resumeUrl} download>
              <Download />
              Resume
            </a>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + menu */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={handleMobileOpenChange}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-lg" aria-label="Open navigation menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(20rem,85vw)] gap-0 p-0">
              <div className="flex items-center gap-3 px-6 py-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold font-mono">
                  {initials}
                </span>
                <div className="flex flex-col">
                  <SheetTitle className="font-mono text-sm">{personalInfo.name}</SheetTitle>
                  <SheetDescription className="text-xs">{personalInfo.role}</SheetDescription>
                </div>
              </div>
              <Separator />
              <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
                {navLinks.map((navLink) => (
                  <Link
                    key={navLink.label}
                    href={`/#${navLink.id}`}
                    onClick={() => {
                      trackNavLinkClick(navLink.label);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "flex min-h-11 items-center rounded-lg px-4 font-mono text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                      isHome && activeSection === navLink.id && "bg-primary/10 text-primary"
                    )}
                  >
                    {navLink.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <Button asChild size="lg" className="h-11 w-full gap-2">
                  <a href={personalInfo.resumeUrl} download>
                    <Download />
                    Download Resume
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
      <ScrollProgress />
    </header>
  );
}

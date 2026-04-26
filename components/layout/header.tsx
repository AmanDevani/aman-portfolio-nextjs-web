"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "../mode-toggle";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full bg-transparent shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold">Aman</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative pb-1 transition-colors ${
                activeSection === s.id
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {s.label}
              {activeSection === s.id && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-primary rounded-full"></span>
              )}
            </a>
          ))}
        </nav>
        <div>
          <ModeToggle />
          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col space-y-3">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={() => setOpen(false)}
                      className={`relative text-lg transition-colors ${
                        activeSection === s.id
                          ? "text-primary font-semibold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {s.label}
                      {activeSection === s.id && (
                        <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-primary rounded-full"></span>
                      )}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

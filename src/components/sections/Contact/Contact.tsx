"use client";

import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";

import SocialLink from "@/components/custom/SocialLink/SocialLink";

import { personalInfo } from "@/data/personal";
import { trackEmailClick, trackPhoneClick, trackSectionView } from "@/lib/analytics";

import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("contact");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  function handleEmailClick() {
    trackEmailClick(personalInfo.email);
  }

  function handlePhoneClick() {
    trackPhoneClick(personalInfo.phone);
  }

  const visibleSocials = personalInfo.socials.filter((socialLink) => socialLink.url);

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "var(--hero-glow)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">

        <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
          <span className="text-sm font-mono font-medium text-primary tracking-[0.18em] uppercase">
            04. Contact
          </span>

          <h2 className="font-mono text-5xl sm:text-6xl font-extrabold text-foreground tracking-tight leading-[0.95]">
            Let&apos;s build something{" "}
            <span className="gradient-text">together</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a project in mind, or just want to say hello?
            My inbox is always open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {personalInfo.email && (
              <Button
                size="lg"
                asChild
                onClick={handleEmailClick}
                className="gap-2 font-semibold shadow-md shadow-primary/20 motion-safe:hover:-translate-y-0.5 transition-transform duration-200"
              >
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="h-4 w-4" />
                  {personalInfo.email}
                  <ArrowUpRight className="h-3.5 w-3.5 ml-0.5" />
                </a>
              </Button>
            )}
            {personalInfo.phone && (
              <Button
                size="lg"
                variant="outline"
                asChild
                onClick={handlePhoneClick}
                className="gap-2 font-semibold border-border motion-safe:hover:-translate-y-0.5 transition-transform duration-200"
              >
                <a href={`tel:${personalInfo.phone}`}>
                  <Phone className="h-4 w-4" />
                  {personalInfo.phone}
                </a>
              </Button>
            )}
          </div>

          {visibleSocials.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2.5 pt-2">
              {visibleSocials.map((socialLink) => (
                <SocialLink
                  key={socialLink.platform}
                  socialLink={socialLink}
                  personName={personalInfo.name}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

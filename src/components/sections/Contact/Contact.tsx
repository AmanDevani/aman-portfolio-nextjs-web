"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import Reveal from "@/components/custom/Reveal/Reveal";
import SocialLink from "@/components/custom/SocialLink/SocialLink";

import { personalInfo } from "@/data/personal";
import { useSectionView } from "@/hooks/useSectionView";
import { trackEmailClick, trackPhoneClick, trackSocialLinkClick } from "@/lib/analytics";

import { Mail, Phone, ArrowUpRight, Briefcase, Copy } from "lucide-react";

export default function Contact() {
  const sectionRef = useSectionView<HTMLElement>("contact");

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy — please copy it manually");
    }
  }

  const visibleSocials = personalInfo.socials.filter((socialLink) => socialLink.url);
  const linkedin = visibleSocials.find((socialLink) => socialLink.platform === "LinkedIn");
  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden py-20 sm:py-28 bg-card/30 border-t border-border">
      <div
        className="aurora-a absolute left-1/2 top-1/2 h-[28rem] w-[28rem] sm:h-[40rem] sm:w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal>
          <Card className="items-center gap-6 px-5 py-10 text-center sm:px-12 sm:py-14 bg-card/70 backdrop-blur shadow-xl">
            <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono font-medium text-primary tracking-[0.18em] uppercase">
              <span className="text-muted-foreground" aria-hidden="true">{"//"}</span>
              04. Contact
            </span>

            <h2 className="font-mono text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.05] text-balance">
              Let&apos;s build something <span className="gradient-text">together</span>
            </h2>

            <p className="max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have a project in mind, or just want to say hello? My inbox is always open.
            </p>

            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              {personalInfo.email && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    size="lg"
                    asChild
                    onClick={() => trackEmailClick()}
                    className="h-11 min-w-0 flex-1 gap-2 px-5 font-semibold shadow-lg shadow-primary/25 sm:flex-none"
                  >
                    <a href={`mailto:${personalInfo.email}`}>
                      <Mail />
                      <span className="truncate">{personalInfo.email}</span>
                      <ArrowUpRight />
                    </a>
                  </Button>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon-lg"
                        className="size-11 shrink-0"
                        aria-label="Copy email address"
                        onClick={handleCopyEmail}
                      >
                        <Copy />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Copy email</TooltipContent>
                  </Tooltip>
                </div>
              )}
              {personalInfo.phone && (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  onClick={() => trackPhoneClick()}
                  className="h-11 gap-2 px-5 font-semibold"
                >
                  <a href={`tel:${personalInfo.phone}`}>
                    <Phone />
                    {personalInfo.phone}
                  </a>
                </Button>
              )}
            </div>

            {visibleSocials.length > 0 && (
              <>
                <Separator className="max-w-xs" />
                <div className="flex flex-wrap justify-center gap-3">
                  {visibleSocials.map((socialLink) => (
                    <SocialLink
                      key={socialLink.platform}
                      socialLink={socialLink}
                      personName={personalInfo.name}
                    />
                  ))}
                </div>
              </>
            )}
          </Card>
        </Reveal>

        {linkedin && (
          <Reveal delay={0.1} className="mt-5">
            <Card className="flex-col items-center gap-4 bg-card/70 p-5 text-center backdrop-blur sm:flex-row sm:text-left">
              <Avatar className="h-14 w-14 shrink-0 ring-2 ring-primary/40">
                <AvatarImage src={personalInfo.avatar} alt={`${personalInfo.name} profile photo`} />
                <AvatarFallback className="bg-secondary font-mono text-lg font-bold text-primary">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="font-mono text-base font-semibold text-foreground">{personalInfo.name}</span>
                <span className="text-sm text-muted-foreground">
                  {personalInfo.role} · {personalInfo.location}
                </span>
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 gap-2 px-5 font-semibold"
                onClick={() => trackSocialLinkClick(linkedin.platform, linkedin.url)}
              >
                <a href={linkedin.url} target="_blank" rel="noopener noreferrer">
                  <Briefcase />
                  View LinkedIn profile
                  <ArrowUpRight />
                </a>
              </Button>
            </Card>
          </Reveal>
        )}
      </div>
    </section>
  );
}

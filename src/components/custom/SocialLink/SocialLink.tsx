import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { SocialLink as SocialLinkType } from "@/types";
import { trackSocialLinkClick } from "@/lib/analytics";

import { GitFork, Briefcase, MessageCircle, Mail, ExternalLink } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GitFork,
  Linkedin: Briefcase,
  Twitter: MessageCircle,
  Mail,
};

interface SocialLinkProps {
  socialLink: SocialLinkType;
  personName: string;
}

export default function SocialLink({ socialLink, personName }: SocialLinkProps) {
  const IconComponent = iconMap[socialLink.icon] ?? ExternalLink;

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          asChild
          className="h-10 gap-2 px-4 hover:border-primary/40"
          onClick={() => trackSocialLinkClick(socialLink.platform, socialLink.url)}
        >
          <a href={socialLink.url} target="_blank" rel="noopener noreferrer">
            <IconComponent />
            {socialLink.platform}
          </a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-52 text-xs text-muted-foreground">
        <p>Visit {personName} on {socialLink.platform}</p>
      </HoverCardContent>
    </HoverCard>
  );
}

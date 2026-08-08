import { track } from "@vercel/analytics";

function sendEvent(eventName: string, params: Record<string, string | number | boolean> = {}): void {
  track(eventName, params);
}

export function trackHeroCTAClick(ctaLabel: string): void {
  sendEvent("hero_cta_click", { cta_label: ctaLabel });
}

export function trackResumeDownload(): void {
  sendEvent("resume_download");
}

export function trackNavLinkClick(navLinkLabel: string): void {
  sendEvent("nav_link_click", { nav_link_label: navLinkLabel });
}

export function trackMobileMenuOpen(): void {
  sendEvent("mobile_menu_open");
}

export function trackProjectCardClick(projectTitle: string, projectSlug: string): void {
  sendEvent("project_card_click", {
    project_title: projectTitle,
    project_slug: projectSlug,
  });
}

export function trackProjectLiveLinkClick(projectTitle: string, liveUrl: string): void {
  sendEvent("project_live_link_click", {
    project_title: projectTitle,
    live_url: liveUrl,
  });
}

export function trackProjectRepoLinkClick(projectTitle: string, repoUrl: string): void {
  sendEvent("project_repo_link_click", {
    project_title: projectTitle,
    repo_url: repoUrl,
  });
}

export function trackSkillBadgeHover(skillName: string, skillCategory: string): void {
  sendEvent("skill_badge_hover", {
    skill_name: skillName,
    skill_category: skillCategory,
  });
}

export function trackExperienceCompanyClick(companyName: string, companyUrl: string): void {
  sendEvent("experience_company_click", {
    company_name: companyName,
    company_url: companyUrl,
  });
}

export function trackEmailClick(emailAddress: string): void {
  sendEvent("email_click", { email_address: emailAddress });
}

export function trackPhoneClick(phoneNumber: string): void {
  sendEvent("phone_click", { phone_number: phoneNumber });
}

export function trackSocialLinkClick(socialPlatform: string, socialUrl: string): void {
  sendEvent("social_link_click", {
    social_platform: socialPlatform,
    social_url: socialUrl,
  });
}

export function trackSectionView(sectionName: string): void {
  sendEvent("section_view", { section_name: sectionName });
}

export function trackProjectDetailPageView(projectTitle: string, projectSlug: string): void {
  sendEvent("project_detail_page_view", {
    project_title: projectTitle,
    project_slug: projectSlug,
  });
}

export function trackProjectDetailLiveLinkClick(projectTitle: string, liveUrl: string): void {
  sendEvent("project_detail_live_link_click", {
    project_title: projectTitle,
    live_url: liveUrl,
  });
}

export function trackProjectDetailRepoLinkClick(projectTitle: string, repoUrl: string): void {
  sendEvent("project_detail_repo_link_click", {
    project_title: projectTitle,
    repo_url: repoUrl,
  });
}

export function trackBackToProjectsClick(): void {
  sendEvent("back_to_projects_click");
}

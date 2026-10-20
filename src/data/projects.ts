import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ministry-media-platform",
    slug: "ministry-media-platform",
    title: "Ministry Media & Community Platform",
    tagline:
      "Next.js web apps and Ant Design admin CMS for a family of faith-based media brands.",
    description:
      "A media and community platform for sermons, podcasts, devotionals, live streams and community groups, delivered as a consumer Next.js web app and a React and Ant Design admin CMS for each ministry brand. Each brand has its own repositories. I've worked across them since May 2024 on community features, access control, the player and content experience, multi-language support, analytics, hosting performance and the editor tooling behind the content.",
    challenge:
      "Give members a fast, multi-language way to watch, listen and join communities, give editors the tools to publish, schedule and translate content, and keep several brand-specific products consistent and quick to launch.",
    image: "/projects/ministry-media-platform-v2.png",
    liveUrl: "",
    repoUrl: "",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Ant Design",
      "GraphQL",
      "NextAuth",
      "next-intl",
      "Firebase",
      "Matomo",
      "Clarity",
      "Sentry",
    ],
    featured: true,
    year: 2026,
    role: "Front-end developer: consumer web apps and admin CMS",
    period: "Since May 2024",
    highlights: [
      {
        title: "Communities with roles and rules",
        description:
          "Create and edit communities with tags and topics, private and external communities, member invites and role-based posting. Rich-text posts with attachments, likes on posts and comments, and sharing that matches the mobile app. Guests are prompted to log in.",
        skills: ["Community features", "Rich text", "Permissions", "UX"],
      },
      {
        title: "Live chat and notifications",
        description:
          "Live chat with limits configured per workspace, and huddle notifications over in-app, push, SMS and email.",
        skills: ["Real-time UI", "Notifications", "Workspace config"],
      },
      {
        title: "Access control and consent",
        description:
          "Permission-based menus and routes, a login-required modal and auto-logout when an account is deactivated. Cookie consent for analytics and advertising, with Meta Ads attribution tied to sign-up.",
        skills: ["Route guards", "Cookie consent", "Meta Ads", "Privacy"],
      },
      {
        title: "Players and content experience",
        description:
          "Video, podcast and audio players with captions and text tracks, an in-player document viewer and a mobile document-preview route. Collections reworked into 'Sessions', daily devotionals shown in their scheduled time zone, and search with auto-generated live filters, history and empty states. Home modules include featured sliders, carousels, grids, CTA blocks, continue-watching and watch-later, plus notifications, profile, My Library and a mobile bottom nav.",
        skills: ["Media players", "Document viewer", "Search UX", "Reusable modules"],
      },
      {
        title: "Language handling that doesn't loop",
        description:
          "A locale guard sends unsupported languages to an English fallback, with fixes for duplicate cookies and redirect loops and correct browser-back behaviour. Topic JSON and UI labels are all translatable.",
        skills: ["next-intl", "i18n routing", "Cookies", "Edge cases"],
      },
      {
        title: "A new brand in about two months",
        description:
          "Cloned an existing brand's web and admin repositories into a new brand, with its own theme, auth pages, header and bottom nav, community, search, share, profile, podcast and featured-video UI, in roughly two months.",
        skills: ["Rebranding", "Theming", "Delivery speed"],
      },
      {
        title: "The admin CMS",
        description:
          "A page builder with module forms (hero, FAQ, CTA, forms, community list, search, article grid) and content management for videos, podcasts, articles, documents, collections (QR codes, free unlock, device-specific images), topics, tags, badges and interests. Live streaming from pre-recorded video with Uplynk channels and chat moderation, video export and embed-URL copy, document ordering and translation, translation jobs and logs, a language cache-purge control, workspace config (Firebase, Matomo, Meta), permission management, audit logs and role-gated routes.",
        skills: ["Page builder", "RBAC", "Uplynk", "Translation workflows"],
      },
      {
        title: "State kept across ~30 list screens",
        description:
          "Back navigation restores filters and scroll position across about 30 admin list screens, so editors return to where they were.",
        skills: ["Reusable abstractions", "State persistence"],
      },
      {
        title: "Analytics and hosting cost",
        description:
          "Matomo events for community join, video start and auth, with Microsoft Clarity and Sentry limited to first-party errors. Lowered Vercel spend by tuning image optimisation and longer revalidation windows, and made the revalidate API return proper error statuses. Migrated to the async params and searchParams model in Next.js.",
        skills: ["Matomo", "ISR", "Vercel", "Sentry", "Next.js upgrades"],
      },
      {
        title: "Engineering practices",
        description:
          "Monthly dependency upgrades across the brand repositories, and SonarQube and Husky checks.",
        skills: ["SonarQube", "Husky", "Dependency management"],
      },
    ],
  },
  {
    id: "ai-chat-assistant",
    slug: "ai-chat-assistant",
    title: "AI Chat Assistant",
    tagline:
      "A safe, embeddable AI support chat for a nonprofit, with feedback, exports and reporting.",
    description:
      "A support-oriented AI chat for a nonprofit, designed to be safe to use and embeddable on their WordPress site. I built the chat web app and the admin from June 2025 to August 2026.",
    challenge:
      "Make an AI assistant safe, accountable and measurable for a sensitive audience, and embeddable in the organisation's existing site.",
    image: "/projects/ai-chat-assistant-v1.png",
    liveUrl: "",
    repoUrl: "",
    tags: ["Next.js", "React", "Tailwind CSS", "Ant Design", "Google Analytics", "Sentry", "pnpm"],
    featured: true,
    year: 2026,
    role: "Front-end developer: chat web app and admin",
    period: "Jun 2025 – Aug 2026",
    highlights: [
      {
        title: "Safety built into the interface",
        description:
          "A quick-exit button and a terms and disclaimer modal with cookie-remembered acceptance, for user safety.",
        skills: ["Privacy-first UX", "Cookies", "Accessibility"],
      },
      {
        title: "Conversation UI with a feedback loop",
        description:
          "Conversation history, suggested prompts that auto-send on click, and user feedback with votes and comments. Light and dark themes on a reworked design system of fonts and colour variables.",
        skills: ["Conversational UI", "Design tokens", "Theming"],
      },
      {
        title: "Safe markdown rendering",
        description:
          "Markdown responses rendered with sanitisation, clickable SMS links, and fixes for citations on blocked content.",
        skills: ["XSS prevention", "Markdown", "Content sanitisation"],
      },
      {
        title: "Exports, analytics and reporting",
        description:
          "Export a single chat or all chats, with votes, to CSV, and email transcripts with the user's time zone. Google Analytics event tracking. In the admin, a reports module with downloadable files, a sync trigger, an internal-usage report type and a password reset flow.",
        skills: ["CSV export", "Google Analytics", "Reporting UI", "Auth flows"],
      },
      {
        title: "Integration and code quality",
        description:
          "Custom backend API integration and WordPress embedding. Moved to pnpm, cleaned ESLint, applied automated-review fixes (CodeRabbit) and fixed a Vercel IP-header issue.",
        skills: ["API integration", "Embedding", "pnpm", "ESLint"],
      },
    ],
  },
  {
    id: "smart-tv-app",
    slug: "smart-tv-app",
    title: "Smart TV App",
    tagline:
      "A remote-controlled streaming app for Samsung Tizen and LG webOS, built from scratch.",
    description:
      "A lean-back TV client for the media platform, controlled entirely by remote. I built it from scratch between June and September 2026, from project setup through to QA.",
    challenge:
      "Bring the media platform to the TV: remote-only navigation, two TV operating systems, multiple languages and per-brand theming.",
    image: "/projects/smart-tv-app-v1.png",
    liveUrl: "",
    repoUrl: "",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "GraphQL Codegen", "i18next", "Tizen", "webOS"],
    featured: false,
    year: 2026,
    role: "Front-end developer: built from scratch",
    period: "Jun 2026 – Sep 2026",
    highlights: [
      {
        title: "Project foundation",
        description:
          "Vite and Tailwind, GraphQL codegen for typed data, Prettier, and build docs for each TV OS.",
        skills: ["Vite", "GraphQL Codegen", "Project setup", "Documentation"],
      },
      {
        title: "Remote-friendly navigation",
        description:
          "Focus management across rails, tags and detail pages, with auto-focus and scroll behaviour fixed per screen.",
        skills: ["Focus management", "Spatial navigation", "TV UX"],
      },
      {
        title: "Multi-language and theming",
        description:
          "Language-based fetch of menus and labels, and dynamic brand theming from CMS data.",
        skills: ["i18next", "Dynamic theming", "CMS-driven UI"],
      },
      {
        title: "Screens and playback",
        description:
          "Get-started and login, featured, carousel and grid modules, a podcast and audio player, continue listening, contributor pages and an animated sidebar.",
        skills: ["Component design", "Audio playback", "Animation"],
      },
      {
        title: "Two platforms and QA",
        description:
          "Tizen setup with OS bug fixes, and a webOS branch with connection and build docs. About 25 ticket-tracked fixes delivered through QA.",
        skills: ["Tizen", "webOS", "Bug fixing", "QA collaboration"],
      },
    ],
  },
  {
    id: "multi-tenant-payload-cms",
    slug: "multi-tenant-payload-cms",
    title: "Multi-Tenant Payload CMS Website",
    tagline:
      "A multi-tenant website on Payload CMS built from reusable content blocks.",
    description:
      "A CMS where each tenant manages its own site, built from reusable content blocks. I worked on it as a full-stack developer between April and May 2026.",
    challenge:
      "Let several tenants manage their own sites from one CMS.",
    image: "/projects/multi-tenant-payload-cms-v1.png",
    liveUrl: "",
    repoUrl: "",
    tags: ["Payload CMS", "Next.js", "TypeScript", "Lexical", "Pino"],
    featured: true,
    year: 2026,
    role: "Full-stack developer",
    period: "Apr 2026 – May 2026",
    highlights: [
      {
        title: "Multi-tenancy with role-based access",
        description:
          "Roles for tenants, users and pages, with a tenant-specific header and footer and internal links limited to the tenant's own pages.",
        skills: ["Payload CMS", "RBAC", "Multi-tenancy"],
      },
      {
        title: "Reusable content blocks",
        description:
          "A block library of hero, stats bar, FAQ, card grids, alternating content, dual CTA and a map, plus SEO, the Lexical editor and media support.",
        skills: ["Content modelling", "Lexical", "SEO"],
      },
    ],
  },
];

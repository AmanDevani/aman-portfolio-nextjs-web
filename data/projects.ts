export type project = {
  id: number;
  title: string;
  description: string;
  techStacks: { name: string; id: number }[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  isFeatured: boolean;
};

export const projects = [
  {
    id: 1,
    title: "Humanity Care Foundation",
    description:
      "A modern website for a charitable organization, highlighting their mission, donation options, and community impact with a smooth UI/UX experience.",
    techStacks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "Framer Motion" },
      { id: 5, name: "Vercel" },
    ],
    // githubUrl: "https://github.com/example/humanity-care",
    demoUrl: "https://humanity-care.vercel.app",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1002&h=6000&fit=crop",
    isFeatured: true,
  },
  {
    id: 2,
    title: "ShopSphere E-Commerce",
    description:
      "A scalable e-commerce platform with product listings, cart, secure checkout, and admin dashboard. Optimized for performance and SEO.",
    techStacks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Redux Toolkit" },
      // { id: 4, name: "Stripe API" },
      { id: 5, name: "MongoDB" },
    ],
    // githubUrl: "https://github.com/example/shopsphere",
    demoUrl: "https://shopsphere-demo.vercel.app",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&h=300&fit=crop",
    isFeatured: true,
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description:
      "A real-time AI-powered chatbot integrated with OpenAI APIs. Features conversation history, dark mode, and persistent sessions.",
    techStacks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "OpenAI API" },
      { id: 4, name: "Prisma" },
      { id: 5, name: "PostgreSQL" },
    ],
    // githubUrl: "https://github.com/example/ai-chat-assistant",
    demoUrl: "https://ai-chat-assistant.vercel.app",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
    isFeatured: false,
  },
];

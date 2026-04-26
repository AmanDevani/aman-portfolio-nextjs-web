import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {
    EMAIL_USER: z.string(),
    EMAIL_PASSWORD: z.string(),
    RECIEVERS_EMAIL: z.string(),
  },
  client: {
    NEXT_PUBLIC_ENV: z.enum(["development", "production"]),
    NEXT_PUBLIC_WEB_URL: z.string(),
    NEXT_PUBLIC_CONTACT_NUMBER: z.string(),
    NEXT_PUBLIC_CONTACT_EMAIL: z.string(),
    NEXT_PUBLIC_LINKEDIN_URL: z.string(),
    NEXT_PUBLIC_GITHUB_URL: z.string(),
  },
  shared: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
  },
  runtimeEnv: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
    NEXT_PUBLIC_CONTACT_NUMBER: process.env.NEXT_PUBLIC_CONTACT_NUMBER,
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    RECIEVERS_EMAIL: process.env.RECIEVERS_EMAIL,
  },
  emptyStringAsUndefined: true,
});

export default env;

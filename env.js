import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  client: {
    NEXT_PUBLIC_ENV: z.enum(["development", "production"]),
    NEXT_PUBLIC_WEB_URL: z.string(),
  },
  shared: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
  },
  runtimeEnv: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
  },
  emptyStringAsUndefined: true,
});

export default env;

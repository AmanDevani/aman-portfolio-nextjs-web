import { readFileSync } from "node:fs";
import { join } from "node:path";

// Server-only: resolves the dark-theme tokens from styles/theme.css so that
// surfaces which cannot use CSS variables (the OG image) still follow the theme.
export function readDarkThemeTokens(): Record<string, string> {
  const css = readFileSync(join(process.cwd(), "src", "styles", "theme.css"), "utf8");
  const darkBlock = /\.dark\s*\{([^}]*)\}/.exec(css)?.[1] ?? "";
  const tokens: Record<string, string> = {};

  for (const [, name, value] of darkBlock.matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)) {
    tokens[name] = value.trim();
  }

  return tokens;
}

import app from "../package.json";
import env from "../env";

export const APP_VERSION = app.version;

export const WEBSITE_DETAILS = {
  TITLE: "Aman Devani | Software Developer",
  DESCRIPTION:
    "Personal portfolio website of Aman Devani, a Software Developer.",
  AUTHOR_NAME: "Aman Devani",
  SITE_URL: env.NEXT_PUBLIC_WEB_URL,
  SITE_NAME: "Aman Devani Portfolio",
  KEYWORDS: [],
};

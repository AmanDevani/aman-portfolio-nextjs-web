import env from "@/env";
import app from "../../package.json";
import { generateUrl } from "./utils";

export const APP_VERSION = app?.version;

export const FIRESTORE_DB = {
  USERS: "Users",
  CONTACTS: "Contacts",
};

export const PERSONAL_INFO = {
  TITLE: "Aman Devani",
  DESCRIPTION: `Welcome to my personal portfolio. A showcase of my skills, projects, and expertise in web development. Explore my journey and let's connect!`,
  OG_IMAGE: generateUrl("og-image.png"),
  ICONS: generateUrl("favicon.png"),
};

export const ROUTES = {
  HOME: "/",
};

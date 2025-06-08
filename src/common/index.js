import env from '@/env';
import app from '../../package.json';
import { generateUrl } from './utils';

export const APP_VERSION = app?.version;

export const FIRESTORE_DB = {
  USERS: 'Users',
  CONTACTS: 'Contacts',
};

export const PERSONAL_INFO = {
  TITLE: 'Aman Devani',
  DESCRIPTION: `Welcome to my personal portfolio. A showcase of my skills, projects, and expertise in web development. Explore my journey and let's connect!`,
  OG_IMAGE: generateUrl('og-image.png'),
  ICONS: generateUrl('favicon.png'),
  SITE_URL: env.NEXT_PUBLIC_WEB_URL,
};

export const ROUTES = {
  HOME: '/',
};

export const SECTION_HEADER_TITLE = {
  CONTACT_SECTION_TITLE: 'Get in touch',
};

export const SECTION_HEADER_DESCRIPTION = {
  CONTACT_SECTION_DESCRIPTION:
    'Have a question or want to work together? Feel free to contact me using the form below or through my contact information.',
};

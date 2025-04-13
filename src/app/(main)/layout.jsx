import { PERSONAL_INFO } from '@/common';
import Layout from '@/components/layout';
import Providers from '@/providers';

export async function generateMetadata() {
  return {
    title: PERSONAL_INFO.TITLE,
    description: PERSONAL_INFO.DESCRIPTION,
    icons: PERSONAL_INFO.ICONS,
    openGraph: {
      images: PERSONAL_INFO.OG_IMAGE,
      url: PERSONAL_INFO.SITE_URL,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      'aman devani',
      'amandevani',
      'aman devani portfolio',
      'amandevaniportfolio',
      'portfolio',
      'portfolio website',
      'portfoliowebsite',
      'web developer',
      'webdeveloper',
      'web development',
      'webdevelopment',
      'full stack developer',
      'fullstackdeveloper',
    ],
  };
}

const MainLayout = ({ children }) => {
  return (
    <Providers>
      <Layout>{children}</Layout>
    </Providers>
  );
};

export default MainLayout;

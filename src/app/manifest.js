import { PERSONAL_INFO } from '@/common';

function getImageUrl(url, size) {
  try {
    const newUrl = new URL(url);
    newUrl.searchParams.set('height', size);
    newUrl.searchParams.set('width', size);
    return newUrl.toString();
  } catch {
    return url;
  }
}

function generateIcons(url) {
  return [48, 72, 96, 128, 144, 256, 512].map((size) => ({
    src: getImageUrl(url, size),
    sizes: `${size}x${size}`,
    type: 'image/png',
  }));
}

export default function manifest() {
  return {
    title: PERSONAL_INFO.TITLE,
    short_name: PERSONAL_INFO.TITLE,
    description: PERSONAL_INFO.DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    icons: generateIcons(PERSONAL_INFO.ICONS),
    background_color: '#FFFFFF',
    theme_color: '#000000',
  };
}

import { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import '@/styles/reset.css';
import '@/styles/global.scss';

const noto = Noto_Sans_KR({ subsets: ['latin'], weight: '400' });

interface Props {
  children: JSX.Element;
}

export const metadata: Metadata = {
  title: 'About chichoon',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#ffffff',
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'chichoon', url: 'blog.chichoon.com' }],
  icons: {
    icon: [
      { url: '/icon/favicon-32x32.png', sizes: '32x32' },
      { url: '/icon/favicon-96x96.png', sizes: '96x96' },
      { url: '/icon/favicon-16x16.png', sizes: '16x16' },
      { url: '/icon/android-icon-192x192.png', sizes: '192x192' },
    ],
    apple: [
      { url: '/icon/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/icon/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/icon/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/icon/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/icon/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/icon/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/icon/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/icon/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/icon/apple-icon-180x180.png', sizes: '180x180' },
    ],
  },
  manifest: '/icon/manifest.json',
};

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang='ko'>
      <body className={noto.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

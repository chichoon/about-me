import { Noto_Sans_KR } from 'next/font/google';

import '@/styles/reset.css';
import '@/styles/global.scss';

const noto = Noto_Sans_KR({ subsets: ['latin'], weight: '400' });

interface Props {
  children: JSX.Element;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='ko'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='Korean' />
        <meta name='author' content='chichoon' />
      </head>
      <body className={noto.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

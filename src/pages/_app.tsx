/* eslint-disable camelcase */

import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';
import { Global, ThemeProvider } from '@emotion/react';

import '@/styles/reset.css';
import { global } from '@/styles/global';

const noto = Noto_Sans_KR({ subsets: ['latin'], weight: '500' });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={{}}>
      <>
        <style jsx global>{`
          html {
            font-family: ${noto.style.fontFamily};
          }
        `}</style>
        <Global styles={global} /> <Component {...pageProps} />;
      </>
    </ThemeProvider>
  );
};

export default App;

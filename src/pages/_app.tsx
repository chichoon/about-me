import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

import '@/styles/reset.css';
import { theme } from '@/styles/theme';
import { global } from '@/styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} /> <Component {...pageProps} />;
    </ThemeProvider>
  );
};

export default App;

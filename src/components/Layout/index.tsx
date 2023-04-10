import Head from 'next/head';

import { Header } from './Header';
import { mainWrapperStyle } from './Layout.styles';

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>About Ji Yoon Choi</title>
        <meta name='description' content='About Ji Yoon Choi' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main css={mainWrapperStyle}>
        <div>{children}</div>
      </main>
    </>
  );
};

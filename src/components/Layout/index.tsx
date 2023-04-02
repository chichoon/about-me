import Head from 'next/head';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>About Chichoon</title>
        <meta name='description' content='치춘에 관한 소개글' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;

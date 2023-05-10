import Head from 'next/head';

import { ErrorPage500 } from '../../.__components__';

const Custom500 = () => {
  return (
    <>
      <Head>
        <meta name='title' content='500 Internal Server Error' />
        <meta name='description' content='서버에 문제가 발생했습니다' />
        <meta name='keywords' content='500 Error Page' />
      </Head>
      <ErrorPage500 />
    </>
  );
};

export default Custom500;

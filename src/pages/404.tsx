import Head from 'next/head';

import { Layout, ErrorPage404 } from '@/components';
import { getProfile } from '@/services';
import { ProfileType } from '@/types/profileData';

export async function getStaticProps() {
  const data = await getProfile();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

interface Props {
  data: ProfileType;
}

const Custom404 = ({ data }: Props) => {
  return (
    <Layout profileData={data}>
      <>
        <Head>
          <meta name='title' content='404 Not Found' />
          <meta name='description' content='페이지를 찾을 수 없습니다' />
          <meta name='keywords' content='404 Error Page' />
        </Head>
        <ErrorPage404 />
      </>
    </Layout>
  );
};

export default Custom404;

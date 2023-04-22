import { Layout, MainPage } from '@/components';
import { getProfile } from '@/services';
import { ProfileType } from '@/types/profileData';
import Head from 'next/head';

export async function getStaticProps() {
  const data = await getProfile();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

interface Props {
  data: ProfileType;
}

const Home = ({ data }: Props) => {
  const { profileImageRef, summaries, stacks } = data;
  return (
    <Layout profileData={data}>
      <>
        <Head>
          <meta name='title' content='About Ji Yoon Choi' />
          <meta name='description' content='내가 프론트엔드에 발을 들이게 된 계기' />
          <meta name='keywords' content='자기소개' />
          <meta name='robots' content='index, follow' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='language' content='Korean' />
          <meta name='author' content='chichoon' />
        </Head>
        <MainPage profileImageRef={profileImageRef} summaries={summaries} stacks={stacks} />
      </>
    </Layout>
  );
};

export default Home;

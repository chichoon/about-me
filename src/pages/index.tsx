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
  const { stacks } = data;
  return (
    <Layout profileData={data}>
      <>
        <Head>
          <meta name='title' content='About chichoon' />
          <meta name='description' content='치춘입니다' />
          <meta name='keywords' content='Main Page' />
        </Head>
        <MainPage stacks={stacks} />
      </>
    </Layout>
  );
};

export default Home;

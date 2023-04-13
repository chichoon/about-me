import { Layout, MainPage } from '@/components';
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

const Home = ({ data }: Props) => {
  const { profileImageRef, summaries } = data;
  return (
    <Layout profileData={data}>
      <MainPage profileImageRef={profileImageRef} summaries={summaries} />
    </Layout>
  );
};

export default Home;

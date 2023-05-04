import { Layout, IntroPage } from '@/components';
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

const Introduction = ({ data }: Props) => {
  const { profileImageRef, summaries } = data;
  return (
    <Layout profileData={data}>
      <IntroPage profileImageRef={profileImageRef} summaries={summaries} />
    </Layout>
  );
};

export default Introduction;

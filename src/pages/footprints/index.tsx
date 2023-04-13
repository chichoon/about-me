import { Layout } from '@/components';
import { getProfile } from '@/services/getProfile';
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

const footprints = ({ data }: Props) => {
  return (
    <Layout profileData={data}>
      <span>안녕하세요!!</span>
    </Layout>
  );
};

export default footprints;

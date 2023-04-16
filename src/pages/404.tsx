import { Layout, ErrorPage } from '@/components';
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
      <ErrorPage />
    </Layout>
  );
};

export default Custom404;

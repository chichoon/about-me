import { FootprintPage, Layout } from '@/components';
import { getFootprintByIndex, getFootprintIndexes, getProfile } from '@/services';
import { FootprintType, ProfileType } from '@/types/profileData';

interface Props {
  profileData: ProfileType;
  footprintData: FootprintType;
}

interface Params {
  params: {
    index: number;
  };
}

export async function getStaticPaths() {
  const keys = await getFootprintIndexes();

  return {
    paths: Array(keys).map((_, index) => ({ params: { index } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const profileData = await getProfile();
  const footprintData = await getFootprintByIndex(params.index);

  return { props: { profileData, footprintData } };
}

const Footprint = ({ profileData, footprintData }: Props) => {
  return (
    <Layout profileData={profileData}>
      <FootprintPage footprint={footprintData} />
    </Layout>
  );
};

export default Footprint;

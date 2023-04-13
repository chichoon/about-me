import { Layout } from '@/components';
import { getFootprints, getProfile } from '@/services';
import { FootprintType, ProfileType } from '@/types/profileData';

export async function getStaticProps() {
  const profileData = await getProfile();
  const footprintData = await getFootprints();
  return {
    props: { profileData, footprintData }, // will be passed to the page component as props
  };
}

interface Props {
  profileData: ProfileType;
  footprintData: FootprintType[];
}

const footprints = ({ profileData, footprintData }: Props) => {
  return (
    <Layout profileData={profileData}>
      <menu>
        {footprintData.map((footprint) => (
          <span key={`footprint-${footprint.key}`}>{footprint.title}</span>
        ))}
        <span>안녕하세요!!</span>
      </menu>
    </Layout>
  );
};

export default footprints;

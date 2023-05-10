import Head from 'next/head';

import { FootprintsPage, Layout } from '../../../.__components__';
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
      <>
        <Head>
          <meta name='title' content='Footprints of chichoon' />
          <meta name='description' content='치춘의 발자취' />
          <meta name='keywords' content='Footprints Page' />
        </Head>
        <FootprintsPage footprintData={footprintData} />
      </>
    </Layout>
  );
};

export default footprints;

import Head from 'next/head';

import { FootprintPage, Layout } from '../../../.__components__';
import { getFootprintByIndex, getFootprintIndexes, getProfile } from '@/services';
import { FootprintType, ProfileType } from '@/types/profileData';

interface Props {
  profileData: ProfileType;
  footprintData: FootprintType;
}

interface Params {
  params: {
    footprint: string;
  };
}

export async function getStaticPaths() {
  const indexes = await getFootprintIndexes();
  return {
    paths: [...Array(indexes)].map((_, index) => ({ params: { footprint: index.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const profileData = await getProfile();
  const footprintData = await getFootprintByIndex(Number(params.footprint));

  return { props: { profileData, footprintData } };
}

const Footprint = ({ profileData, footprintData }: Props) => {
  return (
    <Layout profileData={profileData}>
      <>
        <Head>
          <meta name='title' content={`chichoon's footprint ${footprintData.key}`} />
          <meta name='description' content={`치춘이 머물렀던 ${footprintData.title}`} />
          <meta name='keywords' content={`${footprintData.key} Page`} />
        </Head>
        <FootprintPage footprint={footprintData} />
      </>
    </Layout>
  );
};

export default Footprint;

import Head from 'next/head';

import { BranchListWrapper, FootprintComponent, FootprintElement, Layout } from '@/components';
import { getFootprintByIndex, getProfile } from '@/services';

interface Props {
  params: {
    footprint: number;
  };
}

const Page = async ({ params }: Props) => {
  const profileData = await getProfile();
  const footprintData = await getFootprintByIndex(params.footprint);

  return (
    <Layout profileData={profileData}>
      <>
        <Head>
          <meta name='title' content={`chichoon's footprint ${footprintData.key}`} />
          <meta name='description' content={`치춘이 머물렀던 ${footprintData.title}`} />
          <meta name='keywords' content={`${footprintData.key} Page`} />
        </Head>
        <FootprintComponent footprint={footprintData} />
      </>
    </Layout>
  );
};

export default Page;

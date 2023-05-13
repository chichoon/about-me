import { Metadata } from 'next';

import { FootprintComponent, Layout } from '@/components';
import { getFootprintByIndex, getProfile } from '@/services';

interface Props {
  params: {
    footprint: number;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const footprintData = await getFootprintByIndex(params.footprint);

  return {
    title: `chichoon's footprint ${footprintData.key}`,
    description: `치춘이 머물렀던 ${footprintData.title}`,
    keywords: `${footprintData.key} Page`,
  };
}

const Page = async ({ params }: Props) => {
  const profileData = await getProfile();
  const footprintData = await getFootprintByIndex(params.footprint);

  return (
    <Layout profileData={profileData}>
      <FootprintComponent footprint={footprintData} />
    </Layout>
  );
};

export default Page;

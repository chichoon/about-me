import { Metadata } from 'next';

import { Layout, ProjectComponent } from '@/components';
import { getProfile, getProjectByKey } from '@/services';

interface Props {
  params: {
    project: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectData = await getProjectByKey(params.project);

  return {
    title: `chichoon's project ${projectData.key}`,
    description: `치춘이 작업했던 ${projectData.title}`,
    keywords: `${projectData.key} Page`,
  };
}

const Page = async ({ params }: Props) => {
  const profileData = await getProfile();
  const projectData = await getProjectByKey(params.project);

  return (
    <Layout profileData={profileData}>
      <ProjectComponent project={projectData} />
    </Layout>
  );
};

export default Page;

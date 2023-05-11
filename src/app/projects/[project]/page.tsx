import Head from 'next/head';

import { Layout, ProjectComponent } from '@/components';
import { getProfile, getProjectByKey } from '@/services';

interface Props {
  params: {
    project: string;
  };
}

const Page = async ({ params }: Props) => {
  const profileData = await getProfile();
  const projectData = await getProjectByKey(params.project);

  return (
    <Layout profileData={profileData}>
      <>
        <Head>
          <meta name='title' content={`chichoon's project ${projectData.key}`} />
          <meta name='description' content={`치춘이 작업했던 ${projectData.title}`} />
          <meta name='keywords' content={`${projectData.key} Page`} />
        </Head>
        <ProjectComponent project={projectData} />
      </>
    </Layout>
  );
};

export default Page;

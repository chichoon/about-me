import Head from 'next/head';

import { Layout, ProjectPage } from '@/components';
import { getProfile, getProjectByKey, getProjectKeys } from '@/services';
import { ProfileType, ProjectType } from '@/types/profileData';

interface Props {
  profileData: ProfileType;
  projectData: ProjectType;
}

interface Params {
  params: {
    project: string;
  };
}

export async function getStaticPaths() {
  const keys = await getProjectKeys();

  return {
    paths: keys.map((key) => ({ params: { project: key } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const profileData = await getProfile();
  const projectData = await getProjectByKey(params.project);
  return {
    props: { profileData, projectData }, // will be passed to the page component as props
  };
}

const Project = ({ profileData, projectData }: Props) => {
  return (
    <Layout profileData={profileData}>
      <>
        <Head>
          <meta name='title' content={`chichoon's project ${projectData.key}`} />
          <meta name='description' content={`치춘이 작업했던 ${projectData.title}`} />
          <meta name='keywords' content={`${projectData.key} Page`} />
        </Head>
        <ProjectPage project={projectData} />
      </>
    </Layout>
  );
};

export default Project;

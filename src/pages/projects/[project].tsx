import { Layout, ProjectPage } from '@/components';
import { useGetScreenSize } from '@/hooks';
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
  const { windowWidth } = useGetScreenSize();

  return (
    <Layout profileData={profileData}>
      <ProjectPage project={projectData} />
    </Layout>
  );
};

export default Project;

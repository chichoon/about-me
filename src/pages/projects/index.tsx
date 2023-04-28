import { Layout, ProjectsPage } from '@/components';
import { ProfileType, ProjectListType } from '@/types/profileData';
import { getProfile, getProjects } from '@/services';

export async function getStaticProps() {
  const profileData = await getProfile();
  const projectData = await getProjects();
  return {
    props: { profileData, projectData }, // will be passed to the page component as props
  };
}

interface Props {
  profileData: ProfileType;
  projectData: ProjectListType;
}

const projects = ({ profileData, projectData }: Props) => {
  return (
    <Layout profileData={profileData}>
      <ProjectsPage projectData={projectData} />
    </Layout>
  );
};

export default projects;

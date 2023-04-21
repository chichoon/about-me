import { Layout, ProjectsPage } from '@/components';
import { ProfileType, ProjectType } from '@/types/profileData';
import { getProfile, getProjects } from '@/services';

export async function getStaticProps() {
  const profileData = await getProfile();
  const projectsData = await getProjects();
  return {
    props: { profileData, projectsData }, // will be passed to the page component as props
  };
}

interface Props {
  profileData: ProfileType;
  projectsData: ProjectType[];
}

const projects = ({ profileData, projectsData }: Props) => {
  return (
    <Layout profileData={profileData}>
      <ProjectsPage projectsData={projectsData} />
    </Layout>
  );
};

export default projects;

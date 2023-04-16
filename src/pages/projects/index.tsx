import { Layout } from '@/components';
import { ProfileType, ProjectType } from '@/types/profileData';
import { getProfile, getProjects } from '@/services';
import { ProjectsPage } from '@/components/ProjectsPage';

export async function getStaticProps() {
  const profileData = await getProfile();
  const projectData = await getProjects();
  return {
    props: { profileData, projectData }, // will be passed to the page component as props
  };
}

interface Props {
  profileData: ProfileType;
  projectData: ProjectType[];
}

const projects = ({ profileData, projectData }: Props) => {
  return (
    <Layout profileData={profileData}>
      <ProjectsPage projectData={projectData} />
    </Layout>
  );
};

export default projects;

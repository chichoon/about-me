import { Layout, ProjectsPage } from '@/components';
import { ProfileType, ProjectTimestampType } from '@/types/profileData';
import { getProfile } from '@/services';
import { getProjectTimestamp } from '@/services/getProjectTimestamp';

export async function getStaticProps() {
  const profileData = await getProfile();
  const projectTimestamps = await getProjectTimestamp();
  return {
    props: { profileData, projectTimestamps }, // will be passed to the page component as props
  };
}

interface Props {
  profileData: ProfileType;
  projectTimestamps: ProjectTimestampType[];
}

const projects = ({ profileData, projectTimestamps }: Props) => {
  return (
    <Layout profileData={profileData}>
      <ProjectsPage projectTimestamps={projectTimestamps} />
    </Layout>
  );
};

export default projects;

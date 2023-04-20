import { Layout, ProjectsPage } from '@/components';
import { ProfileType, ProjectTimestampType } from '@/types/profileData';
import { getProfile } from '@/services';
import { getProjectTimestamp } from '@/services/getProjectTimestamp';

export async function getStaticProps() {
  const profileData = await getProfile();
  const projectKeysAndTitles = await getProjectTimestamp();
  return {
    props: { profileData, projectKeysAndTitles }, // will be passed to the page component as props
  };
}

interface Props {
  profileData: ProfileType;
  projectTimestamp: ProjectTimestampType[];
}

const projects = ({ profileData, projectTimestamp }: Props) => {
  return (
    <Layout profileData={profileData}>
      <ProjectsPage projectTimestamps={projectTimestamp} />
    </Layout>
  );
};

export default projects;

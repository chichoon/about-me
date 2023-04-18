import { Layout, ProjectsPage } from '@/components';
import { ProfileType, ProjectKeyAndTitleType } from '@/types/profileData';
import { getProfile, getProjectKeys } from '@/services';

export async function getStaticProps() {
  const profileData = await getProfile();
  const projectKeysAndTitles = await getProjectKeys();
  return {
    props: { profileData, projectKeysAndTitles }, // will be passed to the page component as props
  };
}

interface Props {
  profileData: ProfileType;
  projectKeysAndTitles: ProjectKeyAndTitleType[];
}

const projects = ({ profileData, projectKeysAndTitles }: Props) => {
  return (
    <Layout profileData={profileData}>
      <ProjectsPage projectKeysAndTitles={projectKeysAndTitles} />
    </Layout>
  );
};

export default projects;

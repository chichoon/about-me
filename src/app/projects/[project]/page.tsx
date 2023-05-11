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
      <ProjectComponent project={projectData} />
    </Layout>
  );
};

export default Page;

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
      <ProjectComponent project={projectData}>
        <div>하이</div>
      </ProjectComponent>
    </Layout>
  );
};

export default Page;

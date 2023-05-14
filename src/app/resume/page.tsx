import { getFootprints, getProfile, getProjects } from '@/services';

const Page = async () => {
  const profileData = await getProfile();
  const projectData = await getProjects();
  const footprintData = await getFootprints();

  return <div>하이</div>;
};

export default Page;

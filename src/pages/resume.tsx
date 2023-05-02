import { ResumePage } from '@/components';
import { getFootprints, getProfile, getProjects } from '@/services';
import { FootprintType, ProfileType, ProjectListType } from '@/types/profileData';

export async function getStaticProps() {
  const profileData = await getProfile();
  const projectData = await getProjects();
  const footprintData = await getFootprints();

  return {
    props: {
      profileData,
      projectData,
      footprintData,
    },
  };
}

interface Props {
  profileData: ProfileType;
  projectData: ProjectListType;
  footprintData: FootprintType[];
}

const Resume = ({ profileData, projectData, footprintData }: Props) => {
  return <ResumePage profileData={profileData} projectData={projectData} footprintData={footprintData} />;
};

export default Resume;

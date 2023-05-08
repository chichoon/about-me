import { ResumePage } from '@/components';
import { getFootprints, getProfile, getProjectsAsResumeType } from '@/services';
import { FootprintType, ProfileType } from '@/types/profileData';
import { ResumeProjectListType } from '@/types/resumeData';

export async function getStaticProps() {
  const profileData = await getProfile();
  const projectData = await getProjectsAsResumeType();
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
  projectData: ResumeProjectListType;
  footprintData: FootprintType[];
}

const Resume = ({ profileData, projectData, footprintData }: Props) => {
  return <ResumePage profileData={profileData} projectData={projectData} footprintData={footprintData} />;
};

export default Resume;

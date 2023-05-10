import { ResumePage } from '../../.__components__';
import { getFootprints, getProfileAsResumeType, getProjectsAsResumeType } from '@/services';
import { FootprintType } from '@/types/profileData';
import { ResumeProfileType, ResumeProjectListType } from '@/types/resumeData';

export async function getStaticProps() {
  const profileData = await getProfileAsResumeType();
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
  profileData: ResumeProfileType;
  projectData: ResumeProjectListType;
  footprintData: FootprintType[];
}

const Resume = ({ profileData, projectData, footprintData }: Props) => {
  return <ResumePage profileData={profileData} projectData={projectData} footprintData={footprintData} />;
};

export default Resume;

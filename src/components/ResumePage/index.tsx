import { FootprintType, ProfileType, ProjectListType } from '@/types/profileData';
import { ResumeHeader } from './ResumeHeader';

interface Props {
  profileData: ProfileType;
  projectData: ProjectListType;
  footprintData: FootprintType[];
}

export const ResumePage = ({ profileData, projectData, footprintData }: Props) => {
  return (
    <>
      <ResumeHeader profileData={profileData} />
    </>
  );
};

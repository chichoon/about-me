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
      <style jsx global>
        {`
          body {
            width: 1000px;
            height: 1414.2px;
          }
        `}
      </style>
      <ResumeHeader profileData={profileData} />
    </>
  );
};

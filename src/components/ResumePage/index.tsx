import { css } from '@emotion/react';

import { FootprintType, ProfileType, ProjectListType } from '@/types/profileData';
import { ResumeHeader } from './ResumeHeader';
import { ResumeProjects } from './ResumeProjects';
import { COLORS } from '@/styles/colors';

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
      <main css={mainWrapper}>
        <ResumeProjects projectData={projectData} />
      </main>
    </>
  );
};

const mainWrapper = css({
  width: '100%',
  padding: 50,
  backgroundColor: COLORS.WHITE,
});

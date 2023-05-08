import { css } from '@emotion/react';

import { ResumeProfileType, ResumeProjectListType } from '@/types/resumeData';
import { FootprintType } from '@/types/profileData';
import { ResumeHeader } from './ResumeHeader';
import { ResumeProjects } from './ResumeProjects';

import { COLORS } from '@/styles/colors';

interface Props {
  profileData: ResumeProfileType;
  projectData: ResumeProjectListType;
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
  paddingTop: 0,
  backgroundColor: COLORS.WHITE,
});

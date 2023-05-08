import { css } from '@emotion/react';

import { ResumeProfileType, ResumeProjectListType } from '@/types/resumeData';
import { FootprintType } from '@/types/profileData';
import { ResumeHeader } from './ResumeHeader';
import { ResumeIntroduce } from './ResumeIntroduce';
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
      <ResumeHeader profileData={profileData} />
      <main css={mainWrapper}>
        <ResumeIntroduce resumeSummaries={profileData.resumeSummaries} />
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

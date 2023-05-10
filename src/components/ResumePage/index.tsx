import { css } from '@emotion/react';

import { ResumeProfileType, ResumeProjectListType } from '@/types/resumeData';
import { FootprintType } from '@/types/profileData';
import { ResumeHeader } from './ResumeHeader';
import { ResumeIntroduce } from './ResumeIntroduce';
import { ResumeProjects } from './ResumeProjects';

import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

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
  minWidth: SIZES.RESUME_MIN_WIDTH,
  maxWidth: SIZES.RESUME_MAX_WIDTH,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowX: 'scroll',
  padding: 50,
  paddingTop: 0,
  backgroundColor: COLORS.WHITE,
});

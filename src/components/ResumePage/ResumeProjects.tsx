import { css } from '@emotion/react';

import { ProjectListType } from '@/types/profileData';

interface Props {
  projectData: ProjectListType;
}

export const ResumeProjects = ({ projectData }: Props) => {
  return <section css={projectsSectionWrapper}>아아</section>;
};

const projectsSectionWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

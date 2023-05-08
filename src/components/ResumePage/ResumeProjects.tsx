import { css } from '@emotion/react';

import { ResumeProjectListType } from '@/types/resumeData';
import { ProjectComponent } from './ProjectComponent';

interface Props {
  projectData: ResumeProjectListType;
}

export const ResumeProjects = ({ projectData }: Props) => {
  const projectKeys = Object.keys(projectData);
  return (
    <section css={projectsSectionWrapper}>
      <ul>
        {projectKeys.map((projectKey, index) => (
          <ProjectComponent project={projectData[projectKey]} key={`project-${index}`} />
        ))}
      </ul>
    </section>
  );
};

const projectsSectionWrapper = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  ul: {
    width: '100%',
    padding: '0 50px',
  },
});

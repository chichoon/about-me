import { css } from '@emotion/react';

import { ResumeProjectListType } from '@/types/resumeData';
import { ProjectComponent } from './ProjectComponent';
import { Section } from './Section';

interface Props {
  projectData: ResumeProjectListType;
}

export const ResumeProjects = ({ projectData }: Props) => {
  const projectKeys = Object.keys(projectData);
  return (
    <Section title='프로젝트'>
      <ul css={projectsWrapper}>
        {projectKeys.map((projectKey, index) => (
          <ProjectComponent project={projectData[projectKey]} key={`project-${index}`} />
        ))}
      </ul>
    </Section>
  );
};

const projectsWrapper = css({
  width: '100%',
});

import { css } from '@emotion/react';

import { ProjectListType } from '@/types/profileData';
import { ProjectComponent } from './ProjectComponent';

interface Props {
  projectData: ProjectListType;
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
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

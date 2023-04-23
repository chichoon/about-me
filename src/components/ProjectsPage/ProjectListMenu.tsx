import { ProjectType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';

import { BranchListWrapper } from '../BranchListWrapper';

interface Props {
  projectData: ProjectType[];
}

function getTopOffsetPercentage(min: number, max: number, year: number, month: number) {
  return (max - (year * 12 + month)) / (max - min);
}

export const ProjectListMenu = ({ projectData }: Props) => {
  const min =
    projectData[projectData.length - 1].startDateYear * 12 + projectData[projectData.length - 1].startDateMonth;
  const max = projectData[0].startDateYear * 12 + projectData[0].startDateMonth;

  return (
    <BranchListWrapper>
      <>
        {projectData.map((project) => (
          <ProjectElement
            key={`experience-${project.key}`}
            project={project}
            topOffset={getTopOffsetPercentage(min, max, project.startDateYear, project.startDateMonth)}
          />
        ))}
      </>
    </BranchListWrapper>
  );
};

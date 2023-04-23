import { ProjectType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';

import { BranchListWrapper } from '../BranchListWrapper';

interface Props {
  projectsData: ProjectType[];
}

function getTopOffsetPercentage(min: number, max: number, year: number, month: number) {
  return (max - (year * 12 + month)) / (max - min);
}

export const ProjectListMenu = ({ projectsData }: Props) => {
  const min =
    projectsData[projectsData.length - 1].startDateYear * 12 + projectsData[projectsData.length - 1].startDateMonth;
  const max = projectsData[0].startDateYear * 12 + projectsData[0].startDateMonth;

  return (
    <BranchListWrapper>
      <>
        {projectsData.map((project) => (
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

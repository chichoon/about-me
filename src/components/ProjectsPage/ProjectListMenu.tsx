import { ProjectType } from '@/types/profileData';
import { getTopOffsetPercentage } from '@/utils';
import { ProjectElement } from './ProjectElement';
import { BranchListWrapper } from '../BranchListWrapper';

interface Props {
  projectData: ProjectType[];
}

export const ProjectListMenu = ({ projectData }: Props) => {
  const {
    startDateYear: minYear,
    startDateMonth: minMonth,
    startDateDay: minDay,
  } = projectData[projectData.length - 1];
  const { startDateYear: maxYear, startDateMonth: maxMonth, startDateDay: maxDay } = projectData[0];
  const min = minYear * 12 * 30 + minMonth * 30 + minDay;
  const max = maxYear * 12 * 30 + maxMonth * 30 + maxDay;

  return (
    <BranchListWrapper>
      <>
        {projectData.map((project) => (
          <ProjectElement
            key={`experience-${project.key}`}
            project={project}
            topOffset={getTopOffsetPercentage(
              min,
              max,
              project.startDateYear,
              project.startDateMonth,
              project.startDateDay
            )}
          />
        ))}
      </>
    </BranchListWrapper>
  );
};

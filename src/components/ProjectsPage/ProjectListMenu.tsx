import { ProjectType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';
import { BranchListWrapper } from '../BranchListWrapper';

interface Props {
  projectData: ProjectType[];
}

export const ProjectListMenu = ({ projectData }: Props) => {
  const date = new Date();
  const {
    startDateYear,
    startDateMonth,
    startDateDay = 1,
    fakeDateYear,
    fakeDateMonth,
    fakeDateDay,
  } = projectData[projectData.length - 1];
  const {
    endDateYear = date.getFullYear(),
    endDateMonth = date.getMonth() + 1,
    endDateDay = date.getDate(),
  } = projectData[0];
  const min =
    (fakeDateYear ?? startDateYear) * 12 * 30 + (fakeDateMonth ?? startDateMonth) * 30 + (fakeDateDay ?? startDateDay);
  const max = endDateYear * 12 * 30 + endDateMonth * 30 + endDateDay;

  return (
    <BranchListWrapper>
      <>
        {projectData.map((project) => (
          <ProjectElement key={`experience-${project.key}`} project={project} minDay={min} maxDay={max} />
        ))}
      </>
    </BranchListWrapper>
  );
};

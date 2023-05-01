import { ProjectType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';
import { BranchListWrapper } from '../BranchListWrapper';

interface Props {
  projectData: ProjectType[];
}

export const ProjectListMenu = ({ projectData }: Props) => {
  const date = new Date();
  const { startDateYear, startDateMonth, startDateDay } = projectData[projectData.length - 1];
  const {
    endDateYear = date.getFullYear(),
    endDateMonth = date.getMonth() + 1,
    endDateDay = date.getDate(),
  } = projectData[0];
  const min = startDateYear * 12 * 30 + startDateMonth * 30 + startDateDay;
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

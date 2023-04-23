import { ProjectType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';
import { getTopOffsetPercentage } from '@/utils';

interface Props {
  projectsData: ProjectType[];
}

export const ProjectList = ({ projectsData }: Props) => {
  const min =
    projectsData[projectsData.length - 1].startDateYear * 12 + projectsData[projectsData.length - 1].startDateMonth;
  const max = projectsData[0].startDateYear * 12 + projectsData[0].startDateMonth;

  return projectsData.map((project) => (
    <ProjectElement
      key={`experience-${project.key}`}
      project={project}
      topOffset={getTopOffsetPercentage(min, max, project.startDateYear, project.startDateMonth)}
    />
  ));
};

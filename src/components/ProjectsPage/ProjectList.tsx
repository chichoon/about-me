import { ProjectType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';
import { getTopOffsetPercentage } from '@/utils';

interface Props {
  projectData: ProjectType[];
}

export const ProjectList = ({ projectData }: Props) => {
  const min =
    projectData[projectData.length - 1].startDateYear * 12 + projectData[projectData.length - 1].startDateMonth;
  const max = projectData[0].startDateYear * 12 + projectData[0].startDateMonth;

  return projectData.map((project) => (
    <ProjectElement
      key={`experience-${project.key}`}
      project={project}
      topOffset={getTopOffsetPercentage(min, max, project.startDateYear, project.startDateMonth)}
    />
  ));
};

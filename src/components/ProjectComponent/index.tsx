import { ProjectType } from '@/types/profileData';
import { BadgeList } from '@/components';
import { ProjectInfoHeader } from './ProjectInfoHeader';
import { DescriptionArea } from './DescriptionArea';

interface Props {
  project: ProjectType;
}

export const ProjectComponent = ({ project }: Props) => {
  return (
    <>
      <ProjectInfoHeader project={project} />
      <BadgeList stacks={project.stacks} />
      <DescriptionArea project={project} />
    </>
  );
};

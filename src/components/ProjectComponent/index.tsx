import { ProjectType } from '@/types/profileData';
import { ProjectInfoHeader } from './ProjectInfoHeader';
import { DescriptionArea } from './DescriptionArea';
import { BadgeList } from '../BadgeList';
import { DescriptionList } from '../DescriptionList';

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

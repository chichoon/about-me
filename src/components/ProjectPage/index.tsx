import { ProjectType } from '@/types/profileData';
import { ProjectInfoHeader } from './ProjectInfoHeader';
import { BadgeList } from '../BadgeList';
import { DescriptionList } from '../DescriptionList';

interface Props {
  project: ProjectType;
}

export const ProjectPage = ({ project }: Props) => {
  return (
    <>
      <ProjectInfoHeader project={project} />
      <BadgeList stacks={project.stacks} />
      <DescriptionList descriptionData={project.description} />
    </>
  );
};

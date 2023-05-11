import { ProjectType } from '@/types/profileData';
import { ProjectInfoHeader } from './ProjectInfoHeader';

interface Props {
  project: ProjectType;
}

export const ProjectComponent = ({ project }: Props) => {
  return (
    <>
      <ProjectInfoHeader project={project} />
    </>
  );
};

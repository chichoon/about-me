import { ProjectType } from '@/types/profileData';
import { ProjectInfoHeader } from './ProjectInfoHeader';

interface Props {
  project: ProjectType;
}

export const ProjectPage = ({ project }: Props) => {
  return (
    <>
      <ProjectInfoHeader project={project} />
      <div>hihi</div>
    </>
  );
};

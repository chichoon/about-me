import { ProjectType } from '@/types/profileData';
import { ProjectInfoHeader } from './ProjectInfoHeader';

interface Props {
  children: JSX.Element;
  project: ProjectType;
}

export const ProjectComponent = ({ children, project }: Props) => {
  return (
    <div>
      <ProjectInfoHeader project={project} />
      {children}
    </div>
  );
};

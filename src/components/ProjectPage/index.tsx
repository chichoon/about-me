import { ProjectType } from '@/types/profileData';

interface Props {
  project: ProjectType;
}

export const ProjectPage = ({ project }: Props) => {
  return <div>{project.title}</div>;
};

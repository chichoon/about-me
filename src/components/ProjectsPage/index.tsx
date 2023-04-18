import { ProjectType } from '@/types/profileData';
import Link from 'next/link';

interface Props {
  projectData: ProjectType[];
}

export const ProjectsPage = ({ projectData }: Props) => {
  return (
    <menu>
      {projectData.map(({ key, title }) => (
        <li key={`experience-${key}`}>
          <Link href={`/projects/${key}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </menu>
  );
};

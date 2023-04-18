import Link from 'next/link';

import { ProjectKeyAndTitleType } from '@/types/profileData';

interface Props {
  projectKeysAndTitles: ProjectKeyAndTitleType[];
}

export const ProjectsPage = ({ projectKeysAndTitles }: Props) => {
  return (
    <menu>
      {projectKeysAndTitles.map(({ key, title }) => (
        <li key={`experience-${key}`}>
          <Link href={`/projects/${key}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </menu>
  );
};

import Image from 'next/image';

import { ProjectType } from '@/types/profileData';
import { GithubIcon, ShareIcon } from '@/assets/svgs';

interface Props {
  project: ProjectType;
}

export const ProjectComponent = ({ project }: Props) => {
  return (
    <li>
      <h3>{project.title}</h3>
      <div>
        <div>
          <Image width={160} height={50} src={project.imageRef ?? ''} alt={`${project.key}-logo`} priority />
          <div>
            <a href={project.githubLink}>
              <GithubIcon />
            </a>
            <a href={project.publishedLink}>
              <ShareIcon />
            </a>
          </div>
        </div>
        <ul>
          {project.description.map(({ title, link }, index) => (
            <li key={`${project.key}-${index}`}>{title}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

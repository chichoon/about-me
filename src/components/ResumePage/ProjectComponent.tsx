import Image from 'next/image';

import { ResumeProjectType } from '@/types/resumeData';

import { GithubIcon, ShareIcon } from '@/assets/svgs';

interface Props {
  project: ResumeProjectType;
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
        {project.digest && (
          <ul>
            {project.digest.map(({ description, link }, index) => (
              <li key={`${project.key}-${index}`}>{description}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

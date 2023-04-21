import Image from 'next/image';

import { ProjectType } from '@/types/profileData';

import { GithubIcon, HomeIcon } from '@/assets/svgs';

interface Props {
  project: ProjectType;
}

export const ProjectInfoHeader = ({ project }: Props) => {
  const { title, imageRef, startDateMonth, startDateYear, endDateMonth, endDateYear, githubLink, publishedLink } =
    project;
  return (
    <div>
      <Image width={160} height={50} src={imageRef} alt={`${title} logo`} />
      <div>
        <div>
          <h3>{title}</h3>
          <a href={githubLink} target='_blank'>
            <GithubIcon />
          </a>
          {publishedLink && (
            <a href={publishedLink} target='_blank'>
              <HomeIcon />
            </a>
          )}
        </div>
        <span>{`${startDateYear}. ${startDateMonth} ~ ${endDateYear ? `${endDateYear}. ${endDateMonth}` : ''}`}</span>
      </div>
    </div>
  );
};

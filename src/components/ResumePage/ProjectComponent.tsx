import Image from 'next/image';
import { css } from '@emotion/react';

import { ResumeProjectType } from '@/types/resumeData';

import { GithubIcon, ShareIcon } from '@/assets/svgs';
import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';
import { ProjectDigestComponent } from './ProjectDigestComponent';

interface Props {
  project: ResumeProjectType;
}

export const ProjectComponent = ({ project }: Props) => {
  return (
    <li css={projectWrapperStyle}>
      <div css={iconAndImageWrapperStyle}>
        <Image width={160} height={50} src={project.imageRef ?? ''} alt={`${project.key}-logo`} priority />
        <h3>{project.title}</h3>
        <div>
          <a href={project.githubLink}>
            <GithubIcon />
          </a>
          <a href={project.publishedLink}>
            <ShareIcon />
          </a>
        </div>
      </div>
      <div css={digestWrapper}>
        <span>{project.summary}</span>
        <ProjectDigestComponent projectKey={project.key} digest={project.digest ?? []} />
      </div>
    </li>
  );
};

const projectWrapperStyle = css({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: `30% calc(70% - 25px)`,
  gap: 25,
  padding: '25px 0',

  '&:not(:last-child)': {
    borderBottom: `1px solid ${COLORS.GRAYA}`,
  },

  '&:first-child': {
    paddingTop: 0,
  },
});

const iconAndImageWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',

  img: {
    objectFit: 'cover',
    marginBottom: 20,
  },

  h3: {
    fontSize: SIZES.FONT_L,
    marginBottom: 20,
    color: COLORS.BLACK,
  },

  '> div': {
    width: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    a: {
      width: 25,
      height: 25,
    },

    svg: {
      width: 25,
      height: 25,
      fill: COLORS.GRAY6,
    },
  },
});

const digestWrapper = css({
  span: {
    color: COLORS.BLACK,
  },
});

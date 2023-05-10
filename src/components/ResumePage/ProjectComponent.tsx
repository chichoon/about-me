import { css } from '@emotion/react';

import { ResumeProjectType } from '@/types/resumeData';
import { ProjectDigestComponent } from './ProjectDigestComponent';
import { getPeriodString } from '@/utils';

import { GithubIcon, ShareIcon } from '@/assets/svgs';

import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';

interface Props {
  project: ResumeProjectType;
}

export const ProjectComponent = ({ project }: Props) => {
  const { startDateYear, startDateMonth, startDateDay, endDateYear, endDateMonth, endDateDay } = project;

  const periodString = getPeriodString({
    startDateYear,
    startDateMonth,
    startDateDay,
    endDateYear,
    endDateMonth,
    endDateDay,
  });

  return (
    <li css={projectWrapperStyle}>
      <div css={iconAndImageWrapperStyle}>
        <h3>{project.title}</h3>
        <span>{periodString}</span>
        <div css={linkWrapperStyle}>
          {project.githubLink && (
            <a href={project.githubLink} target='_blank'>
              <GithubIcon />
            </a>
          )}
          {project.publishedLink && (
            <a href={project.publishedLink} target='_blank'>
              <ShareIcon />
            </a>
          )}
        </div>
      </div>
      <div css={digestWrapperStyle}>
        <span>{project.summary}</span>
        <ProjectDigestComponent projectKey={project.key} digest={project.digest ?? []} />
      </div>
    </li>
  );
};

const projectWrapperStyle = css({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: `25% calc(75% - 10px)`,
  gap: 10,
  padding: '20px 0',

  '&:not(:last-child)': {
    borderBottom: `1px solid ${COLORS.GRAYC}`,
  },

  '&:first-child': {
    paddingTop: 0,
  },
});

const iconAndImageWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',

  h3: {
    fontSize: SIZES.FONT_ML,
    marginBottom: 5,
    color: COLORS.GRAY6,
  },

  '> span': {
    color: COLORS.GRAYA,
    fontSize: SIZES.FONT_S,
    marginBottom: 15,
  },
});

const linkWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',

  a: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  svg: {
    width: 20,
    height: 20,
    fill: COLORS.GRAY6,
  },
});

const digestWrapperStyle = css({
  '> span': {
    display: 'inline-block',
    color: COLORS.BLACK,
    fontSize: SIZES.FONT_MS,
    lineHeight: `${SIZES.FONT_MS + 4}px`,
    marginBottom: 10,
  },
});

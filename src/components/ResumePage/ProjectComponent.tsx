import Image from 'next/image';
import { css } from '@emotion/react';

import { ResumeProjectType } from '@/types/resumeData';

import { GithubIcon, ShareIcon } from '@/assets/svgs';
import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';
import { ProjectDigestComponent } from './ProjectDigestComponent';
import { getPeriodString } from '@/utils';

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
          <a href={project.githubLink} target='_blank'>
            <GithubIcon />
          </a>
          <a href={project.publishedLink} target='_blank'>
            <ShareIcon />
          </a>
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

  h3: {
    fontSize: SIZES.FONT_L,
    marginBottom: 5,
    color: COLORS.GRAY6,
  },

  '> span': {
    color: COLORS.GRAYA,
    fontSize: SIZES.FONT_M,
    marginBottom: 15,
  },
});

const linkWrapperStyle = css({
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
});

const digestWrapperStyle = css({
  '> span': {
    display: 'inline-block',
    color: COLORS.BLACK,
    fontSize: SIZES.FONT_M,
    marginBottom: 15,
  },
});

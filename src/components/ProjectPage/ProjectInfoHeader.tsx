import Image from 'next/image';
import { css } from '@emotion/react';

import { ProjectType } from '@/types/profileData';
import { getPeriodString } from '@/utils';

import { GithubIcon, HomeIcon } from '@/assets/svgs';

import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  project: ProjectType;
}

export const ProjectInfoHeader = ({ project }: Props) => {
  const {
    title,
    imageRef,
    startDateMonth,
    startDateYear,
    startDateDay,
    endDateMonth,
    endDateYear,
    endDateDay,
    githubLink,
    publishedLink,
  } = project;

  const periodString = getPeriodString({
    startDateYear,
    startDateMonth,
    startDateDay,
    endDateYear,
    endDateMonth,
    endDateDay,
  });

  return (
    <div css={projectHeaderWrapperStyle}>
      <Image width={160} height={50} src={imageRef ?? ''} alt={`${title} logo`} />
      <div css={projectHeaderInfoWrapperStyle}>
        <div css={projectTitleSectionStyle}>
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
        <span>{periodString}</span>
      </div>
    </div>
  );
};

const projectHeaderWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  height: 150,
  marginBottom: 25,

  img: {
    marginBottom: 25,
  },

  [getResponsiveAfter('ML')]: {
    height: 'fit-content',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',

    img: {
      marginBottom: 0,
      marginRight: 25,
      objectFit: 'cover',
    },
  },
});

const projectHeaderInfoWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '> span': {
    color: COLORS.GRAYA,
    fontSize: SIZES.FONT_M,
  },

  [getResponsiveAfter('ML')]: {
    alignItems: 'flex-start',
  },
});

const projectTitleSectionStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 5,

  a: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },

  svg: {
    width: 30,
    height: 30,
    fill: COLORS.GRAY3,
  },

  h3: {
    fontSize: SIZES.FONT_XL,
  },
});

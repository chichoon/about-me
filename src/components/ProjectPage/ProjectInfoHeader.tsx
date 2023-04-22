import Image from 'next/image';
import { css } from '@emotion/react';

import { ProjectType } from '@/types/profileData';

import { GithubIcon, HomeIcon } from '@/assets/svgs';

import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  project: ProjectType;
}

export const ProjectInfoHeader = ({ project }: Props) => {
  const { title, imageRef, startDateMonth, startDateYear, endDateMonth, endDateYear, githubLink, publishedLink } =
    project;
  return (
    <div css={projectHeaderWrapperStyle}>
      <Image width={160} height={50} src={imageRef} alt={`${title} logo`} />
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
        <span>{`${startDateYear}. ${startDateMonth} ~ ${endDateYear ? `${endDateYear}. ${endDateMonth}` : ''}`}</span>
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

  border: `1px solid red`, // TODO: DEBUG

  img: {
    marginBottom: 25,
  },

  [getResponsiveAfter('ML')]: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',

    img: {
      marginBottom: 0,
      marginRight: 25,
    },
  },
});

const projectHeaderInfoWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  '> span': {
    color: COLORS.GRAYA,
  },
});

const projectTitleSectionStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

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
    fontSize: SIZES.$FONT_XL,
  },
});

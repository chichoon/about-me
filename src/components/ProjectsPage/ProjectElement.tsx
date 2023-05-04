import { useCallback, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';

import { useGetScreenSize } from '@/hooks';
import { SelectedProjectKeyContext } from '@/context';
import { ProjectType } from '@/types/profileData';
import { getTopOffsetPercentage } from '@/utils';

import { GithubIcon, ShareIcon } from '@/assets/svgs';

import { getMinBreakpoint, getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { LEVELS } from '@/styles/levels';
import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';

interface Props {
  project: ProjectType;
  minDay: number;
  maxDay: number;
}

export const ProjectElement = ({ project, minDay, maxDay }: Props) => {
  const {
    key,
    imageRef,
    githubLink,
    publishedLink,
    startDateMonth,
    startDateYear,
    startDateDay = 1,
    fakeDateYear,
    fakeDateMonth,
    fakeDateDay,
  } = project;
  const { windowWidth } = useGetScreenSize();
  const { selectedProjectKey, setSelectedProjectKey } = useContext(SelectedProjectKeyContext);
  const [isHover, setIsHover] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const offsetDate = {
    year: fakeDateYear ?? startDateYear,
    month: fakeDateMonth ?? startDateMonth,
    day: fakeDateDay ?? startDateDay,
  };

  const startDateOffset = getTopOffsetPercentage(minDay, maxDay, offsetDate.year, offsetDate.month, offsetDate.day);

  const handleHover = useCallback(function handleHoverCallback() {
    setIsHover(true);
  }, []);

  const handleOut = useCallback(function handleHoverCallback() {
    setIsHover(false);
  }, []);

  const handleClickProjectButton = useCallback(
    function handleClickProjectCallback() {
      if (isSelected) {
        setSelectedProjectKey(null);
        setIsSelected(false);
        return;
      }
      setSelectedProjectKey(key);
      setIsSelected(true);
    },
    [key, isSelected, setSelectedProjectKey]
  );

  useEffect(() => {
    if (key !== selectedProjectKey) setIsSelected(false);
  }, [key, selectedProjectKey]);

  return (
    <li
      css={projectElementStyle(startDateOffset)}
      onMouseOver={handleHover}
      onFocus={handleHover}
      onMouseOut={handleOut}
      onBlur={handleOut}
    >
      <div css={projectBranchStyle(isHover || isSelected)}>
        <span>
          {startDateYear}. {startDateMonth.toString().padStart(2, '0')}. {startDateDay.toString().padStart(2, '0')}
        </span>
      </div>
      {windowWidth <= getMinBreakpoint('LD') ? (
        <Link href={`/projects/${key}`} css={projectLinkInnerStyle}>
          <Image
            src={imageRef ?? ''}
            width={160}
            height={50}
            alt={`${key}-logo`}
            css={coverImageStyle(isHover || isSelected)}
          />
        </Link>
      ) : (
        <button type='button' onClick={handleClickProjectButton} css={projectLinkInnerStyle}>
          <Image
            src={imageRef ?? ''}
            width={160}
            height={50}
            alt={`${key}-logo`}
            css={coverImageStyle(isHover || isSelected)}
          />
        </button>
      )}
      <div css={sideIconDivStyle(isHover || isSelected)}>
        <a href={githubLink}>
          <GithubIcon />
        </a>
        <a href={publishedLink}>
          <ShareIcon />
        </a>
      </div>
    </li>
  );
};

const projectElementStyle = (topOffset: number) =>
  css({
    position: 'absolute',
    zIndex: LEVELS.SUB_BRANCH,
    top: topOffset * SIZES.BRANCH_MAINSTREAM_PROJECT_HEIGHT + 50,
    left: 15,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  });

const projectLinkInnerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: 120,
  height: 37.5,

  ':hover': {
    cursor: 'pointer',
  },

  [getResponsiveAfter('ML')]: {
    width: 160,
    height: 50,
  },
});

const projectBranchStyle = (isHover: boolean) =>
  css({
    position: 'relative',
    width: 100,
    height: 30,

    span: {
      position: 'absolute',
      left: 15,
      top: -5,
      color: isHover ? COLORS.GRAYA : COLORS.GRAYC,
      transition: `color 0.2s ease-in`,
      userSelect: 'none',
      fontSize: SIZES.FONT_MS,
    },

    ':before': {
      position: 'absolute',
      content: '""',
      backgroundColor: isHover ? COLORS.GRAY9 : COLORS.GRAYC,
      transition: `background-color 0.2s ease-in`,
      width: 70,
      height: 5,
      top: 12.5,
      left: 14,
    },

    ':after': {
      position: 'absolute',
      content: '""',
      border: `5px solid ${isHover ? COLORS.GRAY9 : COLORS.GRAYC}`,
      transition: `border 0.2s ease-in`,
      backgroundColor: COLORS.WHITE,
      width: 20,
      height: 20,
      borderRadius: 20,
      top: 0,
      left: -15,
    },

    [getResponsiveAfter('ML')]: {
      width: 150,

      span: {
        left: 40,
        fontSize: SIZES.FONT_M,
      },

      ':before': {
        width: 100,
        left: 29,
      },

      ':after': {
        left: 0,
      },
    },
  });

const coverImageStyle = (isHover: boolean) =>
  css({
    width: 120,
    height: 37.5,
    objectFit: 'cover',
    opacity: isHover ? 1 : 0.6,
    transition: `opacity 0.2s ease-in`,

    [getResponsiveAfter('ML')]: {
      width: 160,
      height: 50,
    },
  });

const sideIconDivStyle = (isHover: boolean) =>
  css({
    width: 25,
    height: 50,
    display: 'grid',
    gridTemplateRows: 'repeat(2, 20px)',
    gap: 10,
    marginLeft: 10,

    a: {
      width: 20,
      height: 20,
    },

    svg: {
      width: 20,
      height: 20,
      fill: isHover ? COLORS.GRAY6 : COLORS.GRAY9,
      transition: `fill 0.2s ease-in`,
    },
  });

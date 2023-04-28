import { useCallback, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

import { FootprintType } from '@/types/profileData';
import { SelectedFootprintIndexContext } from '@/context';
import { useGetScreenSize } from '@/hooks';

import { getMinBreakpoint, getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { LEVELS } from '@/styles/levels';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  footprint: FootprintType;
  index: number;
  topOffset: number;
}

export const FootprintElement = ({ footprint, index, topOffset }: Props) => {
  const { title, startDateMonth, startDateYear, endDateMonth, endDateYear } = footprint;
  const { windowWidth } = useGetScreenSize();
  const { selectedFootprintIndex, setSelectedFootprintIndex } = useContext(SelectedFootprintIndexContext);
  const [isHover, setIsHover] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleHover = useCallback(function handleHoverCallback() {
    setIsHover(true);
  }, []);

  const handleOut = useCallback(function handleHoverCallback() {
    setIsHover(false);
  }, []);

  const handleClickFootprintButton = useCallback(
    function handleClickFootprintCallback() {
      setSelectedFootprintIndex(index);
      setIsSelected(true);
    },
    [index, setSelectedFootprintIndex]
  );

  useEffect(() => {
    if (index !== selectedFootprintIndex) setIsSelected(false);
  }, [index, selectedFootprintIndex]);

  return (
    <li
      css={footprintElementStyle(topOffset)}
      onMouseOver={handleHover}
      onFocus={handleHover}
      onMouseOut={handleOut}
      onBlur={handleOut}
    >
      <div css={footprintBranchStyle(isHover || isSelected)}>
        <span>
          {startDateYear}. {startDateMonth.toString().padStart(2, '0')}
        </span>
      </div>
      {windowWidth <= getMinBreakpoint('LD') ? (
        <Link href={`/footprints/${index}`} css={footprintLinkInnerStyle(isHover || isSelected)}>
          <h3>{title}</h3>
          <span>
            {startDateYear}. {startDateMonth.toString().padStart(2, '0')} ~{' '}
            {endDateYear ? `${endDateYear}. ${endDateMonth?.toString().padStart(2, '0')}` : ''}
          </span>
        </Link>
      ) : (
        <button type='button' onClick={handleClickFootprintButton} css={footprintLinkInnerStyle(isHover || isSelected)}>
          <h3>{title}</h3>
          <span>
            {startDateYear}. {startDateMonth.toString().padStart(2, '0')} ~{' '}
            {endDateYear ? `${endDateYear}. ${endDateMonth?.toString().padStart(2, '0')}` : ''}
          </span>
        </button>
      )}
    </li>
  );
};

const footprintElementStyle = (topOffset: number) =>
  css({
    position: 'absolute',
    zIndex: LEVELS.SUB_BRANCH,
    top: topOffset * SIZES.BRANCH_MAINSTREAM_HEIGHT + 50,
    left: 15,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  });

const footprintBranchStyle = (isHover: boolean) =>
  css({
    position: 'relative',
    width: 120,
    height: 30,

    span: {
      position: 'absolute',
      left: 20,
      top: -5,
      fontSize: SIZES.FONT_MS,
      color: isHover ? COLORS.GRAYA : COLORS.GRAYC,
      transition: `color 0.2s ease-in`,
      userSelect: 'none',
    },

    ':before': {
      position: 'absolute',
      content: '""',
      backgroundColor: isHover ? COLORS.GRAY9 : COLORS.GRAYC,
      transition: `background-color 0.2s ease-in`,
      width: 120,
      height: 5,
      top: 12.5,
      left: 1,
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
        left: 35,
      },

      ':before': {
        width: 120,
        left: 30,
      },

      ':after': {
        left: 0,
      },
    },
  });

const footprintLinkInnerStyle = (isHover: boolean) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 60,
    border: `2px solid ${isHover ? COLORS.GRAYA : COLORS.GRAYC}`,
    transition: `border 0.2s ease-in`,
    borderRadius: 5,

    ':hover': {
      cursor: 'pointer',
    },

    h3: {
      fontSize: SIZES.FONT_ML,
      marginBottom: 10,
    },

    span: {
      fontSize: SIZES.FONT_MS,
      color: COLORS.GRAYA,
    },

    [getResponsiveAfter('ML')]: {
      width: 200,
      height: 75,
    },
  });

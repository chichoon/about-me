import { useCallback, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

import { FootprintType } from '@/types/profileData';
import { SelectedFootprintIndexContext } from '@/context';
import { useGetScreenSize } from '@/hooks';
import { getTopOffsetPercentage } from '@/utils';

import { getMinBreakpoint, getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { LEVELS } from '@/styles/levels';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  footprint: FootprintType;
  index: number;
  minDay: number;
  maxDay: number;
}

export const FootprintElement = ({ footprint, index, minDay, maxDay }: Props) => {
  const {
    title,
    startDateMonth,
    startDateYear,
    endDateMonth,
    endDateYear,
    startDateDay = 1,
    fakeDateYear,
    fakeDateMonth,
    fakeDateDay,
  } = footprint;
  const { windowWidth } = useGetScreenSize();
  const { selectedFootprintIndex, setSelectedFootprintIndex } = useContext(SelectedFootprintIndexContext);
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

  const handleClickFootprintButton = useCallback(
    function handleClickFootprintCallback() {
      if (isSelected) {
        setSelectedFootprintIndex(-1);
        setIsSelected(false);
        return;
      }
      setSelectedFootprintIndex(index);
      setIsSelected(true);
    },
    [index, isSelected, setSelectedFootprintIndex]
  );

  useEffect(() => {
    if (index !== selectedFootprintIndex) setIsSelected(false);
  }, [index, selectedFootprintIndex]);

  return (
    <li
      css={footprintElementStyle(startDateOffset)}
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
    top: topOffset * SIZES.BRANCH_MAINSTREAM_FOOTPRINT_HEIGHT + 50,
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
      left: 15,
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
        left: 40,
        fontSize: SIZES.FONT_M,
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
    backgroundColor: COLORS.WHITE,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 60,
    border: `2px solid ${COLORS.GRAYA}`,
    opacity: isHover ? 1 : 0.5,
    transition: `all 0.2s ease-in`,
    borderRadius: 5,

    ':hover': {
      cursor: 'pointer',
    },

    h3: {
      fontSize: SIZES.FONT_ML,
      marginBottom: 10,
      color: COLORS.GRAY6,
      textAlign: 'center',
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

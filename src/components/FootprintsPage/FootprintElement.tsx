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
  const { title, startDateMonth, startDateYear } = footprint;
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
        <Link href={`/footprints/${index}`} css={footprintLinkInnerStyle}>
          <h3>{title}</h3>
        </Link>
      ) : (
        <button type='button' onClick={handleClickFootprintButton} css={footprintLinkInnerStyle}>
          <h3>{title}</h3>
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
    width: 100,
    height: 30,

    span: {
      position: 'absolute',
      left: 20,
      top: -5,
      color: isHover ? COLORS.GRAYA : COLORS.GRAYC,
      transition: `color 0.2s ease-in`,
      userSelect: 'none',
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
        left: 35,
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

const footprintLinkInnerStyle = css({
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

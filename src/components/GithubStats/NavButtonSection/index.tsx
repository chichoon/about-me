import { css } from '@emotion/react';

import { FileIcon } from './FileIcon';
import { GoHomeButton } from './GoHomeButton';

import { LeftArrowIcon } from '@/assets/svgs';
import { HangerIcon, InfoIcon, RookIcon } from '@/components/GithubStats/assets';
import { SECRET_COLORS, SECRET_LEVELS, UI_SHADOW } from '@/components/GithubStats/constants';

export const NavButtonSection = () => {
  return (
    <nav css={buttonWrapperStyle}>
      <div css={leftButtonWrapperStyle}>
        <button type='button' css={[topButtonStyle, goBackButtonStyle]}>
          <LeftArrowIcon css={buttonIconStyle} />
        </button>
        <GoHomeButton />
      </div>
      <button type='button' css={[topButtonStyle, infoButtonStyle]}>
        <div>
          <InfoIcon css={buttonIconStyle} />
        </div>
      </button>
      <button type='button' css={[topButtonStyle, fileIconStyle]}>
        <FileIcon />
      </button>
      <button type='button' css={topButtonStyle}>
        <HangerIcon css={buttonIconStyle} />
      </button>
      <button type='button' css={[topButtonStyle, infoButtonStyle]}>
        <RookIcon css={buttonIconStyle} />
      </button>
    </nav>
  );
};
const buttonWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  zIndex: SECRET_LEVELS.LEVEL_UI,
  top: 10,
  left: 10,
});

const leftButtonWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: 'fit-content',
  boxShadow: UI_SHADOW,
});

const topButtonStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  width: 120,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const buttonIconStyle = css({
  width: 25,
  height: 25,
  fill: SECRET_COLORS.BUTTON_ICON,
});

const goBackButtonStyle = css({
  width: 120,
  paddingLeft: 10,
  justifyContent: 'flex-start',
  borderRight: `3px solid ${SECRET_COLORS.BG_BLACK}`,
});

const infoButtonStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI_DIMMED,
  width: 40,
  height: 40,
  margin: '0 10px',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SECRET_COLORS.BUTTON_ICON_INNER,
    width: 30,
    height: 30,
    border: `1px solid ${SECRET_COLORS.BUTTON_ICON_DIMMED}`,
    borderRadius: 20,

    svg: {
      width: 20,
      height: 20,
      transform: 'rotate(-10deg)',
    },
  },
});

const fileIconStyle = css({
  borderRight: `3px solid ${SECRET_COLORS.BG_BLACK}`,
});

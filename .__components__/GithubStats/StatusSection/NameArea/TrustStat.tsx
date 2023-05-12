import { css } from '@emotion/react';

import { FastForwardIcon } from '../../assets';
import { SECRET_COLORS } from '../../constants';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  trustPercentage: number;
}

export const TrustStat = ({ trustPercentage }: Props) => {
  return (
    <div css={trustWrapperStyle}>
      <div css={trustTextWrapperStyle}>
        <div css={trustLeftTextStyle}>
          <span css={trustTextStyle}>신뢰도</span>
          <FastForwardIcon />
        </div>
        <span css={trustTextStyle}>{trustPercentage}%</span>
      </div>
      <div css={progressBarStyle(trustPercentage)} />
    </div>
  );
};

const trustWrapperStyle = css({
  background: `linear-gradient(to right, ${COLORS.WHITE} 0 30%, ${COLORS.WHITE_TRANSPARENT} 70% 100%)`,
  width: 400,
  height: 30,
  borderRadius: 5,
  padding: '3px 1px 1px 1px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const trustTextWrapperStyle = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0 2px',
  justifyContent: 'space-between',
});

const trustLeftTextStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',

  svg: {
    width: 10,
    height: 10,
    fill: SECRET_COLORS.BUTTON_ICON_DARK,
    marginLeft: 5,
  },
});

const trustTextStyle = css({
  fontSize: SIZES.FONT_ML,
});

function progressBarStyle(percentage: number) {
  return css({
    width: '100%',
    height: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    background: `linear-gradient(to right, ${SECRET_COLORS.HIGHLIGHT_ORANGE} 0 ${percentage}%, ${SECRET_COLORS.BUTTON_ICON} ${percentage}% 100%)`,
  });
}

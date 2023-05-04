import { css } from '@emotion/react';

import { SECRET_COLORS } from '@/components/GithubStats/constants';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  children: JSX.Element;
  value: number | string;
  maxValue?: number;
  hoverText?: string;
}

export const StatChip = ({ children, value, maxValue, hoverText }: Props) => {
  const percentage =
    typeof value === 'number' && typeof maxValue === 'number' ? Math.floor((value * 100) / maxValue) : 0;

  return (
    <div css={statChipWrapperStyle}>
      <div css={iconWrapperStyle}>{children}</div>
      <div css={valueWrapperStyle(percentage)}>
        <span>{value}</span>
      </div>
      <span style={{ display: 'none' }}>{hoverText}</span> {/* TODO: 호버링 하면 숨겨진 텍스트 표시 */}
    </div>
  );
};

const statChipWrapperStyle = css({
  width: 100,
  height: 20,
  backgroundColor: COLORS.WHITE_TRANSPARENT,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: 2,
});

const iconWrapperStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: 2,
  borderBottomLeftRadius: 2,

  svg: {
    borderRadius: 2,
    width: 18,
    height: 18,
    fill: COLORS.WHITE,
  },
});

const valueWrapperStyle = (percentage: number) =>
  css({
    userSelect: 'none',
    cursor: 'default',
    height: 20,
    flex: 1,
    background: `linear-gradient(to right, ${SECRET_COLORS.BUTTON_ICON_DARK} 0 ${percentage}%, #00000000 ${percentage}% 100%)`,

    span: {
      lineHeight: '20px',
      verticalAlign: 'center',
      fontSize: SIZES.FONT_M,
    },
  });

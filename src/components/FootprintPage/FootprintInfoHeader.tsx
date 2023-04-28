import { css } from '@emotion/react';

import { FootprintType } from '@/types/profileData';

import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';

interface Props {
  footprint: FootprintType;
}

export const FootprintInfoHeader = ({ footprint }: Props) => {
  const { title, summary, startDateMonth, startDateYear, endDateMonth, endDateYear } = footprint;
  return (
    <div css={projectHeaderWrapperStyle}>
      <h3 css={projectHeaderTitleStyle}>{title}</h3>
      <h4 css={projectHeaderSummaryStyle}>{summary}</h4>
      <span css={projectHeaderDateStyle}>
        {startDateYear}. {startDateMonth.toString().padStart(2, '0')} ~{' '}
        {endDateYear ? `${endDateYear}. ${endDateMonth?.toString().padStart(2, '0')}` : ''}
      </span>
    </div>
  );
};

const projectHeaderWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  height: 'fit-content',
  marginBottom: 25,

  [getResponsiveAfter('ML')]: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

const projectHeaderTitleStyle = css({
  fontSize: SIZES.FONT_XL,
  color: COLORS.GRAY3,
});

const projectHeaderSummaryStyle = css({
  fontSize: SIZES.FONT_ML,
  color: COLORS.GRAY3,
  marginTop: 15,

  [getResponsiveAfter('ML')]: {
    marginTop: 0,
    marginLeft: 15,
  },
});

const projectHeaderDateStyle = css({
  marginTop: 10,
  color: COLORS.GRAYA,
  fontSize: SIZES.FONT_MS,
  transition: `color 0.2s ease-in`,
  userSelect: 'none',

  [getResponsiveAfter('ML')]: {
    marginTop: 0,
    marginLeft: 10,
  },
});

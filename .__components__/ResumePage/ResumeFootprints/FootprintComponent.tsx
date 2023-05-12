import { css } from '@emotion/react';

import { FootprintType } from '@/types/profileData';
import { getPeriodString } from '@/utils';

import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  footprint: FootprintType;
}

export const FootprintComponent = ({ footprint }: Props) => {
  const { startDateYear, startDateMonth, startDateDay, endDateYear, endDateMonth, endDateDay } = footprint;

  const periodString = getPeriodString({
    startDateYear,
    startDateMonth,
    startDateDay,
    endDateYear,
    endDateMonth,
    endDateDay,
  });

  return (
    <li css={footprintWrapperStyle}>
      <div css={footprintTitleStyle}>
        <h3>{footprint.title}</h3>
        <span>{footprint.summary}</span>
      </div>
      <span css={footprintTimestampStyle}>{periodString}</span>
    </li>
  );
};

const footprintWrapperStyle = css({
  width: '100%',
  padding: '20px 0',

  '&:not(:last-child)': {
    borderBottom: `1px solid ${COLORS.GRAYE}`,
  },

  '&:first-of-type': {
    paddingTop: 0,
  },
});

const footprintTitleStyle = css({
  h3: {
    fontSize: SIZES.FONT_ML,
    marginBottom: 5,
    color: COLORS.GRAY6,
    display: 'inline-block',
  },

  '> span': {
    marginLeft: 5,
    color: COLORS.GRAY6,
    fontSize: SIZES.FONT_M,
    marginBottom: 15,
  },
});

const footprintTimestampStyle = css({
  color: COLORS.GRAYA,
  fontSize: SIZES.FONT_MS,
  marginBottom: 15,
});

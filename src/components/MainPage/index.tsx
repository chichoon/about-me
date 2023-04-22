import Image from 'next/image';
import { css } from '@emotion/react';

import { StackType } from '@/types/profileData';
import { BadgeList } from '../BadgeList';

import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  profileImageRef: string;
  stacks: StackType[];
  summaries: string[];
}

export const MainPage = ({ profileImageRef, stacks, summaries }: Props) => {
  return (
    <>
      <Image src={profileImageRef} alt='Profile' width={200} height={200} css={imageStyle} />
      <BadgeList stacks={stacks} isCentered />
      {summaries.map((summary, i) => (
        <p key={`summary-${i}`} css={paragraphStyle}>
          {summary}
        </p>
      ))}
    </>
  );
};

const imageStyle = css({
  display: 'none',

  [getResponsiveAfter('M')]: {
    display: 'block',
    width: 200,
    height: 200,
    borderRadius: 5,
    boxShadow: `0 0 5px 5px ${COLORS.BLACK_TRANSPARENT}`,
    marginBottom: 25,
  },

  [getResponsiveAfter('ML')]: {
    float: 'left',
    marginRight: 25,
  },
});

const paragraphStyle = css({
  maxWidth: SIZES.MAIN_INNER_MAX_WIDTH,
  wordBreak: 'keep-all',
  width: '100%',
  whiteSpace: 'pre-line',
  marginBottom: 25,
  fontSize: SIZES.FONT_M,
  fontWeight: 400,
  color: COLORS.GRAY3,
  lineHeight: `${SIZES.FONT_M + 5}px`,
});

import Image from 'next/image';
import { css } from '@emotion/react';

import { Paragraph } from './Paragraph';

import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { COLORS } from '@/styles/colors';

interface Props {
  profileImageRef: string;
  summaries: string[];
}

export const IntroPage = ({ profileImageRef, summaries }: Props) => {
  return (
    <>
      <Image src={profileImageRef} alt='Profile' width={200} height={200} css={imageStyle} />
      <Paragraph paragraph={summaries} lineGap={25} />
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

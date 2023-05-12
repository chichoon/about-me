/* eslint-disable camelcase */
import { Nanum_Myeongjo } from 'next/font/google';
import { css } from '@emotion/react';

import { TrustStat } from './TrustStat';
import { Stars } from './Stars';

import { COLORS } from '@/styles/colors';
import { SECRET_SIZES } from '../../constants';

const nanumMyeongjo = Nanum_Myeongjo({ subsets: ['latin'], weight: '800' });

export const NameArea = () => {
  return (
    <>
      <TrustStat trustPercentage={0} />
      <Stars nOfStars={4} />
      <h2 css={subNameStyle}>chichoon</h2>
      <h1 css={nameStyle}>chichoon</h1>
    </>
  );
};

const nameStyle = css({
  fontSize: SECRET_SIZES.SIZE_NAME,
  color: COLORS.WHITE,
  marginBottom: 5,
  filter: `drop-shadow(0 0 2px ${COLORS.BLACK})`,
  fontFamily: nanumMyeongjo.style.fontFamily,
});

const subNameStyle = css({
  fontSize: SECRET_SIZES.SIZE_SUBNAME,
  color: COLORS.WHITE,
  fontWeight: 700,
  filter: `drop-shadow(0 0 2px ${COLORS.BLACK})`,
});

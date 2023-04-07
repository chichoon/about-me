/* eslint-disable camelcase */

import { Nanum_Myeongjo } from 'next/font/google';
import { css } from '@emotion/react';

import { TrustStat } from './TrustStat';
import { Stars } from './Stars';

import { nameStyle, subNameStyle } from './NameAndJobStats.styles';
import { JobStat } from './JobStat';

const nanumMyeongjo = Nanum_Myeongjo({ subsets: ['latin'], weight: '800' });

const fontFamily = css({
  fontFamily: nanumMyeongjo.style.fontFamily,
});

export const NameAndJobStats = () => {
  return (
    <>
      <TrustStat trustPercentage={0} />
      <Stars nOfStars={4} />
      <h2 css={subNameStyle}>chichoon</h2>
      <h1 css={[nameStyle, fontFamily]}>chichoon</h1>
      <JobStat />
    </>
  );
};

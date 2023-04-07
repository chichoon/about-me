/* eslint-disable camelcase */

import Image from 'next/image';
import { Nanum_Myeongjo } from 'next/font/google';
import { css } from '@emotion/react';

import { TrustStat } from './TrustStat';
import { Stars } from './Stars';

import { nameStyle, subNameStyle } from './NameAndJobStats.styles';

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
      <div>
        <Image src='' alt='job icon' />
        <div>
          <div />
          <span>공격 범위</span>
        </div>
        <div>
          <div>
            <span>원거리</span>
          </div>
          <div>
            <span>범위공격 지원 제어형</span>
          </div>
        </div>
      </div>
    </>
  );
};

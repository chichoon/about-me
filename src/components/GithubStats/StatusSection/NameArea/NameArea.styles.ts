/* eslint-disable camelcase */
import { Nanum_Myeongjo } from 'next/font/google';
import { css } from '@emotion/react';

import { SECRET_SIZES } from '@/components/GithubStats/constants';
import { COLORS } from '@/styles/colors';

const nanumMyeongjo = Nanum_Myeongjo({ subsets: ['latin'], weight: '800' });

export const nameStyle = css({
  fontSize: SECRET_SIZES.SIZE_NAME,
  color: COLORS.WHITE,
  marginBottom: 5,
  filter: `drop-shadow(0 0 2px ${COLORS.BLACK})`,
  fontFamily: nanumMyeongjo.style.fontFamily,
});

export const subNameStyle = css({
  fontSize: SECRET_SIZES.SIZE_SUBNAME,
  color: COLORS.WHITE,
  fontWeight: 700,
  filter: `drop-shadow(0 0 2px ${COLORS.BLACK})`,
});

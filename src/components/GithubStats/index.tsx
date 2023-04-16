/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { Noto_Sans_KR } from 'next/font/google';

import { NavButtonSection } from '@/components/GithubStats/NavButtonSection';
import { StatusSection } from '@/components/GithubStats/StatusSection';

import { ReactIcon } from '@/components/GithubStats/assets';
import { BG_SHADOW, SECRET_COLORS, SECRET_LEVELS } from '@/components/GithubStats/constants';
import { COLORS } from '@/styles/colors';
import { HeadMetaData } from './HeadMetaData';

const noto = Noto_Sans_KR({ subsets: ['latin'], weight: '500' });

export const GithubStats = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    function onScreenResize(e: Event) {
      const target = e.target as Window;
      setWindowWidth(target.innerWidth);
      setWindowHeight(target.innerHeight);
    }

    window.addEventListener('resize', onScreenResize);
    return () => window.removeEventListener('resize', onScreenResize);
  }, []);

  useEffect(() => {
    if (window instanceof Window) {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <>
      <HeadMetaData />
      <main css={statPageBackgroundWrapperStyle}>
        {windowWidth > 900 && windowHeight > 540 ? (
          <>
            <ReactIcon css={groupIconStyle} />
            <NavButtonSection />
            <Image src='/test.png' fill alt='operator' css={characterImageStyle} />
            <StatusSection />
          </>
        ) : (
          <div css={tooSmallMessage}>
            <span>Screen is too small!</span>
          </div>
        )}
      </main>
    </>
  );
};

const statPageBackgroundWrapperStyle = css({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  background: `no-repeat url('/test_bg.png')`,
  backgroundSize: 'cover',
  boxShadow: `inset ${BG_SHADOW}`,
  fontFamily: noto.style.fontFamily,
});

const groupIconStyle = css({
  position: 'absolute',
  top: 10,
  left: 10,
  width: 220,
  height: 220,
  fill: SECRET_COLORS.GROUP_ICON,
  zIndex: SECRET_LEVELS.LEVEL_GROUP_IMAGE,
});

const characterImageStyle = css({
  position: 'absolute',
  objectFit: 'contain',
  zIndex: SECRET_LEVELS.LEVEL_CHAR_IMAGE,
});

const tooSmallMessage = css({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: SECRET_COLORS.BG_UI,

  span: {
    color: COLORS.WHITE,
  },
});
